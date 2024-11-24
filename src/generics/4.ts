//Ви маєте форму реєстрації користувачів. 
//Іноді потрібно попередньо заповнити форму даними 
//користувача для оновлення його профілю. 
//Однак вам не завжди потрібно заповнити всі поля. 
//Наприклад, користувач може хотіти оновити лише свій email та пароль, 
//залишивши ім'я та прізвище без змін.

//Використовуючи утиліту Partial та generics, 
//виправте тип параметра функції так, щоб уникнути помилок типізації.

type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
  };
  
  function createOrUpdateUser(initialValues: Partial<User>) {

  }
  

  createOrUpdateUser({ 
    email: 'user@mail.com', 
    password: 'password123' 
  });
  
 
  createOrUpdateUser({
    name: 'John',
    surname: 'Doe',
    email: 'user@mail.com',
    password: 'password123'
  });
  
  // Можна передати порожній об'єкт, якщо це допустимо:
  createOrUpdateUser({});
  