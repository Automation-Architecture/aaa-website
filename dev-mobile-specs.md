## Figma Component: dev-mobile

### Figma URL
[Paste Figma frame URL here]

### Implementation Instructions
1. Use get_screenshot on the Figma URL above and **save it to `.figma/dev-mobile.png`** (relative to working directory). Reference this local file whenever you need to check the design — do not call get_screenshot again.
2. Read the anatomy tree below to understand the component structure.
3. Read the YAML specs — it has every layer, color, font, spacing, and token value you need.
4. Check the project's working directory or `package.json` for the icon library in use (e.g. Phosphor, Lucide, Heroicons). Use matching icons from that library based on the `instance_of` names in the anatomy (e.g. `instance_of: ForkKnife` → use ForkKnife from the detected library).
5. Check the project's `package.json` to detect the framework in use, then build the component accordingly.
6. Build the component exactly as specified. Match the structure, styles (fills, strokes, fonts), and layout (direction, gap, padding).
7. Use resolved_tokens to map token names to actual values (e.g. hex colors, font names).
8. Keep it minimal — only implement what the specs describe, nothing more.
9. **Visual QA** — render your component at 375×11284px (1x scale, no device emulation). Take a screenshot and compare with `.figma/dev-mobile.png`. Verify:
   - Layout structure matches (correct direction, nesting, alignment)
   - Spacing is correct (gap, padding values from specs)
   - Colors match fills/strokes in the spec (within #±02 per channel)
   - Font sizes, weights, and families match
   - Border radius values match
   - Text content is complete (no unintended truncation)
   Fix any differences and re-compare until all checks pass.

### Component Anatomy
```
- dev-mobile (FRAME)
- footer (FRAME)
- line (FRAME)
- container (FRAME)
- Subtract (BOOLEAN_OPERATION)
- container (FRAME)
- Frame 1707480475 (FRAME)
- Text (TEXT) — "Subscribe to be in touch"
- input (FRAME)
- Text (TEXT) — "Your E-mail"
- btn (FRAME)
- SUBSCRIBE (TEXT) — "SUBSCRIBE"
- line (FRAME)
- Frame 1707480473 (FRAME)
- container (FRAME)
- menu (FRAME)
- Text (TEXT) — "Platform"
- list (FRAME)
- Text (TEXT) — "Our Free AI Blueprint"
- Text (TEXT) — "AIOS Solution"
- Text (TEXT) — "How It Works"
- Text (TEXT) — "Use Cases"
- container (FRAME)
- menu (FRAME)
- Text (TEXT) — "COMPARISONS"
- list (FRAME)
- Text (TEXT) — "AIOS vs. chat GPT"
- Text (TEXT) — "AIOS vs. Zapier"
- Text (TEXT) — "AIOS vs. DIY"
- Frame 1707480475 (FRAME)
- container (FRAME)
- menu (FRAME)
- Text (TEXT) — "RESOURCES"
- list (FRAME)
- Text (TEXT) — "Problem"
- Text (TEXT) — "About Philosophy"
- Text (TEXT) — "Glossary"
- Text (TEXT) — "FAQ"
- container (FRAME)
- menu (FRAME)
- Text (TEXT) — "INDUSTRIES"
- list (FRAME)
- Text (TEXT) — "Agencies"
- Text (TEXT) — "SaaS"
- Text (TEXT) — "Ecommerce"
- Text (TEXT) — "Coaching"
- line (FRAME)
- Frame 1707480464 (FRAME)
- Text (TEXT) — "Privacy Policy"
- Text (TEXT) — "|"
- Text (TEXT) — "Terms of Service"
- Text (TEXT) — "© 2026 All Rights Reserved by Automatio…"
- banner (FRAME)
- btn (FRAME)
- Get Your Free AI Blueprint (TEXT) — "Get Your Free AI Blueprint"
- A business that serves you, not the other way around (TEXT) — "A business that serves you, not the oth…"
- You fill it with the business you actually want to run (TEXT) — "You fill it with the business you actua…"
- We build the bottle (TEXT) — "We build the bottle "
- block8 (FRAME)
- LIST (FRAME)
- 1/Default (COMPONENT)
- Rectangle 161123982 (RECTANGLE)
- Frame 1707480472 (FRAME)
- Get a personalized AI Blueprint before any commitment. (TEXT) — "Get a personalized AI Blueprint before …"
- You see exactly what's possible for your business — free, before any engagement begins (TEXT) — "You see exactly what's possible for you…"
- 1/Default (INSTANCE) — instance of 1/Default
- Rectangle 161123982 (RECTANGLE)
- Frame 1707480472 (FRAME)
- Get a personalized AI Blueprint before any commitment. (TEXT) — "You'll never be stuck alone."
- You see exactly what's possible for your business — free, before any engagement begins (TEXT) — "We don't build and disappear. Ongoing p…"
- 1/Default (INSTANCE) — instance of 1/Default
- Background+Border (FRAME)
- Container (FRAME)
- Container (INSTANCE) — instance of Property 1=Variant3
- 666aa5b019fc170dd5ab9fa9_ico-container.svg (FRAME)
- Component 9 (FRAME)
- 666aac9d63e28ae1e1034a96_Strategic-partnerships.svg (FRAME)
- Component 9 (FRAME)
- Container (FRAME)
- Heading 3 (FRAME)
- Do it with us: (TEXT) — "Do it with us:"
- Container (FRAME)
- We build the full system around your business. Business context, dashboard intelligence, automated task management — configured for your operations. First working system live within weeks. Ongoing support as your business grows. (TEXT) — "We build the full system around your bu…"
- Component 16 (FRAME)
- Vector (VECTOR)
- txt (FRAME)
- You have two paths from here. (TEXT) — "You have two paths from here."
- Background+Border (FRAME)
- Container (FRAME)
- Component 9 (FRAME)
- Container (FRAME)
- Heading 3 (FRAME)
- Do it alone: (TEXT) — "Do it alone:"
- Container (FRAME)
- Evaluate 46,700 AI tools. Learn the architecture. Navigate context systems, API integrations, and automation layers yourself. Spend months iterating before anything runs. Maintain and evolve it as the landscape shifts underneath you. (TEXT) — "Evaluate 46,700 AI tools. Learn the arc…"
- block 7 (FRAME)
- txt (FRAME)
- These are methodology targets based on AIOS architecture — derived from time-per-task comparisons before and after AIOS deployment — and supported by industry research (McKinsey, 2023; Leng et al., 2024). (TEXT) — "These are methodology targets based on …"
- info (FRAME)
- container (FRAME)
- Text (TEXT) — "Away-from-Desk Autonomy"
- Text (TEXT) — "Run your business from your phone. Full…"
- container (FRAME)
- Text (TEXT) — "Task Automation"
- Text (TEXT) — "60-70% of recurring operational tasks, …"
- container (FRAME)
- Text (TEXT) — "Revenue per Person"
- Text (TEXT) — "More output, same team. The real advant…"
- animation (COMPONENT)
- Group 1707480400 (GROUP)
- Vector (VECTOR)
- Vector (VECTOR)
- Group 1707480399 (GROUP)
- Vector (VECTOR)
- Vector (VECTOR)
- Group 1707480398 (GROUP)
- Vector (VECTOR)
- Vector (VECTOR)
- Group 1707480401 (GROUP)
- Vector (VECTOR)
- Vector (VECTOR)
- Vector (VECTOR)
- block (FRAME)
- container (FRAME)
- 12-25x (TEXT) — "12-25x"
- time leverage (TEXT) — "time leverage"
- container (FRAME)
- 60-70% (TEXT) — "60-70%"
- tasks automated (TEXT) — "tasks automated"
- container (FRAME)
- 50% → 90% (TEXT) — "50% → 90%"
- output quality with full business context (TEXT) — "output quality with full business conte…"
- txt (FRAME)
- container (FRAME)
- We measure three things for every client: (TEXT) — "We measure three things for every clien…"
- block 6 (FRAME)
- Component 10 (FRAME)
- Container (FRAME)
- txt (FRAME)
- Text (TEXT) — "The Morning Brief"
- txt (FRAME)
- Text (TEXT) — "74 calls analyzed overnight. One brief …"
- Text (TEXT) — "Because the system knows the business f…"
- Border (RECTANGLE)
- Border (RECTANGLE)
- Border (RECTANGLE)
- Border (RECTANGLE)
- Component 11 (FRAME)
- Container (FRAME)
- txt (FRAME)
- Text (TEXT) — "Lead Pipeline — Built in One Week"
- txt (FRAME)
- Text (TEXT) — "15 hours a week on lead gen. Then zero."
- Text (TEXT) — "A service business owner spending 15 ho…"
- Border (RECTANGLE)
- Border (RECTANGLE)
- Border (RECTANGLE)
- Border (RECTANGLE)
- Component 12 (FRAME)
- Container (FRAME)
- txt (FRAME)
- Text (TEXT) — "Landing Page From a Phone"
- txt (FRAME)
- Text (TEXT) — "Voice note in. Live page out. Before he…"
- Text (TEXT) — "A founder needs a lead magnet page for …"
- Border (RECTANGLE)
- Border (RECTANGLE)
- Border (RECTANGLE)
- Border (RECTANGLE)
- Component 13 (FRAME)
- Container (FRAME)
- txt (FRAME)
- Text (TEXT) — "Content Pipeline"
- txt (FRAME)
- Text (TEXT) — "Idea to publish-ready — from a voice no…"
- Text (TEXT) — "A founder captures a content idea via T…"
- Border (RECTANGLE)
- Border (RECTANGLE)
- Border (RECTANGLE)
- Border (RECTANGLE)
- btn (FRAME)
- Component 1 (FRAME)
- Our Partners: (TEXT) — "See all use cases"
- Component 3 (FRAME)
- Vector (VECTOR)
- block5 (FRAME)
- Frame 1707480471 (INSTANCE) — instance of Property 1=Default
- txt (FRAME)
- Three layers working together (TEXT) — "Three layers working together"
- Context makes the intelligence useful (TEXT) — "Context makes the intelligence useful"
- Intelligence makes the automation smart (TEXT) — "Intelligence makes the automation smart"
- btn (FRAME)
- See the full picture (TEXT) — "See the full picture"
- labeles (FRAME)
- line (FRAME)
- Frame 1707480469 (FRAME)
- Frame 1707480396 (FRAME)
- Not a chatbot (TEXT) — "Not a chatbot"
- Frame 1707480397 (FRAME)
- Not a wrapper (TEXT) — "Not a wrapper"
- Frame 1707480395 (FRAME)
- An operating system (TEXT) — "An operating system"
- txt (FRAME)
- txt (FRAME)
- An AI Operating System — and it wraps around your entire business in three layers: (TEXT) — "An AI Operating System — and it wraps a…"
- list (FRAME)
- txt (FRAME)
- Business Context Data Engine (TEXT) — "Business Context Data Engine"
- Your AI knows your business the way a co-founder would (TEXT) — "Your AI knows your business the way a c…"
- txt (FRAME)
- Dashboard Intelligence (TEXT) — "Dashboard Intelligence"
- A morning brief, delivered before you open your laptop (TEXT) — "A morning brief, delivered before you o…"
- txt (FRAME)
- Automated Task Management (TEXT) — "Automated Task Management"
- 60-70% of your recurring tasks, handled — a number McKinsey backs up (TEXT) — "60-70% of your recurring tasks, handled…"
- h (FRAME)
- What We Actually Build (TEXT) — "What We Actually Build"
- img (FRAME)
- AIOS (TEXT) — "AIOS"
- Rectangle 161123973 (RECTANGLE)
- Rectangle 161123974 (RECTANGLE)
- txt (FRAME)
- There's a system that changes this. (TEXT) — "There's a system that changes this. "
- We call it the bottle — the operating system that channels the raw power of AI into something your business can actually use. (TEXT) — "We call it the bottle — the operating s…"
- block 4 (FRAME)
- txt (FRAME)
- txt (FRAME)
- "I need to get focused. AI is changing so rapidly that I feel overwhelmed and catch myself chasing the next shiny object." (TEXT) — ""I need to get focused. AI is changing …"
- txt (FRAME)
- There's a name for what you're feeling: (TEXT) — "There's a name for what you're feeling: "
- The Operator Trap (TEXT) — "The Operator Trap"
- Eighty percent of your bandwidth goes to keeping the business running — admin, meetings, scheduling, putting out fires. That leaves maybe twenty percent for the work that actually grows the business. (TEXT) — "Eighty percent of your bandwidth goes t…"
- cintainer (FRAME)
- line (FRAME)
- line (FRAME)
- GPT (FRAME)
- You've tried ChatGPT (TEXT) — "You've tried ChatGPT"
- zapier (FRAME)
- You've tried Zapier (TEXT) — "You've tried Zapier "
- browser (FRAME)
- You've tried a dozen browser extensions (TEXT) — "You've tried a dozen browser extensions "
- txt (FRAME)
- The instinct was right. The infrastructure wasn't. (TEXT) — "The instinct was right. The infrastruct…"
- Over 46,700 AI tools exist today (per theresanaiforthat.com), and none of them talk to each other. Tools without architecture don't compound. They accumulate. (TEXT) — "Over 46,700 AI tools exist today (per t…"
- btn (FRAME)
- Component 1 (FRAME)
- Read more (TEXT) — "Read more"
- Component 3 (FRAME)
- Vector (VECTOR)
- block 3 (FRAME)
- info (FRAME)
- info (FRAME)
- txt (FRAME)
- The agent-to-agent economy — where AI agents transact, negotiate, and operate on behalf of businesses — is arriving faster than most founders realize. (TEXT) — "The agent-to-agent economy — where AI a…"
- The gap between where you are and where you could be isn't about effort. You're already working hard enough. It's about architecture — the system underneath everything else. The infrastructure that turns raw AI capability into daily business results. (TEXT) — "The gap between where you are and where…"
- Your competitors haven't started building theirs yet. That gap is your advantage. In 12 months, this conversation will be obvious. Right now, it's still early — but the window won't stay open. (TEXT) — "Your competitors haven't started buildi…"
- btns (FRAME)
- btn (FRAME)
- Get Your Free AI Blueprint (TEXT) — "Get Your Free AI Blueprint"
- btn (FRAME)
- See How It Works (TEXT) — "See How It Works"
- animation (FRAME)
- animation (INSTANCE) — instance of Property 1=Default
- Frame 1707480417 (FRAME)
- fluent:scan-table-20-regular (FRAME)
- fluent:scan-table-20-regular (FRAME)
- fluent:scan-table-20-regular (FRAME)
- fluent:scan-table-20-regular (FRAME)
- txt (FRAME)
- container (FRAME)
- Now think about your actual morning (TEXT) — "Now  think  about  your actual  morning"
- container (FRAME)
- How many tabs? How many logins? How long before you get to the work that actually matters? (TEXT) — "How many tabs?
How many logins?
How lon…"
- block2 (FRAME)
- txt (FRAME)
- That's not a pitch. That's a Tuesday — when your business runs on the right infrastructure. (TEXT) — "That's not a pitch. That's a Tuesday — …"
- container (FRAME)
- h (GROUP)
- bg (FRAME)
- Frame 1707480468 (FRAME)
- Container (FRAME)
- MORNING (TEXT) — "MORNING"
- 7:02am (TEXT) — "7:02am"
- txt (FRAME)
- You haven't opened your laptop (TEXT) — "You haven't opened your laptop"
- info (FRAME)
- txt (FRAME)
- Four things happened while you slept. Your day is planned: (TEXT) — "Four things happened while you slept. Y…"
- list (FRAME)
- 1 (FRAME)
- tick (FRAME)
- txt (FRAME)
- Сalendar blocks set, priorities ranked, conflicts flagged. (TEXT) — "Сalendar blocks set, priorities ranked,…"
- 2 (FRAME)
- tick (FRAME)
- txt (FRAME)
- A LinkedIn post sits in your drafts, written in your voice. (TEXT) — "A LinkedIn post sits in your drafts, wr…"
- 3 (FRAME)
- tick (FRAME)
- txt (FRAME)
- Your team pulse check is done — status vs. goals, two follow-ups flagged. (TEXT) — "Your team pulse check is done — status …"
- 4 (FRAME)
- tick (FRAME)
- txt (FRAME)
- A finished PNG diagram you needed for a client deck? Sitting in your project folder. (TEXT) — "A finished PNG diagram you needed for a…"
- animation (FRAME)
- animation (INSTANCE) — instance of Property 1=Variant8
- Rectangle 161123946 (VECTOR)
- Subtract (BOOLEAN_OPERATION)
- 3 (FRAME)
- Before breakfast (TEXT) — "Before breakfast"
- 2 (FRAME)
- Ninety seconds (TEXT) — "Ninety seconds"
- 1 (FRAME)
- Four tasks (TEXT) — "Four tasks "
- txt (FRAME)
- Automation Architecture AI builds AI operating system infrastructure for small businesses and startups — a done-for-you system that handles operations so founders can focus on growth. We serve the founder who wants the result without becoming the engineer. (TEXT) — "Automation Architecture AI builds AI op…"
- hero (FRAME)
- Line 354 (LINE)
- h (FRAME)
- How to prepare your business for the agent-to-agent economy (TEXT) — "How to prepare your business for the ag…"
- header (FRAME)
- header (FRAME)
- Rectangle 161123983 (VECTOR)
- Rectangle 161123984 (RECTANGLE)
- Rectangle 161123985 (VECTOR)
- menu (FRAME)
- Rectangle 161123986 (RECTANGLE)
- Link (FRAME)
- Apply now (TEXT) — "Apply now"
- logo (FRAME)
- Subtract (VECTOR)
- automation architecture AI (VECTOR)
- Component 2 (FRAME)
- Component 2 (FRAME)
```

### Specs Data (YAML)
```yaml
schema: specs-plugin.agent_pack.v14.yaml.compact
generated_at: "2026-03-21T07:53:29.499Z"
selection:
  node_id: "2392:1137"
  name: dev-mobile
  type: FRAME
  clips_content: true
defaults_omitted:
  justify: flex-start
  align: flex-start
  direction: row
summary:
  anatomy_nodes_total: 335
  property_groups_total: 0
  property_variants_total: 0
  variable_refs_total: 0
  instance_templates: 1
  deduplicated_instances: 1
  chunks_total: 8
  runtime_budget:
    max_anatomy_elements: 4000
    max_anatomy_records: 4000
    max_property_records: 200
    max_layout_specs: 120
    max_variant_options: 8
    max_anatomy_variants: 20
    max_canvas_text_chunks: 3
  truncated:
    anatomy: false
    anatomy_included: 335
    anatomy_dropped: 0
    properties: false
    properties_included: 0
    properties_dropped: 0
mcp_playbook:
  tools:
    [get_metadata, get_design_context, get_screenshot, get_variable_defs]
  parse_root: chunks
  preferred_keys:
    [node_id, kind, items]
resolved_tokens:
  gray2: "#9E9E9E"
  ac2: "#004D43"
  black: "#010101"
  devider: "#D8D8D8"
  gray: "#898A8D"
  white: "#FFFFFF"
  ac1: "#E6FF2B"
chunks:
  - chunk_id: anatomy_1
    kind: anatomy
    item_count: 50
    items:
      - node_id: "2392:1137"
        name: dev-mobile
        type: FRAME
        w: 375
        h: 11284
        fill: "#FFFFFF"
        direction: column
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "2507:4222"
        name: footer
        type: FRAME
        w: 375
        h: 937
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:4223"
        name: line
        type: FRAME
        w: 375
        h: 452
        direction: column
        justify: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:4224"
        name: container
        type: FRAME
        w: 375
        h: 172
        gap: 10
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: all
        direction: column
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2507:4228"
        name: Subtract
        type: BOOLEAN_OPERATION
        w: 53
        h: 53
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
      - node_id: "2507:4231"
        name: container
        type: FRAME
        w: 375
        h: 280
        fill: "#F9F9F9"
        padding: "40"
        gap: 30
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-bottom: 1px, border-left: 1px"
        direction: column
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: auto
        clips: true
      - node_id: "2507:4278"
        name: Frame 1707480475
        type: FRAME
        w: 315
        h: 110
        gap: 10
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:4232"
        name: Text
        type: TEXT
        text: Subscribe to be in touch
        w: 315
        h: 56
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 24
        font: Jura Bold
      - node_id: "2507:4233"
        name: input
        type: FRAME
        w: 315
        h: 44
        padding: "10"
        gap: 10
        stroke: "#D8D8D8"
        stroke_ref: devider
        stroke_align: inside
        stroke_sides: "border-bottom: 1px"
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:4234"
        name: Text
        type: TEXT
        text: Your E-mail
        w: 109
        h: 24
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 20
        font: Jura Medium
      - node_id: "2507:4236"
        name: btn
        type: FRAME
        w: 335
        h: 60
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        padding: "15"
        direction: column
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2507:4237"
        name: SUBSCRIBE
        type: TEXT
        text: SUBSCRIBE
        w: 134
        h: 29
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 24
        font: Inter Regular
        text_align: center
      - node_id: "2507:4238"
        name: line
        type: FRAME
        w: 375
        h: 386
        direction: column
        justify: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:4276"
        name: Frame 1707480473
        type: FRAME
        w: 375
        h: 193
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:4239"
        name: container
        type: FRAME
        w: 188
        h: 193
        padding: "30"
        gap: 10
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-bottom: 1px, border-left: 1px"
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:4240"
        name: menu
        type: FRAME
        w: 150
        h: 133
        gap: 10
        direction: column
        w_sizing: auto
        h_sizing: auto
      - node_id: "2507:4241"
        name: Text
        type: TEXT
        text: Platform
        w: 150
        h: 21
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        font_size: 18
        font: Jura Bold
      - node_id: "2507:4242"
        name: list
        type: FRAME
        w: 150
        h: 102
        gap: 10
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:4243"
        name: Text
        type: TEXT
        text: Our Free AI Blueprint
        w: 150
        h: 18
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 15
        font: Jura Medium
      - node_id: "2507:4244"
        name: Text
        type: TEXT
        text: AIOS Solution
        w: 100
        h: 18
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 15
        font: Jura Medium
      - node_id: "2507:4245"
        name: Text
        type: TEXT
        text: How It Works
        w: 150
        h: 18
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 15
        font: Jura Medium
      - node_id: "2507:4246"
        name: Text
        type: TEXT
        text: Use Cases
        w: 150
        h: 18
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 15
        font: Jura Medium
      - node_id: "2507:4247"
        name: container
        type: FRAME
        w: 188
        h: 193
        padding: "30"
        gap: 10
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-bottom: 1px"
        direction: column
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2507:4248"
        name: menu
        type: FRAME
        w: 131
        h: 105
        gap: 10
        direction: column
        w_sizing: auto
        h_sizing: auto
      - node_id: "2507:4249"
        name: Text
        type: TEXT
        text: COMPARISONS
        w: 131
        h: 21
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        font_size: 18
        font: Jura Bold
      - node_id: "2507:4250"
        name: list
        type: FRAME
        w: 131
        h: 74
        gap: 10
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:4251"
        name: Text
        type: TEXT
        text: AIOS vs. chat GPT
        w: 127
        h: 18
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 15
        font: Jura Medium
      - node_id: "2507:4252"
        name: Text
        type: TEXT
        text: AIOS vs. Zapier
        w: 110
        h: 18
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 15
        font: Jura Medium
      - node_id: "2507:4253"
        name: Text
        type: TEXT
        text: AIOS vs. DIY
        w: 131
        h: 18
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 15
        font: Jura Medium
      - node_id: "2507:4279"
        name: Frame 1707480475
        type: FRAME
        w: 375
        h: 193
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:4280"
        name: container
        type: FRAME
        w: 188
        h: 193
        padding: "30"
        gap: 10
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-bottom: 1px, border-left: 1px"
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:4281"
        name: menu
        type: FRAME
        w: 129
        h: 133
        gap: 10
        direction: column
        w_sizing: auto
        h_sizing: auto
      - node_id: "2507:4282"
        name: Text
        type: TEXT
        text: RESOURCES
        w: 129
        h: 21
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        font_size: 18
        font: Jura Bold
      - node_id: "2507:4283"
        name: list
        type: FRAME
        w: 129
        h: 102
        gap: 10
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:4284"
        name: Text
        type: TEXT
        text: Problem
        w: 60
        h: 18
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 15
        font: Jura Medium
      - node_id: "2507:4285"
        name: Text
        type: TEXT
        text: About Philosophy
        w: 129
        h: 18
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 15
        font: Jura Medium
      - node_id: "2507:4286"
        name: Text
        type: TEXT
        text: Glossary
        w: 129
        h: 18
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 15
        font: Jura Medium
      - node_id: "2507:4287"
        name: Text
        type: TEXT
        text: FAQ
        w: 129
        h: 18
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 15
        font: Jura Medium
      - node_id: "2507:4288"
        name: container
        type: FRAME
        w: 188
        h: 193
        padding: "30"
        gap: 10
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-bottom: 1px"
        direction: column
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2507:4289"
        name: menu
        type: FRAME
        w: 109
        h: 133
        gap: 10
        direction: column
        w_sizing: auto
        h_sizing: auto
      - node_id: "2507:4290"
        name: Text
        type: TEXT
        text: INDUSTRIES
        w: 109
        h: 21
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        font_size: 18
        font: Jura Bold
      - node_id: "2507:4291"
        name: list
        type: FRAME
        w: 109
        h: 102
        gap: 10
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:4292"
        name: Text
        type: TEXT
        text: Agencies
        w: 68
        h: 18
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 15
        font: Jura Medium
      - node_id: "2507:4293"
        name: Text
        type: TEXT
        text: SaaS
        w: 39
        h: 18
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 15
        font: Jura Medium
      - node_id: "2507:4294"
        name: Text
        type: TEXT
        text: Ecommerce
        w: 109
        h: 18
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 15
        font: Jura Medium
      - node_id: "2507:4298"
        name: Text
        type: TEXT
        text: Coaching
        w: 109
        h: 18
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 15
        font: Jura Medium
      - node_id: "2507:4270"
        name: line
        type: FRAME
        w: 375
        h: 99
        padding: "20"
        gap: 10
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-bottom: 1px, border-left: 1px"
        direction: column
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:4271"
        name: Frame 1707480464
        type: FRAME
        w: 266
        h: 21
        gap: 11
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "2507:4272"
        name: Text
        type: TEXT
        text: Privacy Policy
        w: 109
        h: 19
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 16
        font: Jura Medium
      - node_id: "2507:4273"
        name: Text
        type: TEXT
        text: |
        w: 5
        h: 21
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 18
        font: Jura Medium
  - chunk_id: anatomy_2
    kind: anatomy
    item_count: 50
    items:
      - node_id: "2507:4274"
        name: Text
        type: TEXT
        text: Terms of Service
        w: 130
        h: 19
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 16
        font: Jura Medium
      - node_id: "2507:4275"
        name: Text
        type: TEXT
        text: © 2026 All Rights Reserved by Automation Architecture AI
        w: 255
        h: 28
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 12
        font: Jura Regular
        text_align: center
      - node_id: "2507:4216"
        name: banner
        type: FRAME
        w: 375
        h: 526
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        direction: column
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "2507:4218"
        name: btn
        type: FRAME
        w: 335
        h: 60
        fill: "#E6FF2B"
        fill_ref: ac1
        fill_ref_type: color_style
        padding: "15"
        direction: column
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2507:4219"
        name: Get Your Free AI Blueprint
        type: TEXT
        text: Get Your Free AI Blueprint
        w: 295
        h: 24
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 20
        font: Inter Regular
        text_align: center
      - node_id: "2507:4217"
        name: A business that serves you, not the other way around
        type: TEXT
        text: A business that serves you, not the other way around
        w: 333
        h: 52
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 22
        font: Jura Regular
        opacity: 0.699999988079071
      - node_id: "2507:4220"
        name: You fill it with the business you actually want to run
        type: TEXT
        text: You fill it with the business you actually want to run
        w: 325
        h: 164
        fill: "#E6FF2B"
        fill_ref: ac1
        fill_ref_type: color_style
        font_size: 35
        font: Jura Bold
      - node_id: "2507:4221"
        name: We build the bottle
        type: TEXT
        text: "We build the bottle "
        w: 323
        h: 41
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 35
        font: Jura SemiBold
      - node_id: "2507:4308"
        name: block8
        type: FRAME
        w: 375
        h: 1145
        direction: column
        justify: space-between
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
      - node_id: "2507:4204"
        name: LIST
        type: FRAME
        w: 375
        h: 354
        gap: -1
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:4192"
        name: 1/Default
        type: COMPONENT
        w: 375
        h: 139
        gap: 10
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: all
        w_sizing: fixed
        h_sizing: auto
        clips: true
      - node_id: "2507:4190"
        name: Rectangle 161123982
        type: RECTANGLE
        w: 35
        h: 139
        fill: "#E6FF2B"
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: "border-right: 1px"
      - node_id: "2507:4191"
        name: Frame 1707480472
        type: FRAME
        w: 330
        h: 139
        padding: "15"
        gap: 10
        direction: column
        justify: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:4187"
        name: Get a personalized AI Blueprint before any commitment.
        type: TEXT
        text: Get a personalized AI Blueprint before any commitment.
        w: 310
        h: 42
        fill: "#0E0E0E"
        font_size: 18
        font: Jura Bold
      - node_id: "2507:4188"
        name: You see exactly what's possible for your business — free, before any engagement begins
        type: TEXT
        text: You see exactly what's possible for your business — free, before any engagement begins
        w: 310
        h: 57
        fill: "#0E0E0E"
        font_size: 16
        font: Jura Medium
      - node_id: "I2507:4199;2507:4190"
        name: Rectangle 161123982
        type: RECTANGLE
        w: 35
        h: 118
        fill: "#E6FF2B"
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: "border-right: 1px"
      - node_id: "I2507:4199;2507:4191"
        name: Frame 1707480472
        type: FRAME
        w: 330
        h: 118
        padding: "15"
        gap: 10
        direction: column
        justify: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I2507:4199;2507:4187"
        name: Get a personalized AI Blueprint before any commitment.
        type: TEXT
        text: You'll never be stuck alone.
        w: 310
        h: 21
        fill: "#0E0E0E"
        font_size: 18
        font: Jura Bold
      - node_id: "I2507:4199;2507:4188"
        name: You see exactly what's possible for your business — free, before any engagement begins
        type: TEXT
        text: We don't build and disappear. Ongoing partnership means the system evolves with you
        w: 310
        h: 57
        fill: "#0E0E0E"
        font_size: 16
        font: Jura Medium
      - node_id: "2507:4018"
        name: Background+Border
        type: FRAME
        w: 375
        h: 341
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: all
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:4020"
        name: Container
        type: FRAME
        w: 373
        h: 135
        padding: "20"
        gap: 15
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:4122"
        name: Container
        type: INSTANCE
        instance_of: Property 1=Variant3
        w: 104
        h: 95
        direction: column
        w_sizing: auto
        h_sizing: auto
      - node_id: "I2507:4122;2507:4053"
        name: 666aa5b019fc170dd5ab9fa9_ico-container.svg
        type: FRAME
        w: 104
        h: 95
        w_sizing: auto
        h_sizing: auto
        clips: true
      - node_id: "I2507:4122;2507:4054"
        name: Component 9
        type: FRAME
        w: 104
        h: 95
        direction: column
        justify: center
        align: center
        w_sizing: auto
        h_sizing: auto
        clips: true
      - node_id: "I2507:4122;2507:4057"
        name: 666aac9d63e28ae1e1034a96_Strategic-partnerships.svg
        type: FRAME
        w: 68
        h: 65
        position: absolute
        x: 39
        y: 9011
        constraints: "h:center, v:center"
        direction: column
        w_sizing: auto
        h_sizing: auto
        clips: true
      - node_id: "I2507:4122;2507:4058"
        name: Component 9
        type: FRAME
        w: 68
        h: 65
        direction: column
        justify: center
        align: center
        w_sizing: auto
        h_sizing: auto
        clips: true
      - node_id: "2507:4022"
        name: Container
        type: FRAME
        w: 214
        h: 35
        gap: 7.5
        direction: column
        w_sizing: auto
        h_sizing: auto
      - node_id: "2507:4023"
        name: Heading 3
        type: FRAME
        w: 214
        h: 35
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:4024"
        name: "Do it with us:"
        type: TEXT
        text: "Do it with us:"
        w: 214
        h: 35
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 32
        font: Jura Bold
        line_height: 35px
      - node_id: "2507:4025"
        name: Container
        type: FRAME
        w: 373
        h: 134
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:4027"
        name: We build the full system around your business. Business context, dashboard intelligence, automated task management — configured for your operations. First working system live within weeks. Ongoing su…
        type: TEXT
        text: We build the full system around your business. Business context, dashboard intelligence, automated task management — configured for your operations. First working system live within weeks. Ongoing support as your business grows.
        w: 333
        h: 114
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 16
        font: Jura Medium
      - node_id: "2507:4162"
        name: Component 16
        type: FRAME
        w: 373
        h: 70
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        padding: "20"
        stroke: "#004D43"
        stroke_ref: ac2
        stroke_align: inside
        stroke_sides: "border-top: 1px, border-left: 1px"
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:4163"
        name: Vector
        type: VECTOR
        w: 44
        h: 29
        fill: "#FFFFFF"
      - node_id: "2507:3943"
        name: txt
        type: FRAME
        w: 375
        h: 150
        fill: "#E6FF2B"
        fill_ref: ac1
        fill_ref_type: color_style
        padding: "35"
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: all
        direction: column
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3944"
        name: You have two paths from here.
        type: TEXT
        text: You have two paths from here.
        w: 333
        h: 78
        fill: "#0E0E0E"
        font_size: 32
        font: Inter Regular
        text_align: center
      - node_id: "2507:4145"
        name: Background+Border
        type: FRAME
        w: 375
        h: 272
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: all
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:4146"
        name: Container
        type: FRAME
        w: 373
        h: 136
        padding: "20"
        gap: 15
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:4147"
        name: Component 9
        type: FRAME
        w: 105
        h: 96
        direction: column
        justify: center
        align: center
        w_sizing: auto
        h_sizing: auto
        clips: true
      - node_id: "2507:4156"
        name: Container
        type: FRAME
        w: 188
        h: 35
        gap: 7.5
        direction: column
        w_sizing: auto
        h_sizing: auto
      - node_id: "2507:4157"
        name: Heading 3
        type: FRAME
        w: 188
        h: 35
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:4158"
        name: "Do it alone:"
        type: TEXT
        text: "Do it alone:"
        w: 188
        h: 35
        fill: "#0E0E0E"
        font_size: 32
        font: Jura Bold
        line_height: 35px
      - node_id: "2507:4159"
        name: Container
        type: FRAME
        w: 373
        h: 134
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:4160"
        name: Evaluate 46,700 AI tools. Learn the architecture. Navigate context systems, API integrations, and automation layers yourself. Spend months iterating before anything runs. Maintain and evolve it as th…
        type: TEXT
        text: Evaluate 46,700 AI tools. Learn the architecture. Navigate context systems, API integrations, and automation layers yourself. Spend months iterating before anything runs. Maintain and evolve it as the landscape shifts underneath you.
        w: 333
        h: 114
        fill: "#0E0E0E"
        font_size: 16
        font: Jura Medium
      - node_id: "2507:4307"
        name: block 7
        type: FRAME
        w: 376
        h: 1355
        direction: column
        justify: space-between
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
      - node_id: "2507:3940"
        name: txt
        type: FRAME
        w: 375
        h: 216
        padding: "50"
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: all
        direction: column
        justify: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3941"
        name: These are methodology targets based on AIOS architecture — derived from time-per-task comparisons before and after AIOS deployment — and supported by industry research (McKinsey, 2023; Leng et al., 2…
        type: TEXT
        text: "These are methodology targets based on AIOS architecture — derived from time-per-task comparisons before and after AIOS deployment — and supported by industry research (McKinsey, 2023; Leng et al., 2024). "
        w: 333
        h: 114
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 16
        font: Jura Medium
      - node_id: "2507:3851"
        name: info
        type: FRAME
        w: 375
        h: 365
        gap: -1
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3852"
        name: container
        type: FRAME
        w: 375
        h: 116
        padding: "20"
        gap: 10
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: all
        direction: column
        justify: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3853"
        name: Text
        type: TEXT
        text: Away-from-Desk Autonomy
        w: 335
        h: 28
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 20
        font: Jura Bold
        line_height: 28px
      - node_id: "2507:3854"
        name: Text
        type: TEXT
        text: Run your business from your phone. Full days without a laptop — nothing falls apart.
        w: 335
        h: 38
        fill: "#636363"
        font_size: 16
        font: Jura Regular
  - chunk_id: anatomy_3
    kind: anatomy
    item_count: 50
    items:
      - node_id: "2507:3855"
        name: container
        type: FRAME
        w: 375
        h: 116
        padding: "20"
        gap: 10
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: all
        direction: column
        justify: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3856"
        name: Text
        type: TEXT
        text: Task Automation
        w: 335
        h: 28
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 20
        font: Jura Bold
        line_height: 28px
      - node_id: "2507:3857"
        name: Text
        type: TEXT
        text: 60-70% of recurring operational tasks, automated or heavily augmented
        w: 335
        h: 38
        fill: "#636363"
        font_size: 16
        font: Jura Regular
      - node_id: "2507:3858"
        name: container
        type: FRAME
        w: 375
        h: 135
        padding: "20"
        gap: 10
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: all
        direction: column
        justify: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3859"
        name: Text
        type: TEXT
        text: Revenue per Person
        w: 335
        h: 28
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 20
        font: Jura Bold
        line_height: 28px
      - node_id: "2507:3860"
        name: Text
        type: TEXT
        text: More output, same team. The real advantage isn't headcount — it's what each person produces.
        w: 335
        h: 57
        fill: "#636363"
        font_size: 16
        font: Jura Regular
      - node_id: "2507:3914"
        name: animation
        type: COMPONENT
        w: 375
        h: 351
      - node_id: "2507:3915"
        name: Group 1707480400
        type: GROUP
        w: 191
        h: 152
      - node_id: "2507:3916"
        name: Vector
        type: VECTOR
        w: 191
        h: 152
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2507:3917"
        name: Vector
        type: VECTOR
        w: 191
        h: 116
        fill: "#F6F6F6"
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2507:3918"
        name: Group 1707480399
        type: GROUP
        w: 144
        h: 120
      - node_id: "2507:3919"
        name: Vector
        type: VECTOR
        w: 144
        h: 120
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2507:3920"
        name: Vector
        type: VECTOR
        w: 144
        h: 88
        fill: "#F6F6F6"
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2507:3921"
        name: Group 1707480398
        type: GROUP
        w: 91
        h: 92
      - node_id: "2507:3922"
        name: Vector
        type: VECTOR
        w: 91
        h: 92
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2507:3923"
        name: Vector
        type: VECTOR
        w: 91
        h: 61
        fill: "#F6F6F6"
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2507:3924"
        name: Group 1707480401
        type: GROUP
        w: 46
        h: 62
      - node_id: "2507:3925"
        name: Vector
        type: VECTOR
        w: 46
        h: 62
        fill: "#E4E4E4"
      - node_id: "2507:3926"
        name: Vector
        type: VECTOR
        w: 46
        h: 62
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2507:3927"
        name: Vector
        type: VECTOR
        w: 46
        h: 31
        fill: "#F6F6F6"
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2507:3929"
        name: block
        type: FRAME
        w: 375
        h: 516
        gap: 1
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3930"
        name: container
        type: FRAME
        w: 375
        h: 162
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        padding: "30"
        gap: 10
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-right: 1px"
        direction: column
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3931"
        name: 12-25x
        type: TEXT
        text: 12-25x
        w: 151
        h: 64
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 54
        font: Jura Regular
      - node_id: "2507:3932"
        name: time leverage
        type: TEXT
        text: time leverage
        w: 154
        h: 28
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 24
        font: Jura Regular
      - node_id: "2507:3933"
        name: container
        type: FRAME
        w: 375
        h: 162
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        padding: "30"
        gap: 10
        direction: column
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3934"
        name: 60-70%
        type: TEXT
        text: 60-70%
        w: 172
        h: 64
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 54
        font: Jura Regular
      - node_id: "2507:3935"
        name: tasks automated
        type: TEXT
        text: tasks automated
        w: 189
        h: 28
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 24
        font: Jura Regular
      - node_id: "2507:3936"
        name: container
        type: FRAME
        w: 375
        h: 190
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        padding: "30"
        gap: 10
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: all
        direction: column
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3937"
        name: 50% → 90%
        type: TEXT
        text: 50% → 90%
        w: 270
        h: 64
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 54
        font: Jura Regular
      - node_id: "2507:3938"
        name: output quality with full business context
        type: TEXT
        text: output quality with full business context
        w: 295
        h: 56
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 24
        font: Jura Regular
        text_align: center
      - node_id: "2507:3844"
        name: txt
        type: FRAME
        w: 375
        h: 154
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3845"
        name: container
        type: FRAME
        w: 375
        h: 154
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        padding: "20"
        direction: column
        justify: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3846"
        name: "We measure three things for every client:"
        type: TEXT
        text: "We measure three things for every client:"
        w: 335
        h: 114
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 32
        font: Jura Medium
      - node_id: "2507:3788"
        name: block 6
        type: FRAME
        w: 335
        h: 1699
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3789"
        name: Component 10
        type: FRAME
        w: 335
        h: 406
        padding: "30"
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: all
        justify: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3790"
        name: Container
        type: FRAME
        w: 295
        h: 346
        padding: "40"
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3791"
        name: txt
        type: FRAME
        w: 275
        h: 266
        gap: 10
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3792"
        name: Text
        type: TEXT
        text: The Morning Brief
        w: 275
        h: 28
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 22
        font: Jura Bold
        line_height: 28px
      - node_id: "2507:3793"
        name: txt
        type: FRAME
        w: 275
        h: 228
        gap: 20
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3794"
        name: Text
        type: TEXT
        text: 74 calls analyzed overnight. One brief by 7am
        w: 275
        h: 46
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        font_size: 18
        font: Jura Bold
        line_height: 23px
      - node_id: "2507:3795"
        name: Text
        type: TEXT
        text: Because the system knows the business fully — team, revenue, priorities, every active project — it can synthesize 74 calls across multiple streams into one brief that actually makes sense. Complete with a SWOT review. The founder becomes the most informed person in the organization before breakfast.
        w: 275
        h: 162
        fill: "#636363"
        font_size: 15
        font: Jura Regular
      - node_id: "2507:3796"
        name: Border
        type: RECTANGLE
        w: 7
        h: 9
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: "border-top: 2px, border-left: 2px"
        position: absolute
        x: 40
        y: 5276
        constraints: "h:scale, v:scale"
      - node_id: "2507:3797"
        name: Border
        type: RECTANGLE
        w: 7
        h: 9
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: "border-top: 2px, border-right: 2px"
        position: absolute
        x: 328
        y: 5276
        constraints: "h:scale, v:scale"
      - node_id: "2507:3798"
        name: Border
        type: RECTANGLE
        w: 7
        h: 9
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: "border-right: 2px, border-bottom: 2px"
        position: absolute
        x: 328
        y: 5613
        constraints: "h:scale, v:scale"
      - node_id: "2507:3799"
        name: Border
        type: RECTANGLE
        w: 7
        h: 9
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: "border-bottom: 2px, border-left: 2px"
        position: absolute
        x: 40
        y: 5613
        constraints: "h:scale, v:scale"
      - node_id: "2507:3800"
        name: Component 11
        type: FRAME
        w: 335
        h: 434
        padding: "30"
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-bottom: 1px, border-left: 1px"
        justify: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3801"
        name: Container
        type: FRAME
        w: 295
        h: 374
        padding: "40"
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3802"
        name: txt
        type: FRAME
        w: 275
        h: 294
        gap: 10
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3803"
        name: Text
        type: TEXT
        text: Lead Pipeline — Built in One Week
        w: 275
        h: 56
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 22
        font: Jura Bold
        line_height: 28px
      - node_id: "2507:3804"
        name: txt
        type: FRAME
        w: 275
        h: 228
        gap: 20
        direction: column
        w_sizing: fixed
        h_sizing: auto
  - chunk_id: anatomy_4
    kind: anatomy
    item_count: 50
    items:
      - node_id: "2507:3805"
        name: Text
        type: TEXT
        text: 15 hours a week on lead gen. Then zero.
        w: 275
        h: 46
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        font_size: 18
        font: Jura Bold
        line_height: 23px
      - node_id: "2507:3806"
        name: Text
        type: TEXT
        text: "A service business owner spending 15 hours a week on research, outreach, and follow-ups. With an AIOS, the entire flow is automated in one week: scoring, drafting, nurturing, and project handoff with full context intact. That bandwidth goes straight back into client delivery.
"
        w: 275
        h: 162
        fill: "#636363"
        font_size: 15
        font: Jura Regular
      - node_id: "2507:3807"
        name: Border
        type: RECTANGLE
        w: 7
        h: 10
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: "border-top: 2px, border-left: 2px"
        position: absolute
        x: 40
        y: 5682
        constraints: "h:scale, v:scale"
      - node_id: "2507:3808"
        name: Border
        type: RECTANGLE
        w: 7
        h: 10
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: "border-top: 2px, border-right: 2px"
        position: absolute
        x: 328
        y: 5682
        constraints: "h:scale, v:scale"
      - node_id: "2507:3809"
        name: Border
        type: RECTANGLE
        w: 7
        h: 10
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: "border-right: 2px, border-bottom: 2px"
        position: absolute
        x: 328
        y: 6046
        constraints: "h:scale, v:scale"
      - node_id: "2507:3810"
        name: Border
        type: RECTANGLE
        w: 7
        h: 10
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: "border-bottom: 2px, border-left: 2px"
        position: absolute
        x: 40
        y: 6046
        constraints: "h:scale, v:scale"
      - node_id: "2507:3811"
        name: Component 12
        type: FRAME
        w: 335
        h: 416
        padding: "30"
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-bottom: 1px, border-left: 1px"
        justify: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3812"
        name: Container
        type: FRAME
        w: 295
        h: 356
        padding: "40"
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3813"
        name: txt
        type: FRAME
        w: 275
        h: 276
        gap: 10
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3814"
        name: Text
        type: TEXT
        text: Landing Page From a Phone
        w: 275
        h: 56
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 22
        font: Jura Bold
        line_height: 28px
      - node_id: "2507:3815"
        name: txt
        type: FRAME
        w: 275
        h: 210
        gap: 20
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3816"
        name: Text
        type: TEXT
        text: Voice note in. Live page out. Before he got home.
        w: 275
        h: 46
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        font_size: 18
        font: Jura Bold
        line_height: 23px
      - node_id: "2507:3817"
        name: Text
        type: TEXT
        text: "A founder needs a lead magnet page for a YouTube video. He opens Telegram from his car, explains what he needs via voice note. The system matches his site's design and copy, builds the page, and deploys it — all before he pulls into the driveway.
"
        w: 275
        h: 144
        fill: "#636363"
        font_size: 15
        font: Jura Regular
      - node_id: "2507:3818"
        name: Border
        type: RECTANGLE
        w: 7
        h: 10
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: "border-top: 2px, border-left: 2px"
        position: absolute
        x: 40
        y: 6116
        constraints: "h:scale, v:scale"
      - node_id: "2507:3819"
        name: Border
        type: RECTANGLE
        w: 7
        h: 10
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: "border-top: 2px, border-right: 2px"
        position: absolute
        x: 328
        y: 6116
        constraints: "h:scale, v:scale"
      - node_id: "2507:3820"
        name: Border
        type: RECTANGLE
        w: 7
        h: 10
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: "border-right: 2px, border-bottom: 2px"
        position: absolute
        x: 328
        y: 6462
        constraints: "h:scale, v:scale"
      - node_id: "2507:3821"
        name: Border
        type: RECTANGLE
        w: 7
        h: 10
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: "border-bottom: 2px, border-left: 2px"
        position: absolute
        x: 40
        y: 6462
        constraints: "h:scale, v:scale"
      - node_id: "2507:3822"
        name: Component 13
        type: FRAME
        w: 335
        h: 388
        padding: "30"
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-bottom: 1px, border-left: 1px"
        justify: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3823"
        name: Container
        type: FRAME
        w: 295
        h: 328
        padding: "40"
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3824"
        name: txt
        type: FRAME
        w: 275
        h: 248
        gap: 10
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3825"
        name: Text
        type: TEXT
        text: Content Pipeline
        w: 275
        h: 28
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 22
        font: Jura Bold
        line_height: 28px
      - node_id: "2507:3826"
        name: txt
        type: FRAME
        w: 275
        h: 210
        gap: 20
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3827"
        name: Text
        type: TEXT
        text: Idea to publish-ready — from a voice note.
        w: 275
        h: 46
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        font_size: 18
        font: Jura Bold
        line_height: 23px
      - node_id: "2507:3828"
        name: Text
        type: TEXT
        text: "A founder captures a content idea via Telegram while walking. The system pulls the last 7 days of content context, aligns to brand positioning, and produces a LinkedIn post in his voice plus a 7-slide carousel — saved to the project folder, ready to publish
"
        w: 275
        h: 144
        fill: "#636363"
        font_size: 15
        font: Jura Regular
      - node_id: "2507:3829"
        name: Border
        type: RECTANGLE
        w: 7
        h: 9
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: "border-top: 2px, border-left: 2px"
        position: absolute
        x: 40
        y: 6532
        constraints: "h:scale, v:scale"
      - node_id: "2507:3830"
        name: Border
        type: RECTANGLE
        w: 7
        h: 9
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: "border-top: 2px, border-right: 2px"
        position: absolute
        x: 328
        y: 6532
        constraints: "h:scale, v:scale"
      - node_id: "2507:3831"
        name: Border
        type: RECTANGLE
        w: 7
        h: 9
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: "border-right: 2px, border-bottom: 2px"
        position: absolute
        x: 328
        y: 6851
        constraints: "h:scale, v:scale"
      - node_id: "2507:3832"
        name: Border
        type: RECTANGLE
        w: 7
        h: 9
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: "border-bottom: 2px, border-left: 2px"
        position: absolute
        x: 40
        y: 6851
        constraints: "h:scale, v:scale"
      - node_id: "2507:3838"
        name: btn
        type: FRAME
        w: 335
        h: 55
        align: center
        w_sizing: fixed
        h_sizing: auto
        clips: true
      - node_id: "2507:3839"
        name: Component 1
        type: FRAME
        w: 280
        h: 55
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: "border-right: 1px"
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2507:3840"
        name: "Our Partners:"
        type: TEXT
        text: See all use cases
        w: 234
        h: 29
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 24
        font: Inter Regular
        text_align: center
      - node_id: "2507:3841"
        name: Component 3
        type: FRAME
        w: 55
        h: 55
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: "border-right: 1px"
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2507:3842"
        name: Vector
        type: VECTOR
        w: 11
        h: 16
        fill: "#FFFFFF"
      - node_id: "2507:4306"
        name: block5
        type: FRAME
        w: 375
        h: 1305
        direction: column
        justify: space-between
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
      - node_id: "2507:3776"
        name: Frame 1707480471
        type: INSTANCE
        instance_of: Property 1=Default
        children_text:
          - Three layers working together
          - Context makes the intelligence useful
          - Intelligence makes the automation smart
        w: 375
        h: 90
      - node_id: "I2507:3776;2507:3731"
        name: txt
        type: FRAME
        w: 1500
        h: 87
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        padding: "30"
        gap: 42
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: all
        justify: space-between
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I2507:3776;2507:3732"
        name: Three layers working together
        type: TEXT
        text: Three layers working together
        w: 394
        h: 27
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 22
        font: Inter Regular
      - node_id: "I2507:3776;2507:3733"
        name: Context makes the intelligence useful
        type: TEXT
        text: Context makes the intelligence useful
        w: 490
        h: 27
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 22
        font: Inter Regular
      - node_id: "I2507:3776;2507:3734"
        name: Intelligence makes the automation smart
        type: TEXT
        text: Intelligence makes the automation smart
        w: 524
        h: 27
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 22
        font: Inter Regular
      - node_id: "2507:3729"
        name: btn
        type: FRAME
        w: 335
        h: 60
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        padding: "15"
        direction: column
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2507:3730"
        name: See the full picture
        type: TEXT
        text: See the full picture
        w: 273
        h: 29
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 24
        font: Inter Regular
        text_align: center
      - node_id: "2507:3766"
        name: labeles
        type: FRAME
        w: 375
        h: 155
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        padding: "30"
        gap: 10
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3755"
        name: line
        type: FRAME
        w: 335
        h: 95
        gap: 10
        direction: column
        justify: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3764"
        name: Frame 1707480469
        type: FRAME
        w: 335
        h: 41
        gap: 10
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3756"
        name: Frame 1707480396
        type: FRAME
        w: 163
        h: 41
        fill: "#FFFFFF"
        radius: 6
        padding: "10"
        gap: 10
        stroke: "#010101"
        stroke_ref: black
        stroke_align: inside
        stroke_sides: all
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3757"
        name: Not a chatbot
        type: TEXT
        text: Not a chatbot
        w: 120
        h: 21
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 18
        font: Jura Medium
      - node_id: "2507:3758"
        name: Frame 1707480397
        type: FRAME
        w: 163
        h: 41
        fill: "#FFFFFF"
        radius: 6
        padding: "10"
        gap: 10
        stroke: "#010101"
        stroke_ref: black
        stroke_align: inside
        stroke_sides: all
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3759"
        name: Not a wrapper
        type: TEXT
        text: Not a wrapper
        w: 123
        h: 21
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 18
        font: Jura Medium
      - node_id: "2507:3760"
        name: Frame 1707480395
        type: FRAME
        w: 335
        h: 44
        fill: "#E6FF2B"
        fill_ref: ac1
        fill_ref_type: color_style
        radius: 6
        padding: "10"
        gap: 10
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3763"
        name: An operating system
        type: TEXT
        text: An operating system
        w: 189
        h: 21
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 18
        font: Jura SemiBold
  - chunk_id: anatomy_5
    kind: anatomy
    item_count: 50
    items:
      - node_id: "2507:3735"
        name: txt
        type: FRAME
        w: 375
        h: 433
        padding: "60"
        gap: 10
        stroke: "#D8D8D8"
        stroke_ref: devider
        stroke_align: inside
        stroke_sides: all
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3736"
        name: txt
        type: FRAME
        w: 335
        h: 333
        gap: 30
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3737"
        name: "An AI Operating System — and it wraps around your entire business in three layers:"
        type: TEXT
        text: "An AI Operating System — and it wraps around your entire business in three layers:"
        w: 335
        h: 57
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 16
        font: Jura Medium
      - node_id: "2507:3738"
        name: list
        type: FRAME
        w: 335
        h: 246
        gap: 20
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3739"
        name: txt
        type: FRAME
        w: 335
        h: 69
        gap: 10
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3740"
        name: Business Context Data Engine
        type: TEXT
        text: Business Context Data Engine
        w: 335
        h: 21
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 18
        font: Jura Bold
      - node_id: "2507:3741"
        name: Your AI knows your business the way a co-founder would
        type: TEXT
        text: Your AI knows your business the way a co-founder would
        w: 299
        h: 38
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 16
        font: Jura Medium
      - node_id: "2507:3742"
        name: txt
        type: FRAME
        w: 335
        h: 68
        gap: 9
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3743"
        name: Dashboard Intelligence
        type: TEXT
        text: Dashboard Intelligence
        w: 335
        h: 21
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 18
        font: Jura Bold
      - node_id: "2507:3744"
        name: A morning brief, delivered before you open your laptop
        type: TEXT
        text: A morning brief, delivered before you open your laptop
        w: 283
        h: 38
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 16
        font: Jura Medium
      - node_id: "2507:3745"
        name: txt
        type: FRAME
        w: 335
        h: 69
        gap: 10
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3746"
        name: Automated Task Management
        type: TEXT
        text: Automated Task Management
        w: 335
        h: 21
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 18
        font: Jura Bold
      - node_id: "2507:3747"
        name: 60-70% of your recurring tasks, handled — a number McKinsey backs up
        type: TEXT
        text: 60-70% of your recurring tasks, handled — a number McKinsey backs up
        w: 317
        h: 38
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 16
        font: Jura Medium
      - node_id: "2507:3726"
        name: h
        type: FRAME
        w: 375
        h: 148
        fill: "#E6FF2B"
        fill_ref: ac1
        fill_ref_type: color_style
        padding: "35"
        direction: column
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3727"
        name: What We Actually Build
        type: TEXT
        text: What We Actually Build
        w: 335
        h: 78
        fill: "#0E0E0E"
        font_size: 32
        font: Inter Regular
        text_align: center
      - node_id: "2507:3751"
        name: img
        type: FRAME
        w: 359
        h: 214
        fill: "#F9F9F9"
        radius: 20
        padding: "80"
        gap: 10
        shadow: 10px 4px 24px rgba(0,0,0,0.11)
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: fixed
        clips: true
      - node_id: "2507:3752"
        name: AIOS
        type: TEXT
        text: AIOS
        w: 243
        h: 133
        fill: "#0E0E0E"
        font_size: 110
        font: Inter Regular
      - node_id: "2507:3753"
        name: Rectangle 161123973
        type: RECTANGLE
        w: 326
        h: 182
        radius: 20
        stroke: hsla(0, 0%, 85%, 0.60)
        stroke_align: inside
        stroke_sides: all
        position: absolute
        x: 25
        y: 4048
        constraints: "h:center, v:center"
      - node_id: "2507:3754"
        name: Rectangle 161123974
        type: RECTANGLE
        w: 299
        h: 152
        radius: 20
        stroke: hsla(0, 0%, 85%, 0.40)
        stroke_align: inside
        stroke_sides: all
        position: absolute
        x: 38
        y: 4063
        constraints: "h:center, v:center"
      - node_id: "2507:3748"
        name: txt
        type: FRAME
        w: 375
        h: 195
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        radius: 20
        padding: "40"
        gap: 20
        stroke: "#D8D8D8"
        stroke_ref: devider
        stroke_align: inside
        stroke_sides: all
        direction: column
        justify: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3749"
        name: There's a system that changes this.
        type: TEXT
        text: "There's a system that changes this. "
        w: 315
        h: 19
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 16
        font: Jura Bold
      - node_id: "2507:3750"
        name: We call it the bottle — the operating system that channels the raw power of AI into something your business can actually use.
        type: TEXT
        text: We call it the bottle — the operating system that channels the raw power of AI into something your business can actually use.
        w: 283
        h: 76
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 16
        font: Jura Medium
      - node_id: "2507:3521"
        name: block 4
        type: FRAME
        w: 335
        h: 1076
        padding: "50"
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-bottom: 1px, border-left: 1px"
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3522"
        name: txt
        type: FRAME
        w: 335
        h: 380
        padding: "10"
        gap: 10
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-right: 1px"
        direction: column
        justify: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3523"
        name: txt
        type: FRAME
        w: 295
        h: 360
        gap: 30
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3524"
        name: "I need to get focused. AI is changing so rapidly that I feel overwhelmed and catch myself chasing the next shiny object."
        type: TEXT
        text: "I need to get focused. AI is changing so rapidly that I feel overwhelmed and catch myself chasing the next shiny object."
        w: 295
        h: 84
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 18
        font: Jura SemiBold
      - node_id: "2507:3525"
        name: txt
        type: FRAME
        w: 295
        h: 246
        gap: 20
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3526"
        name: "There's a name for what you're feeling:"
        type: TEXT
        text: "There's a name for what you're feeling: "
        w: 295
        h: 38
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 16
        font: Jura SemiBold
      - node_id: "2507:3527"
        name: The Operator Trap
        type: TEXT
        text: The Operator Trap
        w: 295
        h: 35
        fill: "#000000"
        font_size: 30
        font: Jura Bold
      - node_id: "2507:3528"
        name: Eighty percent of your bandwidth goes to keeping the business running — admin, meetings, scheduling, putting out fires. That leaves maybe twenty percent for the work that actually grows the business.
        type: TEXT
        text: Eighty percent of your bandwidth goes to keeping the business running — admin, meetings, scheduling, putting out fires. That leaves maybe twenty percent for the work that actually grows the business.
        w: 295
        h: 133
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 16
        font: Jura SemiBold
      - node_id: "2507:3529"
        name: cintainer
        type: FRAME
        w: 335
        h: 591
        padding: "20"
        gap: 30
        direction: column
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3531"
        name: line
        type: FRAME
        w: 295
        h: 328
        gap: 20
        direction: column
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3605"
        name: line
        type: FRAME
        w: 218
        h: 154
        gap: 30
        w_sizing: auto
        h_sizing: auto
      - node_id: "2507:3532"
        name: GPT
        type: FRAME
        w: 94
        h: 154
        gap: 20
        direction: column
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "2507:3533"
        name: You've tried ChatGPT
        type: TEXT
        text: You've tried ChatGPT
        w: 92
        h: 38
        fill: "#000000"
        font_size: 16
        font: Jura SemiBold
        text_align: center
      - node_id: "2507:3544"
        name: zapier
        type: FRAME
        w: 94
        h: 154
        gap: 20
        direction: column
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "2507:3545"
        name: You've tried Zapier
        type: TEXT
        text: "You've tried Zapier "
        w: 92
        h: 38
        fill: "#000000"
        font_size: 16
        font: Jura SemiBold
        text_align: center
      - node_id: "2507:3550"
        name: browser
        type: FRAME
        w: 214
        h: 154
        gap: 20
        direction: column
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3551"
        name: You've tried a dozen browser extensions
        type: TEXT
        text: "You've tried a dozen browser extensions "
        w: 214
        h: 38
        fill: "#000000"
        font_size: 16
        font: Jura SemiBold
        text_align: center
      - node_id: "2507:3597"
        name: txt
        type: FRAME
        w: 295
        h: 173
        padding: "10"
        gap: 20
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3598"
        name: The instinct was right. The infrastructure wasn't.
        type: TEXT
        text: The instinct was right. The infrastructure wasn't.
        w: 295
        h: 38
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 16
        font: Jura SemiBold
      - node_id: "2507:3599"
        name: Over 46,700 AI tools exist today (per theresanaiforthat.com), and none of them talk to each other. Tools without architecture don't compound. They accumulate.
        type: TEXT
        text: Over 46,700 AI tools exist today (per theresanaiforthat.com), and none of them talk to each other. Tools without architecture don't compound. They accumulate.
        w: 295
        h: 95
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 16
        font: Jura SemiBold
      - node_id: "2507:3636"
        name: btn
        type: FRAME
        w: 335
        h: 55
        align: center
        w_sizing: fixed
        h_sizing: auto
        clips: true
      - node_id: "2507:3637"
        name: Component 1
        type: FRAME
        w: 280
        h: 55
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: "border-right: 1px"
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2507:3638"
        name: Read more
        type: TEXT
        text: Read more
        w: 140
        h: 29
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 24
        font: Inter Regular
        text_align: center
      - node_id: "2507:3639"
        name: Component 3
        type: FRAME
        w: 55
        h: 55
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: "border-right: 1px"
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2507:3640"
        name: Vector
        type: VECTOR
        w: 11
        h: 16
        fill: "#FFFFFF"
      - node_id: "2507:4305"
        name: block 3
        type: FRAME
        w: 375
        h: 1264
        direction: column
        justify: space-between
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
      - node_id: "2507:3118"
        name: info
        type: FRAME
        w: 375
        h: 594
        padding: "40"
        gap: 10
        direction: column
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2507:3119"
        name: info
        type: FRAME
        w: 335
        h: 514
        gap: 40
  - chunk_id: anatomy_6
    kind: anatomy
    item_count: 50
    items:
      - node_id: "2507:3120"
        name: txt
        type: FRAME
        w: 335
        h: 344
        gap: 20
      - node_id: "2507:3121"
        name: The agent-to-agent economy — where AI agents transact, negotiate, and operate on behalf of businesses — is arriving faster than most founders realize.
        type: TEXT
        text: The agent-to-agent economy — where AI agents transact, negotiate, and operate on behalf of businesses — is arriving faster than most founders realize.
        w: 335
        h: 76
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 16
        font: Jura Medium
      - node_id: "2507:3122"
        name: The gap between where you are and where you could be isn't about effort. You're already working hard enough. It's about architecture — the system underneath everything else. The infrastructure that t…
        type: TEXT
        text: The gap between where you are and where you could be isn't about effort. You're already working hard enough. It's about architecture — the system underneath everything else. The infrastructure that turns raw AI capability into daily business results.
        w: 335
        h: 133
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 16
        font: Jura Medium
      - node_id: "2507:3123"
        name: Your competitors haven't started building theirs yet. That gap is your advantage. In 12 months, this conversation will be obvious. Right now, it's still early — but the window won't stay open.
        type: TEXT
        text: Your competitors haven't started building theirs yet. That gap is your advantage. In 12 months, this conversation will be obvious. Right now, it's still early — but the window won't stay open.
        w: 335
        h: 95
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 16
        font: Jura Medium
      - node_id: "2507:3124"
        name: btns
        type: FRAME
        w: 335
        h: 130
        gap: 10
      - node_id: "2507:3125"
        name: btn
        type: FRAME
        w: 335
        h: 60
        fill: "#E6FF2B"
        fill_ref: ac1
        fill_ref_type: color_style
        padding: "15"
      - node_id: "2507:3126"
        name: Get Your Free AI Blueprint
        type: TEXT
        text: Get Your Free AI Blueprint
        w: 295
        h: 20
        fill: "#0E0E0E"
        font_size: 20
        font: Jura Bold
        line_height: 19.95px
        text_align: center
      - node_id: "2507:3127"
        name: btn
        type: FRAME
        w: 335
        h: 60
        padding: "15"
        stroke: "#010101"
        stroke_ref: black
        stroke_align: inside
        stroke_sides: all
      - node_id: "2507:3128"
        name: See How It Works
        type: TEXT
        text: See How It Works
        w: 193
        h: 20
        fill: "#0E0E0E"
        font_size: 20
        font: Jura Bold
        line_height: 19.95px
        text_align: center
      - node_id: "2507:4304"
        name: animation
        type: FRAME
        w: 375
        h: 404
      - node_id: "2507:3195"
        name: animation
        type: INSTANCE
        instance_of: Property 1=Default
        w: 757
        h: 631
      - node_id: "I2507:3195;2507:2921"
        name: Frame 1707480417
        type: FRAME
        w: 411
        h: 282
        fill: "#F9F9F9"
        radius: 50
      - node_id: "I2507:3195;2507:2939"
        name: "fluent:scan-table-20-regular"
        type: FRAME
        w: 32
        h: 32
        fill: "#E6FF2B"
        fill_ref: ac1
        fill_ref_type: color_style
        radius: 9
      - node_id: "I2507:3195;2507:2954"
        name: "fluent:scan-table-20-regular"
        type: FRAME
        w: 32
        h: 32
        fill: "#E6FF2B"
        fill_ref: ac1
        fill_ref_type: color_style
        radius: 9
      - node_id: "I2507:3195;2507:2969"
        name: "fluent:scan-table-20-regular"
        type: FRAME
        w: 32
        h: 32
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        radius: 9
      - node_id: "I2507:3195;2507:2984"
        name: "fluent:scan-table-20-regular"
        type: FRAME
        w: 32
        h: 32
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        radius: 9
      - node_id: "2507:2833"
        name: txt
        type: FRAME
        w: 375
        h: 306
      - node_id: "2507:2834"
        name: container
        type: FRAME
        w: 375
        h: 116
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        padding: "20"
      - node_id: "2507:2835"
        name: Now think about your actual morning
        type: TEXT
        text: Now  think  about  your actual  morning
        w: 335
        h: 76
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 32
        font: Jura Medium
      - node_id: "2507:2836"
        name: container
        type: FRAME
        w: 375
        h: 190
        padding: "20"
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-bottom: 1px"
      - node_id: "2507:2837"
        name: How many tabs? How many logins? How long before you get to the work that actually matters?
        type: TEXT
        text: How many tabs?
How many logins?
How long before you get to the work that actually matters?
        w: 335
        h: 150
        fill: "#0E0E0E"
        font_size: 24
        font: Jura Medium
      - node_id: "2507:4303"
        name: block2
        type: FRAME
        w: 375
        h: 1270
      - node_id: "2507:2810"
        name: txt
        type: FRAME
        w: 375
        h: 176
        fill: "#E6FF2B"
        fill_ref: ac1
        fill_ref_type: color_style
        padding: "40"
        gap: 30
        stroke_sides: "border-right: 1px, border-bottom: 1px, border-left: 1px"
      - node_id: "2507:2813"
        name: That's not a pitch. That's a Tuesday — when your business runs on the right infrastructure.
        type: TEXT
        text: That's not a pitch. That's a Tuesday — when your business runs on the right infrastructure.
        w: 335
        h: 96
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 20
        font: Jura Medium
      - node_id: "2507:2770"
        name: container
        type: FRAME
        w: 335
        h: 558
      - node_id: "2507:2771"
        name: h
        type: GROUP
        w: 355
        h: 85
      - node_id: "2507:2772"
        name: bg
        type: FRAME
        w: 335
        h: 85
        fill: "#0E0E0E"
      - node_id: "2507:2832"
        name: Frame 1707480468
        type: FRAME
        w: 335
        h: 45
        gap: 5
      - node_id: "2507:2774"
        name: Container
        type: FRAME
        w: 157
        h: 20
        gap: 10
      - node_id: "2507:2776"
        name: MORNING
        type: TEXT
        text: MORNING
        w: 64
        h: 20
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 15
        font: Roboto Mono Regular
      - node_id: "2507:2777"
        name: "7:02am"
        type: TEXT
        text: "7:02am"
        w: 55
        h: 20
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 15
        font: Roboto Mono Regular
      - node_id: "2507:2779"
        name: txt
        type: FRAME
        w: 292
        h: 20
        gap: 10
      - node_id: "2507:2781"
        name: You haven't opened your laptop
        type: TEXT
        text: You haven't opened your laptop
        w: 271
        h: 20
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 15
        font: Roboto Mono Regular
      - node_id: "2507:2782"
        name: info
        type: FRAME
        w: 335
        h: 473
        fill: "#FFFFFF"
        padding: "30"
        gap: 38
        stroke: "#D8D8D8"
        stroke_ref: devider
        stroke_align: inside
        stroke_sides: all
      - node_id: "2507:2783"
        name: txt
        type: FRAME
        w: 295
        h: 393
        gap: 20
      - node_id: "2507:2784"
        name: "Four things happened while you slept. Your day is planned:"
        type: TEXT
        text: "Four things happened while you slept. Your day is planned: "
        w: 295
        h: 72
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 20
        font: Jura Bold
      - node_id: "2507:2785"
        name: list
        type: FRAME
        w: 295
        h: 301
        gap: 15
      - node_id: "2507:2786"
        name: "1"
        type: FRAME
        w: 295
        h: 54
        gap: 7
        shadow: 4px 4px 12px rgba(0,0,0,0.05)
      - node_id: "2507:2787"
        name: tick
        type: FRAME
        w: 25
        h: 25
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        radius: 4
        padding: "8"
        gap: 10
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: all
      - node_id: "2507:2790"
        name: txt
        type: FRAME
        w: 263
        h: 54
        fill: "#F7F7F7"
        radius: 10
        padding: "8"
        gap: 10
        shadow: 3px 4px 4px rgba(0,0,0,0.03)
      - node_id: "2507:2791"
        name: Сalendar blocks set, priorities ranked, conflicts flagged.
        type: TEXT
        text: "Сalendar blocks set, priorities ranked, conflicts flagged. "
        w: 233
        h: 38
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 16
        font: Jura Medium
      - node_id: "2507:2792"
        name: "2"
        type: FRAME
        w: 295
        h: 54
        gap: 7
        shadow: 4px 4px 12px rgba(0,0,0,0.05)
      - node_id: "2507:2793"
        name: tick
        type: FRAME
        w: 25
        h: 25
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        radius: 4
        padding: "8"
        gap: 10
      - node_id: "2507:2796"
        name: txt
        type: FRAME
        w: 263
        h: 54
        fill: "#F7F7F7"
        radius: 10
        padding: "8"
        gap: 10
        shadow: 3px 4px 4px rgba(0,0,0,0.03)
      - node_id: "2507:2797"
        name: A LinkedIn post sits in your drafts, written in your voice.
        type: TEXT
        text: "A LinkedIn post sits in your drafts, written in your voice. "
        w: 233
        h: 38
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 16
        font: Jura Medium
      - node_id: "2507:2798"
        name: "3"
        type: FRAME
        w: 295
        h: 73
        gap: 7
        shadow: 4px 4px 12px rgba(0,0,0,0.05)
      - node_id: "2507:2799"
        name: tick
        type: FRAME
        w: 25
        h: 25
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        radius: 4
        padding: "8"
        gap: 10
      - node_id: "2507:2802"
        name: txt
        type: FRAME
        w: 263
        h: 73
        fill: "#F7F7F7"
        radius: 10
        padding: "8"
        gap: 10
        shadow: 3px 4px 4px rgba(0,0,0,0.03)
      - node_id: "2507:2803"
        name: Your team pulse check is done — status vs. goals, two follow-ups flagged.
        type: TEXT
        text: "Your team pulse check is done — status vs. goals, two follow-ups flagged. "
        w: 233
        h: 57
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 16
        font: Jura Medium
      - node_id: "2507:2804"
        name: "4"
        type: FRAME
        w: 295
        h: 73
        gap: 7
        shadow: 4px 4px 12px rgba(0,0,0,0.05)
  - chunk_id: anatomy_7
    kind: anatomy
    item_count: 33
    items:
      - node_id: "2507:2805"
        name: tick
        type: FRAME
        w: 25
        h: 25
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        radius: 4
        padding: "8"
        gap: 10
      - node_id: "2507:2808"
        name: txt
        type: FRAME
        w: 263
        h: 73
        fill: "#F7F7F7"
        radius: 10
        padding: "8"
        gap: 10
        shadow: 3px 4px 4px rgba(0,0,0,0.03)
      - node_id: "2507:2809"
        name: A finished PNG diagram you needed for a client deck? Sitting in your project folder.
        type: TEXT
        text: A finished PNG diagram you needed for a client deck? Sitting in your project folder.
        w: 233
        h: 57
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 16
        font: Jura Medium
      - node_id: "2507:4302"
        name: animation
        type: FRAME
        w: 375
        h: 340
      - node_id: "2507:2812"
        name: animation
        type: INSTANCE
        instance_of: Property 1=Variant8
        w: 375
        h: 340
      - node_id: "I2507:2812;2507:2694"
        name: Rectangle 161123946
        type: VECTOR
        w: 326
        h: 72
        fill: hsla(0, 0%, 0%, 0.09)
        blur: 54px
      - node_id: "I2507:2812;2507:2700"
        name: Subtract
        type: BOOLEAN_OPERATION
        w: 35
        h: 35
        fill: "#0E0E0E"
      - node_id: "2507:2821"
        name: "3"
        type: FRAME
        w: 145
        h: 35
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        radius: 6
        padding: "9"
        gap: 10
        stroke: "#004D43"
        stroke_ref: ac2
        stroke_align: inside
        stroke_sides: all
      - node_id: "2507:2822"
        name: Before breakfast
        type: TEXT
        text: Before breakfast
        w: 113
        h: 17
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 14
        font: Jura Medium
      - node_id: "2507:2819"
        name: "2"
        type: FRAME
        w: 128
        h: 35
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        radius: 6
        padding: "9"
        gap: 10
        stroke: "#004D43"
        stroke_ref: ac2
        stroke_align: inside
        stroke_sides: all
      - node_id: "2507:2820"
        name: Ninety seconds
        type: TEXT
        text: Ninety seconds
        w: 108
        h: 17
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 14
        font: Jura Medium
      - node_id: "2507:2815"
        name: "1"
        type: FRAME
        w: 117
        h: 35
        fill: "#FFFFFF"
        radius: 6
        padding: "6"
        gap: 5
        stroke: "#010101"
        stroke_ref: black
        stroke_align: inside
        stroke_sides: all
      - node_id: "2507:2818"
        name: Four tasks
        type: TEXT
        text: "Four tasks "
        w: 72
        h: 17
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 14
        font: Jura SemiBold
      - node_id: "2498:2439"
        name: txt
        type: FRAME
        w: 335
        h: 244
        padding: "30"
        gap: 30
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-left: 1px"
      - node_id: "2498:2440"
        name: Automation Architecture AI builds AI operating system infrastructure for small businesses and startups — a done-for-you system that handles operations so founders can focus on growth. We serve the fo…
        type: TEXT
        text: Automation Architecture AI builds AI operating system infrastructure for small businesses and startups — a done-for-you system that handles operations so founders can focus on growth. We serve the founder who wants the result without becoming the engineer.
        w: 295
        h: 168
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 16
        font: Jura Medium
        line_height: 21px
      - node_id: "2498:2341"
        name: hero
        type: FRAME
        w: 335
        h: 216
        fill: "#F7F7F7"
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-left: 1px"
      - node_id: "2498:2342"
        name: Line 354
        type: LINE
        w: 432
        h: 0
        stroke: "#9E9E9E"
        stroke_sides: all
      - node_id: "2498:2343"
        name: h
        type: FRAME
        w: 375
        h: 181
        fill: "#E6FF2B"
      - node_id: "2498:2344"
        name: How to prepare your business for the agent-to-agent economy
        type: TEXT
        text: How to prepare your business for the agent-to-agent economy
        w: 326
        h: 132
        fill: "#1B1B1B"
        font_size: 28
        font: Jura SemiBold
      - node_id: "2498:2345"
        name: header
        type: FRAME
        w: 375
        h: 70
      - node_id: "2498:2346"
        name: header
        type: FRAME
        w: 375
        h: 70
      - node_id: "2498:2347"
        name: Rectangle 161123983
        type: VECTOR
        w: 20
        h: 70
        fill: "#010101"
      - node_id: "2498:2348"
        name: Rectangle 161123984
        type: RECTANGLE
        w: 335
        h: 70
        fill: "#010101"
      - node_id: "2498:2349"
        name: Rectangle 161123985
        type: VECTOR
        w: 20
        h: 70
        fill: "#010101"
      - node_id: "2498:2350"
        name: menu
        type: FRAME
        w: 30
        h: 18
        gap: 3
        position: absolute
        x: 325
        y: 23
        constraints: "h:min, v:min"
      - node_id: "2498:2351"
        name: Rectangle 161123986
        type: RECTANGLE
        w: 30
        h: 4
        fill: "#E6FF2B"
        fill_ref: ac1
        fill_ref_type: color_style
        radius: 10
      - node_id: "2498:2356"
        name: Link
        type: FRAME
        w: 111
        h: 36
        fill: "#E6FF2B"
        fill_ref: ac1
        fill_ref_type: color_style
        radius: 10
        padding: "8"
        position: absolute
        x: 198
        y: 15
        constraints: "h:min, v:min"
      - node_id: "2498:2357"
        name: Apply now
        type: TEXT
        text: Apply now
        w: 79
        h: 20
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 14
        font: Jura Bold
        line_height: 19.95px
        text_align: center
      - node_id: "2498:2361"
        name: logo
        type: FRAME
        w: 137
        h: 29
      - node_id: "2498:2358"
        name: Subtract
        type: VECTOR
        w: 29
        h: 29
        fill: "#E6FF2B"
      - node_id: "2498:2359"
        name: automation architecture AI
        type: VECTOR
        w: 102
        h: 22
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
      - node_id: "I2507:4122;2507:4059"
        name: Component 2
        type: FRAME
        w: 68
        h: 65
        direction: column
        justify: space-between
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "2507:4148"
        name: Component 2
        type: FRAME
        w: 105
        h: 96
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
  - chunk_id: repeats_1
    kind: repeats
    template_node_id: "2507:4199"
    instance_of: 1/Default
    repeat_count: 1
    template_attributes:
      children_text:
        - You'll never be stuck alone.
        - We don't build and disappear. Ongoing partnership means the system evolves with you
      w: 375
      h: 118
      gap: 10
      stroke: "#9E9E9E"
      stroke_align: inside
      stroke_sides: all
      w_sizing: fixed
      h_sizing: auto
      clips: true
    varying_keys:
      - 1/Default/Frame 1707480472/Get a personalized AI Blueprint before any commitment./text
      - 1/Default/Frame 1707480472/You see exactly what's possible for your business — free, before any engagement begins/text
    items:
      - node_id: "2507:4205"
        diffs:
          - 0
          - You don't need to be technical.
          - 1
          - We build it. We configure it. We maintain it. You use it.
```

<!-- chars: 106057 | ~tokens: 21992 -->