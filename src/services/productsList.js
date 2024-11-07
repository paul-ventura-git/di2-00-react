export function getList() {
  return fetch('https://dummyjson.com/products')
    .then(data => data.json())
    .then(data => data.products) // porque ahí está el array[]
}