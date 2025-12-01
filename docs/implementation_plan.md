# Implementation Plan - Phase 1: Foundation

## Goal Description
Initialize the React project with **Tailwind CSS** and **Shadcn UI** for a modern, accessible design system. Set up the basic routing and layout structure.

## User Review Required
> [!NOTE]
> I have switched to **Tailwind CSS + Shadcn UI** as requested. This will provide a robust, accessible component library and rapid styling capabilities.

## Proposed Changes

### Dependencies
*   [NEW] `tailwindcss`, `postcss`, `autoprefixer`: Core styling engine.
*   [NEW] `shadcn-ui`: Component library CLI.
*   [NEW] `react-router-dom`: For navigation.
*   [NEW] `framer-motion`: For animations (compatible with Tailwind).
*   [NEW] `lucide-react`: Icons.
*   [NEW] `@monaco-editor/react`: Code editor.

### Configuration
#### [NEW] `components.json`
Shadcn UI configuration file.

#### [NEW] `tailwind.config.js`
Tailwind configuration with custom colors/fonts if needed.

#### [MODIFY] `src/index.css`
Tailwind directives and global styles.

### Project Structure
#### [NEW] `src/components/ui/`
Directory for Shadcn components (Button, Card, etc.).

#### [NEW] `src/layouts/MainLayout.tsx`
Main wrapper with Navbar/Footer using Tailwind classes.

#### [NEW] `src/pages/Home.tsx`
Landing page using Shadcn components.

#### [NEW] `src/pages/Learn.tsx`
Curriculum overview.

#### [NEW] `src/pages/Playground.tsx`
Editor environment.

#### [MODIFY] `src/App.tsx`
Router setup.

## Verification Plan

### Automated Tests
*   Run `npm run build`.
*   Run `npx shadcn@latest check` (if applicable) or verify component installation.

### Manual Verification
*   Start dev server (`npm run dev`).
*   Verify Tailwind styles are applied (check for utility classes working).
*   Verify Shadcn components render correctly.
*   Check routing between pages.
