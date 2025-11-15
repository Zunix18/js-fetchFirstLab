const fetch = require('node-fetch'); // якщо запускаєте в Node.js

async function fetchUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  // Повертаємо тільки потрібні поля: id та name
  return data.map(user => ({
    id: user.id,
    name: user.name
  }));
}

module.exports = fetchUsers;
