const fetch = require('node-fetch'); 

async function createUser(user) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Помилка при створенні користувача:', error);
    return null;
  }
}


createUser({ name: "Sam", email: "fjsnfkjns2342@gmail.com" })
  .then(result => console.log(result));

module.exports = createUser;
