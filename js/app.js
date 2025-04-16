const API_URL = "http://localhost:8000/api/products";

function loadProducts() {
  fetch(API_URL)
    .then(res => res.json())
    .then(products => {
      const tbody = document.querySelector("#productTable tbody");
      products.forEach((p, i) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${i + 1}</td>
          <td>${p.name}</td>
          <td>${p.description}</td>
          <td>${p.price}</td>
          <td>
            <a href="show.html?id=${p.id}" class="btn btn-info btn-sm">View</a>
            <a href="edit.html?id=${p.id}" class="btn btn-primary btn-sm">Edit</a>
            <button onclick="deleteProduct(${p.id})" class="btn btn-danger btn-sm">Delete</button>
          </td>`;
        tbody.appendChild(row);
      });
    });
}

function createProduct(e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    description: form.description.value,
    price: form.price.value
  };

  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(() => {
      alert("Product created!");
      window.location.href = "index.html";
    });
}

function deleteProduct(id) {
  if (!confirm("Are you sure you want to delete this product?")) return;

  fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  })
    .then(() => {
      alert("Product deleted");
      location.reload();
    });
}
