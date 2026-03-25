## Figma Component: dev-burger

### Figma URL
[Paste Figma frame URL here]

### Implementation Instructions
1. Use get_screenshot on the Figma URL above and **save it to `.figma/dev-burger.png`** (relative to working directory). Reference this local file whenever you need to check the design — do not call get_screenshot again.
2. Read the anatomy tree below to understand the component structure.
3. Read the YAML specs — it has every layer, color, font, spacing, and token value you need.
4. Check the project's working directory or `package.json` for the icon library in use (e.g. Phosphor, Lucide, Heroicons). Use matching icons from that library based on the `instance_of` names in the anatomy (e.g. `instance_of: ForkKnife` → use ForkKnife from the detected library).
5. Check the project's `package.json` to detect the framework in use, then build the component accordingly.
6. Build the component exactly as specified. Match the structure, styles (fills, strokes, fonts), and layout (direction, gap, padding).
7. Use resolved_tokens to map token names to actual values (e.g. hex colors, font names).
8. Keep it minimal — only implement what the specs describe, nothing more.
9. **Visual QA** — render your component at 375×445px (1x scale, no device emulation). Take a screenshot and compare with `.figma/dev-burger.png`. Verify:
   - Layout structure matches (correct direction, nesting, alignment)
   - Spacing is correct (gap, padding values from specs)
   - Colors match fills/strokes in the spec (within #±02 per channel)
   - Font sizes, weights, and families match
   - Border radius values match
   - Text content is complete (no unintended truncation)
   Fix any differences and re-compare until all checks pass.

### Component Anatomy
```
- dev-burger (FRAME)
- header (FRAME)
- header (FRAME)
- Rectangle 161123983 (VECTOR)
- Rectangle 161123984 (RECTANGLE)
- Rectangle 161123985 (VECTOR)
- menu (FRAME)
- Rectangle 161123986 (RECTANGLE)
- Rectangle 161123987 (RECTANGLE)
- Link (FRAME)
- Apply now (TEXT) — "Apply now"
- logo (FRAME)
- Subtract (VECTOR)
- automation architecture AI (VECTOR)
- menu (FRAME)
- List (FRAME)
- Button menu (FRAME)
- Container (FRAME)
- Our AI Blueprint (TEXT) — "Our AI Blueprint"
- Container (FRAME)
- Text (TEXT) — "Philosophy"
- Container (FRAME)
- Text (TEXT) — "How It Works"
- Container (FRAME)
- Text (TEXT) — "Industries"
- Container (FRAME)
- Text (TEXT) — "Solution"
- Container (FRAME)
- Text (TEXT) — "Cases"
- Container (FRAME)
- Text (TEXT) — "FAQ"
- header (FRAME)
- Rectangle 161123983 (VECTOR)
- Rectangle 161123984 (RECTANGLE)
- Rectangle 161123985 (VECTOR)
- vector (FRAME)
```

### Specs Data (YAML)
```yaml
schema: specs-plugin.agent_pack.v14.yaml.compact
generated_at: "2026-03-21T08:58:07.331Z"
selection:
  node_id: "2526:3672"
  name: dev-burger
  type: FRAME
defaults_omitted:
  justify: flex-start
  align: flex-start
  direction: row
summary:
  anatomy_nodes_total: 36
  property_groups_total: 0
  property_variants_total: 0
  variable_refs_total: 0
  instance_templates: 0
  deduplicated_instances: 0
  chunks_total: 1
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
    anatomy_included: 36
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
  black: "#010101"
  ac1: "#E6FF2B"
  white: "#FFFFFF"
chunks:
  - chunk_id: anatomy_1
    kind: anatomy
    item_count: 36
    items:
      - node_id: "2526:3672"
        name: dev-burger
        type: FRAME
        w: 375
        h: 445
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2526:3654"
        name: header
        type: FRAME
        w: 375
        h: 70
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        direction: column
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
      - node_id: "2526:3655"
        name: header
        type: FRAME
        w: 375
        h: 70
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2526:3656"
        name: Rectangle 161123983
        type: VECTOR
        w: 20
        h: 70
        fill: "#010101"
      - node_id: "2526:3657"
        name: Rectangle 161123984
        type: RECTANGLE
        w: 335
        h: 70
        fill: "#010101"
      - node_id: "2526:3658"
        name: Rectangle 161123985
        type: VECTOR
        w: 20
        h: 70
        fill: "#010101"
      - node_id: "2526:3659"
        name: menu
        type: FRAME
        w: 24
        h: 24
        gap: 3
        position: absolute
        x: 325
        y: 23
        constraints: "h:min, v:min"
        direction: column
        w_sizing: auto
        h_sizing: auto
      - node_id: "2526:3660"
        name: Rectangle 161123986
        type: RECTANGLE
        w: 24
        h: 24
        fill: "#E6FF2B"
        fill_ref: ac1
        fill_ref_type: color_style
        radius: 10
      - node_id: "2526:3670"
        name: Rectangle 161123987
        type: RECTANGLE
        w: 24
        h: 24
        fill: "#E6FF2B"
        fill_ref: ac1
        fill_ref_type: color_style
        radius: 10
        position: absolute
        x: 325
        y: 23
        constraints: "h:min, v:min"
      - node_id: "2526:3665"
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
        direction: column
        w_sizing: auto
        h_sizing: auto
      - node_id: "2526:3666"
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
      - node_id: "2526:3667"
        name: logo
        type: FRAME
        w: 137
        h: 29
        justify: space-between
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
      - node_id: "2526:3668"
        name: Subtract
        type: VECTOR
        w: 29
        h: 29
        fill: "#E6FF2B"
      - node_id: "2526:3669"
        name: automation architecture AI
        type: VECTOR
        w: 102
        h: 22
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
      - node_id: "2520:4332"
        name: menu
        type: FRAME
        w: 375
        h: 375
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2392:1626"
        name: List
        type: FRAME
        w: 375
        h: 345
        fill: "#010101"
        padding: "30"
        direction: column
        justify: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2520:4333"
        name: Button menu
        type: FRAME
        w: 183
        h: 41
        fill: "#E6FF2B"
        fill_ref: ac1
        fill_ref_type: color_style
        radius: 5
        padding: "10"
        gap: 10
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "2520:4339"
        name: Container
        type: FRAME
        w: 133
        h: 21
        direction: column
        w_sizing: auto
        h_sizing: auto
      - node_id: "2520:4340"
        name: Our AI Blueprint
        type: TEXT
        text: Our AI Blueprint
        w: 133
        h: 21
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        font_size: 18
        font: Jura Regular
      - node_id: "2392:1658"
        name: Container
        type: FRAME
        w: 118
        h: 41
        padding: "10"
        direction: column
        w_sizing: auto
        h_sizing: auto
      - node_id: "2392:1659"
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
      - node_id: "2392:1663"
        name: Container
        type: FRAME
        w: 130
        h: 41
        padding: "9.5"
        direction: column
        w_sizing: auto
        h_sizing: auto
      - node_id: "2392:1664"
        name: Text
        type: TEXT
        text: How It Works
        w: 110
        h: 21
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 18
        font: Jura Medium
      - node_id: "2392:1668"
        name: Container
        type: FRAME
        w: 109
        h: 41
        padding: "9.5"
        direction: column
        w_sizing: auto
        h_sizing: auto
      - node_id: "2392:1669"
        name: Text
        type: TEXT
        text: Industries
        w: 89
        h: 21
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 18
        font: Jura Medium
      - node_id: "2392:1673"
        name: Container
        type: FRAME
        w: 94
        h: 41
        padding: "9.5"
        direction: column
        w_sizing: auto
        h_sizing: auto
      - node_id: "2392:1674"
        name: Text
        type: TEXT
        text: Solution
        w: 74
        h: 21
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 18
        font: Jura Medium
      - node_id: "2392:1678"
        name: Container
        type: FRAME
        w: 75
        h: 41
        padding: "9.5"
        direction: column
        w_sizing: auto
        h_sizing: auto
      - node_id: "2392:1679"
        name: Text
        type: TEXT
        text: Cases
        w: 55
        h: 21
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 18
        font: Jura Medium
      - node_id: "2392:1683"
        name: Container
        type: FRAME
        w: 52
        h: 41
        padding: "9.5"
        direction: column
        w_sizing: auto
        h_sizing: auto
      - node_id: "2392:1684"
        name: Text
        type: TEXT
        text: FAQ
        w: 32
        h: 21
        fill: "#FFFFFF"
        fill_ref: white
        fill_ref_type: color_style
        font_size: 18
        font: Jura Medium
      - node_id: "2520:4327"
        name: header
        type: FRAME
        w: 375
        h: 30
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2520:4328"
        name: Rectangle 161123983
        type: VECTOR
        w: 20
        h: 30
        fill: "#010101"
      - node_id: "2520:4329"
        name: Rectangle 161123984
        type: RECTANGLE
        w: 335
        h: 30
        fill: "#010101"
      - node_id: "2520:4330"
        name: Rectangle 161123985
        type: VECTOR
        w: 20
        h: 30
        fill: "#010101"
      - node_id: "2520:4334"
        name: vector
        type: FRAME
        w: 20
        h: 20
        justify: center
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
```

<!-- chars: 11456 | ~tokens: 2441 -->