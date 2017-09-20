function handleError(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function fetchBooks() {
  return fetch('http://localhost:3000/books')
    .then(handleError)
    .then(resp => resp.json())
}

export function fetchBook(id) {
  return fetch(`http://localhost:3000/books/${id}`)
    .then(handleError)
    .then(resp => resp.json())
}
