# Product Manager Panel – Frontend

A simple HTML/CSS/JS frontend for managing products using a Laravel-based REST API.

---

##  Features

- List all products
- View product details
- Create new product
- Edit existing product
- Delete product
- Responsive design with Bootstrap 5

---

##  Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- Laravel backend running at `http://localhost:8000`

### Clone & Run

```bash
git clone https://github.com/alyanev/product_manager_panel_frontend.git
cd product_manager_panel_frontend
npm install -g live-server
live-server

#### Project Structure

index.html        # Product list view
create.html       # Form to create new product
edit.html         # Form to edit a product
show.html         # Product detail view
app.js            # All JavaScript logic (fetch API, handlers)
style.css         # Custom styles (if needed)

##### API Endpoints

Assumes backend is running at http://localhost:8000/api/products.

    GET /api/products – list products

    GET /api/products/{id} – get single product

    POST /api/products – create

    PUT /api/products/{id} – update

    DELETE /api/products/{id} – delete

Make sure Laravel CORS is properly configured.


##### Author

Made by @alyanev