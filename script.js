const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 129,
    image: "https://via.placeholder.com/220x150?text=Headphones"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 99,
    image: "https://via.placeholder.com/220x150?text=Smart+Watch"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 49,
    image: "https://via.placeholder.com/220x150?text=Speaker"
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: 39,
    image: "https://via.placeholder.com/220x150?text=Gaming+Mouse"
  }
];

const container = document.getElementById('products');

products.forEach(p => {
  const div = document.createElement('div');
  div.className = 'product';
  div.innerHTML = `
    <img src="${p.image}" alt="${p.name}" />
    <h3>${p.name}</h3>
    <p>$${p.price}</p>
    <button onclick="alert('Added ${p.name} to cart!')">Add to Cart</button>
  `;
  container.appendChild(div);
});
