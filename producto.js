// Productos con stock
const products = [
    { id: 1, Image: 'https://http2.mlstatic.com/D_NQ_NP_915386-MLA72722434507_112023-O.webp'  ,name: 'Fideos Aitala', price: 1500, stock: 5 },
    { id: 2, Image: 'https://http2.mlstatic.com/D_NQ_NP_979759-MLA50834181851_072022-O.webp' ,name: 'Pepas Terepins', price: 600, stock: 3 },
    { id: 3, Image: 'https://distribuidoramilenium.com.ar/images/26403.jpg' ,name: 'Arroz Gallo', price: 30.00, stock: 10 },
    { id: 4, Image: 'https://http2.mlstatic.com/D_815186-MLA72006970063_092023-C.jpg' ,name: 'Aceite Marolio', price: 1300, stock: 5 },
    { id: 5, Image: 'https://www.supermercadolibero.com.ar/images/stories/virtuemart/product/77907420349221-198def941e4f2c619a16293339421086-640-0.jpg' ,name: 'Leche Serenisima', price: 1200, stock: 3 },
    { id: 6, Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmr0wfssTnWKzI8ZqCfRaegMQYuC13NzY9SNyTcvzldRnItKhTpyknL4RkSmPPnYGQk0I&usqp=CAU.jpg' ,name: 'Huevos', price: 800, stock: 10 },
    { id: 7, Image: 'https://www.espaciovino.com.ar/media/default/0001/53/thumb_52879_default_big.jpeg' ,name: 'Queso', price: 2500, stock: 5 },
    
];

// Función para cargar productos
function loadProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `<div class="contenedor-imagen">
        <img class="imagen" src="${product.Image}" alt="">
        </div>
        <span>${product.name} - $${product.price.toFixed(2)} (Stock: ${product.stock})</span>
            <input type="number" id="quantity-${product.id}" min="0" max="${product.stock}" placeholder="Cantidad">
        `;
        productList.appendChild(productItem);
    });
}

// Función para validar compra
function validatePurchase() {
    let total = 0;
    let allValid = true;
    let message = '';

    products.forEach(product => {
        const quantityInput = document.getElementById(`quantity-${product.id}`);
        const quantity = parseInt(quantityInput.value) || 0;

        if (quantity < 0) {
            message = 'La cantidad debe ser mayor o igual a 0.';
            allValid = false;
        } else if (quantity > product.stock) {
            message = `No hay suficiente stock para ${product.name}.`;
            allValid = false;
        } else {
            total += quantity * product.price;
        }
    });

    const messageElement = document.getElementById('message');
    if (allValid) {
        message = `Total de compra: $${total.toFixed(2)}`;
    }
    messageElement.textContent = message;
}

// Cargar productos al iniciar
window.onload = loadProducts;

// Configurar evento del botón de compra
document.getElementById('buy-button').addEventListener('click', validatePurchase);