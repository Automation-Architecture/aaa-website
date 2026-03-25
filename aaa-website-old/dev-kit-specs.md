## Figma Component: dev-kit

### Figma URL
[Paste Figma frame URL here]

### Implementation Instructions
1. Use get_screenshot on the Figma URL above and **save it to `.figma/dev-kit.png`** (relative to working directory). Reference this local file whenever you need to check the design — do not call get_screenshot again.
2. Read the anatomy tree below to understand the component structure.
3. Read the YAML specs — it has every layer, color, font, spacing, and token value you need.
4. Check the project's working directory or `package.json` for the icon library in use (e.g. Phosphor, Lucide, Heroicons). Use matching icons from that library based on the `instance_of` names in the anatomy (e.g. `instance_of: ForkKnife` → use ForkKnife from the detected library).
5. Check the project's `package.json` to detect the framework in use, then build the component accordingly.
6. Build the component exactly as specified. Match the structure, styles (fills, strokes, fonts), and layout (direction, gap, padding).
7. Use resolved_tokens to map token names to actual values (e.g. hex colors, font names).
8. Keep it minimal — only implement what the specs describe, nothing more.
9. **Visual QA** — render your component at 2218×9158px (1x scale, no device emulation). Take a screenshot and compare with `.figma/dev-kit.png`. Verify:
   - Layout structure matches (correct direction, nesting, alignment)
   - Spacing is correct (gap, padding values from specs)
   - Colors match fills/strokes in the spec (within #±02 per channel)
   - Font sizes, weights, and families match
   - Border radius values match
   - Text content is complete (no unintended truncation)
   Fix any differences and re-compare until all checks pass.

### Component Anatomy
```
- dev-kit (FRAME)
- Property 1=Component 25 (COMPONENT)
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
- Property 1=Component 26 (COMPONENT)
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
- btn (FRAME)
- Apply now (TEXT) — "Apply now"
- btn (FRAME)
- Apply now (TEXT) — "Apply now"
- btn (FRAME)
- Component 1 (FRAME)
- Read more (TEXT) — "Read more"
- Component 3 (FRAME)
- Vector (VECTOR)
- btn (FRAME)
- Component 1 (FRAME)
- Read more (TEXT) — "Read more"
- Component 3 (FRAME)
- Vector (VECTOR)
- btn (FRAME)
- See How It Works (TEXT) — "See How It Works"
- btn (FRAME)
- See How It Works (TEXT) — "See How It Works"
- btn (FRAME)
- GET FREE (TEXT) — "GET FREE"
- btn (FRAME)
- GET FREE (TEXT) — "GET FREE"
- Frame 1707480496 (FRAME)
- default (TEXT) — "default"
- Frame 1707480499 (FRAME)
- default (TEXT) — "default"
- Frame 1707480502 (FRAME)
- Desktop (TEXT) — "Desktop"
- Frame 1707480503 (FRAME)
- mobile (TEXT) — "mobile"
- Frame 1707480497 (FRAME)
- Hover (TEXT) — "Hover"
- Frame 1707480500 (FRAME)
- Hover (TEXT) — "Hover"
- Frame 1707480494 (FRAME)
- Font (TEXT) — "Font"
- Frame 1707480495 (FRAME)
- Buttons (TEXT) — "Buttons"
- Frame 1707480498 (FRAME)
- Cards (TEXT) — "Cards"
- Frame 1707480501 (FRAME)
- animation (TEXT) — "animation"
- Jura - (TEXT) — "Jura -"
- Link (TEXT) — "Link"
- stay=default (COMPONENT)
- Container (FRAME)
- Text (TEXT) — "Philosophy"
- Border (RECTANGLE)
- Border (RECTANGLE)
- stay=hover (COMPONENT)
- Container (FRAME)
- Text (TEXT) — "Philosophy"
- Border (RECTANGLE)
- Border (RECTANGLE)
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
- Text (TEXT) — "The Morning Brief"
- txt (FRAME)
- Text (TEXT) — "74 calls analyzed overnight. One brief …"
- Text (TEXT) — "Because the system knows the business f…"
- Border (RECTANGLE)
- Border (RECTANGLE)
- Border (RECTANGLE)
- Border (RECTANGLE)
- Property 1=Default (COMPONENT)
- Frame 1707480417 (FRAME)
- Union (VECTOR)
- Rectangle 161123972 (RECTANGLE)
- Rectangle 161123973 (RECTANGLE)
- Rectangle 161123974 (RECTANGLE)
- Group 1707480390 (GROUP)
- fluent:scan-table-20-regular (FRAME)
- Group 1707480392 (GROUP)
- fluent:scan-table-20-regular (FRAME)
- Group 1707480391 (GROUP)
- fluent:scan-table-20-regular (FRAME)
- Group 1707480394 (GROUP)
- fluent:scan-table-20-regular (FRAME)
- Property 1=Variant2 (COMPONENT)
- Frame 1707480417 (FRAME)
- Union (VECTOR)
- Rectangle 161123972 (RECTANGLE)
- Rectangle 161123973 (RECTANGLE)
- Rectangle 161123974 (RECTANGLE)
- Group 1707480391 (GROUP)
- fluent:scan-table-20-regular (FRAME)
- Group 1707480390 (GROUP)
- fluent:scan-table-20-regular (FRAME)
- Group 1707480392 (GROUP)
- fluent:scan-table-20-regular (FRAME)
- Group 1707480394 (GROUP)
- fluent:scan-table-20-regular (FRAME)
- Property 1=Variant3 (COMPONENT)
- Frame 1707480417 (FRAME)
- Union (VECTOR)
- Rectangle 161123972 (RECTANGLE)
- Rectangle 161123973 (RECTANGLE)
- Rectangle 161123974 (RECTANGLE)
- Group 1707480391 (GROUP)
- fluent:scan-table-20-regular (FRAME)
- Group 1707480390 (GROUP)
- fluent:scan-table-20-regular (FRAME)
- Group 1707480392 (GROUP)
- fluent:scan-table-20-regular (FRAME)
- Group 1707480394 (GROUP)
- fluent:scan-table-20-regular (FRAME)
- Property 1=Default (COMPONENT)
- Group 1707480381 (GROUP)
- Rectangle 161123951 (RECTANGLE)
- Frame 1707480409 (FRAME)
- Frame 1707480411 (FRAME)
- Frame 1707480408 (FRAME)
- Frame 1707480410 (FRAME)
- Frame 1707480476 (FRAME)
- Rectangle 161123946 (VECTOR)
- image 2444 (RECTANGLE)
- Group 105040 (GROUP)
- Rectangle 161123967 (RECTANGLE)
- Subtract (BOOLEAN_OPERATION)
- Property 1=Variant2 (COMPONENT)
- Rectangle 161123946 (VECTOR)
- Group 1707480382 (GROUP)
- Rectangle 161123951 (RECTANGLE)
- Frame 1707480411 (FRAME)
- Frame 1707480408 (FRAME)
- Frame 1707480410 (FRAME)
- image 2444 (RECTANGLE)
- Group 105040 (GROUP)
- Rectangle 161123967 (RECTANGLE)
- Subtract (BOOLEAN_OPERATION)
- Property 1=Variant3 (COMPONENT)
- Group 1707480383 (GROUP)
- Rectangle 161123951 (RECTANGLE)
- Frame 1707480411 (FRAME)
- Frame 1707480408 (FRAME)
- Frame 1707480410 (FRAME)
- Frame 1707480412 (FRAME)
- Frame 1707480492 (FRAME)
- Frame 1707480413 (FRAME)
- Frame 1707480492 (FRAME)
- Frame 1707480414 (FRAME)
- Frame 1707480492 (FRAME)
- Rectangle 161123946 (VECTOR)
- image 2444 (RECTANGLE)
- Group 105040 (GROUP)
- Rectangle 161123967 (RECTANGLE)
- Subtract (BOOLEAN_OPERATION)
- Property 1=Variant4 (COMPONENT)
- Group 1707480384 (GROUP)
- Rectangle 161123951 (RECTANGLE)
- Frame 1707480412 (FRAME)
- Frame 1707480415 (FRAME)
- Rectangle 161123946 (VECTOR)
- image 2444 (RECTANGLE)
- Group 105040 (GROUP)
- Rectangle 161123967 (RECTANGLE)
- Subtract (BOOLEAN_OPERATION)
- Property 1=Component 25 (COMPONENT)
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
- Property 1=Component 26 (COMPONENT)
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
- Property 1=Variant3 (COMPONENT)
- 666aa5b019fc170dd5ab9fa9_ico-container.svg (FRAME)
- Component 9 (FRAME)
- 666aac9d63e28ae1e1034a96_Strategic-partnerships.svg (FRAME)
- Component 9 (FRAME)
- Property 1=Variant2 (COMPONENT)
- 666aa5b019fc170dd5ab9fa9_ico-container.svg (FRAME)
- Component 9 (FRAME)
- 666aac9d63e28ae1e1034a96_Strategic-partnerships.svg (FRAME)
- Component 9 (FRAME)
- Group 1707480408 (GROUP)
- Property 1=Default (COMPONENT)
- Get a personalized AI Blueprint before any commitment (TEXT) — "Get a personalized AI Blueprint before …"
- You see exactly what's possible for your business — free, before any engagement begins (TEXT) — "You see exactly what's possible for you…"
- Line 375 (LINE)
- Rectangle 161123982 (RECTANGLE)
- Property 1=Variant2 (COMPONENT)
- Get a personalized AI Blueprint before any commitment (TEXT) — "Get a personalized AI Blueprint before …"
- You see exactly what's possible for your business — free, before any engagement begins (TEXT) — "You see exactly what's possible for you…"
- Default (TEXT) — "Default"
- Hover (TEXT) — "Hover"
- Property 1=Default (COMPONENT)
- txt (FRAME)
- Three layers working together (TEXT) — "Three layers working together"
- Context makes the intelligence useful (TEXT) — "Context makes the intelligence useful"
- Intelligence makes the automation smart (TEXT) — "Intelligence makes the automation smart"
- Property 1=Variant2 (COMPONENT)
- txt (FRAME)
- Three layers working together (TEXT) — "Three layers working together"
- Context makes the intelligence useful (TEXT) — "Context makes the intelligence useful"
- Intelligence makes the automation smart (TEXT) — "Intelligence makes the automation smart"
- Property 1=Variant8 (COMPONENT)
- Rectangle 161123946 (VECTOR)
- Group 1707480407 (GROUP)
- image 2465 (RECTANGLE)
- image 2444 (RECTANGLE)
- Subtract (BOOLEAN_OPERATION)
- Property 1=Variant2 (COMPONENT)
- Rectangle 161123946 (VECTOR)
- Group 1707480407 (GROUP)
- image 2465 (RECTANGLE)
- image 2444 (RECTANGLE)
- Subtract (BOOLEAN_OPERATION)
- Property 1=Variant3 (COMPONENT)
- Rectangle 161123946 (VECTOR)
- Group 1707480407 (GROUP)
- image 2465 (RECTANGLE)
- image 2444 (RECTANGLE)
- Subtract (BOOLEAN_OPERATION)
- Property 1=Variant4 (COMPONENT)
- Rectangle 161123946 (VECTOR)
- Group 1707480407 (GROUP)
- image 2465 (RECTANGLE)
- image 2444 (RECTANGLE)
- Subtract (BOOLEAN_OPERATION)
- Property 1=Variant3 (COMPONENT)
- 666aa5b019fc170dd5ab9fa9_ico-container.svg (FRAME)
- Component 9 (FRAME)
- 666aac9d63e28ae1e1034a96_Strategic-partnerships.svg (FRAME)
- Component 9 (FRAME)
- Property 1=Variant2 (COMPONENT)
- 666aa5b019fc170dd5ab9fa9_ico-container.svg (FRAME)
- Component 9 (FRAME)
- 666aac9d63e28ae1e1034a96_Strategic-partnerships.svg (FRAME)
- Component 9 (FRAME)
- Property 1=Default (COMPONENT)
- Frame 1707480417 (FRAME)
- Union (VECTOR)
- Rectangle 161123972 (RECTANGLE)
- Rectangle 161123973 (RECTANGLE)
- Rectangle 161123974 (RECTANGLE)
- Group 1707480390 (GROUP)
- fluent:scan-table-20-regular (FRAME)
- Group 1707480392 (GROUP)
- fluent:scan-table-20-regular (FRAME)
- Group 1707480391 (GROUP)
- fluent:scan-table-20-regular (FRAME)
- Group 1707480394 (GROUP)
- fluent:scan-table-20-regular (FRAME)
- Property 1=Variant2 (COMPONENT)
- Frame 1707480417 (FRAME)
- Union (VECTOR)
- Rectangle 161123972 (RECTANGLE)
- Rectangle 161123973 (RECTANGLE)
- Rectangle 161123974 (RECTANGLE)
- Group 1707480391 (GROUP)
- fluent:scan-table-20-regular (FRAME)
- Group 1707480390 (GROUP)
- fluent:scan-table-20-regular (FRAME)
- Group 1707480392 (GROUP)
- fluent:scan-table-20-regular (FRAME)
- Group 1707480394 (GROUP)
- fluent:scan-table-20-regular (FRAME)
- Property 1=Variant3 (COMPONENT)
- Frame 1707480417 (FRAME)
- Union (VECTOR)
- Rectangle 161123972 (RECTANGLE)
- Rectangle 161123973 (RECTANGLE)
- Rectangle 161123974 (RECTANGLE)
- Group 1707480391 (GROUP)
- fluent:scan-table-20-regular (FRAME)
- Group 1707480390 (GROUP)
- fluent:scan-table-20-regular (FRAME)
- Group 1707480392 (GROUP)
- fluent:scan-table-20-regular (FRAME)
- Group 1707480394 (GROUP)
- fluent:scan-table-20-regular (FRAME)
- Object [Vectorized] (FRAME)
- Object [Vectorized] (FRAME)
- Object [Vectorized] (FRAME)
- Object [Vectorized] (FRAME)
- Object [Vectorized] (FRAME)
- Object [Vectorized] (FRAME)
- Object [Vectorized] (FRAME)
- Object [Vectorized] (FRAME)
- Object [Vectorized] (FRAME)
- Object [Vectorized] (FRAME)
- Object [Vectorized] (FRAME)
- Object [Vectorized] (FRAME)
- Frame 1707480480 (FRAME)
- Frame 1707480481 (FRAME)
- Frame 1707480482 (FRAME)
- Frame 1707480483 (FRAME)
- Frame 1707480484 (FRAME)
- Frame 1707480485 (FRAME)
- Frame 1707480486 (FRAME)
- Frame 1707480487 (FRAME)
- Frame 1707480477 (FRAME)
- Frame 1707480478 (FRAME)
- Frame 1707480479 (FRAME)
- Frame 1707480488 (FRAME)
- lets-icons:img-fill (FRAME)
- Frame 1707480489 (FRAME)
- Frame 1707480490 (FRAME)
- Frame 1707480491 (FRAME)
- Frame 1707480493 (FRAME)
- Component 2 (FRAME)
- Component 2 (FRAME)
- Component 2 (FRAME)
- Component 2 (FRAME)
- Object [Vectorized] (FRAME)
- Object [Vectorized] (FRAME)
- Object [Vectorized] (FRAME)
- Object [Vectorized] (FRAME)
```

### Specs Data (YAML)
```yaml
schema: specs-plugin.agent_pack.v14.yaml.compact
generated_at: "2026-03-21T08:03:52.378Z"
selection:
  node_id: "2526:1525"
  name: dev-kit
  type: FRAME
  clips_content: true
defaults_omitted:
  justify: flex-start
  align: flex-start
  direction: row
summary:
  anatomy_nodes_total: 370
  property_groups_total: 0
  property_variants_total: 0
  variable_refs_total: 0
  instance_templates: 0
  deduplicated_instances: 0
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
    anatomy_included: 370
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
  ac1: "#E6FF2B"
  black: "#010101"
  white1: "#F9F7F2"
  ac2: "#004D43"
  white: "#FFFFFF"
  devider: "#D8D8D8"
  gray2: "#9E9E9E"
chunks:
  - chunk_id: anatomy_1
    kind: anatomy
    item_count: 50
    items:
      - node_id: "2526:1525"
        name: dev-kit
        type: FRAME
        w: 2218
        h: 9158
        fill: "#FFFFFF"
        direction: column
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "2526:1600"
        name: Property 1=Component 25
        type: COMPONENT
        w: 830
        h: 598
      - node_id: "2526:1601"
        name: Group 1707480400
        type: GROUP
        w: 288
        h: 221
      - node_id: "2526:1602"
        name: Vector
        type: VECTOR
        w: 288
        h: 221
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2526:1603"
        name: Vector
        type: VECTOR
        w: 288
        h: 168
        fill: "#F6F6F6"
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2526:1604"
        name: Group 1707480399
        type: GROUP
        w: 217
        h: 174
      - node_id: "2526:1605"
        name: Vector
        type: VECTOR
        w: 217
        h: 174
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2526:1606"
        name: Vector
        type: VECTOR
        w: 217
        h: 128
        fill: "#F6F6F6"
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2526:1607"
        name: Group 1707480398
        type: GROUP
        w: 138
        h: 133
      - node_id: "2526:1608"
        name: Vector
        type: VECTOR
        w: 138
        h: 133
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2526:1609"
        name: Vector
        type: VECTOR
        w: 138
        h: 89
        fill: "#F6F6F6"
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2526:1610"
        name: Group 1707480401
        type: GROUP
        w: 69
        h: 90
      - node_id: "2526:1611"
        name: Vector
        type: VECTOR
        w: 69
        h: 90
        fill: "#E4E4E4"
      - node_id: "2526:1612"
        name: Vector
        type: VECTOR
        w: 69
        h: 90
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2526:1613"
        name: Vector
        type: VECTOR
        w: 69
        h: 45
        fill: "#F6F6F6"
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2526:1614"
        name: Property 1=Component 26
        type: COMPONENT
        w: 830
        h: 598
      - node_id: "2526:1615"
        name: Group 1707480400
        type: GROUP
        w: 288
        h: 221
      - node_id: "2526:1616"
        name: Vector
        type: VECTOR
        w: 288
        h: 221
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2526:1617"
        name: Vector
        type: VECTOR
        w: 288
        h: 168
        fill: "#F6F6F6"
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2526:1618"
        name: Group 1707480399
        type: GROUP
        w: 217
        h: 174
      - node_id: "2526:1619"
        name: Vector
        type: VECTOR
        w: 217
        h: 174
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2526:1620"
        name: Vector
        type: VECTOR
        w: 217
        h: 128
        fill: "#F6F6F6"
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2526:1621"
        name: Group 1707480398
        type: GROUP
        w: 138
        h: 133
      - node_id: "2526:1622"
        name: Vector
        type: VECTOR
        w: 138
        h: 133
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2526:1623"
        name: Vector
        type: VECTOR
        w: 138
        h: 89
        fill: "#F6F6F6"
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2526:1624"
        name: Group 1707480401
        type: GROUP
        w: 69
        h: 90
      - node_id: "2526:1625"
        name: Vector
        type: VECTOR
        w: 69
        h: 90
        fill: "#E4E4E4"
      - node_id: "2526:1626"
        name: Vector
        type: VECTOR
        w: 69
        h: 90
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2526:1627"
        name: Vector
        type: VECTOR
        w: 69
        h: 45
        fill: "#F6F6F6"
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2526:1474"
        name: btn
        type: FRAME
        w: 330
        h: 50
        fill: "#E6FF2B"
        fill_ref: ac1
        fill_ref_type: color_style
        radius: 10
        padding: "15"
        direction: column
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2526:1475"
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
      - node_id: "2526:1514"
        name: btn
        type: FRAME
        w: 330
        h: 50
        fill: "#F9F7F2"
        fill_ref: white1
        fill_ref_type: color_style
        radius: 10
        padding: "15"
        direction: column
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2526:1515"
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
      - node_id: "2526:1478"
        name: btn
        type: FRAME
        w: 330
        h: 55
        align: center
        w_sizing: auto
        h_sizing: auto
        clips: true
      - node_id: "2526:1479"
        name: Component 1
        type: FRAME
        w: 275
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
      - node_id: "2526:1480"
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
      - node_id: "2526:1481"
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
      - node_id: "2526:1482"
        name: Vector
        type: VECTOR
        w: 11
        h: 16
        fill: "#FFFFFF"
      - node_id: "2526:1516"
        name: btn
        type: FRAME
        w: 330
        h: 55
        align: center
        w_sizing: auto
        h_sizing: auto
        clips: true
      - node_id: "2526:1517"
        name: Component 1
        type: FRAME
        w: 275
        h: 55
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: "border-right: 1px"
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2526:1518"
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
      - node_id: "2526:1519"
        name: Component 3
        type: FRAME
        w: 55
        h: 55
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: "border-right: 1px"
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2526:1520"
        name: Vector
        type: VECTOR
        w: 11
        h: 16
        fill: "#FFFFFF"
      - node_id: "2526:1488"
        name: btn
        type: FRAME
        w: 330
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
      - node_id: "2526:1489"
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
      - node_id: "2526:1521"
        name: btn
        type: FRAME
        w: 330
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
      - node_id: "2526:1522"
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
      - node_id: "2526:1492"
        name: btn
        type: FRAME
        w: 330
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
      - node_id: "2526:1493"
        name: GET FREE
        type: TEXT
        text: GET FREE
        w: 111
        h: 20
        fill: "#0E0E0E"
        font_size: 24
        font: Jura Bold
        line_height: 19.95px
        text_align: center
      - node_id: "2526:1523"
        name: btn
        type: FRAME
        w: 330
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
  - chunk_id: anatomy_2
    kind: anatomy
    item_count: 50
    items:
      - node_id: "2526:1524"
        name: GET FREE
        type: TEXT
        text: GET FREE
        w: 111
        h: 20
        fill: "#FFFFFF"
        font_size: 24
        font: Jura Bold
        line_height: 19.95px
        text_align: center
      - node_id: "2526:1511"
        name: Frame 1707480496
        type: FRAME
        w: 340
        h: 40
        fill: "#D8D8D8"
        fill_ref: devider
        fill_ref_type: color_style
        padding: "10"
        gap: 10
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2526:1496"
        name: default
        type: TEXT
        text: default
        w: 104
        h: 20
        fill: "#000000"
        font_size: 24
        font: Jura Bold
        line_height: 19.95px
        text_align: center
      - node_id: "2526:1540"
        name: Frame 1707480499
        type: FRAME
        w: 439
        h: 40
        fill: "#D8D8D8"
        fill_ref: devider
        fill_ref_type: color_style
        padding: "10"
        gap: 10
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2526:1541"
        name: default
        type: TEXT
        text: default
        w: 104
        h: 20
        fill: "#000000"
        font_size: 24
        font: Jura Bold
        line_height: 19.95px
        text_align: center
      - node_id: "2526:1557"
        name: Frame 1707480502
        type: FRAME
        w: 439
        h: 40
        fill: "#D8D8D8"
        fill_ref: devider
        fill_ref_type: color_style
        padding: "10"
        gap: 10
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2526:1558"
        name: Desktop
        type: TEXT
        text: Desktop
        w: 109
        h: 20
        fill: "#000000"
        font_size: 24
        font: Jura Bold
        line_height: 19.95px
        text_align: center
      - node_id: "2526:1559"
        name: Frame 1707480503
        type: FRAME
        w: 439
        h: 40
        fill: "#D8D8D8"
        fill_ref: devider
        fill_ref_type: color_style
        padding: "10"
        gap: 10
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2526:1560"
        name: mobile
        type: TEXT
        text: mobile
        w: 89
        h: 20
        fill: "#000000"
        font_size: 24
        font: Jura Bold
        line_height: 19.95px
        text_align: center
      - node_id: "2526:1512"
        name: Frame 1707480497
        type: FRAME
        w: 330
        h: 40
        fill: "#D8D8D8"
        fill_ref: devider
        fill_ref_type: color_style
        padding: "10"
        gap: 10
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2526:1513"
        name: Hover
        type: TEXT
        text: Hover
        w: 81
        h: 20
        fill: "#000000"
        font_size: 24
        font: Jura Bold
        line_height: 19.95px
        text_align: center
      - node_id: "2526:1542"
        name: Frame 1707480500
        type: FRAME
        w: 437
        h: 40
        fill: "#D8D8D8"
        fill_ref: devider
        fill_ref_type: color_style
        padding: "10"
        gap: 10
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2526:1543"
        name: Hover
        type: TEXT
        text: Hover
        w: 81
        h: 20
        fill: "#000000"
        font_size: 24
        font: Jura Bold
        line_height: 19.95px
        text_align: center
      - node_id: "2526:1508"
        name: Frame 1707480494
        type: FRAME
        w: 1294
        h: 40
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        padding: "10"
        gap: 10
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2526:1499"
        name: Font
        type: TEXT
        text: Font
        w: 64
        h: 20
        fill: "#FFFFFF"
        font_size: 24
        font: Jura Bold
        line_height: 19.95px
        text_align: center
      - node_id: "2526:1509"
        name: Frame 1707480495
        type: FRAME
        w: 1292
        h: 40
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        padding: "10"
        gap: 10
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2526:1510"
        name: Buttons
        type: TEXT
        text: Buttons
        w: 116
        h: 20
        fill: "#FFFFFF"
        font_size: 24
        font: Jura Bold
        line_height: 19.95px
        text_align: center
      - node_id: "2526:1526"
        name: Frame 1707480498
        type: FRAME
        w: 1292
        h: 40
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        padding: "10"
        gap: 10
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2526:1527"
        name: Cards
        type: TEXT
        text: Cards
        w: 82
        h: 20
        fill: "#FFFFFF"
        font_size: 24
        font: Jura Bold
        line_height: 19.95px
        text_align: center
      - node_id: "2526:1555"
        name: Frame 1707480501
        type: FRAME
        w: 1292
        h: 40
        fill: "#010101"
        fill_ref: black
        fill_ref_type: color_style
        padding: "10"
        gap: 10
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2526:1556"
        name: animation
        type: TEXT
        text: animation
        w: 133
        h: 20
        fill: "#FFFFFF"
        font_size: 24
        font: Jura Bold
        line_height: 19.95px
        text_align: center
      - node_id: "2526:1500"
        name: Jura -
        type: TEXT
        text: Jura -
        w: 76
        h: 20
        fill: "#000000"
        font_size: 24
        font: Jura Bold
        line_height: 19.95px
        text_align: center
      - node_id: "2526:1501"
        name: Link
        type: TEXT
        text: Link
        w: 53
        h: 20
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        font_size: 24
        font: Jura Bold
        line_height: 19.95px
        text_align: center
      - node_id: "2393:1697"
        name: stay=default
        type: COMPONENT
        w: 118
        h: 41
        justify: center
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "2393:1693"
        name: Container
        type: FRAME
        w: 118
        h: 41
        padding: "9.5"
        direction: column
        w_sizing: auto
        h_sizing: auto
      - node_id: "2393:1694"
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
      - node_id: "2393:1695"
        name: Border
        type: RECTANGLE
        w: 10
        h: 10
        stroke: "#E6FF2B"
        stroke_ref: ac1
        stroke_align: inside
        stroke_sides: "border-top: 2px, border-left: 2px"
        position: absolute
        x: 153
        y: 790
        constraints: "h:min, v:min"
        opacity: 0
      - node_id: "2393:1696"
        name: Border
        type: RECTANGLE
        w: 10
        h: 10
        stroke: "#E6FF2B"
        stroke_ref: ac1
        stroke_align: inside
        stroke_sides: "border-right: 2px, border-bottom: 2px"
        position: absolute
        x: 251
        y: 811
        constraints: "h:max, v:max"
        opacity: 0
      - node_id: "2393:1699"
        name: stay=hover
        type: COMPONENT
        w: 118
        h: 41
        justify: center
        align: center
        w_sizing: auto
        h_sizing: auto
      - node_id: "2393:1700"
        name: Container
        type: FRAME
        w: 118
        h: 41
        padding: "9.5"
        direction: column
        w_sizing: auto
        h_sizing: auto
      - node_id: "2393:1701"
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
      - node_id: "2393:1702"
        name: Border
        type: RECTANGLE
        w: 10
        h: 10
        stroke: "#E6FF2B"
        stroke_ref: ac1
        stroke_align: inside
        stroke_sides: "border-top: 2px, border-left: 2px"
        position: absolute
        x: 504
        y: 790
        constraints: "h:min, v:min"
      - node_id: "2393:1703"
        name: Border
        type: RECTANGLE
        w: 10
        h: 10
        stroke: "#E6FF2B"
        stroke_ref: ac1
        stroke_align: inside
        stroke_sides: "border-right: 2px, border-bottom: 2px"
        position: absolute
        x: 602
        y: 811
        constraints: "h:max, v:max"
      - node_id: "2526:1528"
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
      - node_id: "2526:1529"
        name: Container
        type: FRAME
        w: 400
        h: 425
        padding: "37.5"
        direction: column
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2526:1530"
        name: txt
        type: FRAME
        w: 356
        h: 350
        gap: 10
        direction: column
        justify: space-between
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2526:1531"
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
      - node_id: "2526:1532"
        name: txt
        type: FRAME
        w: 356
        h: 250
        gap: 20
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2526:1533"
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
      - node_id: "2526:1534"
        name: Text
        type: TEXT
        text: Because the system knows the business fully — team, revenue, priorities, every active project — it can synthesize 74 calls across multiple streams into one brief that actually makes sense. Complete with a SWOT review. The founder becomes the most informed person in the organization before breakfast.
        w: 356
        h: 184
        fill: "#636363"
        font_size: 18
        font: Jura Regular
        line_height: 23px
      - node_id: "2526:1535"
        name: Border
        type: RECTANGLE
        w: 10
        h: 12
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: "border-top: 2px, border-left: 2px"
        position: absolute
        x: 149
        y: 1072
        constraints: "h:scale, v:scale"
      - node_id: "2526:1536"
        name: Border
        type: RECTANGLE
        w: 10
        h: 12
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: "border-top: 2px, border-right: 2px"
        position: absolute
        x: 539
        y: 1072
        constraints: "h:scale, v:scale"
      - node_id: "2526:1537"
        name: Border
        type: RECTANGLE
        w: 10
        h: 12
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: "border-right: 2px, border-bottom: 2px"
        position: absolute
        x: 539
        y: 1485
        constraints: "h:scale, v:scale"
      - node_id: "2526:1538"
        name: Border
        type: RECTANGLE
        w: 10
        h: 12
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: "border-bottom: 2px, border-left: 2px"
        position: absolute
        x: 149
        y: 1485
        constraints: "h:scale, v:scale"
      - node_id: "2526:1544"
        name: Component 11
        type: FRAME
        w: 440
        h: 515
        padding: "45"
        stroke: "#004D43"
        stroke_ref: ac2
        stroke_align: inside
        stroke_sides: all
        justify: center
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2526:1545"
        name: Container
        type: FRAME
        w: 400
        h: 425
        padding: "37.5"
        direction: column
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2526:1546"
        name: txt
        type: FRAME
        w: 356
        h: 350
        gap: 10
        direction: column
        justify: space-between
        w_sizing: fixed
        h_sizing: fixed
      - node_id: "2526:1547"
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
      - node_id: "2526:1548"
        name: txt
        type: FRAME
        w: 356
        h: 250
        gap: 20
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2526:1549"
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
  - chunk_id: anatomy_3
    kind: anatomy
    item_count: 50
    items:
      - node_id: "2526:1550"
        name: Text
        type: TEXT
        text: Because the system knows the business fully — team, revenue, priorities, every active project — it can synthesize 74 calls across multiple streams into one brief that actually makes sense. Complete with a SWOT review. The founder becomes the most informed person in the organization before breakfast.
        w: 356
        h: 184
        fill: "#636363"
        font_size: 18
        font: Jura Regular
        line_height: 23px
      - node_id: "2526:1551"
        name: Border
        type: RECTANGLE
        w: 10
        h: 12
        stroke: "#004D43"
        stroke_ref: ac2
        stroke_align: inside
        stroke_sides: "border-top: 2px, border-left: 2px"
        position: absolute
        x: 630
        y: 1072
        constraints: "h:scale, v:scale"
      - node_id: "2526:1552"
        name: Border
        type: RECTANGLE
        w: 10
        h: 12
        stroke: "#004D43"
        stroke_ref: ac2
        stroke_align: inside
        stroke_sides: "border-top: 2px, border-right: 2px"
        position: absolute
        x: 1020
        y: 1072
        constraints: "h:scale, v:scale"
      - node_id: "2526:1553"
        name: Border
        type: RECTANGLE
        w: 10
        h: 12
        stroke: "#004D43"
        stroke_ref: ac2
        stroke_align: inside
        stroke_sides: "border-right: 2px, border-bottom: 2px"
        position: absolute
        x: 1020
        y: 1485
        constraints: "h:scale, v:scale"
      - node_id: "2526:1554"
        name: Border
        type: RECTANGLE
        w: 10
        h: 12
        stroke: "#004D43"
        stroke_ref: ac2
        stroke_align: inside
        stroke_sides: "border-bottom: 2px, border-left: 2px"
        position: absolute
        x: 630
        y: 1485
        constraints: "h:scale, v:scale"
      - node_id: "2507:2920"
        name: Property 1=Default
        type: COMPONENT
        w: 757
        h: 631
      - node_id: "2507:2921"
        name: Frame 1707480417
        type: FRAME
        w: 411
        h: 282
        fill: "#F9F9F9"
        radius: 50
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "2507:2922"
        name: Union
        type: VECTOR
        w: 147
        h: 146
        fill: "#F9F9F9"
        inner_shadow: 0px 4px 15px rgba(0,0,0,0.07)
      - node_id: "2507:2923"
        name: Rectangle 161123972
        type: RECTANGLE
        w: 212
        h: 212
        radius: 39
        stroke: "#D9D9D9"
        stroke_align: inside
        stroke_sides: all
        opacity: 0.6000000238418579
      - node_id: "2507:2924"
        name: Rectangle 161123973
        type: RECTANGLE
        w: 250
        h: 250
        radius: 39
        stroke: hsla(0, 0%, 85%, 0.50)
        stroke_align: inside
        stroke_sides: all
        opacity: 0.6000000238418579
      - node_id: "2507:2925"
        name: Rectangle 161123974
        type: RECTANGLE
        w: 280
        h: 280
        radius: 39
        stroke: hsla(0, 0%, 85%, 0.30)
        stroke_align: inside
        stroke_sides: all
        opacity: 0.6000000238418579
      - node_id: "2507:2926"
        name: Group 1707480390
        type: GROUP
        w: 66
        h: 99
      - node_id: "2507:2939"
        name: "fluent:scan-table-20-regular"
        type: FRAME
        w: 32
        h: 32
        fill: "#E6FF2B"
        fill_ref: ac1
        fill_ref_type: color_style
        radius: 9
      - node_id: "2507:2941"
        name: Group 1707480392
        type: GROUP
        w: 63
        h: 99
      - node_id: "2507:2954"
        name: "fluent:scan-table-20-regular"
        type: FRAME
        w: 32
        h: 32
        fill: "#E6FF2B"
        fill_ref: ac1
        fill_ref_type: color_style
        radius: 9
      - node_id: "2507:2956"
        name: Group 1707480391
        type: GROUP
        w: 63
        h: 97
      - node_id: "2507:2969"
        name: "fluent:scan-table-20-regular"
        type: FRAME
        w: 32
        h: 32
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        radius: 9
      - node_id: "2507:2971"
        name: Group 1707480394
        type: GROUP
        w: 66
        h: 98
      - node_id: "2507:2984"
        name: "fluent:scan-table-20-regular"
        type: FRAME
        w: 32
        h: 32
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        radius: 9
      - node_id: "2507:2986"
        name: Property 1=Variant2
        type: COMPONENT
        w: 757
        h: 631
      - node_id: "2507:2987"
        name: Frame 1707480417
        type: FRAME
        w: 411
        h: 282
        fill: "#F9F9F9"
        radius: 50
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "2507:2988"
        name: Union
        type: VECTOR
        w: 147
        h: 146
        fill: "#F9F9F9"
        inner_shadow: 0px 4px 15px rgba(0,0,0,0.07)
      - node_id: "2507:2989"
        name: Rectangle 161123972
        type: RECTANGLE
        w: 212
        h: 212
        radius: 39
        stroke: "#D9D9D9"
        stroke_align: inside
        stroke_sides: all
        opacity: 0.6000000238418579
      - node_id: "2507:2990"
        name: Rectangle 161123973
        type: RECTANGLE
        w: 250
        h: 250
        radius: 39
        stroke: hsla(0, 0%, 85%, 0.50)
        stroke_align: inside
        stroke_sides: all
        opacity: 0.6000000238418579
      - node_id: "2507:2991"
        name: Rectangle 161123974
        type: RECTANGLE
        w: 280
        h: 280
        radius: 39
        stroke: hsla(0, 0%, 85%, 0.30)
        stroke_align: inside
        stroke_sides: all
        opacity: 0.6000000238418579
      - node_id: "2507:2992"
        name: Group 1707480391
        type: GROUP
        w: 63
        h: 97
      - node_id: "2507:3005"
        name: "fluent:scan-table-20-regular"
        type: FRAME
        w: 32
        h: 32
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        radius: 9
      - node_id: "2507:3007"
        name: Group 1707480390
        type: GROUP
        w: 66
        h: 99
      - node_id: "2507:3020"
        name: "fluent:scan-table-20-regular"
        type: FRAME
        w: 32
        h: 32
        fill: "#E6FF2B"
        fill_ref: ac1
        fill_ref_type: color_style
        radius: 9
      - node_id: "2507:3022"
        name: Group 1707480392
        type: GROUP
        w: 63
        h: 99
      - node_id: "2507:3035"
        name: "fluent:scan-table-20-regular"
        type: FRAME
        w: 32
        h: 32
        fill: "#E6FF2B"
        fill_ref: ac1
        fill_ref_type: color_style
        radius: 9
      - node_id: "2507:3037"
        name: Group 1707480394
        type: GROUP
        w: 66
        h: 98
      - node_id: "2507:3050"
        name: "fluent:scan-table-20-regular"
        type: FRAME
        w: 32
        h: 32
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        radius: 9
      - node_id: "2507:3052"
        name: Property 1=Variant3
        type: COMPONENT
        w: 757
        h: 631
      - node_id: "2507:3053"
        name: Frame 1707480417
        type: FRAME
        w: 411
        h: 282
        fill: "#F9F9F9"
        radius: 50
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "2507:3054"
        name: Union
        type: VECTOR
        w: 147
        h: 146
        fill: "#F9F9F9"
        inner_shadow: 0px 4px 15px rgba(0,0,0,0.07)
      - node_id: "2507:3055"
        name: Rectangle 161123972
        type: RECTANGLE
        w: 212
        h: 212
        radius: 39
        stroke: "#D9D9D9"
        stroke_align: inside
        stroke_sides: all
        opacity: 0.6000000238418579
      - node_id: "2507:3056"
        name: Rectangle 161123973
        type: RECTANGLE
        w: 250
        h: 250
        radius: 39
        stroke: hsla(0, 0%, 85%, 0.50)
        stroke_align: inside
        stroke_sides: all
        opacity: 0.6000000238418579
      - node_id: "2507:3057"
        name: Rectangle 161123974
        type: RECTANGLE
        w: 280
        h: 280
        radius: 39
        stroke: hsla(0, 0%, 85%, 0.30)
        stroke_align: inside
        stroke_sides: all
        opacity: 0.6000000238418579
      - node_id: "2507:3058"
        name: Group 1707480391
        type: GROUP
        w: 63
        h: 97
      - node_id: "2507:3071"
        name: "fluent:scan-table-20-regular"
        type: FRAME
        w: 32
        h: 32
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        radius: 9
      - node_id: "2507:3073"
        name: Group 1707480390
        type: GROUP
        w: 66
        h: 99
      - node_id: "2507:3086"
        name: "fluent:scan-table-20-regular"
        type: FRAME
        w: 32
        h: 32
        fill: "#E6FF2B"
        fill_ref: ac1
        fill_ref_type: color_style
        radius: 9
      - node_id: "2507:3088"
        name: Group 1707480392
        type: GROUP
        w: 63
        h: 99
      - node_id: "2507:3101"
        name: "fluent:scan-table-20-regular"
        type: FRAME
        w: 32
        h: 32
        fill: "#E6FF2B"
        fill_ref: ac1
        fill_ref_type: color_style
        radius: 9
      - node_id: "2507:3103"
        name: Group 1707480394
        type: GROUP
        w: 66
        h: 98
      - node_id: "2507:3116"
        name: "fluent:scan-table-20-regular"
        type: FRAME
        w: 32
        h: 32
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        radius: 9
      - node_id: "2063:6604"
        name: Property 1=Default
        type: COMPONENT
        w: 910
        h: 680
      - node_id: "2063:6472"
        name: Group 1707480381
        type: GROUP
        w: 365
        h: 367
      - node_id: "2063:6473"
        name: Rectangle 161123951
        type: RECTANGLE
        w: 365
        h: 367
        fill: "#FFFFFF"
        radius: 30
        stroke: "#D8D8D8"
        stroke_ref: devider
        stroke_align: inside
        stroke_sides: all
        shadow: 8px -6px 14px rgba(0,0,0,0.04)
  - chunk_id: anatomy_4
    kind: anatomy
    item_count: 50
    items:
      - node_id: "2063:6474"
        name: Frame 1707480409
        type: FRAME
        w: 51
        h: 172
        gap: 20
        direction: column
        w_sizing: auto
        h_sizing: auto
      - node_id: "2063:6478"
        name: Frame 1707480411
        type: FRAME
        w: 237
        h: 227
        gap: 12
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2063:6479"
        name: Frame 1707480408
        type: FRAME
        w: 237
        h: 28
        gap: 11
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2063:6484"
        name: Frame 1707480410
        type: FRAME
        w: 237
        h: 187
        gap: 9
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2521:1446"
        name: Frame 1707480476
        type: FRAME
        w: 237
        h: 40
        gap: 9
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2063:6602"
        name: Rectangle 161123946
        type: VECTOR
        w: 591
        h: 131
        fill: hsla(0, 0%, 0%, 0.09)
        blur: 54px
      - node_id: "2063:6603"
        name: image 2444
        type: RECTANGLE
        w: 912
        h: 608
        fill: image
        fill_type: IMAGE
        image_hash: 0923cc5206400561f59286729eb946d0ec3cdcd2
      - node_id: "2223:4826"
        name: Group 105040
        type: GROUP
        w: 64
        h: 64
      - node_id: "2223:4835"
        name: Rectangle 161123967
        type: RECTANGLE
        w: 47
        h: 51
        fill: "#E6FF2B"
      - node_id: "2223:4827"
        name: Subtract
        type: BOOLEAN_OPERATION
        w: 64
        h: 64
        fill: "#0E0E0E"
      - node_id: "2063:6606"
        name: Property 1=Variant2
        type: COMPONENT
        w: 910
        h: 680
      - node_id: "2063:6623"
        name: Rectangle 161123946
        type: VECTOR
        w: 591
        h: 131
        fill: hsla(0, 0%, 0%, 0.09)
        blur: 54px
      - node_id: "2063:6639"
        name: Group 1707480382
        type: GROUP
        w: 365
        h: 367
      - node_id: "2063:6640"
        name: Rectangle 161123951
        type: RECTANGLE
        w: 365
        h: 367
        fill: "#FFFFFF"
        radius: 30
        stroke: "#D8D8D8"
        stroke_ref: devider
        stroke_align: inside
        stroke_sides: all
        shadow: 8px -6px 19px rgba(0,0,0,0.04)
      - node_id: "2063:6641"
        name: Frame 1707480411
        type: FRAME
        w: 298
        h: 283
        gap: 18
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2063:6642"
        name: Frame 1707480408
        type: FRAME
        w: 298
        h: 28
        gap: 11
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2063:6647"
        name: Frame 1707480410
        type: FRAME
        w: 298
        h: 237
        gap: 11
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2063:6624"
        name: image 2444
        type: RECTANGLE
        w: 912
        h: 608
        fill: image
        fill_type: IMAGE
        image_hash: 0923cc5206400561f59286729eb946d0ec3cdcd2
      - node_id: "2223:4838"
        name: Group 105040
        type: GROUP
        w: 64
        h: 64
      - node_id: "2223:4839"
        name: Rectangle 161123967
        type: RECTANGLE
        w: 47
        h: 51
        fill: "#E6FF2B"
      - node_id: "2223:4840"
        name: Subtract
        type: BOOLEAN_OPERATION
        w: 64
        h: 64
        fill: "#0E0E0E"
      - node_id: "2063:6653"
        name: Property 1=Variant3
        type: COMPONENT
        w: 910
        h: 680
      - node_id: "2063:6691"
        name: Group 1707480383
        type: GROUP
        w: 365
        h: 367
      - node_id: "2063:6692"
        name: Rectangle 161123951
        type: RECTANGLE
        w: 365
        h: 367
        fill: "#FFFFFF"
        radius: 30
        stroke: "#D8D8D8"
        stroke_ref: devider
        stroke_align: inside
        stroke_sides: all
        shadow: 8px -6px 16px rgba(0,0,0,0.04)
      - node_id: "2063:6693"
        name: Frame 1707480411
        type: FRAME
        w: 298
        h: 260
        gap: 18
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2063:6694"
        name: Frame 1707480408
        type: FRAME
        w: 298
        h: 40
        gap: 11
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2063:6699"
        name: Frame 1707480410
        type: FRAME
        w: 298
        h: 202
        gap: 11
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2063:6700"
        name: Frame 1707480412
        type: FRAME
        w: 298
        h: 60
        gap: 11
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2521:1544"
        name: Frame 1707480492
        type: FRAME
        w: 95
        h: 31
        gap: 5
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2063:6705"
        name: Frame 1707480413
        type: FRAME
        w: 298
        h: 60
        gap: 11
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2521:1550"
        name: Frame 1707480492
        type: FRAME
        w: 95
        h: 31
        gap: 5
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2063:6710"
        name: Frame 1707480414
        type: FRAME
        w: 298
        h: 60
        gap: 11
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2521:1555"
        name: Frame 1707480492
        type: FRAME
        w: 95
        h: 31
        gap: 5
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2063:6670"
        name: Rectangle 161123946
        type: VECTOR
        w: 591
        h: 131
        fill: hsla(0, 0%, 0%, 0.09)
        blur: 54px
      - node_id: "2063:6671"
        name: image 2444
        type: RECTANGLE
        w: 912
        h: 608
        fill: image
        fill_type: IMAGE
        image_hash: 0923cc5206400561f59286729eb946d0ec3cdcd2
      - node_id: "2223:4854"
        name: Group 105040
        type: GROUP
        w: 64
        h: 64
      - node_id: "2223:4855"
        name: Rectangle 161123967
        type: RECTANGLE
        w: 47
        h: 51
        fill: "#E6FF2B"
      - node_id: "2223:4856"
        name: Subtract
        type: BOOLEAN_OPERATION
        w: 64
        h: 64
        fill: "#0E0E0E"
      - node_id: "2063:6672"
        name: Property 1=Variant4
        type: COMPONENT
        w: 910
        h: 680
      - node_id: "2063:6737"
        name: Group 1707480384
        type: GROUP
        w: 365
        h: 367
      - node_id: "2063:6738"
        name: Rectangle 161123951
        type: RECTANGLE
        w: 365
        h: 367
        fill: "#FFFFFF"
        radius: 30
        stroke: "#D8D8D8"
        stroke_ref: devider
        stroke_align: inside
        stroke_sides: all
        shadow: 8px -6px 16px rgba(0,0,0,0.04)
      - node_id: "2063:6739"
        name: Frame 1707480412
        type: FRAME
        w: 298
        h: 120
        gap: 11
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2063:6749"
        name: Frame 1707480415
        type: FRAME
        w: 298
        h: 120
        gap: 11
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2063:6689"
        name: Rectangle 161123946
        type: VECTOR
        w: 591
        h: 131
        fill: hsla(0, 0%, 0%, 0.09)
        blur: 54px
      - node_id: "2063:6690"
        name: image 2444
        type: RECTANGLE
        w: 912
        h: 608
        fill: image
        fill_type: IMAGE
        image_hash: 0923cc5206400561f59286729eb946d0ec3cdcd2
      - node_id: "2223:4860"
        name: Group 105040
        type: GROUP
        w: 64
        h: 64
      - node_id: "2223:4861"
        name: Rectangle 161123967
        type: RECTANGLE
        w: 47
        h: 51
        fill: "#E6FF2B"
      - node_id: "2223:4862"
        name: Subtract
        type: BOOLEAN_OPERATION
        w: 64
        h: 64
        fill: "#0E0E0E"
      - node_id: "2526:1570"
        name: Property 1=Component 25
        type: COMPONENT
        w: 375
        h: 410
      - node_id: "2526:1571"
        name: Group 1707480400
        type: GROUP
        w: 191
        h: 152
  - chunk_id: anatomy_5
    kind: anatomy
    item_count: 50
    items:
      - node_id: "2526:1572"
        name: Vector
        type: VECTOR
        w: 191
        h: 152
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2526:1573"
        name: Vector
        type: VECTOR
        w: 191
        h: 116
        fill: "#F6F6F6"
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2526:1574"
        name: Group 1707480399
        type: GROUP
        w: 144
        h: 120
      - node_id: "2526:1575"
        name: Vector
        type: VECTOR
        w: 144
        h: 120
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2526:1576"
        name: Vector
        type: VECTOR
        w: 144
        h: 88
        fill: "#F6F6F6"
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2526:1577"
        name: Group 1707480398
        type: GROUP
        w: 91
        h: 92
      - node_id: "2526:1578"
        name: Vector
        type: VECTOR
        w: 91
        h: 92
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2526:1579"
        name: Vector
        type: VECTOR
        w: 91
        h: 61
        fill: "#F6F6F6"
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2526:1580"
        name: Group 1707480401
        type: GROUP
        w: 46
        h: 62
      - node_id: "2526:1581"
        name: Vector
        type: VECTOR
        w: 46
        h: 62
        fill: "#E4E4E4"
      - node_id: "2526:1582"
        name: Vector
        type: VECTOR
        w: 46
        h: 62
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2526:1583"
        name: Vector
        type: VECTOR
        w: 46
        h: 31
        fill: "#F6F6F6"
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2526:1584"
        name: Property 1=Component 26
        type: COMPONENT
        w: 375
        h: 410
      - node_id: "2526:1585"
        name: Group 1707480400
        type: GROUP
        w: 191
        h: 152
      - node_id: "2526:1586"
        name: Vector
        type: VECTOR
        w: 191
        h: 152
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2526:1587"
        name: Vector
        type: VECTOR
        w: 191
        h: 116
        fill: "#F6F6F6"
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2526:1588"
        name: Group 1707480399
        type: GROUP
        w: 144
        h: 120
      - node_id: "2526:1589"
        name: Vector
        type: VECTOR
        w: 144
        h: 120
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2526:1590"
        name: Vector
        type: VECTOR
        w: 144
        h: 88
        fill: "#F6F6F6"
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2526:1591"
        name: Group 1707480398
        type: GROUP
        w: 91
        h: 92
      - node_id: "2526:1592"
        name: Vector
        type: VECTOR
        w: 91
        h: 92
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2526:1593"
        name: Vector
        type: VECTOR
        w: 91
        h: 61
        fill: "#F6F6F6"
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2526:1594"
        name: Group 1707480401
        type: GROUP
        w: 46
        h: 62
      - node_id: "2526:1595"
        name: Vector
        type: VECTOR
        w: 46
        h: 62
        fill: "#E4E4E4"
      - node_id: "2526:1596"
        name: Vector
        type: VECTOR
        w: 46
        h: 62
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2526:1597"
        name: Vector
        type: VECTOR
        w: 46
        h: 31
        fill: "#F6F6F6"
        stroke: "#1B1B1B"
        stroke_sides: all
      - node_id: "2507:4052"
        name: Property 1=Variant3
        type: COMPONENT
        w: 104
        h: 95
        direction: column
        w_sizing: auto
        h_sizing: auto
      - node_id: "2507:4053"
        name: 666aa5b019fc170dd5ab9fa9_ico-container.svg
        type: FRAME
        w: 104
        h: 95
        w_sizing: auto
        h_sizing: auto
        clips: true
      - node_id: "2507:4054"
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
      - node_id: "2507:4057"
        name: 666aac9d63e28ae1e1034a96_Strategic-partnerships.svg
        type: FRAME
        w: 68
        h: 65
        position: absolute
        x: 1675
        y: 6906
        constraints: "h:center, v:center"
        direction: column
        w_sizing: auto
        h_sizing: auto
        clips: true
      - node_id: "2507:4058"
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
      - node_id: "2507:4074"
        name: Property 1=Variant2
        type: COMPONENT
        w: 104
        h: 95
        direction: column
        w_sizing: auto
        h_sizing: auto
      - node_id: "2507:4075"
        name: 666aa5b019fc170dd5ab9fa9_ico-container.svg
        type: FRAME
        w: 104
        h: 95
        w_sizing: fixed
        h_sizing: auto
        clips: true
      - node_id: "2507:4076"
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
      - node_id: "2507:4079"
        name: 666aac9d63e28ae1e1034a96_Strategic-partnerships.svg
        type: FRAME
        w: 52
        h: 66
        position: absolute
        x: 1686
        y: 7089
        constraints: "h:min, v:center"
        direction: column
        w_sizing: auto
        h_sizing: auto
        clips: true
      - node_id: "2507:4080"
        name: Component 9
        type: FRAME
        w: 52
        h: 66
        direction: column
        justify: center
        align: center
        w_sizing: auto
        h_sizing: auto
        clips: true
      - node_id: "2526:1598"
        name: Group 1707480408
        type: GROUP
        w: 2008
        h: 408
      - node_id: "2325:3612"
        name: Property 1=Default
        type: COMPONENT
        w: 1769
        h: 174
        padding: "40"
        gap: 31
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: all
        direction: column
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: auto
        clips: true
      - node_id: "2325:3610"
        name: Get a personalized AI Blueprint before any commitment
        type: TEXT
        text: Get a personalized AI Blueprint before any commitment
        w: 1269
        h: 35
        fill: "#0E0E0E"
        font_size: 44
        font: Jura Bold
        line_height: 35px
      - node_id: "2526:1561"
        name: You see exactly what's possible for your business — free, before any engagement begins
        type: TEXT
        text: You see exactly what's possible for your business — free, before any engagement begins
        w: 1269
        h: 28
        fill: "#0E0E0E"
        font_size: 22
        font: Jura Medium
        line_height: 28px
      - node_id: "2335:4619"
        name: Line 375
        type: LINE
        w: 0
        h: 172
        stroke: "#000000"
        stroke_sides: all
        position: absolute
        x: 561
        y: 5817
        constraints: "h:min, v:center"
      - node_id: "2335:4624"
        name: Rectangle 161123982
        type: RECTANGLE
        w: 180
        h: 173
        fill: "#F9F9F9"
        position: absolute
        x: 381
        y: 5816
        constraints: "h:min, v:min"
      - node_id: "2325:3614"
        name: Property 1=Variant2
        type: COMPONENT
        w: 1769
        h: 174
        fill: "#E6FF2B"
        fill_ref: ac1
        fill_ref_type: color_style
        padding: "40"
        gap: 31
        stroke: "#9E9E9E"
        stroke_align: inside
        stroke_sides: all
        direction: column
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2325:3615"
        name: Get a personalized AI Blueprint before any commitment
        type: TEXT
        text: Get a personalized AI Blueprint before any commitment
        w: 1269
        h: 35
        fill: "#0E0E0E"
        font_size: 44
        font: Jura Bold
        line_height: 35px
      - node_id: "2325:3616"
        name: You see exactly what's possible for your business — free, before any engagement begins
        type: TEXT
        text: You see exactly what's possible for your business — free, before any engagement begins
        w: 1269
        h: 28
        fill: "#0E0E0E"
        font_size: 22
        font: Jura Medium
        line_height: 28px
      - node_id: "2325:3611"
        name: Default
        type: TEXT
        text: Default
        w: 150
        h: 28
        fill: "#0E0E0E"
        font_size: 42
        font: Jura Medium
        line_height: 28px
      - node_id: "2526:1568"
        name: Hover
        type: TEXT
        text: Hover
        w: 119
        h: 28
        fill: "#0E0E0E"
        font_size: 42
        font: Jura Medium
        line_height: 28px
      - node_id: "2507:3768"
        name: Property 1=Default
        type: COMPONENT
        w: 375
        h: 90
      - node_id: "2507:3731"
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
      - node_id: "2507:3732"
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
  - chunk_id: anatomy_6
    kind: anatomy
    item_count: 50
    items:
      - node_id: "2507:3733"
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
      - node_id: "2507:3734"
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
      - node_id: "2507:3770"
        name: Property 1=Variant2
        type: COMPONENT
        w: 375
        h: 90
      - node_id: "2507:3771"
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
      - node_id: "2507:3772"
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
      - node_id: "2507:3773"
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
      - node_id: "2507:3774"
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
      - node_id: "2507:2703"
        name: Property 1=Variant8
        type: COMPONENT
        w: 375
        h: 340
      - node_id: "2507:2694"
        name: Rectangle 161123946
        type: VECTOR
        w: 326
        h: 72
        fill: hsla(0, 0%, 0%, 0.09)
        blur: 54px
      - node_id: "2507:2695"
        name: Group 1707480407
        type: GROUP
        w: 418
        h: 298
      - node_id: "2507:2696"
        name: image 2465
        type: RECTANGLE
        w: 240
        h: 241
        fill: image
        fill_type: IMAGE
        image_hash: d260f5c88d148c2e41d65e51d943764b44d22230
      - node_id: "2507:2697"
        name: image 2444
        type: RECTANGLE
        w: 418
        h: 148
        fill: image
        fill_type: IMAGE
        image_hash: 0923cc5206400561f59286729eb946d0ec3cdcd2
      - node_id: "2507:2700"
        name: Subtract
        type: BOOLEAN_OPERATION
        w: 35
        h: 35
        fill: "#0E0E0E"
      - node_id: "2507:2705"
        name: Property 1=Variant2
        type: COMPONENT
        w: 375
        h: 340
      - node_id: "2507:2706"
        name: Rectangle 161123946
        type: VECTOR
        w: 326
        h: 72
        fill: hsla(0, 0%, 0%, 0.09)
        blur: 54px
      - node_id: "2507:2707"
        name: Group 1707480407
        type: GROUP
        w: 418
        h: 298
      - node_id: "2507:2708"
        name: image 2465
        type: RECTANGLE
        w: 240
        h: 241
        fill: image
        fill_type: IMAGE
        image_hash: e5e34cdd1926c1d8fc53b7ccf54601e7d71e7548
      - node_id: "2507:2709"
        name: image 2444
        type: RECTANGLE
        w: 418
        h: 148
        fill: image
        fill_type: IMAGE
        image_hash: 0923cc5206400561f59286729eb946d0ec3cdcd2
      - node_id: "2507:2712"
        name: Subtract
        type: BOOLEAN_OPERATION
        w: 35
        h: 35
        fill: "#0E0E0E"
      - node_id: "2507:2715"
        name: Property 1=Variant3
        type: COMPONENT
        w: 375
        h: 340
      - node_id: "2507:2716"
        name: Rectangle 161123946
        type: VECTOR
        w: 326
        h: 72
        fill: hsla(0, 0%, 0%, 0.09)
        blur: 54px
      - node_id: "2507:2717"
        name: Group 1707480407
        type: GROUP
        w: 418
        h: 298
      - node_id: "2507:2718"
        name: image 2465
        type: RECTANGLE
        w: 240
        h: 241
        fill: image
        fill_type: IMAGE
        image_hash: bc524140fba19785ee0d11dfa2afd279c22116c8
      - node_id: "2507:2719"
        name: image 2444
        type: RECTANGLE
        w: 418
        h: 148
        fill: image
        fill_type: IMAGE
        image_hash: 0923cc5206400561f59286729eb946d0ec3cdcd2
      - node_id: "2507:2722"
        name: Subtract
        type: BOOLEAN_OPERATION
        w: 35
        h: 35
        fill: "#0E0E0E"
      - node_id: "2507:2725"
        name: Property 1=Variant4
        type: COMPONENT
        w: 375
        h: 340
      - node_id: "2507:2726"
        name: Rectangle 161123946
        type: VECTOR
        w: 326
        h: 72
        fill: hsla(0, 0%, 0%, 0.09)
        blur: 54px
      - node_id: "2507:2727"
        name: Group 1707480407
        type: GROUP
        w: 418
        h: 298
      - node_id: "2507:2728"
        name: image 2465
        type: RECTANGLE
        w: 240
        h: 241
        fill: image
        fill_type: IMAGE
        image_hash: 9232dd279e1bbdcb551005cd60a20e8f677e6852
      - node_id: "2507:2729"
        name: image 2444
        type: RECTANGLE
        w: 418
        h: 148
        fill: image
        fill_type: IMAGE
        image_hash: 0923cc5206400561f59286729eb946d0ec3cdcd2
      - node_id: "2507:2732"
        name: Subtract
        type: BOOLEAN_OPERATION
        w: 35
        h: 35
        fill: "#0E0E0E"
      - node_id: "2526:1630"
        name: Property 1=Variant3
        type: COMPONENT
        w: 181
        h: 165
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2526:1631"
        name: 666aa5b019fc170dd5ab9fa9_ico-container.svg
        type: FRAME
        w: 181
        h: 165
        w_sizing: fixed
        h_sizing: auto
        clips: true
      - node_id: "2526:1632"
        name: Component 9
        type: FRAME
        w: 181
        h: 165
        direction: column
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: fixed
        clips: true
      - node_id: "2526:1635"
        name: 666aac9d63e28ae1e1034a96_Strategic-partnerships.svg
        type: FRAME
        w: 125
        h: 125
        position: absolute
        x: 1262
        y: 3866
        constraints: "h:min, v:scale"
        direction: column
        w_sizing: fixed
        h_sizing: fixed
        clips: true
      - node_id: "2526:1636"
        name: Component 9
        type: FRAME
        w: 125
        h: 125
        direction: column
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: fixed
        clips: true
      - node_id: "2526:1652"
        name: Property 1=Variant2
        type: COMPONENT
        w: 181
        h: 165
        direction: column
        w_sizing: fixed
        h_sizing: auto
      - node_id: "2526:1653"
        name: 666aa5b019fc170dd5ab9fa9_ico-container.svg
        type: FRAME
        w: 181
        h: 165
        w_sizing: fixed
        h_sizing: auto
        clips: true
      - node_id: "2526:1654"
        name: Component 9
        type: FRAME
        w: 181
        h: 165
        direction: column
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: fixed
        clips: true
      - node_id: "2526:1657"
        name: 666aac9d63e28ae1e1034a96_Strategic-partnerships.svg
        type: FRAME
        w: 125
        h: 125
        position: absolute
        x: 1263
        y: 4050
        constraints: "h:min, v:scale"
        direction: column
        w_sizing: fixed
        h_sizing: fixed
        clips: true
      - node_id: "2526:1658"
        name: Component 9
        type: FRAME
        w: 125
        h: 125
        direction: column
        justify: center
        align: center
        w_sizing: fixed
        h_sizing: fixed
        clips: true
      - node_id: "2526:1676"
        name: Property 1=Default
        type: COMPONENT
        w: 887
        h: 631
      - node_id: "2526:1677"
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
      - node_id: "2526:1678"
        name: Union
        type: VECTOR
        w: 314
        h: 312
        fill: "#F9F9F9"
        inner_shadow: 0px 4px 15px rgba(0,0,0,0.07)
      - node_id: "2526:1679"
        name: Rectangle 161123972
        type: RECTANGLE
        w: 364
        h: 364
        radius: 39
        stroke: "#D9D9D9"
        stroke_align: inside
        stroke_sides: all
      - node_id: "2526:1680"
        name: Rectangle 161123973
        type: RECTANGLE
        w: 428
        h: 428
        radius: 39
        stroke: hsla(0, 0%, 85%, 0.50)
        stroke_align: inside
        stroke_sides: all
      - node_id: "2526:1681"
        name: Rectangle 161123974
        type: RECTANGLE
        w: 482
        h: 482
        radius: 39
        stroke: hsla(0, 0%, 85%, 0.30)
        stroke_align: inside
        stroke_sides: all
      - node_id: "2526:1682"
        name: Group 1707480390
        type: GROUP
        w: 89
        h: 134
      - node_id: "2526:1695"
        name: "fluent:scan-table-20-regular"
        type: FRAME
        w: 44
        h: 44
        fill: "#E6FF2B"
        fill_ref: ac1
        fill_ref_type: color_style
        radius: 9
      - node_id: "2526:1697"
        name: Group 1707480392
        type: GROUP
        w: 85
        h: 134
  - chunk_id: anatomy_7
    kind: anatomy
    item_count: 50
    items:
      - node_id: "2526:1710"
        name: "fluent:scan-table-20-regular"
        type: FRAME
        w: 44
        h: 44
        fill: "#E6FF2B"
        fill_ref: ac1
        fill_ref_type: color_style
        radius: 9
      - node_id: "2526:1712"
        name: Group 1707480391
        type: GROUP
        w: 85
        h: 132
      - node_id: "2526:1725"
        name: "fluent:scan-table-20-regular"
        type: FRAME
        w: 44
        h: 44
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        radius: 9
      - node_id: "2526:1727"
        name: Group 1707480394
        type: GROUP
        w: 89
        h: 133
      - node_id: "2526:1740"
        name: "fluent:scan-table-20-regular"
        type: FRAME
        w: 44
        h: 44
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        radius: 9
      - node_id: "2526:1742"
        name: Property 1=Variant2
        type: COMPONENT
        w: 887
        h: 631
      - node_id: "2526:1743"
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
      - node_id: "2526:1744"
        name: Union
        type: VECTOR
        w: 314
        h: 312
        fill: "#F9F9F9"
        inner_shadow: 0px 4px 15px rgba(0,0,0,0.07)
      - node_id: "2526:1745"
        name: Rectangle 161123972
        type: RECTANGLE
        w: 364
        h: 364
        radius: 39
        stroke: "#D9D9D9"
        stroke_align: inside
        stroke_sides: all
      - node_id: "2526:1746"
        name: Rectangle 161123973
        type: RECTANGLE
        w: 428
        h: 428
        radius: 39
        stroke: hsla(0, 0%, 85%, 0.50)
        stroke_align: inside
        stroke_sides: all
      - node_id: "2526:1747"
        name: Rectangle 161123974
        type: RECTANGLE
        w: 482
        h: 482
        radius: 39
        stroke: hsla(0, 0%, 85%, 0.30)
        stroke_align: inside
        stroke_sides: all
      - node_id: "2526:1748"
        name: Group 1707480391
        type: GROUP
        w: 85
        h: 132
      - node_id: "2526:1761"
        name: "fluent:scan-table-20-regular"
        type: FRAME
        w: 44
        h: 44
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        radius: 9
      - node_id: "2526:1763"
        name: Group 1707480390
        type: GROUP
        w: 89
        h: 134
      - node_id: "2526:1776"
        name: "fluent:scan-table-20-regular"
        type: FRAME
        w: 44
        h: 44
        fill: "#E6FF2B"
        fill_ref: ac1
        fill_ref_type: color_style
        radius: 9
      - node_id: "2526:1778"
        name: Group 1707480392
        type: GROUP
        w: 85
        h: 134
      - node_id: "2526:1791"
        name: "fluent:scan-table-20-regular"
        type: FRAME
        w: 44
        h: 44
        fill: "#E6FF2B"
        fill_ref: ac1
        fill_ref_type: color_style
        radius: 9
      - node_id: "2526:1793"
        name: Group 1707480394
        type: GROUP
        w: 89
        h: 133
      - node_id: "2526:1806"
        name: "fluent:scan-table-20-regular"
        type: FRAME
        w: 44
        h: 44
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        radius: 9
      - node_id: "2526:1808"
        name: Property 1=Variant3
        type: COMPONENT
        w: 887
        h: 631
      - node_id: "2526:1809"
        name: Frame 1707480417
        type: FRAME
        w: 749
        h: 382
        fill: "#F9F9F9"
        radius: 50
      - node_id: "2526:1810"
        name: Union
        type: VECTOR
        w: 314
        h: 312
        fill: "#F9F9F9"
        inner_shadow: 0px 4px 15px rgba(0,0,0,0.07)
      - node_id: "2526:1811"
        name: Rectangle 161123972
        type: RECTANGLE
        w: 364
        h: 364
        radius: 39
        stroke: "#D9D9D9"
        stroke_align: inside
        stroke_sides: all
      - node_id: "2526:1812"
        name: Rectangle 161123973
        type: RECTANGLE
        w: 428
        h: 428
        radius: 39
        stroke: hsla(0, 0%, 85%, 0.50)
        stroke_align: inside
        stroke_sides: all
      - node_id: "2526:1813"
        name: Rectangle 161123974
        type: RECTANGLE
        w: 482
        h: 482
        radius: 39
        stroke: hsla(0, 0%, 85%, 0.30)
        stroke_align: inside
        stroke_sides: all
      - node_id: "2526:1814"
        name: Group 1707480391
        type: GROUP
        w: 85
        h: 132
      - node_id: "2526:1827"
        name: "fluent:scan-table-20-regular"
        type: FRAME
        w: 44
        h: 44
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        radius: 9
      - node_id: "2526:1829"
        name: Group 1707480390
        type: GROUP
        w: 89
        h: 134
      - node_id: "2526:1842"
        name: "fluent:scan-table-20-regular"
        type: FRAME
        w: 44
        h: 44
        fill: "#E6FF2B"
        fill_ref: ac1
        fill_ref_type: color_style
        radius: 9
      - node_id: "2526:1844"
        name: Group 1707480392
        type: GROUP
        w: 85
        h: 134
      - node_id: "2526:1857"
        name: "fluent:scan-table-20-regular"
        type: FRAME
        w: 44
        h: 44
        fill: "#E6FF2B"
        fill_ref: ac1
        fill_ref_type: color_style
        radius: 9
      - node_id: "2526:1859"
        name: Group 1707480394
        type: GROUP
        w: 89
        h: 133
      - node_id: "2526:1872"
        name: "fluent:scan-table-20-regular"
        type: FRAME
        w: 44
        h: 44
        fill: "#004D43"
        fill_ref: ac2
        fill_ref_type: color_style
        radius: 9
      - node_id: "2507:2927"
        name: "Object [Vectorized]"
        type: FRAME
        w: 54
        h: 78
        direction: column
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "2507:2942"
        name: "Object [Vectorized]"
        type: FRAME
        w: 54
        h: 78
        direction: column
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "2507:2957"
        name: "Object [Vectorized]"
        type: FRAME
        w: 54
        h: 78
        direction: column
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "2507:2972"
        name: "Object [Vectorized]"
        type: FRAME
        w: 54
        h: 78
        direction: column
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "2507:2993"
        name: "Object [Vectorized]"
        type: FRAME
        w: 54
        h: 78
        direction: column
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "2507:3008"
        name: "Object [Vectorized]"
        type: FRAME
        w: 54
        h: 78
        direction: column
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "2507:3023"
        name: "Object [Vectorized]"
        type: FRAME
        w: 54
        h: 78
        direction: column
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "2507:3038"
        name: "Object [Vectorized]"
        type: FRAME
        w: 54
        h: 78
        direction: column
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "2507:3059"
        name: "Object [Vectorized]"
        type: FRAME
        w: 54
        h: 78
        direction: column
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "2507:3074"
        name: "Object [Vectorized]"
        type: FRAME
        w: 54
        h: 78
        direction: column
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "2507:3089"
        name: "Object [Vectorized]"
        type: FRAME
        w: 54
        h: 78
        direction: column
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "2507:3104"
        name: "Object [Vectorized]"
        type: FRAME
        w: 54
        h: 78
        direction: column
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "2521:1476"
        name: Frame 1707480480
        type: FRAME
        w: 51
        h: 28
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
      - node_id: "2521:1482"
        name: Frame 1707480481
        type: FRAME
        w: 51
        h: 28
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
      - node_id: "2521:1485"
        name: Frame 1707480482
        type: FRAME
        w: 51
        h: 28
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
      - node_id: "2521:1488"
        name: Frame 1707480483
        type: FRAME
        w: 51
        h: 28
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
      - node_id: "2521:1491"
        name: Frame 1707480484
        type: FRAME
        w: 51
        h: 28
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
  - chunk_id: anatomy_8
    kind: anatomy
    item_count: 20
    items:
      - node_id: "2521:1494"
        name: Frame 1707480485
        type: FRAME
        w: 51
        h: 28
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
      - node_id: "2521:1497"
        name: Frame 1707480486
        type: FRAME
        w: 51
        h: 28
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
      - node_id: "2521:1500"
        name: Frame 1707480487
        type: FRAME
        w: 51
        h: 28
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
      - node_id: "2521:1451"
        name: Frame 1707480477
        type: FRAME
        w: 237
        h: 40
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
      - node_id: "2521:1460"
        name: Frame 1707480478
        type: FRAME
        w: 237
        h: 40
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
      - node_id: "2521:1468"
        name: Frame 1707480479
        type: FRAME
        w: 237
        h: 40
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
      - node_id: "2521:1524"
        name: Frame 1707480488
        type: FRAME
        w: 298
        h: 144
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
      - node_id: "2521:1529"
        name: "lets-icons:img-fill"
        type: FRAME
        w: 75
        h: 75
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "2521:1538"
        name: Frame 1707480489
        type: FRAME
        w: 227
        h: 60
        direction: column
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
      - node_id: "2521:1539"
        name: Frame 1707480490
        type: FRAME
        w: 227
        h: 60
        direction: column
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
      - node_id: "2521:1540"
        name: Frame 1707480491
        type: FRAME
        w: 227
        h: 60
        direction: column
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
      - node_id: "2521:1560"
        name: Frame 1707480493
        type: FRAME
        w: 100
        h: 100
        direction: column
        justify: space-between
        w_sizing: fixed
        h_sizing: fixed
        inferred: true
      - node_id: "2507:4059"
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
      - node_id: "2507:4081"
        name: Component 2
        type: FRAME
        w: 52
        h: 66
        direction: column
        justify: space-between
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "2526:1637"
        name: Component 2
        type: FRAME
        w: 125
        h: 125
        direction: column
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "2526:1659"
        name: Component 2
        type: FRAME
        w: 125
        h: 125
        direction: column
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "2526:1683"
        name: "Object [Vectorized]"
        type: FRAME
        w: 73
        h: 105
        direction: column
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "2526:1698"
        name: "Object [Vectorized]"
        type: FRAME
        w: 73
        h: 105
        direction: column
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "2526:1713"
        name: "Object [Vectorized]"
        type: FRAME
        w: 73
        h: 105
        direction: column
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
      - node_id: "2526:1728"
        name: "Object [Vectorized]"
        type: FRAME
        w: 73
        h: 105
        direction: column
        w_sizing: fixed
        h_sizing: fixed
        clips: true
        inferred: true
```

<!-- chars: 91609 | ~tokens: 18727 -->