export type Phase = "Basics" | "Intermediate" | "Advanced";

export interface Concept {
    id: string;
    title: string;
    description: string;
    phase: Phase;
    icon?: string;
}

export const concepts: Concept[] = [
    {
        id: "primitives",
        title: "Primitives & Basic Types",
        description: "Understand the building blocks: string, number, boolean, and the 'any' trap.",
        phase: "Basics",
    },
    {
        id: "functions",
        title: "Functions & Signatures",
        description: "Learn how to type function arguments, return values, and callbacks.",
        phase: "Basics",
    },
    {
        id: "interfaces-vs-types",
        title: "Interfaces vs Types",
        description: "The age-old debate. When to use which and how they differ.",
        phase: "Basics",
    },
    {
        id: "unions-intersections",
        title: "Unions & Intersections",
        description: "Combine types to create powerful and flexible data structures.",
        phase: "Intermediate",
    },
    {
        id: "type-guards",
        title: "Narrowing & Type Guards",
        description: "Master control flow analysis to write safer code.",
        phase: "Intermediate",
    },
    {
        id: "generics",
        title: "Generics",
        description: "Write reusable code that works with any data type.",
        phase: "Advanced",
    },
    {
        id: "utility-types",
        title: "Utility Types",
        description: "Partial, Pick, Omit, and other built-in tools to transform types.",
        phase: "Advanced",
    },
];
