// У вас є функція merge, яка поєднує два об'єкти.
//  Використовуйте generics, щоб вказати, 
// що ці об'єкти можуть бути будь-якого типу.

function merge<T extends object, U extends object >(objA: T, objB: U): T & U {
    return Object.assign({}, objA, objB);
  }
  
  // Приклади використання:
  const obj1 = { name: "Alice" };
  const obj2 = { age: 25 };
  
  const merged = merge(obj1, obj2);
  
  console.log(merged); // { name: "Alice", age: 25 }
  
  // Тип поверненого значення:
  console.log(merged.name); // "Alice"
  console.log(merged.age);  // 25
  