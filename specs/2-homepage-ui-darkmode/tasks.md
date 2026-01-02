# Tasks: Homepage UI & Dark Mode

**Feature**: Homepage UI & Dark Mode
**Branch**: `2-homepage-ui-darkmode`
**Created**: 2025-12-30
**Spec**: [specs/2-homepage-ui-darkmode/spec.md](./spec.md)

## Implementation Strategy

**MVP Scope**: Complete User Story 1 (Homepage UI Consistency) as the minimum viable product, providing a consistent user experience between homepage and module pages.

**Delivery Approach**: Incremental delivery with each user story building on the previous one, following the priority order (P1, P2, P3).

## Dependencies

- **User Story 2** (Dark Mode Toggle) can be implemented independently but benefits from consistent UI foundation from **User Story 1**
- **User Story 3** (Responsive Design) applies to all previous stories and should be validated throughout implementation

## Parallel Execution Examples

- CSS custom properties implementation can run in parallel with React component development
- Theme toggle functionality can be developed in parallel with UI consistency updates
- Responsive design testing can occur throughout all phases

---

## Phase 1: Setup Tasks

- [X] T001 Create ThemeToggle component directory (frontend_book/src/components/ThemeToggle/)
- [X] T002 Set up project structure per implementation plan (frontend_book/src/css/custom.css)
- [X] T003 Verify Docusaurus development environment is working

## Phase 2: Foundational Tasks

- [X] T004 Define CSS custom properties for both light and dark themes (frontend_book/src/css/custom.css)
- [X] T005 Research module page design patterns to understand consistency requirements
- [X] T006 Create backup of current homepage for rollback capability (frontend_book/src/pages/index.js.backup)

## Phase 3: [US1] Homepage UI Consistency (Priority: P1)

**Story Goal**: Students and educators visiting the homepage see a consistent UI design that matches the module pages.

**Independent Test**: Students can navigate from the homepage to any module page without experiencing jarring visual differences in layout, typography, or navigation patterns.

**Tasks**:

- [X] T007 [P] [US1] Analyze module page layout and design elements for comparison (all module pages)
- [X] T008 [P] [US1] Update homepage layout to match module page patterns (frontend_book/src/pages/index.js)
- [X] T009 [P] [US1] Apply consistent typography between homepage and module pages (frontend_book/src/css/custom.css)
- [X] T010 [P] [US1] Implement consistent spacing and padding patterns (frontend_book/src/css/custom.css)
- [X] T011 [P] [US1] Update navigation elements to match module page patterns (frontend_book/src/pages/index.js)
- [X] T012 [US1] Validate UI consistency with existing module pages
- [X] T013 [US1] Test homepage navigation patterns match module page patterns
- [X] T014 [US1] Ensure all interactive elements match module page styles

## Phase 4: [US2] Dark Mode Toggle (Priority: P2)

**Story Goal**: Students can switch between light and dark themes on the homepage to accommodate different lighting conditions and personal preferences.

**Independent Test**: Students can toggle between light and dark themes on the homepage and the setting persists across sessions.

**Tasks**:

- [X] T015 [P] [US2] Create ThemeToggle React component (frontend_book/src/components/ThemeToggle/ThemeToggle.js)
- [X] T016 [P] [US2] Add theme toggle styles with appropriate contrast (frontend_book/src/components/ThemeToggle/ThemeToggle.module.css)
- [X] T017 [P] [US2] Implement theme persistence using localStorage (frontend_book/src/components/ThemeToggle/ThemeToggle.js)
- [X] T018 [P] [US2] Add theme toggle to homepage header (frontend_book/src/pages/index.js)
- [X] T019 [US2] Test theme switching functionality works correctly
- [X] T020 [US2] Verify theme preference persists across browser sessions
- [X] T021 [US2] Implement smooth 300ms transitions for theme switching (frontend_book/src/css/custom.css)
- [X] T022 [US2] Validate all interactive elements remain functional in both themes

## Phase 5: [US3] Responsive Design (Priority: P3)

**Story Goal**: The updated homepage UI and dark mode features work seamlessly across different devices and screen sizes.

**Independent Test**: Students can access the homepage and use dark mode features on desktop, tablet, and mobile devices with appropriate layouts and functionality.

**Tasks**:

- [X] T023 [P] [US3] Test homepage UI consistency on mobile devices (frontend_book/src/css/custom.css)
- [X] T024 [P] [US3] Test homepage UI consistency on tablet devices (frontend_book/src/css/custom.css)
- [X] T025 [P] [US3] Validate responsive navigation works correctly (frontend_book/src/pages/index.js)
- [X] T026 [P] [US3] Test dark mode functionality on mobile devices (frontend_book/src/components/ThemeToggle/ThemeToggle.js)
- [X] T027 [US3] Verify all interactive elements maintain accessibility on small screens
- [X] T028 [US3] Test theme toggle visibility and functionality across all screen sizes
- [X] T029 [US3] Validate responsive breakpoints match module page patterns

## Phase 6: Polish & Cross-Cutting Concerns

- [X] T030 Update docusaurus.config.js to support theme configuration (frontend_book/docusaurus.config.js)
- [X] T031 Test WCAG contrast ratios in both themes meet AA standards
- [X] T032 Validate accessibility features work with screen readers in both themes
- [X] T033 Test browser compatibility across modern browsers (Chrome, Firefox, Safari, Edge)
- [X] T034 Test performance: ensure page load times remain under 3 seconds
- [X] T035 Test theme switching performance: ensure transitions are fast (<100ms)
- [X] T036 Update documentation to reflect new theme functionality
- [X] T037 Perform final user acceptance testing for all features