const endpoint = `http://localhost:4000`

export function getItems() {
  return fetch(`${endpoint}/items`)
    .then(r => r.json())
}
export function saveItem(name: string, id: number) {
  fetch(`${endpoint}/items/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name })
  })
}
