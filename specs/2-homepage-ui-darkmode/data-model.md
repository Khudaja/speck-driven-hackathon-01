# Data Model: Homepage UI & Dark Mode

## Entities

### Theme Preference
- **Fields**: theme_type (light|dark), last_updated, user_agent_info
- **Relationships**: Associated with User session
- **Validation**: theme_type must be one of [light, dark]
- **State transitions**: initial → user_selected → persisted

### Homepage Layout
- **Fields**: header_config, navigation_items, content_sections, footer_config, theme_support
- **Relationships**: Uses Navigation Elements; Contains Content Components
- **Validation**: Must include all required sections for consistency with module pages
- **State transitions**: default → customized → published

### Navigation Elements
- **Fields**: element_type, styling_config, accessibility_labels, theme_variants
- **Relationships**: Part of Homepage Layout; Connected to Page Routes
- **Validation**: Must maintain consistent behavior across themes
- **State transitions**: created → styled → tested → deployed

## Relationships

```
User --[sets]--> Theme Preference
Theme Preference --[affects]--> Homepage Layout
Homepage Layout --[contains]--> Navigation Elements
Navigation Elements --[links_to]--> Page Routes
```