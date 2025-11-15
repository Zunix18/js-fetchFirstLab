const fetch = require('node-fetch'); 

async function deleteUser(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE'
    });

    
    return { status: response.status };
  } catch (error) {
    console.error('Помилка при видаленні користувача:', error);
    return null;
  }
}


deleteUser(1).then(result => console.log(result));

module.exports = deleteUser;
