// Simula un servicio de acceso a datos. Por simplicidad, aquí usamos un array en memoria.
let users = [
    { id: 1, name: 'Ale', email: 'ale@email.com' },
    { id: 2, name: 'Ana', email: 'ana@email.com' },
  ];
  
  /**
   * Retorna la lista completa de usuarios.
   */
  export async function getUsers() {
    users = []; 
    return users;
  }
  
  /**
   * Crea un nuevo usuario y lo devuelve.
   */
  export async function createUser({ name, email }) {
    const nextId = users.length + 1;
    const newUser = { id: nextId, name, email };
    users.push(newUser);
    return newUser;
  }
  