export const codeSnippets = [
  {
    language: "plaintext",
    code: `This is a plain text example. No syntax highlighting.`,
  },
  {
    language: "javascript",
    code: `const greet = (name) => {\n  console.log(\`Hello, \${name}!\`);\n};\ngreet("World");`,
  },
  {
    language: "typescript",
    code: `function add(a: number, b: number): number {\n  return a + b;\n}\nconsole.log(add(5, 3));`,
  },
  {
    language: "jsx",
    code: `function App() {\n  return <h1>Hello React</h1>;\n}`,
  },
  {
    language: "tsx",
    code: `type Props = { title: string };\n\nfunction Header({ title }: Props) {\n  return <h1>{title}</h1>;\n}`,
  },
  {
    language: "html",
    code: `<!DOCTYPE html>\n<html>\n  <head><title>Example</title></head>\n  <body><h1>Hello World</h1></body>\n</html>`,
  },
  {
    language: "css",
    code: `body {\n  font-family: sans-serif;\n  background-color: #f0f0f0;\n}`,
  },
  {
    language: "scss",
    code: `$primary: #3498db;\n\n.button {\n  background-color: $primary;\n  color: white;\n}`,
  },
  {
    language: "less",
    code: `@primary: #f60;\n\n.box {\n  background-color: @primary;\n  padding: 10px;\n}`,
  },
  {
    language: "python",
    code: `def greet(name):\n  print(f"Hello, {name}!")\n\ngreet("World")`,
  },
  {
    language: "java",
    code: `public class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}`,
  },
  {
    language: "c",
    code: `#include <stdio.h>\n\nint main() {\n  printf("Hello, World!\\n");\n  return 0;\n}`,
  },
  {
    language: "cpp",
    code: `#include <iostream>\n\nint main() {\n  std::cout << "Hello, World!" << std::endl;\n  return 0;\n}`,
  },
  {
    language: "csharp",
    code: `using System;\n\nclass Program {\n  static void Main() {\n    Console.WriteLine("Hello, World!");\n  }\n}`,
  },
  {
    language: "go",
    code: `package main\nimport "fmt"\n\nfunc main() {\n  fmt.Println("Hello, World!")\n}`,
  },
  {
    language: "rust",
    code: `fn main() {\n  println!("Hello, World!");\n}`,
  },
  {
    language: "php",
    code: `<?php\necho "Hello, World!";\n?>`,
  },
  {
    language: "ruby",
    code: `def greet(name)\n  puts "Hello, #{name}!"\nend\ngreet("World")`,
  },
  {
    language: "swift",
    code: `let name = "World"\nprint("Hello, \\(name)!")`,
  },
  {
    language: "markdown",
    code: `# Hello World\n\nThis is a **Markdown** snippet with _italic_, **bold**, and \`code\`.`,
  },
  {
    language: "json",
    code: `{\n  "name": "John",\n  "age": 30,\n  "isStudent": false\n}`,
  },
  {
    language: "sql",
    code: `SELECT * FROM users WHERE active = 1;`,
  },
  {
    language: "xml",
    code: `<note>\n  <to>User</to>\n  <message>Hello, World!</message>\n</note>`,
  },
  {
    language: "yaml",
    code: `name: John Doe\nage: 30\nis_student: false`,
  },
  {
    language: "shell",
    code: `#!/bin/bash\necho "Hello, World!"`,
  },
];
