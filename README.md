### JavaScript Variable Declaration: `var`, `let`, `const`, Hoisting, and React Hooks

---

## **1. `var`, `let`, and `const`**

### **`var`**:  
- **Scope**: Function-scoped  
- **Reassignable**: Yes  
- **Redeclared**: Yes (within the same function scope)  
- **Example**:  
  ```javascript  
  function exampleVar() {  
    var x = 5;     // Function-scoped variable  
    console.log(x); // Output: 5  
    x = 10;        // Reassign value  
    console.log(x); // Output: 10  
    var x = 15;    // Redeclaration allowed  
    console.log(x); // Output: 15  
  }  
  exampleVar(); // Output: 5, 10, 15  
  ```

---

### **`let`**:  
- **Scope**: Block-scoped  
- **Reassignable**: Yes  
- **Redeclared**: No (within the same block)  
- **Example**:  
  ```javascript  
  if (true) {  
    let y = 5;  // Block-scoped variable  
    console.log(y); // Output: 5  
    y = 10;       // Reassign value  
    console.log(y); // Output: 10  
  }  
  // let y = 15;  // Error: Redeclaration not allowed in the same block  
  ```

---

### **`const`**:  
- **Scope**: Block-scoped  
- **Reassignable**: No  
- **Redeclared**: No  
- **Example**:  
  ```javascript  
  const z = 5;       // Immutable constant  
  console.log(z);   // Output: 5  
  // z = 10;         // Error: Cannot reassign a constant  
  ```

#### **Using `const` for Arrays and Objects**:  
```javascript  
const arr = [1, 2, 3];  // Constant array  
arr.push(4);            // Allowed, as modifying array content is not reassignment  
console.log(arr);       // Output: [1, 2, 3, 4]  
```

---

## **Why Use `const` with React Hooks (Array Destructured State)**

In React, hooks like `useState` return an array, and it's important to use `const` when destructuring these arrays to ensure immutability.

### **Example**: 

```javascript
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);  // `count` is a constant, `setCount` is used to modify the state
  
  const increment = () => setCount(count + 1);  // Safe to modify state

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
```

**Why `const` for React State?**  
- Ensures the state cannot be accidentally reassigned, which preserves predictable behavior.  
- The immutability of the state prevents unexpected changes, maintaining the integrity of components in React.

---

## **Hoisting in JavaScript**

Hoisting is a behavior where variable declarations and function declarations are moved to the top of their containing scope (function or global) during the compilation phase, but only the declaration is hoisted, not the initialization or function body.

### **Types of Hoisting**:

1. **`var`**:
   - Fully hoisted, meaning both the declaration and assignment are moved to the top.
   - Initially assigned with `undefined` until assigned a value.
   
   ```javascript  
   console.log(a); // Output: undefined  
   var a = 5;  
   ```

2. **`let`**:
   - Hoisted only to the top of the block but without an initial value.
   - Attempting to use it before declaration results in a `ReferenceError`.

   ```javascript  
   console.log(b); // Output: ReferenceError  
   let b = 10;  
   ```

3. **`const`**:
   - Similar to `let`, only hoisted to the top of the block, with no initial value.
   - Cannot be accessed before declaration and initialization.

   ```javascript  
   console.log(c); // Output: ReferenceError  
   const c = 15;  
   ```

4. **Functions**:
   - Entire function declarations are hoisted, meaning the entire function is moved to the top of the scope.
   - The function body is not executed until the function is called.

   ```javascript  
   hoistedFunction(); // Output: "Hello from Hoisted Function"  
   function hoistedFunction() {  
     console.log("Hello from Hoisted Function");  
   }  
   ```

---

### Full Example of Hoisting Behavior:

```javascript
hoistingExample();  

function hoistingExample() {  
  console.log(x); // Output: undefined (due to hoisting)  
  var x = 10;  
  
  console.log(y);  // Output: ReferenceError
  console.log(z);  (let and const are not initialized until declared)  
  let y = 20;  
  const z = 30;  
}
```

---

This comprehensive guide includes examples for each type of variable declaration, the use of `const` in React hooks, and insights into hoisting behavior, including function hoisting, to provide a detailed understanding of JavaScript variable scope and usage.
