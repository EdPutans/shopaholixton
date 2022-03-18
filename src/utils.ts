const endpoint = `http://localhost:4000`

export function getItems() {
  return fetch(`${endpoint}/items`)
    .then(r => r.json())
}

export function saveItem(name: string, id: number) {
  const token = localStorage.getItem('token');
  if (!token) return console.error('No token found');

  fetch(`${endpoint}/items/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "authorization": token
    },
    body: JSON.stringify({ name })
  })
}

export function logIn(email, password) {
  return fetch(`${endpoint}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
    .then(r => r.json())
}