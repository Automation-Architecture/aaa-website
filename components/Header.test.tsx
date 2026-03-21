import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "./Header";
import { NAV_ITEMS, CTA } from "@/lib/site-config";

beforeEach(() => {
  window.dataLayer = [];
});

describe("Header", () => {
  // ── Desktop nav ────────────────────────────────────

  describe("desktop nav", () => {
    it("renders all top-level nav items", () => {
      render(<Header />);
      const nav = screen.getByRole("navigation", { name: /primary/i });
      for (const item of NAV_ITEMS) {
        expect(within(nav).getByText(item.label)).toBeInTheDocument();
      }
    });

    it("renders CTA button with correct href", () => {
      render(<Header />);
      const ctaLinks = screen.getAllByRole("link", { name: new RegExp(CTA.label, "i") });
      const desktopCta = ctaLinks.find(
        (el) => el.getAttribute("href") === CTA.href,
      );
      expect(desktopCta).toBeDefined();
    });

    it("opens dropdown on hover and closes on mouse leave", async () => {
      const user = userEvent.setup();
      render(<Header />);

      const dropdownItem = NAV_ITEMS.find((item) => item.children);
      expect(dropdownItem).toBeDefined();

      const btn = screen.getByRole("button", {
        name: new RegExp(dropdownItem!.label),
      });
      expect(btn).toHaveAttribute("aria-expanded", "false");

      // Hover to open
      await user.hover(btn.closest("div")!);
      expect(btn).toHaveAttribute("aria-expanded", "true");

      // Verify children are shown
      for (const child of dropdownItem!.children!) {
        expect(screen.getByText(child.label)).toBeInTheDocument();
      }

      // Unhover to close (after 150ms delay)
      await user.unhover(btn.closest("div")!);
      await vi.waitFor(() => {
        expect(btn).toHaveAttribute("aria-expanded", "false");
      });
    });

    it("closes dropdown on Escape key", async () => {
      const user = userEvent.setup();
      render(<Header />);

      const dropdownItem = NAV_ITEMS.find((item) => item.children);
      expect(dropdownItem).toBeDefined();

      const btn = screen.getByRole("button", {
        name: new RegExp(dropdownItem!.label),
      });

      // Open via hover
      await user.hover(btn.closest("div")!);
      expect(btn).toHaveAttribute("aria-expanded", "true");

      // Focus the button (hover doesn't give keyboard focus) then press Escape
      btn.focus();
      await user.keyboard("{Escape}");
      expect(btn).toHaveAttribute("aria-expanded", "false");
    });
  });

  // ── Mobile nav ──────────────────────────────────────

  describe("mobile nav", () => {
    it("hamburger button toggles mobile menu", async () => {
      const user = userEvent.setup();
      render(<Header />);

      const hamburger = screen.getByRole("button", { name: /open menu/i });
      expect(hamburger).toHaveAttribute("aria-expanded", "false");

      await user.click(hamburger);
      expect(screen.getByRole("dialog")).toBeInTheDocument();
    });

    it("mobile menu shows all nav items", async () => {
      const user = userEvent.setup();
      render(<Header />);

      await user.click(screen.getByRole("button", { name: /open menu/i }));
      const dialog = screen.getByRole("dialog");

      for (const item of NAV_ITEMS) {
        expect(within(dialog).getByText(item.label)).toBeInTheDocument();
      }
    });

    it("mobile dropdown expands on click", async () => {
      const user = userEvent.setup();
      render(<Header />);

      await user.click(screen.getByRole("button", { name: /open menu/i }));

      const dropdownItem = NAV_ITEMS.find((item) => item.children);
      expect(dropdownItem).toBeDefined();

      const dialog = screen.getByRole("dialog");
      const mobileBtn = within(dialog).getByRole("button", {
        name: new RegExp(dropdownItem!.label),
      });

      await user.click(mobileBtn);
      expect(mobileBtn).toHaveAttribute("aria-expanded", "true");

      for (const child of dropdownItem!.children!) {
        expect(within(dialog).getByText(child.label)).toBeInTheDocument();
      }
    });

    it("Escape key closes mobile menu", async () => {
      const user = userEvent.setup();
      render(<Header />);

      await user.click(screen.getByRole("button", { name: /open menu/i }));
      expect(screen.getByRole("dialog")).toBeInTheDocument();

      await user.keyboard("{Escape}");
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("close button closes mobile menu", async () => {
      const user = userEvent.setup();
      render(<Header />);

      await user.click(screen.getByRole("button", { name: /open menu/i }));
      const dialog = screen.getByRole("dialog");
      expect(dialog).toBeInTheDocument();

      const closeBtn = within(dialog).getByRole("button", { name: /close menu/i });
      await user.click(closeBtn);
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });

    it("clicking a nav link closes the mobile menu", async () => {
      const user = userEvent.setup();
      render(<Header />);

      await user.click(screen.getByRole("button", { name: /open menu/i }));
      const dialog = screen.getByRole("dialog");

      const directItem = NAV_ITEMS.find((item) => !item.children && item.href);
      expect(directItem).toBeDefined();

      await user.click(within(dialog).getByText(directItem!.label));
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });
});
