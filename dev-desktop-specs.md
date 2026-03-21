## Figma Component: dev-desktop

### Figma URL
[Paste Figma frame URL here]

### Implementation Instructions
1. Use get_screenshot on the Figma URL above and **save it to `.figma/dev-desktop.png`** (relative to working directory). Reference this local file whenever you need to check the design — do not call get_screenshot again.
2. Read the anatomy tree below to understand the component structure.
3. Read the YAML specs — it has every layer, color, font, spacing, and token value you need.
4. Check the project's working directory or `package.json` for the icon library in use (e.g. Phosphor, Lucide, Heroicons). Use matching icons from that library based on the `instance_of` names in the anatomy (e.g. `instance_of: ForkKnife` → use ForkKnife from the detected library).
5. Check the project's `package.json` to detect the framework in use, then build the component accordingly.
6. Build the component exactly as specified. Match the structure, styles (fills, strokes, fonts), and layout (direction, gap, padding).
7. Use resolved_tokens to map token names to actual values (e.g. hex colors, font names).
8. Keep it minimal — only implement what the specs describe, nothing more.
9. **Visual QA** — render your component at 1920×8910px (1x scale, no device emulation). Take a screenshot and compare with `.figma/dev-desktop.png`. Verify:
   - Layout structure matches (correct direction, nesting, alignment)
   - Spacing is correct (gap, padding values from specs)
   - Colors match fills/strokes in the spec (within #±02 per channel)
   - Font sizes, weights, and families match
   - Border radius values match
   - Text content is complete (no unintended truncation)
   Fix any differences and re-compare until all checks pass.

### Component Anatomy
```
- dev-desktop (FRAME)
- socialmedia (FRAME)
- vector (FRAME)
- Component 9 (INSTANCE) — instance of variant=32,:hover=false
- Component 2 (INSTANCE) — instance of variant=6
- btns (FRAME)
- Container (FRAME)
- Component 16 (INSTANCE) — instance of variant=4,:hover=false
- 6649a8e1ba00f2a179cb88d1_Twitter.svg (FRAME)
- Component 9 (INSTANCE) — instance of variant=33,:hover=false
- Component 16 (INSTANCE) — instance of variant=6,:hover=false
- 6649a8e0a27ebe906ed8639b_Medium.svg (FRAME)
- Component 9 (INSTANCE) — instance of variant=35,:hover=false
- Component 16 (INSTANCE) — instance of variant=7,:hover=false
- 66869898483ad2d1ccf089d1_linkedin.svg (FRAME)
- Component 9 (INSTANCE) — instance of variant=36,:hover=false
- contant (FRAME)
- part1 (FRAME)
- hero (FRAME)
- Line 354 (LINE)
- h (FRAME)
- How to prepare your business for the agent-to-agent economy (TEXT) — "How to prepare your business for the ag…"
- block2 (FRAME)
- txt (FRAME)
- Automation Architecture AI builds AI operating system infrastructure for small businesses and startups — a done-for-you system that handles operations so founders can focus on growth. We serve the founder who wants the result without becoming the engineer. (TEXT) — "Automation Architecture AI builds AI op…"
- That's not a pitch. That's a Tuesday — when your business runs on the right infrastructure. (TEXT) — "That's not a pitch. That's a Tuesday — …"
- animation (FRAME)
- container (FRAME)
- bg (FRAME)
- Container (FRAME)
- MORNING (TEXT) — "MORNING"
- 7:02am (TEXT) — "7:02am"
- Container (FRAME)
- Frame 1707480387 (FRAME)
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
- animation (INSTANCE) — instance of Property 1=Variant2
- Frame 1707480411 (FRAME)
- Frame 1707480408 (FRAME)
- Frame 1707480410 (FRAME)
- Subtract (BOOLEAN_OPERATION)
- line (FRAME)
- 1 (FRAME)
- Four tasks (TEXT) — "Four tasks "
- 2 (FRAME)
- Ninety seconds (TEXT) — "Ninety seconds"
- 3 (FRAME)
- Before breakfast (TEXT) — "Before breakfast"
- txt (FRAME)
- container (FRAME)
- Now think about your actual morning (TEXT) — "Now  think  about  your actual  morning"
- container (FRAME)
- How many tabs? How many logins? How long before you get to the work that actually matters? (TEXT) — "How many tabs? How many logins? How lon…"
- block (FRAME)
- animation (INSTANCE) — instance of Property 1=Default
- Frame 1707480417 (FRAME)
- fluent:scan-table-20-regular (FRAME)
- fluent:scan-table-20-regular (FRAME)
- fluent:scan-table-20-regular (FRAME)
- fluent:scan-table-20-regular (FRAME)
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
- block (FRAME)
- txt (FRAME)
- txt (FRAME)
- "I need to get focused. AI is changing so rapidly that I feel overwhelmed and catch myself chasing the next shiny object." (TEXT) — ""I need to get focused. AI is changing …"
- txt (FRAME)
- There's a name for what you're feeling: (TEXT) — "There's a name for what you're feeling: "
- The Operator Trap (TEXT) — "The Operator Trap"
- Eighty percent of your bandwidth goes to keeping the business running — admin, meetings, scheduling, putting out fires. That leaves maybe twenty percent for the work that actually grows the business. (TEXT) — "Eighty percent of your bandwidth goes t…"
- container (FRAME)
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
- part 2 (FRAME)
- h (FRAME)
- What We Actually Build (TEXT) — "What We Actually Build"
- block (FRAME)
- btn (FRAME)
- See the full picture (TEXT) — "See the full picture"
- txt (FRAME)
- Three layers working together (TEXT) — "Three layers working together"
- Context makes the intelligence useful (TEXT) — "Context makes the intelligence useful"
- Intelligence makes the automation smart (TEXT) — "Intelligence makes the automation smart"
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
- txt (FRAME)
- There's a system that changes this. (TEXT) — "There's a system that changes this. "
- We call it the bottle — the operating system that channels the raw power of AI into something your business can actually use. (TEXT) — "We call it the bottle — the operating s…"
- img (FRAME)
- AIOS (TEXT) — "AIOS"
- line (FRAME)
- Frame 1707480396 (FRAME)
- Not a chatbot (TEXT) — "Not a chatbot"
- Frame 1707480397 (FRAME)
- Not a wrapper (TEXT) — "Not a wrapper"
- Frame 1707480395 (FRAME)
- An operating system (TEXT) — "An operating system"
- List (FRAME)
- Component 10 (FRAME)
- Container (FRAME)
- txt (FRAME)
- Text (TEXT) — "The Morning Brief"
- txt (FRAME)
- Text (TEXT) — "74 calls analyzed overnight. One brief …"
- Text (TEXT) — "Because the system knows the business f…"
- Component 11 (FRAME)
- Container (FRAME)
- txt (FRAME)
- Text (TEXT) — "Lead Pipeline — Built in One Week"
- txt (FRAME)
- Text (TEXT) — "15 hours a week on lead gen. Then zero."
- Text (TEXT) — "A service business owner spending 15 ho…"
- Component 12 (FRAME)
- Container (FRAME)
- txt (FRAME)
- Text (TEXT) — "Landing Page From a Phone"
- txt (FRAME)
- Text (TEXT) — "Voice note in. Live page out. Before he…"
- Text (TEXT) — "A founder needs a lead magnet page for …"
- Component 13 (FRAME)
- Container (FRAME)
- txt (FRAME)
- Text (TEXT) — "Content Pipeline"
- txt (FRAME)
- Text (TEXT) — "Idea to publish-ready — from a voice no…"
- Text (TEXT) — "A founder captures a content idea via T…"
- container (FRAME)
- btn (FRAME)
- Component 1 (FRAME)
- Our Partners: (TEXT) — "See all use cases"
- Component 3 (FRAME)
- h (FRAME)
- h (FRAME)
- Heading 2 (FRAME)
- We measure three things for every client: (TEXT) — "We measure three things for every clien…"
- container (FRAME)
- block (FRAME)
- animation (INSTANCE) — instance of Property 1=Component 25
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
- block (FRAME)
- container (FRAME)
- 12-25x (TEXT) — "12-25x"
- time leverage (TEXT) — "time leverage"
- container (FRAME)
- 60-70% (TEXT) — "60-70%"
- tasks automated (TEXT) — "tasks automated"
- container (FRAME)
- 50% → 90% (TEXT) — "50% → 90%"
- output quality with full business context (TEXT) — "output quality with full business conte…"
- block (FRAME)
- txt (FRAME)
- These are methodology targets based on AIOS architecture — derived from time-per-task comparisons before and after AIOS deployment — and supported by industry research (McKinsey, 2023; Leng et al., 2024). (TEXT) — "These are methodology targets based on …"
- block (FRAME)
- txt (FRAME)
- You have two paths from here. (TEXT) — "You have two paths from here."
- block (FRAME)
- Background+Border (FRAME)
- Container (FRAME)
- Container (FRAME)
- 666aa5b019fc170dd5ab9fa9_ico-container.svg (FRAME)
- Component 9 (FRAME)
- Container (FRAME)
- Heading 3 (FRAME)
- Do it alone: (TEXT) — "Do it alone:"
- Container (FRAME)
- Container (FRAME)
- Evaluate 46,700 AI tools. Learn the architecture. Navigate context systems, API integrations, and automation layers yourself. Spend months iterating before anything runs. Maintain and evolve it as the landscape shifts underneath you. (TEXT) — "Evaluate 46,700 AI tools. Learn the arc…"
- Background+Border (FRAME)
- Container (FRAME)
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
- Container (FRAME)
- We build the full system around your business. Business context, dashboard intelligence, automated task management — configured for your operations. First working system live within weeks. Ongoing support as your business grows. (TEXT) — "We build the full system around your bu…"
- Component 16 (FRAME)
- devider (FRAME)
- list (FRAME)
- 1 (INSTANCE) — instance of Property 1=Default
- Get a personalized AI Blueprint before any commitment (TEXT) — "Get a personalized AI Blueprint before …"
- You see exactly what's possible for your business — free, before any engagement begins (TEXT) — "You see exactly what's possible for you…"
- 2 (INSTANCE) — instance of Property 1=Default
- 3 (INSTANCE) — instance of Property 1=Default
- devider (FRAME)
- banner (FRAME)
- A business that serves you, not the other way around (TEXT) — "A business that serves you, not the oth…"
- btn (FRAME)
- Get Your Free AI Blueprint (TEXT) — "Get Your Free AI Blueprint"
- You fill it with the business you actually want to run (TEXT) — "You fill it with the business you actua…"
- We build the bottle (TEXT) — "We build the bottle "
- devider (FRAME)
- footer (FRAME)
- line (FRAME)
- container (FRAME)
- Subtract (BOOLEAN_OPERATION)
- container (FRAME)
- Text (TEXT) — "Subscribe to be in touch"
- input (FRAME)
- Text (TEXT) — "Your E-mail"
- container (FRAME)
- btn (FRAME)
- SUBSCRIBE (TEXT) — "SUBSCRIBE"
- line (FRAME)
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
- header (FRAME)
- vector (FRAME)
- Component 1 (INSTANCE) — instance of variant=25,:hover=false
- Vector (VECTOR)
- Background (FRAME)
- Component 1 (INSTANCE) — instance of variant=26,:hover=false
- menu (FRAME)
- Container (FRAME)
- Container (FRAME)
- Subtract (BOOLEAN_OPERATION)
- Navigation (FRAME)
- List (FRAME)
- link (INSTANCE) — instance of stay=default
- Container (FRAME)
- Text (TEXT) — "Philosophy"
- link (INSTANCE) — instance of stay=default
- link (INSTANCE) — instance of stay=default
- link (INSTANCE) — instance of stay=default
- link (INSTANCE) — instance of stay=default
- link (INSTANCE) — instance of stay=default
- Margin (FRAME)
- Container (FRAME)
- Button menu (FRAME)
- Container (FRAME)
- Our AI Blueprint (TEXT) — "Our AI Blueprint"
- Link (FRAME)
- Apply now (TEXT) — "Apply now"
- Vertical Divider (RECTANGLE)
- Vertical Divider (RECTANGLE)
- vector (FRAME)
- Component 1 (INSTANCE) — instance of variant=25,:hover=false
- Background (FRAME)
- Component 1 (INSTANCE) — instance of variant=26,:hover=false
- Frame 1707480488 (FRAME)
- lets-icons:img-fill (FRAME)
- Object [Vectorized] (FRAME)
- Object [Vectorized] (FRAME)
- Object [Vectorized] (FRAME)
- Object [Vectorized] (FRAME)
- cintainer (FRAME)
```

### Specs Data (YAML)
```yaml
schema: specs-plugin.agent_pack.v14.yaml.compact
generated_at: "2026-03-21T07:40:13.818Z"
selection:
  node_id: "2029:5811"
  name: dev-desktop
  type: FRAME
  clips_content: true
defaults_omitted:
  justify: flex-start
  align: flex-start
  direction: row
summary:
  anatomy_nodes_total: 346
  property_groups_total: 0
  property_variants_total: 0
  variable_refs_total: 0
  instance_templates: 4
  deduplicated_instances: 11
  chunks_total: 11
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
    anatomy_included: 346
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
  white: "#FFFFFF"
  gray2: "#9E9E9E"
  black: "#010101"
  gray: "#898A8D"
  devider: "#D8D8D8"
  ac2: "#004D43"
  ac1: "#E6FF2B"
chunks:
  - chunk_id: anatomy_1
    kind: anatomy
    item_count: 50
    items:
      - node_id: "2029:5811"
        name: dev-desktop
        type: FRAME
        w: 1920
        h: 8910
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "2498:1895"
        name: socialmedia
        type: FRAME
        w: 55
        h: 215
        padding: "10"
        gap: 10
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2029:5877"
        name: vector
        type: FRAME
        w: 55
        h: 55
        position: absolute
        x: 1839
        y: 123
        constraints: "h:min, v:max"
        direction: column
        w_sizing: fixed
        h_sizing: auto
        clips: true
      - node_id: "2029:5878"
        name: Component 9
        type: INSTANCE
        instance_of: "variant=32,:hover=false"
        w: 55
        h: 55
        direction: column
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: fixed
        clips: true
      - node_id: "I2029:5878;1:5870"
        name: Component 2
        type: INSTANCE
        instance_of: variant=6
        w: 55
        h: 55
      - node_id: "2029:5879"
        name: btns
        type: FRAME
        w: 55
        h: 161
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: all
        position: absolute
        x: 1839
        y: 177
        constraints: "h:min, v:min"
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2029:5880"
        name: Container
        type: FRAME
        w: 53
        h: 159
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2029:5881"
        name: Component 16
        type: INSTANCE
        instance_of: "variant=4,:hover=false"
        w: 53
        h: 53
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        padding: "17.5"
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I2029:5881;1:6310"
        name: 6649a8e1ba00f2a179cb88d1_Twitter.svg
        type: FRAME
        w: 18
        h: 18
        direction: column
        w_sizing: fixed
        h_sizing: auto
        clips: true
      - node_id: "2029:5883"
        name: Component 16
        type: INSTANCE
        instance_of: "variant=6,:hover=false"
        w: 53
        h: 53
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        padding: "17.5"
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I2029:5883;1:6316"
        name: 6649a8e0a27ebe906ed8639b_Medium.svg
        type: FRAME
        w: 18
        h: 18
        direction: column
        w_sizing: fixed
        h_sizing: auto
        clips: true
      - node_id: "2029:5884"
        name: Component 16
        type: INSTANCE
        instance_of: "variant=7,:hover=false"
        w: 53
        h: 53
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        padding: "17.5"
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I2029:5884;1:6319"
        name: 66869898483ad2d1ccf089d1_linkedin.svg
        type: FRAME
        w: 18
        h: 18
        direction: column
        w_sizing: fixed
        h_sizing: auto
        clips: true
      - node_id: "I2029:5884;1:6320"
        name: Component 9
        type: INSTANCE
        instance_of: "variant=36,:hover=false"
        w: 18
        h: 18
        fill: "#000000"
        direction: column
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: fixed
        clips: true
      - node_id: "2498:2339"
        name: contant
        type: FRAME
        w: 1760
        h: 8732
        gap: 80
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2498:2338"
        name: part1
        type: FRAME
        w: 1760
        h: 2706
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2498:1210"
        name: hero
        type: FRAME
        w: 1760
        h: 434
        fill: "#F7F7F7"
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-left: 1px"
        justify: space-between
        align: flex-end
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
      - node_id: "2029:6170"
        name: Line 354
        type: LINE
        w: 432
        h: 0
        stroke: "#9E9E9E"
        stroke_sides: all
      - node_id: "2029:6119"
        name: h
        type: FRAME
        w: 1328
        h: 360
        fill: "#E6FF2B"
      - node_id: "2029:6120"
        name: How to prepare your business for the agent-to-agent economy
        type: TEXT
        text: How to prepare your business for the agent-to-agent economy
        w: 1214
        h: 172
        fill: "#1B1B1B"
        font_size: 73
        font: Jura SemiBold
      - node_id: "2498:2181"
        name: block2
        type: FRAME
        w: 1760
        h: 732
        justify: space-between
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2498:1211"
        name: txt
        type: FRAME
        w: 444
        h: 732
        padding: "60"
        gap: 324
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-bottom: 1px, border-left: 1px"
        direction: column
        justify: space-between
        align: center
        w_sizing: auto
        h_sizing: fixed
      - node_id: "2223:4820"
        name: Automation Architecture AI builds AI operating system infrastructure for small businesses and startups — a done-for-you system that handles operations so founders can focus on growth. We serve the fo…
        type: TEXT
        text: Automation Architecture AI builds AI operating system infrastructure for small businesses and startups — a done-for-you system that handles operations so founders can focus on growth. We serve the founder who wants the result without becoming the engineer.
        w: 364
        h: 192
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 20
        font: Jura Medium
      - node_id: "2291:5031"
        name: That's not a pitch. That's a Tuesday — when your business runs on the right infrastructure.
        type: TEXT
        text: That's not a pitch. That's a Tuesday — when your business runs on the right infrastructure.
        w: 364
        h: 96
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 20
        font: Jura Medium
      - node_id: "2266:4894"
        name: animation
        type: FRAME
        w: 1316
        h: 732
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-bottom: 1px"
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "2291:5030"
        name: container
        type: FRAME
        w: 586
        h: 534
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2266:4897"
        name: bg
        type: FRAME
        w: 586
        h: 47
        fill: "#0E0E0E"
      - node_id: "2266:4899"
        name: Container
        type: FRAME
        w: 157
        h: 18
        gap: 10
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2266:4901"
        name: MORNING
        type: TEXT
        text: MORNING
        w: 72
        h: 18
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 17
        font: Roboto Mono Regular
        line_height: 18px
      - node_id: "2266:4902"
        name: "7:02am"
        type: TEXT
        text: "7:02am"
        w: 62
        h: 18
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 17
        font: Roboto Mono Regular
        line_height: 18px
      - node_id: "2266:4903"
        name: Container
        type: FRAME
        w: 311
        h: 18
        gap: 10
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2266:4904"
        name: Frame 1707480387
        type: FRAME
        w: 332
        h: 18
        gap: 10
        justify: space-between
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2266:4906"
        name: You haven't opened your laptop
        type: TEXT
        text: You haven't opened your laptop
        w: 307
        h: 18
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 17
        font: Roboto Mono Regular
        line_height: 18px
      - node_id: "2266:4907"
        name: info
        type: FRAME
        w: 586
        h: 487
        fill: "#FFFFFF"
        padding: "40"
        gap: 38
        stroke: "#D8D8D8"
        stroke_ref: devider
        stroke_align: inside
        stroke_sides: all
        direction: column
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2266:4908"
        name: txt
        type: FRAME
        w: 471
        h: 377
        gap: 20
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2266:4909"
        name: "Four things happened while you slept. Your day is planned:"
        type: TEXT
        text: "Four things happened while you slept. Your day is planned: "
        w: 471
        h: 56
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 24
        font: Jura Bold
      - node_id: "2266:4910"
        name: list
        type: FRAME
        w: 479
        h: 301
        gap: 15
        direction: column
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2266:4911"
        name: "1"
        type: FRAME
        w: 479
        h: 64
        gap: 10
        shadow: 4px 4px 12px rgba(0,0,0,0.05)
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2266:4912"
        name: tick
        type: FRAME
        w: 37
        h: 37
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        radius: 6
        padding: "8"
        gap: 10
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: all
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2266:4915"
        name: txt
        type: FRAME
        w: 432
        h: 64
        fill: "#F7F7F7"
        radius: 10
        padding: "8"
        gap: 10
        shadow: 3px 4px 4px rgba(0,0,0,0.09)
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2266:4916"
        name: Сalendar blocks set, priorities ranked, conflicts flagged.
        type: TEXT
        text: "Сalendar blocks set, priorities ranked, conflicts flagged. "
        w: 402
        h: 48
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 20
        font: Jura Medium
      - node_id: "2266:4917"
        name: "2"
        type: FRAME
        w: 479
        h: 64
        gap: 10
        shadow: 4px 4px 12px rgba(0,0,0,0.05)
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2266:4918"
        name: tick
        type: FRAME
        w: 37
        h: 37
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        radius: 6
        padding: "8"
        gap: 10
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2266:4921"
        name: txt
        type: FRAME
        w: 432
        h: 64
        fill: "#F7F7F7"
        radius: 10
        padding: "8"
        gap: 10
        shadow: 3px 4px 4px rgba(0,0,0,0.09)
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2266:4922"
        name: A LinkedIn post sits in your drafts, written in your voice.
        type: TEXT
        text: "A LinkedIn post sits in your drafts, written in your voice. "
        w: 402
        h: 48
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 20
        font: Jura Medium
      - node_id: "2266:4923"
        name: "3"
        type: FRAME
        w: 479
        h: 64
        gap: 10
        shadow: 4px 4px 12px rgba(0,0,0,0.05)
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2266:4924"
        name: tick
        type: FRAME
        w: 37
        h: 37
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        radius: 6
        padding: "8"
        gap: 10
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2266:4927"
        name: txt
        type: FRAME
        w: 432
        h: 64
        fill: "#F7F7F7"
        radius: 10
        padding: "8"
        gap: 10
        shadow: 3px 4px 4px rgba(0,0,0,0.09)
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2266:4928"
        name: Your team pulse check is done — status vs. goals, two follow-ups flagged.
        type: TEXT
        text: "Your team pulse check is done — status vs. goals, two follow-ups flagged. "
        w: 402
        h: 48
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 20
        font: Jura Medium
      - node_id: "2266:4929"
        name: "4"
        type: FRAME
        w: 479
        h: 64
        gap: 10
        shadow: 4px 4px 12px rgba(0,0,0,0.05)
        align: center
        w_sizing: fixed
        h_sizing: auto
  - chunk_id: anatomy_2
    kind: anatomy
    item_count: 50
    items:
      - node_id: "2266:4930"
        name: tick
        type: FRAME
        w: 37
        h: 37
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        radius: 6
        padding: "8"
        gap: 10
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2266:4933"
        name: txt
        type: FRAME
        w: 432
        h: 64
        fill: "#F7F7F7"
        radius: 10
        padding: "8"
        gap: 10
        shadow: 3px 4px 4px rgba(0,0,0,0.09)
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2266:4934"
        name: A finished PNG diagram you needed for a client deck? Sitting in your project folder.
        type: TEXT
        text: A finished PNG diagram you needed for a client deck? Sitting in your project folder.
        w: 402
        h: 48
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 20
        font: Jura Medium
      - node_id: "2266:4945"
        name: animation
        type: INSTANCE
        instance_of: Property 1=Variant2
        w: 895
        h: 680
      - node_id: "I2266:4945;2063:6641"
        name: Frame 1707480411
        type: FRAME
        w: 298
        h: 283
        gap: 18
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I2266:4945;2063:6642"
        name: Frame 1707480408
        type: FRAME
        w: 298
        h: 28
        gap: 11
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I2266:4945;2063:6647"
        name: Frame 1707480410
        type: FRAME
        w: 298
        h: 237
        gap: 11
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "I2266:4945;2223:4840"
        name: Subtract
        type: BOOLEAN_OPERATION
        w: 64
        h: 64
        fill: "#0E0E0E"
      - node_id: "2223:4810"
        name: line
        type: FRAME
        w: 176
        h: 143
        gap: 10
        direction: column
        justify: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "2223:4811"
        name: "1"
        type: FRAME
        w: 153
        h: 41
        radius: 6
        padding: "10"
        gap: 10
        stroke: "#010101"
        stroke_ref: black
        stroke_align: inside
        stroke_sides: all
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "2223:4814"
        name: Four tasks
        type: TEXT
        text: "Four tasks "
        w: 93
        h: 21
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 18
        font: Jura SemiBold
      - node_id: "2223:4815"
        name: "2"
        type: FRAME
        w: 169
        h: 41
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        radius: 6
        padding: "10"
        gap: 10
        stroke: "#004D43"
        stroke_ref: ac2
        stroke_align: inside
        stroke_sides: all
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "2223:4816"
        name: Ninety seconds
        type: TEXT
        text: Ninety seconds
        w: 139
        h: 21
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 18
        font: Jura Medium
      - node_id: "2223:4817"
        name: "3"
        type: FRAME
        w: 176
        h: 41
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        radius: 6
        padding: "10"
        gap: 10
        stroke: "#004D43"
        stroke_ref: ac2
        stroke_align: inside
        stroke_sides: all
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "2223:4818"
        name: Before breakfast
        type: TEXT
        text: Before breakfast
        w: 146
        h: 21
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 18
        font: Jura Medium
      - node_id: "2498:2184"
        name: txt
        type: FRAME
        w: 1760
        h: 230
        justify: space-between
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2029:5812"
        name: container
        type: FRAME
        w: 880
        h: 230
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        direction: column
        justify: center
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2029:5815"
        name: Now think about your actual morning
        type: TEXT
        text: Now  think  about  your actual  morning
        w: 760
        h: 142
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 60
        font: Jura Regular
      - node_id: "2029:5820"
        name: container
        type: FRAME
        w: 880
        h: 230
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-bottom: 1px"
        direction: column
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2029:5823"
        name: How many tabs? How many logins? How long before you get to the work that actually matters?
        type: TEXT
        text: How many tabs? How many logins? How long before you get to the work that actually matters?
        w: 742
        h: 168
        fill: "#0E0E0E"
        font_size: 33
        font: Jura Medium
        line_height: 42px
      - node_id: "2498:2186"
        name: block
        type: FRAME
        w: 1760
        h: 650
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-bottom: 1px, border-left: 1px"
        justify: space-between
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2300:5398"
        name: animation
        type: INSTANCE
        instance_of: Property 1=Default
        w: 880
        h: 650
      - node_id: "I2300:5398;2300:5274"
        name: Frame 1707480417
        type: FRAME
        w: 749
        h: 382
        fill: "#F9F9F9"
        radius: 50
        direction: column
        align: center
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "I2300:5398;2300:5300"
        name: "fluent:scan-table-20-regular"
        type: FRAME
        w: 44
        h: 44
        fill: "#E6FF2B"
        fill_ref: ac1
        fill_ref_type: color_style
        radius: 9
      - node_id: "I2300:5398;2300:5314"
        name: "fluent:scan-table-20-regular"
        type: FRAME
        w: 44
        h: 44
        fill: "#E6FF2B"
        fill_ref: ac1
        fill_ref_type: color_style
        radius: 9
      - node_id: "I2300:5398;2300:5328"
        name: "fluent:scan-table-20-regular"
        type: FRAME
        w: 44
        h: 44
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        radius: 9
      - node_id: "I2300:5398;2300:5330"
        name: "fluent:scan-table-20-regular"
        type: FRAME
        w: 44
        h: 44
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        radius: 9
      - node_id: "2498:2185"
        name: info
        type: FRAME
        w: 880
        h: 650
        padding: "10"
        gap: 10
        direction: column
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2498:2183"
        name: info
        type: FRAME
        w: 696
        h: 446
        gap: 60
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2291:5036"
        name: txt
        type: FRAME
        w: 696
        h: 326
        gap: 20
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2058:6446"
        name: The agent-to-agent economy — where AI agents transact, negotiate, and operate on behalf of businesses — is arriving faster than most founders realize.
        type: TEXT
        text: The agent-to-agent economy — where AI agents transact, negotiate, and operate on behalf of businesses — is arriving faster than most founders realize.
        w: 696
        h: 78
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 22
        font: Jura Medium
      - node_id: "2058:6447"
        name: The gap between where you are and where you could be isn't about effort. You're already working hard enough. It's about architecture — the system underneath everything else. The infrastructure that t…
        type: TEXT
        text: The gap between where you are and where you could be isn't about effort. You're already working hard enough. It's about architecture — the system underneath everything else. The infrastructure that turns raw AI capability into daily business results.
        w: 696
        h: 130
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 22
        font: Jura Medium
      - node_id: "2058:6448"
        name: Your competitors haven't started building theirs yet. That gap is your advantage. In 12 months, this conversation will be obvious. Right now, it's still early — but the window won't stay open.
        type: TEXT
        text: Your competitors haven't started building theirs yet. That gap is your advantage. In 12 months, this conversation will be obvious. Right now, it's still early — but the window won't stay open.
        w: 696
        h: 78
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 22
        font: Jura Medium
      - node_id: "2498:2182"
        name: btns
        type: FRAME
        w: 696
        h: 60
        gap: 20
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2291:5044"
        name: btn
        type: FRAME
        w: 400
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
      - node_id: "2291:5045"
        name: Get Your Free AI Blueprint
        type: TEXT
        text: Get Your Free AI Blueprint
        w: 353
        h: 20
        fill: "#0E0E0E"
        font_size: 24
        font: Jura Bold
        line_height: 19.95px
        text_align: center
      - node_id: "2291:5047"
        name: btn
        type: FRAME
        w: 275
        h: 60
        padding: "15"
        stroke: "#010101"
        stroke_ref: black
        stroke_align: inside
        stroke_sides: all
        direction: column
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2291:5048"
        name: See How It Works
        type: TEXT
        text: See How It Works
        w: 232
        h: 20
        fill: "#0E0E0E"
        font_size: 24
        font: Jura Bold
        line_height: 19.95px
        text_align: center
      - node_id: "2498:2198"
        name: block
        type: FRAME
        w: 1760
        h: 660
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-bottom: 1px, border-left: 1px"
        justify: space-between
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2498:2189"
        name: txt
        type: FRAME
        w: 880
        h: 660
        padding: "10"
        gap: 10
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-right: 1px"
        direction: column
        justify: center
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2498:2188"
        name: txt
        type: FRAME
        w: 645
        h: 499
        gap: 220
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2300:5938"
        name: "I need to get focused. AI is changing so rapidly that I feel overwhelmed and catch myself chasing the next shiny object."
        type: TEXT
        text: "I need to get focused. AI is changing so rapidly that I feel overwhelmed and catch myself chasing the next shiny object."
        w: 647
        h: 93
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 26
        font: Jura SemiBold
      - node_id: "2498:2187"
        name: txt
        type: FRAME
        w: 645
        h: 186
        gap: 20
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2300:5763"
        name: "There's a name for what you're feeling:"
        type: TEXT
        text: "There's a name for what you're feeling: "
        w: 645
        h: 24
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 20
        font: Jura SemiBold
      - node_id: "2300:5762"
        name: The Operator Trap
        type: TEXT
        text: The Operator Trap
        w: 645
        h: 26
        fill: "#000000"
        font_size: 22
        font: Jura Bold
      - node_id: "2300:5764"
        name: Eighty percent of your bandwidth goes to keeping the business running — admin, meetings, scheduling, putting out fires. That leaves maybe twenty percent for the work that actually grows the business.
        type: TEXT
        text: Eighty percent of your bandwidth goes to keeping the business running — admin, meetings, scheduling, putting out fires. That leaves maybe twenty percent for the work that actually grows the business.
        w: 645
        h: 96
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 20
        font: Jura SemiBold
      - node_id: "2498:2196"
        name: container
        type: FRAME
        w: 648
        h: 458
        gap: 91
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2498:2194"
        name: line
        type: FRAME
        w: 648
        h: 246
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2498:2190"
        name: GPT
        type: FRAME
        w: 214
        h: 246
        gap: 50
        direction: column
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "2300:5810"
        name: You've tried ChatGPT
        type: TEXT
        text: You've tried ChatGPT
        w: 214
        h: 48
        fill: "#000000"
        font_size: 20
        font: Jura SemiBold
        text_align: center
  - chunk_id: anatomy_3
    kind: anatomy
    item_count: 50
    items:
      - node_id: "2498:2191"
        name: zapier
        type: FRAME
        w: 214
        h: 246
        gap: 50
        direction: column
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "2300:5811"
        name: You've tried Zapier
        type: TEXT
        text: "You've tried Zapier "
        w: 214
        h: 48
        fill: "#000000"
        font_size: 20
        font: Jura SemiBold
        text_align: center
      - node_id: "2498:2192"
        name: browser
        type: FRAME
        w: 214
        h: 246
        gap: 50
        direction: column
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2300:5812"
        name: You've tried a dozen browser extensions
        type: TEXT
        text: "You've tried a dozen browser extensions "
        w: 214
        h: 48
        fill: "#000000"
        font_size: 20
        font: Jura SemiBold
        text_align: center
      - node_id: "2498:2195"
        name: txt
        type: FRAME
        w: 648
        h: 121
        gap: 25
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2300:5813"
        name: The instinct was right. The infrastructure wasn't.
        type: TEXT
        text: The instinct was right. The infrastructure wasn't.
        w: 648
        h: 24
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 20
        font: Jura SemiBold
      - node_id: "2300:5900"
        name: Over 46,700 AI tools exist today (per theresanaiforthat.com), and none of them talk to each other. Tools without architecture don't compound. They accumulate.
        type: TEXT
        text: Over 46,700 AI tools exist today (per theresanaiforthat.com), and none of them talk to each other. Tools without architecture don't compound. They accumulate.
        w: 648
        h: 72
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 20
        font: Jura SemiBold
      - node_id: "2300:6130"
        name: btn
        type: FRAME
        w: 444
        h: 55
        align: center
        w_sizing: auto
        h_sizing: auto
        clips: true
      - node_id: "2300:6131"
        name: Component 1
        type: FRAME
        w: 389
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
      - node_id: "2300:6132"
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
      - node_id: "2300:6133"
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
      - node_id: "2498:2332"
        name: part 2
        type: FRAME
        w: 1760
        h: 5946
        direction: column
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2029:5817"
        name: h
        type: FRAME
        w: 1760
        h: 230
        fill: "#E6FF2B"
        fill_ref: ac1
        fill_ref_type: color_style
        padding: "80"
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: all
        direction: column
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2029:5819"
        name: What We Actually Build
        type: TEXT
        text: What We Actually Build
        w: 702
        h: 73
        fill: "#0E0E0E"
        font_size: 60
        font: Inter Regular
      - node_id: "2498:2199"
        name: block
        type: FRAME
        w: 1760
        h: 1000
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-left: 1px"
        opacity: 0.800000011920929
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
      - node_id: "2300:5935"
        name: btn
        type: FRAME
        w: 470
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
      - node_id: "2300:5936"
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
      - node_id: "2300:6407"
        name: txt
        type: FRAME
        w: 1760
        h: 110
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        padding: "40"
        gap: 42
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: all
        justify: space-between
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2300:6404"
        name: Three layers working together
        type: TEXT
        text: Three layers working together
        w: 419
        h: 30
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 25
        font: Inter Regular
      - node_id: "2300:6405"
        name: Context makes the intelligence useful
        type: TEXT
        text: Context makes the intelligence useful
        w: 521
        h: 30
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 25
        font: Inter Regular
      - node_id: "2300:6406"
        name: Intelligence makes the automation smart
        type: TEXT
        text: Intelligence makes the automation smart
        w: 557
        h: 30
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 25
        font: Inter Regular
      - node_id: "2300:6139"
        name: txt
        type: FRAME
        w: 557
        h: 496
        radius: 20
        padding: "40"
        gap: 10
        stroke: "#D8D8D8"
        stroke_ref: devider
        stroke_align: inside
        stroke_sides: all
        direction: column
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2300:6138"
        name: txt
        type: FRAME
        w: 411
        h: 405
        gap: 40
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2300:5955"
        name: "An AI Operating System — and it wraps around your entire business in three layers:"
        type: TEXT
        text: "An AI Operating System — and it wraps around your entire business in three layers:"
        w: 411
        h: 72
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 20
        font: Jura Medium
      - node_id: "2300:5951"
        name: list
        type: FRAME
        w: 411
        h: 293
        gap: 25
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2300:5943"
        name: txt
        type: FRAME
        w: 411
        h: 83
        gap: 5
        direction: column
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2300:5941"
        name: Business Context Data Engine
        type: TEXT
        text: Business Context Data Engine
        w: 411
        h: 24
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 20
        font: Jura Bold
      - node_id: "2300:5940"
        name: Your AI knows your business the way a co-founder would
        type: TEXT
        text: Your AI knows your business the way a co-founder would
        w: 411
        h: 48
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 20
        font: Jura Medium
      - node_id: "2300:5944"
        name: txt
        type: FRAME
        w: 411
        h: 83
        gap: 5
        direction: column
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2300:5945"
        name: Dashboard Intelligence
        type: TEXT
        text: Dashboard Intelligence
        w: 411
        h: 24
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 20
        font: Jura Bold
      - node_id: "2300:5946"
        name: A morning brief, delivered before you open your laptop
        type: TEXT
        text: A morning brief, delivered before you open your laptop
        w: 411
        h: 48
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 20
        font: Jura Medium
      - node_id: "2300:5947"
        name: txt
        type: FRAME
        w: 411
        h: 77
        gap: 5
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2300:5948"
        name: Automated Task Management
        type: TEXT
        text: Automated Task Management
        w: 411
        h: 24
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 20
        font: Jura Bold
      - node_id: "2300:5949"
        name: 60-70% of your recurring tasks, handled — a number McKinsey backs up
        type: TEXT
        text: 60-70% of your recurring tasks, handled — a number McKinsey backs up
        w: 411
        h: 48
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 20
        font: Jura Medium
      - node_id: "2300:6137"
        name: txt
        type: FRAME
        w: 606
        h: 262
        radius: 20
        padding: "58"
        gap: 20
        stroke: "#D8D8D8"
        stroke_ref: devider
        stroke_align: inside
        stroke_sides: all
        direction: column
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2300:5991"
        name: There's a system that changes this.
        type: TEXT
        text: "There's a system that changes this. "
        w: 447
        h: 24
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 20
        font: Jura Bold
      - node_id: "2300:5988"
        name: We call it the bottle — the operating system that channels the raw power of AI into something your business can actually use.
        type: TEXT
        text: We call it the bottle — the operating system that channels the raw power of AI into something your business can actually use.
        w: 395
        h: 96
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 20
        font: Jura Medium
      - node_id: "2300:5929"
        name: img
        type: FRAME
        w: 749
        h: 420
        fill: "#F9F9F9"
        radius: 50
        padding: "80"
        gap: 10
        justify: center
        align: center
        w_sizing: auto
        h_sizing: fixed
        clips: true
      - node_id: "2300:5932"
        name: AIOS
        type: TEXT
        text: AIOS
        w: 453
        h: 242
        fill: "#0E0E0E"
        font_size: 200
        font: Inter Regular
      - node_id: "2300:6135"
        name: line
        type: FRAME
        w: 576
        h: 44
        gap: 10
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "2300:5971"
        name: Frame 1707480396
        type: FRAME
        w: 150
        h: 41
        radius: 6
        padding: "10"
        gap: 10
        stroke: "#010101"
        stroke_ref: black
        stroke_align: inside
        stroke_sides: all
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "2300:5972"
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
      - node_id: "2300:5973"
        name: Frame 1707480397
        type: FRAME
        w: 153
        h: 41
        radius: 6
        padding: "10"
        gap: 10
        stroke: "#010101"
        stroke_ref: black
        stroke_align: inside
        stroke_sides: all
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "2300:5974"
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
      - node_id: "2300:5979"
        name: Frame 1707480395
        type: FRAME
        w: 253
        h: 44
        fill: "#FFFFFF"
        radius: 6
        padding: "10"
        gap: 10
        stroke: "#010101"
        stroke_ref: black
        stroke_align: inside
        stroke_sides: all
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "2300:5982"
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
      - node_id: "2300:5998"
        name: List
        type: FRAME
        w: 1760
        h: 515
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2300:6000"
        name: Component 10
        type: FRAME
        w: 440
        h: 515
        padding: "45"
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: all
        justify: center
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2300:6001"
        name: Container
        type: FRAME
        w: 400
        h: 425
        padding: "37.5"
        direction: column
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2300:6002"
        name: txt
        type: FRAME
        w: 356
        h: 350
        gap: 10
        direction: column
        justify: space-between
        w_sizing: fixed
        h_sizing: fixed
  - chunk_id: anatomy_4
    kind: anatomy
    item_count: 50
    items:
      - node_id: "2300:6003"
        name: Text
        type: TEXT
        text: The Morning Brief
        w: 356
        h: 28
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 22
        font: Jura Bold
        line_height: 28px
      - node_id: "2300:6065"
        name: txt
        type: FRAME
        w: 356
        h: 250
        gap: 20
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2300:6004"
        name: Text
        type: TEXT
        text: 74 calls analyzed overnight. One brief by 7am
        w: 356
        h: 46
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        font_size: 18
        font: Jura Bold
        line_height: 23px
      - node_id: "2300:6063"
        name: Text
        type: TEXT
        text: Because the system knows the business fully — team, revenue, priorities, every active project — it can synthesize 74 calls across multiple streams into one brief that actually makes sense. Complete with a SWOT review. The founder becomes the most informed person in the organization before breakfast.
        w: 356
        h: 184
        fill: "#636363"
        font_size: 18
        font: Jura Regular
        line_height: 23px
      - node_id: "2498:2200"
        name: Component 11
        type: FRAME
        w: 440
        h: 515
        padding: "45"
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-top: 1px, border-right: 1px, border-bottom: 1px"
        justify: center
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2498:2201"
        name: Container
        type: FRAME
        w: 400
        h: 425
        padding: "37.5"
        direction: column
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2498:2202"
        name: txt
        type: FRAME
        w: 356
        h: 350
        gap: 10
        direction: column
        justify: space-between
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2498:2203"
        name: Text
        type: TEXT
        text: Lead Pipeline — Built in One Week
        w: 356
        h: 56
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 22
        font: Jura Bold
        line_height: 28px
      - node_id: "2498:2204"
        name: txt
        type: FRAME
        w: 356
        h: 250
        gap: 20
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2498:2205"
        name: Text
        type: TEXT
        text: 15 hours a week on lead gen. Then zero.
        w: 356
        h: 46
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        font_size: 18
        font: Jura Bold
        line_height: 23px
      - node_id: "2498:2206"
        name: Text
        type: TEXT
        text: "A service business owner spending 15 hours a week on research, outreach, and follow-ups. With an AIOS, the entire flow is automated in one week: scoring, drafting, nurturing, and project handoff with full context intact. That bandwidth goes straight back into client delivery.
"
        w: 356
        h: 184
        fill: "#636363"
        font_size: 18
        font: Jura Regular
        line_height: 23px
      - node_id: "2498:2212"
        name: Component 12
        type: FRAME
        w: 440
        h: 515
        padding: "45"
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-top: 1px, border-right: 1px, border-bottom: 1px"
        justify: center
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2498:2213"
        name: Container
        type: FRAME
        w: 400
        h: 425
        padding: "37.5"
        direction: column
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2498:2214"
        name: txt
        type: FRAME
        w: 356
        h: 350
        gap: 10
        direction: column
        justify: space-between
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2498:2215"
        name: Text
        type: TEXT
        text: Landing Page From a Phone
        w: 356
        h: 28
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 22
        font: Jura Bold
        line_height: 28px
      - node_id: "2498:2216"
        name: txt
        type: FRAME
        w: 356
        h: 250
        gap: 20
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2498:2217"
        name: Text
        type: TEXT
        text: Voice note in. Live page out. Before he got home.
        w: 356
        h: 46
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        font_size: 18
        font: Jura Bold
        line_height: 23px
      - node_id: "2498:2218"
        name: Text
        type: TEXT
        text: "A founder needs a lead magnet page for a YouTube video. He opens Telegram from his car, explains what he needs via voice note. The system matches his site's design and copy, builds the page, and deploys it — all before he pulls into the driveway.
"
        w: 356
        h: 184
        fill: "#636363"
        font_size: 18
        font: Jura Regular
        line_height: 23px
      - node_id: "2498:2236"
        name: Component 13
        type: FRAME
        w: 440
        h: 515
        padding: "45"
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-top: 1px, border-right: 1px, border-bottom: 1px"
        justify: center
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2498:2237"
        name: Container
        type: FRAME
        w: 400
        h: 425
        padding: "37.5"
        direction: column
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2498:2238"
        name: txt
        type: FRAME
        w: 356
        h: 350
        gap: 10
        direction: column
        justify: space-between
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2498:2239"
        name: Text
        type: TEXT
        text: Content Pipeline
        w: 356
        h: 28
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 22
        font: Jura Bold
        line_height: 28px
      - node_id: "2498:2240"
        name: txt
        type: FRAME
        w: 356
        h: 250
        gap: 20
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2498:2241"
        name: Text
        type: TEXT
        text: Idea to publish-ready — from a voice note.
        w: 356
        h: 46
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        font_size: 18
        font: Jura Bold
        line_height: 23px
      - node_id: "2498:2242"
        name: Text
        type: TEXT
        text: "A founder captures a content idea via Telegram while walking. The system pulls the last 7 days of content context, aligns to brand positioning, and produces a LinkedIn post in his voice plus a 7-slide carousel — saved to the project folder, ready to publish
"
        w: 356
        h: 184
        fill: "#636363"
        font_size: 18
        font: Jura Regular
        line_height: 23px
      - node_id: "2498:2337"
        name: container
        type: FRAME
        w: 1760
        h: 115
      - node_id: "2300:6129"
        name: btn
        type: FRAME
        w: 440
        h: 55
        align: center
        w_sizing: fixed
        h_sizing: auto
        clips: true
      - node_id: "2300:6123"
        name: Component 1
        type: FRAME
        w: 385
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
      - node_id: "2300:6124"
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
      - node_id: "2300:6125"
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
      - node_id: "2498:2251"
        name: h
        type: FRAME
        w: 1760
        h: 230
        justify: space-between
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2300:6141"
        name: h
        type: FRAME
        w: 880
        h: 230
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        direction: column
        justify: center
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2300:6142"
        name: Heading 2
        type: FRAME
        w: 760
        h: 142
        direction: column
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2300:6143"
        name: "We measure three things for every client:"
        type: TEXT
        text: "We measure three things for every client:"
        w: 760
        h: 142
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 60
        font: Jura SemiBold
      - node_id: "2498:2248"
        name: container
        type: FRAME
        w: 880
        h: 230
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-top: 1px, border-right: 1px"
        direction: column
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2498:2252"
        name: block
        type: FRAME
        w: 1760
        h: 540
        gap: 5
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-bottom: 1px, border-left: 1px"
        justify: space-between
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2300:6247"
        name: animation
        type: INSTANCE
        instance_of: Property 1=Component 25
        w: 880
        h: 540
      - node_id: "2300:6201"
        name: info
        type: FRAME
        w: 880
        h: 540
        gap: -1
      - node_id: "2300:6196"
        name: container
        type: FRAME
        w: 880
        h: 181
        padding: "40"
        gap: 10
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: all
      - node_id: "2300:6156"
        name: Text
        type: TEXT
        text: Away-from-Desk Autonomy
        w: 740
        h: 28
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 24
        font: Jura Bold
        line_height: 28px
      - node_id: "2300:6157"
        name: Text
        type: TEXT
        text: Run your business from your phone. Full days without a laptop — nothing falls apart.
        w: 740
        h: 52
        fill: "#636363"
        font_size: 22
        font: Jura Regular
      - node_id: "2300:6197"
        name: container
        type: FRAME
        w: 880
        h: 181
        padding: "40"
        gap: 10
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: all
      - node_id: "2300:6199"
        name: Text
        type: TEXT
        text: Task Automation
        w: 740
        h: 28
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 24
        font: Jura Bold
        line_height: 28px
      - node_id: "2300:6200"
        name: Text
        type: TEXT
        text: 60-70% of recurring operational tasks, automated or heavily augmented
        w: 740
        h: 52
        fill: "#636363"
        font_size: 22
        font: Jura Regular
      - node_id: "2300:6202"
        name: container
        type: FRAME
        w: 880
        h: 181
        padding: "40"
        gap: 10
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: all
      - node_id: "2300:6204"
        name: Text
        type: TEXT
        text: Revenue per Person
        w: 740
        h: 28
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 24
        font: Jura Bold
        line_height: 28px
      - node_id: "2300:6205"
        name: Text
        type: TEXT
        text: More output, same team. The real advantage isn't headcount — it's what each person produces.
        w: 740
        h: 52
        fill: "#636363"
        font_size: 22
        font: Jura Regular
      - node_id: "2498:2254"
        name: block
        type: FRAME
        w: 1760
        h: 561
      - node_id: "2300:6263"
        name: container
        type: FRAME
        w: 880
        h: 280
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        gap: 30
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-right: 1px"
      - node_id: "2300:6265"
        name: 12-25x
        type: TEXT
        text: 12-25x
        w: 240
        h: 98
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 83
        font: Jura Regular
  - chunk_id: anatomy_5
    kind: anatomy
    item_count: 50
    items:
      - node_id: "2300:6266"
        name: time leverage
        type: TEXT
        text: time leverage
        w: 225
        h: 114
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 60
        font: Jura Regular
        line_height: 57px
      - node_id: "2300:6276"
        name: container
        type: FRAME
        w: 880
        h: 280
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        gap: 30
      - node_id: "2300:6277"
        name: 60-70%
        type: TEXT
        text: 60-70%
        w: 273
        h: 98
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 83
        font: Jura Regular
      - node_id: "2300:6278"
        name: tasks automated
        type: TEXT
        text: tasks automated
        w: 282
        h: 114
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 60
        font: Jura Regular
        line_height: 57px
      - node_id: "2300:6279"
        name: container
        type: FRAME
        w: 1760
        h: 280
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        gap: 30
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: all
      - node_id: "2300:6280"
        name: 50% → 90%
        type: TEXT
        text: 50% → 90%
        w: 427
        h: 98
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 83
        font: Jura Regular
      - node_id: "2300:6281"
        name: output quality with full business context
        type: TEXT
        text: output quality with full business context
        w: 1023
        h: 57
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 60
        font: Jura Regular
        line_height: 57px
      - node_id: "2498:2255"
        name: block
        type: FRAME
        w: 1760
        h: 230
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-right: 1px"
      - node_id: "2300:6286"
        name: txt
        type: FRAME
        w: 880
        h: 230
        padding: "77.5"
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: all
      - node_id: "2300:6288"
        name: These are methodology targets based on AIOS architecture — derived from time-per-task comparisons before and after AIOS deployment — and supported by industry research (McKinsey, 2023; Leng et al., 2…
        type: TEXT
        text: "These are methodology targets based on AIOS architecture — derived from time-per-task comparisons before and after AIOS deployment — and supported by industry research (McKinsey, 2023; Leng et al., 2024). "
        w: 742
        h: 72
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 20
        font: Jura Medium
      - node_id: "2498:2256"
        name: block
        type: FRAME
        w: 1760
        h: 230
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-left: 1px"
      - node_id: "2300:6296"
        name: txt
        type: FRAME
        w: 880
        h: 230
        fill: "#E6FF2B"
        fill_ref: ac1
        fill_ref_type: color_style
        padding: "77.5"
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: all
      - node_id: "2300:6298"
        name: You have two paths from here.
        type: TEXT
        text: You have two paths from here.
        w: 764
        h: 63
        fill: "#0E0E0E"
        font_size: 52
        font: Inter Regular
      - node_id: "2498:2257"
        name: block
        type: FRAME
        w: 1760
        h: 420
        gap: 4
      - node_id: "2300:6379"
        name: Background+Border
        type: FRAME
        w: 880
        h: 420
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: all
      - node_id: "2300:6380"
        name: Container
        type: FRAME
        w: 878
        h: 230
      - node_id: "2300:6381"
        name: Container
        type: FRAME
        w: 464
        h: 230
        padding: "32.5"
        gap: 29
      - node_id: "2325:3714"
        name: 666aa5b019fc170dd5ab9fa9_ico-container.svg
        type: FRAME
        w: 181
        h: 165
      - node_id: "2325:3715"
        name: Component 9
        type: FRAME
        w: 181
        h: 165
      - node_id: "2300:6389"
        name: Container
        type: FRAME
        w: 194
        h: 35
        gap: 7.5
      - node_id: "2300:6390"
        name: Heading 3
        type: FRAME
        w: 194
        h: 35
      - node_id: "2300:6391"
        name: "Do it alone:"
        type: TEXT
        text: "Do it alone:"
        w: 194
        h: 35
        fill: "#0E0E0E"
        font_size: 33
        font: Jura Bold
        line_height: 35px
      - node_id: "2300:6392"
        name: Container
        type: FRAME
        w: 878
        h: 188
        padding: "30"
      - node_id: "2300:6393"
        name: Container
        type: FRAME
        w: 848
        h: 158
      - node_id: "2300:6394"
        name: Evaluate 46,700 AI tools. Learn the architecture. Navigate context systems, API integrations, and automation layers yourself. Spend months iterating before anything runs. Maintain and evolve it as th…
        type: TEXT
        text: Evaluate 46,700 AI tools. Learn the architecture. Navigate context systems, API integrations, and automation layers yourself. Spend months iterating before anything runs. Maintain and evolve it as the landscape shifts underneath you.
        w: 818
        h: 112
        fill: "#0E0E0E"
        font_size: 22
        font: Jura Medium
        line_height: 28px
      - node_id: "2300:6356"
        name: Background+Border
        type: FRAME
        w: 880
        h: 420
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: all
      - node_id: "2300:6357"
        name: Container
        type: FRAME
        w: 878
        h: 230
      - node_id: "2300:6358"
        name: Container
        type: FRAME
        w: 564
        h: 230
        padding: "32.5"
        gap: 29
      - node_id: "2335:4045"
        name: Container
        type: INSTANCE
        instance_of: Property 1=Variant3
        w: 181
        h: 165
      - node_id: "I2335:4045;2335:3987"
        name: 666aa5b019fc170dd5ab9fa9_ico-container.svg
        type: FRAME
        w: 181
        h: 165
      - node_id: "I2335:4045;2335:3988"
        name: Component 9
        type: FRAME
        w: 181
        h: 165
      - node_id: "I2335:4045;2335:3991"
        name: 666aac9d63e28ae1e1034a96_Strategic-partnerships.svg
        type: FRAME
        w: 125
        h: 125
        position: absolute
        x: 1019
        y: 6592
        constraints: "h:min, v:scale"
      - node_id: "I2335:4045;2335:3992"
        name: Component 9
        type: FRAME
        w: 125
        h: 125
      - node_id: "2300:6366"
        name: Container
        type: FRAME
        w: 294
        h: 35
        gap: 7.5
      - node_id: "2300:6367"
        name: Heading 3
        type: FRAME
        w: 294
        h: 35
      - node_id: "2300:6368"
        name: "Do it with us:"
        type: TEXT
        text: "Do it with us:"
        w: 294
        h: 35
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 44
        font: Jura Bold
        line_height: 35px
      - node_id: "2300:6369"
        name: Container
        type: FRAME
        w: 878
        h: 188
        padding: "30"
      - node_id: "2300:6370"
        name: Container
        type: FRAME
        w: 736
        h: 158
      - node_id: "2300:6371"
        name: We build the full system around your business. Business context, dashboard intelligence, automated task management — configured for your operations. First working system live within weeks. Ongoing su…
        type: TEXT
        text: We build the full system around your business. Business context, dashboard intelligence, automated task management — configured for your operations. First working system live within weeks. Ongoing support as your business grows.
        w: 706
        h: 112
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 22
        font: Jura Medium
        line_height: 28px
      - node_id: "2335:4070"
        name: Component 16
        type: FRAME
        w: 113
        h: 158
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        stroke: "#004D43"
        stroke_ref: ac2
        stroke_align: inside
        stroke_sides: "border-top: 1px, border-left: 1px"
      - node_id: "2498:2335"
        name: devider
        type: FRAME
        w: 1760
        h: 110
        padding: "10"
        gap: 10
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-left: 1px"
      - node_id: "2325:3618"
        name: list
        type: FRAME
        w: 1760
        h: 520
        gap: -1
      - node_id: "I2325:3619;2325:3610"
        name: Get a personalized AI Blueprint before any commitment
        type: TEXT
        text: Get a personalized AI Blueprint before any commitment.
        w: 1276
        h: 35
        fill: "#0E0E0E"
        font_size: 44
        font: Jura Bold
        line_height: 35px
      - node_id: "I2325:3619;2526:1561"
        name: You see exactly what's possible for your business — free, before any engagement begins
        type: TEXT
        text: You see exactly what's possible for your business — free, before any engagement begins
        w: 1260
        h: 28
        fill: "#0E0E0E"
        font_size: 22
        font: Jura Medium
        line_height: 28px
      - node_id: "2498:2333"
        name: devider
        type: FRAME
        w: 1760
        h: 110
        padding: "10"
        gap: 10
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-left: 1px"
      - node_id: "2300:6494"
        name: banner
        type: FRAME
        w: 1760
        h: 490
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
      - node_id: "2325:3727"
        name: A business that serves you, not the other way around
        type: TEXT
        text: A business that serves you, not the other way around
        w: 744
        h: 28
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 30
        font: Jura Regular
        line_height: 28px
        opacity: 0.699999988079071
      - node_id: "2335:4146"
        name: btn
        type: FRAME
        w: 425
        h: 60
        fill: "#E6FF2B"
        fill_ref: ac1
        fill_ref_type: color_style
        padding: "15"
      - node_id: "2335:4147"
        name: Get Your Free AI Blueprint
        type: TEXT
        text: Get Your Free AI Blueprint
        w: 354
        h: 29
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 24
        font: Inter Regular
        text_align: center
      - node_id: "2325:3726"
        name: You fill it with the business you actually want to run
        type: TEXT
        text: You fill it with the business you actually want to run
        w: 840
        h: 130
        fill: "#E6FF2B"
        fill_ref: ac1
        fill_ref_type: color_style
        font_size: 55
        font: Jura Bold
  - chunk_id: anatomy_6
    kind: anatomy
    item_count: 50
    items:
      - node_id: "2325:3725"
        name: We build the bottle
        type: TEXT
        text: "We build the bottle "
        w: 1138
        h: 130
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 110
        font: Jura SemiBold
      - node_id: "2498:2329"
        name: devider
        type: FRAME
        w: 1760
        h: 110
        padding: "10"
        gap: 10
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-left: 1px"
      - node_id: "2498:2327"
        name: footer
        type: FRAME
        w: 1760
        h: 535
      - node_id: "2498:2258"
        name: line
        type: FRAME
        w: 1760
        h: 172
      - node_id: "2325:3777"
        name: container
        type: FRAME
        w: 440
        h: 172
        gap: 10
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: all
      - node_id: "2325:3733"
        name: Subtract
        type: BOOLEAN_OPERATION
        w: 60
        h: 60
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
      - node_id: "2325:3781"
        name: container
        type: FRAME
        w: 880
        h: 172
        fill: "#F9F9F9"
        padding: "40"
        gap: 10
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-top: 1px, border-right: 1px, border-bottom: 1px"
      - node_id: "2325:3772"
        name: Text
        type: TEXT
        text: Subscribe to be in touch
        w: 770
        h: 28
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 24
        font: Jura Bold
      - node_id: "2325:3774"
        name: input
        type: FRAME
        w: 770
        h: 44
        padding: "10"
        gap: 10
        stroke: "#D8D8D8"
        stroke_ref: devider
        stroke_align: inside
        stroke_sides: "border-bottom: 1px"
      - node_id: "2325:3773"
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
      - node_id: "2498:2259"
        name: container
        type: FRAME
        w: 440
        h: 172
        gap: 10
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-top: 1px, border-right: 1px, border-bottom: 1px"
      - node_id: "2498:2267"
        name: btn
        type: FRAME
        w: 335
        h: 60
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        padding: "15"
      - node_id: "2498:2268"
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
      - node_id: "2498:2270"
        name: line
        type: FRAME
        w: 1760
        h: 262
      - node_id: "2498:2271"
        name: container
        type: FRAME
        w: 440
        h: 262
        padding: "50"
        gap: 10
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-bottom: 1px, border-left: 1px"
      - node_id: "2498:2285"
        name: menu
        type: FRAME
        w: 180
        h: 162
        gap: 20
      - node_id: "2498:2286"
        name: Text
        type: TEXT
        text: Platform
        w: 180
        h: 28
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        font_size: 24
        font: Jura Bold
      - node_id: "2498:2287"
        name: list
        type: FRAME
        w: 180
        h: 114
        gap: 10
      - node_id: "2498:2288"
        name: Text
        type: TEXT
        text: Our Free AI Blueprint
        w: 180
        h: 21
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 18
        font: Jura Medium
      - node_id: "2498:2289"
        name: Text
        type: TEXT
        text: AIOS Solution
        w: 120
        h: 21
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 18
        font: Jura Medium
      - node_id: "2498:2290"
        name: Text
        type: TEXT
        text: How It Works
        w: 180
        h: 21
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 18
        font: Jura Medium
      - node_id: "2498:2291"
        name: Text
        type: TEXT
        text: Use Cases
        w: 180
        h: 21
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 18
        font: Jura Medium
      - node_id: "2498:2294"
        name: container
        type: FRAME
        w: 440
        h: 262
        padding: "50"
        gap: 10
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-bottom: 1px"
      - node_id: "2498:2295"
        name: menu
        type: FRAME
        w: 175
        h: 131
        gap: 20
      - node_id: "2498:2296"
        name: Text
        type: TEXT
        text: COMPARISONS
        w: 175
        h: 28
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        font_size: 24
        font: Jura Bold
      - node_id: "2498:2297"
        name: list
        type: FRAME
        w: 175
        h: 83
        gap: 10
      - node_id: "2498:2298"
        name: Text
        type: TEXT
        text: AIOS vs. chat GPT
        w: 152
        h: 21
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 18
        font: Jura Medium
      - node_id: "2498:2299"
        name: Text
        type: TEXT
        text: AIOS vs. Zapier
        w: 132
        h: 21
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 18
        font: Jura Medium
      - node_id: "2498:2300"
        name: Text
        type: TEXT
        text: AIOS vs. DIY
        w: 175
        h: 21
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 18
        font: Jura Medium
      - node_id: "2498:2303"
        name: container
        type: FRAME
        w: 440
        h: 262
        padding: "50"
        gap: 10
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-bottom: 1px"
      - node_id: "2498:2304"
        name: menu
        type: FRAME
        w: 155
        h: 162
        gap: 20
      - node_id: "2498:2305"
        name: Text
        type: TEXT
        text: RESOURCES
        w: 155
        h: 28
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        font_size: 24
        font: Jura Bold
      - node_id: "2498:2306"
        name: list
        type: FRAME
        w: 155
        h: 114
        gap: 10
      - node_id: "2498:2307"
        name: Text
        type: TEXT
        text: Problem
        w: 72
        h: 21
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 18
        font: Jura Medium
      - node_id: "2498:2308"
        name: Text
        type: TEXT
        text: About Philosophy
        w: 155
        h: 21
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 18
        font: Jura Medium
      - node_id: "2498:2309"
        name: Text
        type: TEXT
        text: Glossary
        w: 155
        h: 21
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 18
        font: Jura Medium
      - node_id: "2498:2310"
        name: Text
        type: TEXT
        text: FAQ
        w: 155
        h: 21
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 18
        font: Jura Medium
      - node_id: "2498:2312"
        name: container
        type: FRAME
        w: 440
        h: 262
        padding: "50"
        gap: 10
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-bottom: 1px"
      - node_id: "2498:2313"
        name: menu
        type: FRAME
        w: 145
        h: 162
        gap: 20
      - node_id: "2498:2314"
        name: Text
        type: TEXT
        text: INDUSTRIES
        w: 145
        h: 28
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        font_size: 24
        font: Jura Bold
      - node_id: "2498:2315"
        name: list
        type: FRAME
        w: 145
        h: 114
        gap: 10
      - node_id: "2498:2316"
        name: Text
        type: TEXT
        text: Agencies
        w: 82
        h: 21
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 18
        font: Jura Medium
      - node_id: "2498:2317"
        name: Text
        type: TEXT
        text: SaaS
        w: 47
        h: 21
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 18
        font: Jura Medium
      - node_id: "2498:2318"
        name: Text
        type: TEXT
        text: Ecommerce
        w: 145
        h: 21
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 18
        font: Jura Medium
      - node_id: "2498:2319"
        name: Text
        type: TEXT
        text: Coaching
        w: 145
        h: 21
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 18
        font: Jura Medium
      - node_id: "2498:2326"
        name: line
        type: FRAME
        w: 1760
        h: 101
        padding: "40"
        gap: 932
        stroke: "#9E9E9E"
        stroke_ref: gray2
        stroke_align: inside
        stroke_sides: "border-right: 1px, border-bottom: 1px, border-left: 1px"
      - node_id: "2498:2322"
        name: Frame 1707480464
        type: FRAME
        w: 295
        h: 21
        gap: 11
      - node_id: "2498:2323"
        name: Text
        type: TEXT
        text: Privacy Policy
        w: 122
        h: 21
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 18
        font: Jura Medium
      - node_id: "2498:2324"
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
      - node_id: "2498:2325"
        name: Text
        type: TEXT
        text: Terms of Service
        w: 146
        h: 21
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 18
        font: Jura Medium
  - chunk_id: anatomy_7
    kind: anatomy
    item_count: 31
    items:
      - node_id: "2498:2321"
        name: Text
        type: TEXT
        text: © 2026 All Rights Reserved by Automation Architecture AI
        w: 432
        h: 19
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        font_size: 16
        font: Jura Regular
      - node_id: "2498:2091"
        name: header
        type: FRAME
        w: 1920
        h: 100
        gap: -1
      - node_id: "2498:2092"
        name: vector
        type: FRAME
        w: 30
        h: 100
      - node_id: "I2498:2093;1:4505"
        name: Vector
        type: VECTOR
        w: 30
        h: 100
        fill: "#000000"
      - node_id: "2498:2094"
        name: Background
        type: FRAME
        w: 30
        h: 101
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
      - node_id: "2498:2098"
        name: menu
        type: FRAME
        w: 1862
        h: 100
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        stroke: "#898A8D"
        stroke_ref: gray
        stroke_align: inside
        stroke_sides: "border-bottom: 1px"
      - node_id: "2498:2099"
        name: Container
        type: FRAME
        w: 1795
        h: 50
      - node_id: "2498:2101"
        name: Container
        type: FRAME
        w: 254
        h: 49
      - node_id: "2498:2105"
        name: Subtract
        type: BOOLEAN_OPERATION
        w: 49
        h: 49
        fill: "#E6FF2B"
      - node_id: "2498:2108"
        name: Navigation
        type: FRAME
        w: 885
        h: 40
      - node_id: "2498:2109"
        name: List
        type: FRAME
        w: 703
        h: 41
        gap: 25
      - node_id: "I2498:2110;2393:1693"
        name: Container
        type: FRAME
        w: 118
        h: 41
        padding: "9.5"
      - node_id: "I2498:2110;2393:1694"
        name: Text
        type: TEXT
        text: Philosophy
        w: 98
        h: 21
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 18
        font: Jura Medium
      - node_id: "2498:2116"
        name: Margin
        type: FRAME
        w: 412
        h: 50
      - node_id: "2498:2117"
        name: Container
        type: FRAME
        w: 412
        h: 50
        gap: 80
      - node_id: "2498:2118"
        name: Button menu
        type: FRAME
        w: 170
        h: 21
      - node_id: "2498:2124"
        name: Container
        type: FRAME
        w: 133
        h: 21
      - node_id: "2498:2125"
        name: Our AI Blueprint
        type: TEXT
        text: Our AI Blueprint
        w: 133
        h: 21
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 18
        font: Jura Regular
      - node_id: "2498:2126"
        name: Link
        type: FRAME
        w: 162
        h: 50
        fill: "#E6FF2B"
        fill_ref: ac1
        fill_ref_type: color_style
        radius: 10
        padding: "15"
      - node_id: "2498:2127"
        name: Apply now
        type: TEXT
        text: Apply now
        w: 102
        h: 20
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 18
        font: Jura Bold
        line_height: 19.95px
        text_align: center
      - node_id: "2498:2128"
        name: Vertical Divider
        type: RECTANGLE
        w: 1
        h: 100
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        position: absolute
        x: 519
        y: 0
        constraints: "h:min, v:stretch"
      - node_id: "2498:2129"
        name: Vertical Divider
        type: RECTANGLE
        w: 1
        h: 100
        fill: "#898A8D"
        fill_ref: gray
        fill_ref_type: color_style
        position: absolute
        x: 1402
        y: 0
        constraints: "h:scale, v:stretch"
      - node_id: "2498:2130"
        name: vector
        type: FRAME
        w: 30
        h: 100
      - node_id: "2498:2132"
        name: Background
        type: FRAME
        w: 30
        h: 101
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
      - node_id: "I2266:4945;2521:1524"
        name: Frame 1707480488
        type: FRAME
        w: 298
        h: 144
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
      - node_id: "I2266:4945;2521:1529"
        name: "lets-icons:img-fill"
        type: FRAME
        w: 75
        h: 75
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "I2300:5398;2300:5289"
        name: "Object [Vectorized]"
        type: FRAME
        w: 73
        h: 105
        direction: column
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "I2300:5398;2300:5303"
        name: "Object [Vectorized]"
        type: FRAME
        w: 73
        h: 105
        direction: column
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "I2300:5398;2300:5317"
        name: "Object [Vectorized]"
        type: FRAME
        w: 73
        h: 105
        direction: column
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "I2300:5398;2300:5277"
        name: "Object [Vectorized]"
        type: FRAME
        w: 73
        h: 105
        direction: column
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "2498:2197"
        name: cintainer
        type: FRAME
        w: 880
        h: 660
        direction: column
        justify: flex-end
        align: center
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
  - chunk_id: repeats_1
    kind: repeats
    template_node_id: "I2029:5881;1:6311"
    instance_of: "variant=33,:hover=false"
    repeat_count: 1
    template_attributes:
      w: 18
      h: 18
      fill: "#000000"
      direction: column
      justify: center
      align: center
      w_sizing: fixed
      h_sizing: fixed
      clips: true
    varying_keys:
      - Component 9/Component 2/Clip path group/Group/width
      - Component 9/Component 2/variant
      - Component 9/variant
    items:
      - node_id: "I2029:5883;1:6317"
        diffs:
          [3, "35", 2, "9", 1, "18"]
  - chunk_id: repeats_2
    kind: repeats
    template_node_id: "2325:3619"
    instance_of: Property 1=Default
    repeat_count: 2
    template_attributes:
      children_text:
        - Get a personalized AI Blueprint before any commitment.
        - You see exactly what's possible for your business — free, before any engagement begins
      w: 1760
      h: 174
      padding: "40"
      gap: 31
      stroke: "#9E9E9E"
      stroke_align: inside
      stroke_sides: all
    varying_keys:
      - 2/Get a personalized AI Blueprint before any commitment/text
      - 2/Get a personalized AI Blueprint before any commitment/width
      - 3/Get a personalized AI Blueprint before any commitment/text
      - 3/Get a personalized AI Blueprint before any commitment/width
    items:
      - node_id: "2325:3623"
        diffs:
          [0, You'll never be stuck alone., 1, "1260"]
      - node_id: "2325:3627"
        diffs:
          [2, You don't need to be technical., 3, "1260"]
  - chunk_id: repeats_3
    kind: repeats
    template_node_id: "2498:2093"
    instance_of: "variant=25,:hover=false"
    repeat_count: 3
    template_attributes:
      w: 30
      h: 100
    varying_keys:
      [Component 1/variant, Component 1/width]
    items:
      - node_id: "2498:2096"
        diffs:
          [1, "26", 2, "31"]
      - node_id: "2498:2131"
        diffs:
          []
      - node_id: "2498:2134"
        diffs:
          [1, "26", 2, "31"]
  - chunk_id: repeats_4
    kind: repeats
    template_node_id: "2498:2110"
    instance_of: stay=default
    repeat_count: 5
    template_attributes:
      children_text:
        [Philosophy]
      w: 118
      h: 41
    varying_keys:
      [link/Container/Text/text, link/Container/Text/width, link/width]
    items:
      - node_id: "2498:2111"
        diffs:
          [0, How It Works, 3, "130", 1, "110"]
      - node_id: "2498:2112"
        diffs:
          [0, Industries, 3, "109", 1, "89"]
      - node_id: "2498:2113"
        diffs:
          [0, Solution, 3, "94", 1, "74"]
      - node_id: "2498:2114"
        diffs:
          [0, Cases, 3, "75", 1, "55"]
      - node_id: "2498:2115"
        diffs:
          [0, FAQ, 3, "52", 1, "32"]
```

<!-- chars: 106574 | ~tokens: 22178 -->