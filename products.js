const products = {
    drinkware: [
        { id: 1, name: "Hand-Blown Crystal Whiskey Tumblers with Gold Inlay", description: "Experience unparalleled sophistication with these hand-blown crystal tumblers, each crafted to elevate your whiskey moments. The delicate gold inlay adds a touch of opulence, making every sip a luxurious indulgence.", price: 499, stock: 46, img: "whiskey.jpg" },
        { id: 2, name: "Champagne Flutes Engraved with Rare Gemstone Patterns", description: "Celebrate life’s finest moments with these exclusive champagne flutes, featuring intricate gemstone-inspired engravings. Their elegant design ensures they stand out at every toast, embodying pure refinement.", price: 5600, stock: 15, img: "Champagne.jpg" },
        { id: 3, name: "Black Obsidian Wine Glass Set", description: "Elevate your wine experience with this striking set of black obsidian glasses, forged from volcanic glass for unmatched allure. Each glass radiates exclusivity, combining natural beauty with artisanal craftsmanship.", price: 2500, stock: 10, img: "wine.jpg" },
        { id: 4, name: "Artisan Copper Water Carafes with Handcrafted Details", description: "Hydrate in style with these artisan-crafted copper carafes, designed for both beauty and functionality. Hand-tooled details make each piece a one-of-a-kind treasure for your dining table.", price: 975, stock: 25, img: "water.jpg" },
        { id: 5, name: "Limited Edition Glass Mugs Infused with Platinum Accents", description: "Sip your favorite beverage from these luxurious glass mugs, enhanced with shimmering platinum-infused detailing. Their timeless design blends modern elegance with artisanal finesse.", price: 495, stock: 30, img: "glassmug.jpg" },
        { id: 6, name: "Shot Glasses Cast from Meteorite Fragments", description: "Defy the ordinary with these extraordinary shot glasses, uniquely crafted using fragments of authentic meteorites. Perfect for collectors, they bring a cosmic touch to your drinkware collection.", price: 980, stock: 40, img: "shot.jpg" },
    ],
    clothing: [
        { id: 7, name: "Custom-Made Leather Jackets with 24k Gold Zippers", description: "Own a masterpiece of fashion with these custom leather jackets, featuring zippers crafted from pure 24k gold. Every piece is tailored for impeccable fit and timeless elegance.", price: 699, stock: 50, img: "leder.jpg" },
        { id: 8, name: "Exclusive Hand-Stitched Silk Scarves from Kyoto", description: "Indulge in the beauty of tradition with these silk scarves, meticulously hand-stitched by artisans in Kyoto. Their intricate patterns and luxurious feel make them an heirloom-quality accessory.", price: 1500, stock: 30, img: "sjaal.jpg" },
        { id: 9, name: "One-of-a-Kind Embroidered Velvet Clutches", description: "Carry exclusivity in your hands with these velvet clutches, each adorned with unique, hand-embroidered designs. Perfect for evening glamour, these pieces are both artful and functional.", price: 12575, stock: 25, img: "tas.jpg" },
        { id: 10, name: "Limited Edition Diamond-Encrusted Sunglasses", description: "Turn heads with these diamond-encrusted sunglasses, a dazzling fusion of luxury and utility. Each pair is a bold statement piece, perfect for those who demand the extraordinary.", price: 14350, stock: 20, img: "bril.jpg" },
        { id: 11, name: "Designer Shoes Made from Reclaimed Exotic Materials", description: "Step into sustainability with these designer shoes, crafted from reclaimed exotic materials for unmatched style. Each pair is an eco-conscious blend of artistry and innovation.", price: 955, stock: 100, img: "schoen.jpg" },
        { id: 12, name: "Couture Cashmere Sweaters with Artist Collaborations", description: "Wrap yourself in luxury with these cashmere sweaters, featuring exclusive designs created in collaboration with renowned artists. They bring wearable art and comfort together in one stunning package.", price: 575, stock: 40, img: "trui.jpg" },
    ],
    decoration: [
        { id: 13, name: "Wall Clock", description: "Elegant wall clock.", price: 50, stock: 10, img: "https://via.placeholder.com/150" },
        { id: 14, name: "Canvas", description: "Decorative canvas.", price: 40, stock: 20, img: "https://via.placeholder.com/150" },
        { id: 15, name: "Key Rack", description: "Convenient key rack.", price: 25, stock: 30, img: "https://via.placeholder.com/150" },
        { id: 16, name: "Light with Name", description: "Personalized light.", price: 60, stock: 15, img: "https://via.placeholder.com/150" },
        { id: 17, name: "Poster", description: "Artistic poster.", price: 15, stock: 50, img: "https://via.placeholder.com/150" },
        { id: 18, name: "Candle", description: "Scented candle.", price: 10, stock: 40, img: "https://via.placeholder.com/150" },
    ],
    accessory: [
        { id: 19, name: "Mouse Mat", description: "Smooth mouse mat.", price: 15, stock: 50, img: "https://via.placeholder.com/150" },
        { id: 20, name: "Pen", description: "Custom pen.", price: 5, stock: 100, img: "https://via.placeholder.com/150" },
        { id: 21, name: "Umbrella", description: "Stylish umbrella.", price: 20, stock: 30, img: "https://via.placeholder.com/150" },
        { id: 22, name: "Thermo Flask", description: "Insulated thermo flask.", price: 25, stock: 25, img: "https://via.placeholder.com/150" },
        { id: 23, name: "Money Box", description: "Secure money box.", price: 10, stock: 40, img: "https://via.placeholder.com/150" },
        { id: 24, name: "Keychain", description: "Customized keychain.", price: 8, stock: 60, img: "https://via.placeholder.com/150" },
    ],
};

let cart = [];

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    if (pageId === 'cart') updateCart();
}

function renderProducts() {
    Object.keys(products).forEach(category => {
        const container = document.getElementById(`${category}-products`);
        products[category].forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h1>${product.name}</h1>
        <p>${product.description}</p>
        <h3>€${product.price}</h3>
        <h4>Stock: ${product.stock}</h4>
        <input type="number" min="1" max="${product.stock}" value="1" id="quantity-${product.id}">
        <button onclick="addToCart(${product.id}, '${category}')">Add to Cart</button>
      `;
            container.appendChild(productDiv);
        });
    });
}

function addToCart(id, category) {
    const quantityInput = document.getElementById(`quantity-${id}`);
    const quantity = parseInt(quantityInput.value);
    const product = products[category].find(p => p.id === id);

    if (quantity > product.stock) {
        alert('Not enough stock!');
        return;
    }

    product.stock -= quantity;
    const cartItem = cart.find(item => item.id === id);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }
    alert(`${product.name} added to the cart!`);
}

function updateCart() {
    const cartContainer = document.getElementById('cart-container');
    const totalPrice = document.getElementById('total-price');
    cartContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
      <h2>${item.name}</h2>
      <p>Quantity: ${item.quantity}</p>
      <p>Price: €${item.price * item.quantity}</p>
    `;
        cartContainer.appendChild(cartItem);
    });

    totalPrice.textContent = total;
}

document.addEventListener('DOMContentLoaded', renderProducts);
