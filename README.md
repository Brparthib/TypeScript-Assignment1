## "🎯 Interview Questions 💻"

### 1. What are some differences between interfaces and types in TypeScript?

Answer: In Typescript interface and type both are user for define the type. But both has some differences between them.

1. interface use to define object structure.

   Example: interface

   ```bash
       interface Person {
           name: string;
           age: number;
           contactNo?: string; // Optional property
       }

       const teacher1: Person = {
           name: "Mrs. Teacher",
           age: 35,
           contactNo: "01234567891",
       }

       const student1: Person = {
           name: "Student",
           age: 17,
       }
   ```

   Example: type

   ```bash
       type Person = {
           name: string;
           age: number;
           contactNo?: string; // Optional property
       }

       const teacher1: Person = {
           name: "Mrs. Teacher",
           age: 35,
           contactNo: "01234567891",
       }

       const student1: Person = {
           name: "Student",
           age: 17,
       }
   ```

2. interface and type has difference in extending/inherit.

   Example: interface

   ```bash
       interface Person {
           name: string;
           age: number;
           contactNo?: string; // Optional property
       }

       interface Teacher Extends Person {
           designation: string;
           subject: string[];
           salary: number;
       }

       interface Student Extends Person{
        semester: string;
        cgpa: string;
       }

       const teacher1: Teacher = {
           name: "Mrs. Teacher",
           age: 35,
           contactNo: "01234567891",
           designation: "Lecturer",
           subject: ["DBMS", "Networking"]
           salary: 30000,
       }

       const student1: Student = {
           name: "Student",
           age: 17,
           semester: "7th",
           cgpa: "4.00",
       }
   ```

   Example: type

   ```bash
       type Person {
           name: string;
           age: number;
           contactNo?: string; // Optional property
       }

       // intersection &
       type Teacher = Person & {
           designation: string;
           subject: string[];
           salary: number;
       }

       // intersection &
       type Student = Person & {
        semester: string;
        cgpa: string;
       }

       const teacher1: Teacher = {
           name: "Mrs. Teacher",
           age: 35,
           contactNo: "01234567891",
           designation: "Lecturer",
           subject: ["DBMS", "Networking"]
           salary: 30000,
       }

       const student1: Student = {
           name: "Student",
           age: 17,
           semester: "7th",
           cgpa: "4.00",
       }
   ```

3. Union Type is can be use for type

   Example: type

   ```bash
    type User = "admin" | "user" | "guest";

    const user1: User = "admin";

   ```

4. interface and type for function

   Example: interface

   ```bash
    interface Add {
        (x: number, y: number): number;
    }

    const add: Add = (num1, num2) => num1 + num2;
   ```

   Example: type

   ```bash
    type Add = (x: number, y: number) => number;

    const add: Add = (num1, num2) => num1 + num2;
   ```

5. Only interface can use for merging

   Example: interface merging

   ```bash
    interface User {
        id: number;
        name: string;
    }

    interface User {
        contactNo: string;
        address?: string;
        isActive: boolean;
    }

    const user1: User = {
        id: 123,
        name: "Mr. X",
        contactNo: "01234567891",
        isActive: true,
    }
   ```

6. Only type can use as alias tuple and primitive type

   Example: type

   ```bash
    type UserName = string;
    const userName: UserName = "Mr. X"

    interface UserName2 = string;
    const userName: UserName2 = "Mr. X"

    type IsAdmin = boolean;
    const isAdmin: IsAdmin = true;

    // Tuple
    type User = [string, number, boolean];
    const user1: User = ["Mr. X", 30, true];
   ```

### 2. How does TypeScript help in improving code quality and project maintainability?

Answer: Typescript can improve code quality and maintainability. It can help developer to build large project on various purpose.

1. Typescript's main purpose is to check static type checking. It can help to get error on compile time.

   Example:

   ```bash
   const add = (num1: number, num2: number): number => num1+num2;

   add(5, "10") // It shows you error in compile time
   ```

2. It helps for auto-completion and intellisense. Typescript IDE has some advantages. Which can increase developer's productivity.
     
   A. Auto Completion
   B. function parameter and object key showing
   C. Documentation preview


3. Its better for refactoring. When developers have to change variable name, function name or type, it helps to correctly change everywhere. It is helpful for large project.

4. Typescript code has self documentation advantage. When a developer write code by defining type other developer easily understand why that code wrote, what that return.

   Example:

   ```bash
   type User = {
   name: string,
   age: number,
   address?: string,
   }
   ```

5. TypeScript has Code Scalability. When big team work on large project
   a. Developer can write clean code.
   b. Developer find error and understand easily.
   c. It is easy to understand for new developer.
   d. If code will change, It doesn't break.
    
6. Integration: Typescript is superset of javascript. So, old javascript project will easily migrate in typescript.