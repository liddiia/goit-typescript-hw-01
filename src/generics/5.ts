// У вас є перелік UserRole, який використовується для класифікації 
// користувачів у вашому додатку. Ви хочете створити об'єкт RoleDescription,
//  який зіставлятиме кожну роль користувача з її описом.

export enum UserRole {
    admin = 'admin',
    editor = 'editor',
    guest = 'guest',
  }
  
  const RoleDescription: Record<UserRole, string> = {
    [UserRole.admin]: 'Admin User',
    [UserRole.editor]: 'Editor User',
    [UserRole.guest]: 'Guest User',
  };
  
  // Приклади
  console.log(RoleDescription[UserRole.admin]); // "Admin User"
  console.log(RoleDescription[UserRole.editor]); // "Editor User"
  console.log(RoleDescription[UserRole.guest]); // "Guest User"
  