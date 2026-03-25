import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FaqAccordion } from "./FaqAccordion";
import { FaqAccordionItem } from "./FaqAccordionItem";

function renderAccordion() {
  return render(
    <FaqAccordion>
      <FaqAccordionItem id="q1" question="What is AIOS?">
        Answer about AIOS.
      </FaqAccordionItem>
      <FaqAccordionItem id="q2" question="How much does it cost?">
        Answer about pricing.
      </FaqAccordionItem>
      <FaqAccordionItem id="q3" question="How long does setup take?">
        Answer about timeline.
      </FaqAccordionItem>
    </FaqAccordion>,
  );
}

beforeEach(() => {
  window.dataLayer = [];
  // Reset URL hash
  window.location.hash = "";
});

describe("FaqAccordion + FaqAccordionItem", () => {
  it("renders all items in collapsed state", () => {
    renderAccordion();
    const buttons = screen.getAllByRole("button");
    buttons.forEach((btn) => {
      expect(btn).toHaveAttribute("aria-expanded", "false");
    });
  });

  it("expands an item on click", async () => {
    const user = userEvent.setup();
    renderAccordion();

    const btn = screen.getByRole("button", { name: /what is aios/i });
    await user.click(btn);
    expect(btn).toHaveAttribute("aria-expanded", "true");
  });

  it("collapses an expanded item on second click", async () => {
    const user = userEvent.setup();
    renderAccordion();

    const btn = screen.getByRole("button", { name: /what is aios/i });
    await user.click(btn);
    expect(btn).toHaveAttribute("aria-expanded", "true");

    await user.click(btn);
    expect(btn).toHaveAttribute("aria-expanded", "false");
  });

  it("only allows one item open at a time (accordion behavior)", async () => {
    const user = userEvent.setup();
    renderAccordion();

    const btn1 = screen.getByRole("button", { name: /what is aios/i });
    const btn2 = screen.getByRole("button", { name: /how much/i });

    await user.click(btn1);
    expect(btn1).toHaveAttribute("aria-expanded", "true");

    await user.click(btn2);
    expect(btn2).toHaveAttribute("aria-expanded", "true");
    expect(btn1).toHaveAttribute("aria-expanded", "false");
  });

  it("tracks faq_expand event only when opening", async () => {
    const user = userEvent.setup();
    renderAccordion();

    const btn = screen.getByRole("button", { name: /what is aios/i });

    // Open — should track
    await user.click(btn);
    expect(window.dataLayer).toContainEqual({
      event: "faq_expand",
      question: "q1",
    });

    // Close — should NOT add another event
    const countBefore = window.dataLayer.length;
    await user.click(btn);
    expect(window.dataLayer.length).toBe(countBefore);
  });

  it("has correct ARIA attributes on each item", () => {
    renderAccordion();

    const btn = screen.getByRole("button", { name: /what is aios/i });
    expect(btn).toHaveAttribute("aria-controls", "answer-q1");
    expect(btn).toHaveAttribute("id", "btn-q1");

    const region = document.getElementById("answer-q1");
    expect(region).toHaveAttribute("role", "region");
    expect(region).toHaveAttribute("aria-labelledby", "btn-q1");
  });

  it("auto-expands item matching URL hash on mount", () => {
    window.location.hash = "#q2";

    renderAccordion();

    const btn = screen.getByRole("button", { name: /how much/i });
    expect(btn).toHaveAttribute("aria-expanded", "true");
  });
});
