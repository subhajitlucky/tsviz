# Vision: TypeScript Visualized

## What to Include
To build a world-class learning site for TypeScript, we need to go beyond static text.

1.  **Interactive Playground**:
    *   A full-featured code editor (Monaco) embedded directly in the browser.
    *   Instant feedback on type errors.
    *   Ability to run code and see output.

2.  **The Visualizer (The "Wow" Factor)**:
    *   **Memory Graph**: Visually distinguish between the **Stack** (primitives, function calls) and the **Heap** (objects, arrays). Show arrows for references to explain concepts like mutation vs. reassignment.
    *   **Execution Flow**: Step-by-step execution highlighting.
    *   **Type Erasure**: A toggle to show "TypeScript Source" vs "Compiled JavaScript" to demystify what actually runs in the browser.

3.  **Curriculum Structure**:
    *   **Basics**: Primitives, Functions, Interfaces vs Types.
    *   **Intermediate**: Unions, Intersections, Type Guards.
    *   **Advanced**: Generics, Mapped Types, Utility Types.
    *   **Mental Models**: Visual metaphors for complex topics (e.g., "Types as Sets").

## Learner Expectations
As a learner, I expect:
*   **Zero Friction**: No setup. I want to learn, not configure Webpack.
*   **"Aha!" Moments**: Don't just tell me `const x = { a: 1 }` is an object. Show me the memory address and the reference.
*   **Visual Clarity**: Clean, modern design that focuses on the code and the concept.
*   **Interactive Challenges**: "Fix this type error" puzzles are more engaging than just reading.
*   **Performance**: The site should feel instant.

## Design Philosophy
*   **Modern & Premium**: Glassmorphism, smooth transitions, and a refined color palette (Deep Blues, Neon Accents for code).
*   **Dynamic**: The interface should react to the code.
