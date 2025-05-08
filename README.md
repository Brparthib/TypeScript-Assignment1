## "🎯 Interview Questions 💻"


### 1. What are some differences between interfaces and types in TypeScript?

Answer: In Typescript interface and type both are user for define the type. But both has some differences between them.

 1. interface use to define object structure.
    
    Example:
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