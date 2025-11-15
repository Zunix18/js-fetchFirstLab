const fetch = require('node-fetch'); 

async function updateUser(id, updatedData) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Помилка при оновленні користувача:', error);
    return null;
  }
}


updateUser(1, { name: 'New Name' })
  .then(result => console.log(result));

module.exports = updateUser;
