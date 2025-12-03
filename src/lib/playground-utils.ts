/**
 * Playground utilities for TypeScript compilation and code execution
 * 
 * This module provides utilities for:
 * - TypeScript code compilation
 * - Error parsing and formatting
 * - Code execution simulation
 */

export interface CompilationResult {
  success: boolean;
  output?: string;
  errors: CompilationError[];
  warnings: CompilationError[];
}

export interface CompilationError {
  message: string;
  line?: number;
  column?: number;
  code?: string;
}

/**
 * Example code snippets for the playground
 */
export const exampleSnippets = {
  basic: {
    name: "Basic Types",
    code: `// Basic TypeScript types
let name: string = "TypeScript";
let age: number = 10;
let isActive: boolean = true;

console.log(\`Name: \${name}, Age: \${age}, Active: \${isActive}\`);`,
  },
  functions: {
    name: "Functions",
    code: `// Function with type annotations
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

// Arrow function
const add = (a: number, b: number): number => {
  return a + b;
};

console.log(greet("World"));
console.log(\`Sum: \${add(5, 3)}\`);`,
  },
  interfaces: {
    name: "Interfaces",
    code: `// Interface definition
interface User {
  id: number;
  name: string;
  email: string;
  isActive?: boolean; // Optional property
}

// Using the interface
const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  isActive: true
};

console.log(user);`,
  },
  classes: {
    name: "Classes",
    code: `// Class with constructor and methods
class Animal {
  private name: string;
  
  constructor(name: string) {
    this.name = name;
  }
  
  public speak(): void {
    console.log(\`\${this.name} makes a sound\`);
  }
}

class Dog extends Animal {
  public speak(): void {
    console.log(\`\${this.name} barks\`);
  }
}

const dog = new Dog("Buddy");
dog.speak();`,
  },
  generics: {
    name: "Generics",
    code: `// Generic function
function identity<T>(arg: T): T {
  return arg;
}

// Generic class
class Box<T> {
  private value: T;
  
  constructor(value: T) {
    this.value = value;
  }
  
  getValue(): T {
    return this.value;
  }
}

const numberBox = new Box<number>(42);
const stringBox = new Box<string>("Hello");

console.log(numberBox.getValue());
console.log(stringBox.getValue());`,
  },
  async: {
    name: "Async/Await",
    code: `// Async function example
async function fetchData(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 1000);
  });
}

async function main() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();`,
  },
};

/**
 * Simple TypeScript syntax checker
 * This is a basic implementation that checks for common syntax errors
 * For production, you'd want to use the actual TypeScript compiler API
 */
export function checkTypeScriptSyntax(code: string): CompilationResult {
  const errors: CompilationError[] = [];
  const warnings: CompilationError[] = [];
  
  const lines = code.split('\n');
  
  // Basic syntax checks
  lines.forEach((line, index) => {
    const lineNum = index + 1;
    
    // Check for unclosed strings
    const stringMatches = line.match(/["'`]/g);
    if (stringMatches && stringMatches.length % 2 !== 0) {
      errors.push({
        message: "Unclosed string literal",
        line: lineNum,
        column: line.indexOf(stringMatches[0]) + 1,
      });
    }
    
    // Check for common TypeScript errors
    if (line.includes('any') && !line.includes('//')) {
      warnings.push({
        message: "Consider using a more specific type instead of 'any'",
        line: lineNum,
      });
    }
  });
  
  // Try to execute the code (simulated)
  let output = '';
  try {
    // In a real implementation, you'd use TypeScript compiler API
    // For now, we'll simulate execution
    output = simulateExecution(code);
  } catch (error) {
    errors.push({
      message: error instanceof Error ? error.message : String(error),
    });
  }
  
  return {
    success: errors.length === 0,
    output,
    errors,
    warnings,
  };
}

/**
 * Simulates code execution by extracting console.log statements
 * In a real implementation, you'd use TypeScript compiler + runtime
 */
function simulateExecution(code: string): string {
  const output: string[] = [];
  const lines = code.split('\n');
  
  lines.forEach((line) => {
    // Extract console.log statements
    const consoleMatch = line.match(/console\.log\((.+)\)/);
    if (consoleMatch) {
      try {
        // Simple evaluation (very basic, not safe for production)
        const expression = consoleMatch[1];
        // Replace template literals
        const evaluated = expression
          .replace(/\$\{([^}]+)\}/g, (_, expr) => {
            // Try to evaluate the expression
            try {
              return String(eval(expr.trim()));
            } catch {
              return `\${${expr}}`;
            }
          })
          .replace(/`/g, '')
          .replace(/"/g, '')
          .replace(/'/g, '');
        
        output.push(evaluated);
      } catch (error) {
        output.push(`[Error evaluating: ${consoleMatch[1]}]`);
      }
    }
  });
  
  return output.length > 0 ? output.join('\n') : 'No output';
}

/**
 * Format error message for display
 */
export function formatError(error: CompilationError): string {
  if (error.line && error.column) {
    return `Line ${error.line}, Column ${error.column}: ${error.message}`;
  } else if (error.line) {
    return `Line ${error.line}: ${error.message}`;
  }
  return error.message;
}

