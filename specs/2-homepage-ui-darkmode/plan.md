# Implementation Plan: Homepage UI & Dark Mode

**Branch**: `2-homepage-ui-darkmode` | **Date**: 2025-12-30 | **Spec**: [specs/2-homepage-ui-darkmode/spec.md](./spec.md)

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Update the homepage UI to match the module page design and implement a dark mode toggle feature. The implementation will use Docusaurus theming capabilities and CSS custom properties to create a consistent user experience across the educational platform while providing accessibility options through theme switching.

## Technical Context

**Language/Version**: Markdown for content, JavaScript/React for Docusaurus framework, CSS for styling
**Primary Dependencies**: Docusaurus v3.1.0, React v18, Node.js >=18.0, CSS custom properties for theming
**Storage**: Browser's localStorage for theme preference persistence
**Testing**: Manual verification of UI consistency and theme switching functionality
**Target Platform**: Web-based educational content accessible via browsers, GitHub Pages deployment
**Project Type**: Web - extends existing Docusaurus documentation site
**Performance Goals**: Fast theme switching (<100ms), maintain page load times under 3 seconds
**Constraints**: Must maintain accessibility standards (WCAG contrast ratios), support responsive design, work across modern browsers
**Scale/Scope**: Single homepage UI update with dark mode functionality for all users

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Verify the following constitution principles are addressed in this plan:
- Spec-Kit Plus + Claude Code Development: Plan follows structured specifications and AI-assisted coding practices ✓
- Accurate, Modular Content Architecture: Architecture supports modular, deployable content ✓
- RAG-Only Response Constraint: System will be designed to answer ONLY from book text content ✓
- Specified Tech Stack Adherence: Plan uses Docusaurus for educational content (as per existing structure) ✓
- Performance and Latency Requirements: Architecture supports fast content delivery ✓
- Clean, Documented Code Standards: All components will be well-documented and follow best practices ✓

## Project Structure

### Documentation (this feature)

```text
specs/2-homepage-ui-darkmode/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)

```text
frontend_book/
├── src/
│   └── css/
│       └── custom.css           # Custom styles for homepage and dark mode
├── src/
│   └── components/
│       └── ThemeToggle/         # React component for theme switching
│           ├── ThemeToggle.js
│           └── ThemeToggle.module.css
├── docusaurus.config.js         # Updated to support theme configuration
├── src/
│   └── pages/
│       └── index.js             # Updated homepage to match module page styles
└── static/
    └── img/                     # Any new images needed for consistent design
```

**Structure Decision**: Extending the existing Docusaurus structure by adding custom CSS for theming, a React component for theme toggling, and updating the homepage to match module page design patterns.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None identified | | |