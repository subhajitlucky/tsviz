export type Phase = "Basics" | "Intermediate" | "Advanced";

export interface Concept {
    id: string;
    title: string;
    description: string;
    phase: Phase;
    icon?: string;
    longDescription?: string;
    syntax?: string;
    exampleCode?: string;
}

export const concepts: Concept[] = [
    {
        id: "primitives",
        title: "Primitives & Basic Types",
        description: "Understand the building blocks: string, number, boolean, and the 'any' trap.",
        phase: "Basics",
        longDescription: `Primitives are the simplest, most fundamental data types in TypeScript. They are immutable (cannot be changed) and passed by value in memory.

**The 7 Primitive Types:**

• **string** - Textual data ("hello", 'world', \`template\`)
• **number** - All numeric values (integers, floats, Infinity, NaN)
• **boolean** - true or false
• **null** - Intentional absence of value
• **undefined** - Variable declared but not assigned
• **symbol** - Unique identifier (advanced)
• **bigint** - Large integers beyond Number.MAX_SAFE_INTEGER

**Key Characteristics:**
✓ Stored directly in the stack (fast access)
✓ Immutable - operations create new values
✓ Compared by value, not reference
✓ Cannot have properties (unlike objects)`,
        syntax: "let variableName: type = value;",
        exampleCode: `// ===== STRING =====
let username: string = "Alice";
let message: string = 'Hello';
let templateStr: string = \`User: \${username}\`;

// ===== NUMBER =====
let age: number = 25;
let price: number = 99.99;
let hex: number = 0xFF;        // 255
let binary: number = 0b1010;   // 10
let infinity: number = Infinity;

// ===== BOOLEAN =====
let isActive: boolean = true;
let hasPermission: boolean = false;

// ===== NULL & UNDEFINED =====
let data: null = null;           // Intentionally empty
let value: undefined = undefined; // Not yet assigned

// ===== TYPE INFERENCE (TypeScript guesses!) =====
let auto = "I'm a string!";  // TypeScript knows it's string
let count = 42;               // TypeScript knows it's number

// ===== THE 'ANY' TRAP (AVOID!) =====
let dangerous: any = "text";
dangerous = 42;              // No error, but defeats TypeScript!
dangerous.nonExistent();     // Compiles, but crashes at runtime!

// ===== COMMON MISTAKES =====
// ❌ Don't do this:
let bad: string = null;      // Error in strict mode
let wrong: number = "42";    // Error: string ≠ number

// ✅ Do this instead:
let safe: string | null = null;  // Union type
let correct: number = parseInt("42");`,
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
        id: "type-inference",
        title: "Type Inference",
        description: "Understand how TS guesses types.",
        phase: "Basics",
    },
    {
        id: "literal-types",
        title: "Literal Types & Enums",
        description: "Working with specific values and constants.",
        phase: "Basics",
    },
    {
        id: "tuples",
        title: "Tuples",
        description: "Fixed-length arrays.",
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
        id: "classes",
        title: "Classes & OOP",
        description: "Access modifiers, interfaces with classes, abstract classes.",
        phase: "Intermediate",
    },
    {
        id: "modules",
        title: "Modules & Namespaces",
        description: "Imports, exports, and namespaces.",
        phase: "Intermediate",
    },
    {
        id: "async-await",
        title: "Async/Await",
        description: "Typing Promises and async functions.",
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
    {
        id: "mapped-types",
        title: "Mapped Types",
        description: "Creating new types from existing ones (keyof, in).",
        phase: "Advanced",
    },
    {
        id: "conditional-types",
        title: "Conditional Types",
        description: "Logic within the type system.",
        phase: "Advanced",
    },
    {
        id: "template-literals",
        title: "Template Literal Types",
        description: "String manipulation at the type level.",
        phase: "Advanced",
    },
];
