# Data Model: Add Images to Homepage Middle Section

## Entities

### Homepage Images
- **Fields**: image_url, alt_text, caption, width, height, file_size, format, description
- **Relationships**: Associated with Homepage Layout
- **Validation**: Must have valid image format (JPEG, PNG, WebP), alt_text required, dimensions specified
- **State transitions**: planned → optimized → implemented → published

### Image Metadata
- **Fields**: alt_text, caption, description, accessibility_labels, tags
- **Relationships**: Attached to Homepage Images; Supports accessibility features
- **Validation**: Alt text must be descriptive and under 125 characters
- **State transitions**: created → reviewed → approved → published

### Responsive Display
- **Fields**: breakpoints, image_sizes, loading_strategy, fallback_content
- **Relationships**: Configures how Homepage Images display across devices
- **Validation**: Must support mobile, tablet, and desktop breakpoints
- **State transitions**: designed → tested → optimized → deployed

## Relationships

```
Homepage Layout --[contains]--> Homepage Images
Homepage Images --[has]--> Image Metadata
Homepage Images --[uses]--> Responsive Display
Responsive Display --[affects]--> Homepage Layout
```