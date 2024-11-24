//У вас є тип AllType. Існує функція compare,
// яка приймає два об'єкти. Ці об'єкти містять 
//поля AllType. Ваше завдання – використовувати 
//Pick та generics для вказівки, що поля цих параметрів належать 
//AllType. Функція compare повинна повертати AllType.

type AllType = {
    name: string;
    position: number;
    color: string;
    weight: number;
  };
  
  // Функція compare з використанням Pick і generics
  function compare<T extends Pick<AllType, 'name' | 'color'>, U extends Pick<AllType, 'position' | 'weight'>>(
    top: T,
    bottom: U
  ): AllType {
    return {
      name: top.name,
      color: top.color,
      position: bottom.position,
      weight: bottom.weight,
    };
  }
  
  // Приклад використання
  const top = { name: "Item A", color: "Red" };
  const bottom = { position: 42, weight: 10 };
  
  const result = compare(top, bottom);
  
  console.log(result);
  // Виведе: { name: "Item A", color: "Red", position: 42, weight: 10 }
  