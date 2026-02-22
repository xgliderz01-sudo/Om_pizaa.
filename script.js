// ===================================
// Menu Data
// ===================================
const menuData = [
    // Veg Single Topping Pizza
    { name: "Tomato Pizza", category: "veg-single-topping", price: 80, description: "Regular, 7 Inches", isVeg: true, size: "Regular, 7 Inches" },
    { name: "Onion Pizza", category: "veg-single-topping", price: 100, description: "Regular, 7 Inches", isVeg: true, size: "Regular, 7 Inches" },
    { name: "Corn Pizza", category: "veg-single-topping", price: 115, description: "Regular, 7 Inches", isVeg: true, size: "Regular, 7 Inches", bestseller: true },
    { name: "Capsicum Pizza", category: "veg-single-topping", price: 115, description: "Regular, 7 Inches", isVeg: true, size: "Regular, 7 Inches" },
    
    // Veg Double Topping Pizza
    { name: "Onion & Capsicum Pizza", category: "veg-double-topping", price: 125, description: "Regular, 7 Inches", isVeg: true, size: "Regular, 7 Inches" },
    { name: "Corn & Tomato Pizza", category: "veg-double-topping", price: 125, description: "Regular, 7 Inches", isVeg: true, size: "Regular, 7 Inches" },
    { name: "Onion & Jalapeno Pizza", category: "veg-double-topping", price: 125, description: "Regular, 7 Inches", isVeg: true, size: "Regular, 7 Inches" },
    { name: "Paneer & Capsicum Pizza", category: "veg-double-topping", price: 140, description: "Regular, 7 Inches", isVeg: true, size: "Regular, 7 Inches", bestseller: true },
    { name: "Paneer & Onion Pizza", category: "veg-double-topping", price: 140, description: "Regular, 7 Inches", isVeg: true, size: "Regular, 7 Inches" },
    { name: "Corn & Capsicum Pizza", category: "veg-double-topping", price: 140, description: "Regular, 7 Inches", isVeg: true, size: "Regular, 7 Inches" },
    { name: "Corn & Paneer Pizza", category: "veg-double-topping", price: 150, description: "Regular, 7 Inches", isVeg: true, size: "Regular, 7 Inches" },
    { name: "Onion & Corn Pizza", category: "veg-double-topping", price: 150, description: "Regular, 7 Inches", isVeg: true, size: "Regular, 7 Inches" },
    { name: "Onion & Paneer Pizza", category: "veg-double-topping", price: 130, description: "Regular, 7 Inches", isVeg: true, size: "Regular, 7 Inches" },
    
    // Triple Topping Pizza
    { name: "Veg Loaded Pizza", category: "triple-topping", price: 165, description: "Tomato, mushroom, jalapeno and golden corn", isVeg: true, size: "Regular, 7 Inches", bestseller: true },
    
    // Multiple Toppings Pizza
    { name: "Spring Fling Pizza", category: "multiple-toppings", price: 195, description: "Capsicum, sweet, corn and paneer", isVeg: true },
    { name: "Lover's Bite Pizza", category: "multiple-toppings", price: 195, description: "Mushroom, sweet corn and olives", isVeg: true },
    { name: "Paneer Tikka Masala Pizza", category: "multiple-toppings", price: 195, description: "Exotic paneer tikka, onion, capsicum and red pepper", isVeg: true, bestseller: true },
    { name: "Hot Passion Pizza", category: "multiple-toppings", price: 245, description: "Jalapeno, mushroom, red paper, fresh tomato, cheese and jalapeno dip", isVeg: true },
    
    // Veg 1 Pizza
    { name: "Cheese Paneer Pizza", category: "veg1", price: 240, description: "Loaded with cheese and paneer", isVeg: true },
    { name: "Double Cheese Margherita Pizza", category: "veg1", price: 240, description: "Double cheese pizza", isVeg: true },
    { name: "Fresh Pizza", category: "veg1", price: 240, description: "Onion, capsicum and tomato", isVeg: true },
    { name: "Farm Fresh Pizza", category: "veg1", price: 240, description: "Onion, capsicum, tomato and mushroom", isVeg: true },
    { name: "Delight Pizza", category: "veg1", price: 240, description: "Capsicum, jalapeno and mushroom", isVeg: true },
    { name: "Capsicum Fresh Veggie Pizza", category: "veg1", price: 240, description: "Fresh vegetables with capsicum", isVeg: true },
    { name: "Onion Fresh Veggie Pizza", category: "veg1", price: 240, description: "Fresh vegetables with onion", isVeg: true },
    
    // Veg 2 Pizza
    { name: "Spicy Paneer Pizza", category: "veg2", price: 290, description: "Capsicum, red paprika and paneer", isVeg: true, bestseller: true },
    { name: "Veg Deluxe Pizza", category: "veg2", price: 290, description: "Onion, capsicum, mushroom, corn and paneer", isVeg: true },
    { name: "Exotic Pizza", category: "veg2", price: 290, description: "Jalapeno, mushroom, olives, capsicum and red pepper", isVeg: true },
    { name: "Chilli Pizza", category: "veg2", price: 290, description: "[Extra Spicy] Jalapeno, red paprika, corn and spicy sauce", isVeg: true },
    { name: "Veg Paradise Pizza", category: "veg2", price: 290, description: "Corn, capsicum, black olives and red pepper", isVeg: true },
    { name: "Veg Mexicana Pizza", category: "veg2", price: 290, description: "Onion, capsicum, tomato and jalapeno", isVeg: true },
    
    // Veg 3 Pizza
    { name: "Mix Veg Pizza", category: "veg3", price: 300, description: "Onion, capsicum, tomato, mushroom, corn, paneer, black olives, jalapeno and extra cheese", isVeg: true, bestseller: true },
    { name: "Retreat Pizza", category: "veg3", price: 300, description: "Onion, red pepper, tomato, paneer, capsicum and extra cheese", isVeg: true },
    
    // Simply Veg Pizza
    { name: "Cheesy Mushroom Pizza", category: "simply-veg", price: 175, description: "Mushroom with extra cheese", isVeg: true },
    { name: "Cheesy Tomato Pizza", category: "simply-veg", price: 175, description: "Tomato with extra cheese", isVeg: true },
    { name: "Margherita Pizza", category: "simply-veg", price: 175, description: "Single cheese pizza", isVeg: true, bestseller: true },
    { name: "Cheese Corn Pizza", category: "simply-veg", price: 175, description: "Corn with extra cheese", isVeg: true },
    { name: "Cheese Onion Pizza", category: "simply-veg", price: 175, description: "Loaded with cheese and onion", isVeg: true },
    
    // Taste of Indian Pizza
    { name: "Onion Paneer Pizza", category: "indian", price: 250, description: "Indian style pizza with onion and paneer", isVeg: true },
    { name: "Tandoori Paneer Pizza", category: "indian", price: 250, description: "Onion, red capsicum and paneer", isVeg: true, bestseller: true },
    { name: "Paneer Makhani Pizza", category: "indian", price: 200, description: "Capsicum and paneer", isVeg: true },
    
    // Non Veg Double Topping Pizza
    { name: "Onion & Barbeque Chicken Pizza", category: "non-veg", price: 120, description: "Regular, 7 Inches", isVeg: false, size: "Regular, 7 Inches" },
    { name: "Red Pepper & Peri Peri Chicken Pizza", category: "non-veg", price: 120, description: "Regular, 7 Inches", isVeg: false, size: "Regular, 7 Inches" },
    { name: "Jalapeno & Salami Chicken Pizza", category: "non-veg", price: 120, description: "Regular, 7 Inches", isVeg: false, size: "Regular, 7 Inches" },
    { name: "Onion & Sausage Chicken Pizza", category: "non-veg", price: 120, description: "Regular, 7 Inches", isVeg: false, size: "Regular, 7 Inches" },
    { name: "Non Veg Loaded Pizza", category: "non-veg", price: 160, description: "Peri peri chicken, chicken sausage and chicken tikka", isVeg: false, size: "Regular, 7 Inches", bestseller: true },
    
    // Non Veg Pizza
    { name: "Onion Barbeque Chicken Pizza", category: "non-veg", price: 250, description: "Onion and barbeque chicken", isVeg: false },
    { name: "Spicy Chicken Pizza", category: "non-veg", price: 250, description: "Red pepper and peri peri chicken", isVeg: false },
    { name: "Chicken Tikka Pizza", category: "non-veg", price: 250, description: "Onion, chicken tikka and tandoori sauce", isVeg: false, bestseller: true },
    { name: "Chicken Mexicana Pizza", category: "non-veg", price: 250, description: "Onion, peri peri chicken, red pepper and Mexican seasoning", isVeg: false },
    { name: "Chicken Meatza Pizza", category: "non-veg", price: 288, description: "Barbeque chicken, peri peri chicken, chicken sausage, chicken tikka and chicken salami", isVeg: false, bestseller: true },
    
    // Combos
    { name: "4 Veg Double Topping Pizza Combo", category: "combos", price: 440, description: "4 different veg double topping pizzas", isVeg: true, bestseller: true },
    { name: "4 Veg Double Topping Pizza With Extra Cheese", category: "combos", price: 520, description: "4 pizzas + Cheese + Garlic Bread", isVeg: true },
    { name: "4 Veg Single Topping Pizza Combo", category: "combos", price: 340, description: "4 different veg single topping pizzas", isVeg: true },
    { name: "4 Pizza Combo With Extra Cheese", category: "combos", price: 415, description: "4 pizzas with extra cheese", isVeg: true },
    { name: "4 Pizza Combo + 750ml Coke", category: "combos", price: 370, description: "4 pizzas + Coke 750ml", isVeg: true, bestseller: true },
    { name: "Pizza Mania Combo", category: "combos", price: 200, description: "Pizza + Aloo Tikki Burger + Coke", isVeg: true },
    
    // Meals
    { name: "Paneer & Onion Pizza With Garlic Bread", category: "meals", price: 220, description: "7 inches pizza + Garlic Bread", isVeg: true },
    { name: "Margherita Pizza With Garlic Bread", category: "meals", price: 240, description: "Margherita Pizza + Garlic Bread", isVeg: true },
    { name: "Corn & Onion Pizza Combo", category: "meals", price: 175, description: "Corn Pizza + Onion Pizza", isVeg: true },
    
    // Starter
    { name: "Chicken Wings", category: "starter", price: 200, description: "5 Pieces", isVeg: false },
    
    // Pasta
    { name: "Veg Red Sauce Pasta", category: "pasta", price: 170, description: "Pasta in red sauce", isVeg: true },
    { name: "Veg White Sauce Pasta", category: "pasta", price: 165, description: "Pasta in white sauce", isVeg: true, bestseller: true },
    { name: "Mixed Sauce Pasta", category: "pasta", price: 175, description: "Pasta in mixed sauce", isVeg: true },
    { name: "Tandoori Sauce Pasta", category: "pasta", price: 188, description: "Pasta in tandoori sauce", isVeg: true },
    { name: "Chicken White Sauce Pasta", category: "pasta", price: 200, description: "Pasta with chicken in white sauce", isVeg: false },
    { name: "Chicken Red Sauce Pasta", category: "pasta", price: 200, description: "Pasta with chicken in red sauce", isVeg: false },
    
    // Burgers
    { name: "Bun Tikki Burger", category: "burgers", price: 65, description: "Classic bun tikki burger", isVeg: true },
    { name: "Herb Chilli Burger", category: "burgers", price: 75, description: "Spicy herb burger", isVeg: true },
    { name: "Cheesy Burger", category: "burgers", price: 100, description: "Burger with extra cheese", isVeg: true },
    { name: "Cheesy Spicy Burger", category: "burgers", price: 115, description: "Spicy burger with cheese", isVeg: true },
    { name: "Paneer Burger", category: "burgers", price: 125, description: "Burger with paneer patty", isVeg: true, bestseller: true },
    { name: "Aloo Tikki Burger", category: "burgers", price: 60, description: "Classic aloo tikki burger", isVeg: true },
    { name: "Maharaja Burger", category: "burgers", price: 140, description: "Premium veg burger", isVeg: true },
    { name: "Chicken Burger", category: "burgers", price: 120, description: "Chicken patty burger", isVeg: false },
    { name: "Chicken Cheese Burger", category: "burgers", price: 130, description: "Chicken burger with cheese", isVeg: false, bestseller: true },
    { name: "Chicken Cheese Spicy Burger", category: "burgers", price: 120, description: "Spicy chicken cheese burger", isVeg: false },
    { name: "Chicken Maharaja Burger", category: "burgers", price: 175, description: "Premium chicken burger", isVeg: false },
    
    // Sandwiches
    { name: "Cheese Paneer Sandwich", category: "sandwiches", price: 140, description: "Grilled cheese paneer sandwich", isVeg: true },
    { name: "Cheesy Grilled Sandwich", category: "sandwiches", price: 115, description: "Grilled sandwich with cheese", isVeg: true, bestseller: true },
    { name: "Tandoori Grilled Sandwich", category: "sandwiches", price: 150, description: "Tandoori flavored sandwich", isVeg: true },
    { name: "Chicken Grilled Sandwich", category: "sandwiches", price: 165, description: "Grilled chicken sandwich", isVeg: false },
    { name: "Tandoori Chicken Grilled Sandwich", category: "sandwiches", price: 175, description: "Tandoori chicken sandwich", isVeg: false },
    
    // Snacks
    { name: "Tandoori Paneer Stuffed Bread", category: "snacks", price: 200, description: "Stuffed bread with tandoori paneer", isVeg: true },
    { name: "Stuffed Garlic Bread", category: "snacks", price: 140, description: "Garlic bread with stuffing", isVeg: true },
    { name: "Stuffed Paneer Garlic Bread", category: "snacks", price: 150, description: "Garlic bread stuffed with paneer", isVeg: true },
    { name: "Veg Calzone", category: "snacks", price: 120, description: "Veg calzone", isVeg: true },
    { name: "Garlic Bread", category: "snacks", price: 100, description: "Plain garlic bread - soft and freshly cooked", isVeg: true, bestseller: true },
    { name: "French Fries", category: "snacks", price: 88, description: "Crispy french fries", isVeg: true },
    { name: "Cheesy Fries", category: "snacks", price: 115, description: "Fries with cheese", isVeg: true, bestseller: true },
    { name: "Tandoori Fries", category: "snacks", price: 125, description: "Fries with tandoori seasoning", isVeg: true },
    { name: "Peri Peri Fries", category: "snacks", price: 100, description: "Fries with peri peri", isVeg: true },
    { name: "Cheesy Peri Peri Fries", category: "snacks", price: 125, description: "Fries with cheese and peri peri", isVeg: true },
    { name: "Tandoori Peri Peri Fries", category: "snacks", price: 140, description: "Fries with tandoori and peri peri", isVeg: true },
    { name: "Zingy Parcel", category: "snacks", price: 55, description: "Zingy parcel snack", isVeg: true },
    { name: "Paneer Parcel", category: "snacks", price: 70, description: "Filled with paneer", isVeg: true },
    { name: "Veg Taco", category: "snacks", price: 100, description: "Veg taco", isVeg: true },
    { name: "Chicken Taco", category: "snacks", price: 115, description: "Chicken taco", isVeg: false },
    
    // Roll
    { name: "Chicken Lebanese Roll", category: "roll", price: 115, description: "Lebanese style chicken roll", isVeg: false },
    
    // Wraps
    { name: "Paneer Wrap", category: "wraps", price: 100, description: "Paneer wrap", isVeg: true, bestseller: true },
    { name: "Chicken Wrap", category: "wraps", price: 125, description: "Chicken wrap", isVeg: false },
    
    // Dessert
    { name: "Choco Lava Cake", category: "dessert", price: 100, description: "Molten chocolate cake", isVeg: true, bestseller: true },
    
    // Drinks
    { name: "Vanilla Shake", category: "drinks", price: 100, description: "Classic vanilla shake", isVeg: true },
    { name: "Chocolate Shake", category: "drinks", price: 100, description: "Rich chocolate shake", isVeg: true, bestseller: true },
    { name: "Butterscotch Shake", category: "drinks", price: 100, description: "Butterscotch shake", isVeg: true },
    { name: "Strawberry Shake", category: "drinks", price: 100, description: "Fresh strawberry shake", isVeg: true },
    { name: "Mango Shake", category: "drinks", price: 100, description: "Mango shake", isVeg: true },
    { name: "Cold Coffee Shake", category: "drinks", price: 100, description: "Cold coffee shake", isVeg: true, bestseller: true },
    { name: "Oreo Shake", category: "drinks", price: 100, description: "Oreo cookie shake", isVeg: true },
    { name: "Coke 750ml", category: "drinks", price: 40, description: "Coca-Cola 750ml", isVeg: true },
];

// ===================================
// Navigation Functionality
// ===================================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Sticky navbar on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===================================
// Scroll to Top Button
// ===================================
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// Menu Functionality
// ===================================
const menuGrid = document.getElementById('menuGrid');
const menuSearch = document.getElementById('menuSearch');
const filterBtns = document.querySelectorAll('.filter-btn');
const categoryBtns = document.querySelectorAll('.category-btn');

let currentFilter = 'all';
let currentCategory = 'all';
let searchQuery = '';

// Render menu items
function renderMenu() {
    menuGrid.innerHTML = '';
    
    const filteredItems = menuData.filter(item => {
        // Filter by veg/non-veg
        let matchesFilter = true;
        if (currentFilter === 'veg') {
            matchesFilter = item.isVeg;
        } else if (currentFilter === 'non-veg') {
            matchesFilter = !item.isVeg;
        }
        
        // Filter by category
        let matchesCategory = true;
        if (currentCategory !== 'all') {
            matchesCategory = item.category === currentCategory;
        }
        
        // Filter by search
        let matchesSearch = true;
        if (searchQuery) {
            matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchQuery.toLowerCase());
        }
        
        return matchesFilter && matchesCategory && matchesSearch;
    });
    
    if (filteredItems.length === 0) {
        menuGrid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; padding: 60px 20px; color: var(--gray-color); font-size: 18px;">No items found. Try a different search or filter.</p>';
        return;
    }
    
    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.setAttribute('data-aos', 'fade-up');
        
        menuItem.innerHTML = `
            <div class="menu-item-image">
                <i class="fas fa-${getIcon(item.category)}"></i>
                <div class="menu-badge">
                    ${item.isVeg ? '<span class="veg-badge"></span>' : '<span class="non-veg-badge"></span>'}
                </div>
                ${item.bestseller ? '<div class="bestseller-badge">Bestseller</div>' : ''}
            </div>
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3 class="menu-item-title">${item.name}</h3>
                    <span class="menu-item-price">₹${item.price}</span>
                </div>
                <p class="menu-item-description">${item.description}</p>
                <div class="menu-item-footer">
                    ${item.size ? `<span style="font-size: 13px; color: var(--gray-color);">${item.size}</span>` : '<span></span>'}
                    <button class="add-to-cart" onclick="orderOnWhatsApp('${item.name}', ${item.price})">
                        <i class="fab fa-whatsapp"></i> Order
                    </button>
                </div>
            </div>
        `;
        
        menuGrid.appendChild(menuItem);
    });
    
    // Re-initialize AOS for new elements
    initAOS();
}

// Get icon based on category
function getIcon(category) {
    const icons = {
        'veg-single-topping': 'pizza-slice',
        'veg-double-topping': 'pizza-slice',
        'triple-topping': 'pizza-slice',
        'multiple-toppings': 'pizza-slice',
        'veg1': 'pizza-slice',
        'veg2': 'pizza-slice',
        'veg3': 'pizza-slice',
        'simply-veg': 'pizza-slice',
        'indian': 'pizza-slice',
        'non-veg': 'drumstick-bite',
        'combos': 'box',
        'meals': 'utensils',
        'starter': 'fire',
        'pasta': 'bowl-rice',
        'burgers': 'hamburger',
        'sandwiches': 'bread-slice',
        'snacks': 'cookie',
        'roll': 'hotdog',
        'wraps': 'burrito',
        'dessert': 'ice-cream',
        'drinks': 'glass-whiskey'
    };
    return icons[category] || 'utensils';
}

// Order on WhatsApp
function orderOnWhatsApp(itemName, price) {
    const message = `Hello, I want to order ${itemName} (₹${price}) from OM PIZZA BURGER CAFE.`;
    const whatsappUrl = `https://wa.me/919999221430?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Search functionality
menuSearch.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderMenu();
});

// Filter buttons
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-filter');
        renderMenu();
    });
});

// Category buttons
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-category');
        renderMenu();
    });
});

// Initial render
renderMenu();

// ===================================
// Gallery Lightbox
// ===================================
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.querySelector('.lightbox-close');
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
    });
});

lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});

// ===================================
// AOS (Animate On Scroll) Implementation
// ===================================
function initAOS() {
    const aosElements = document.querySelectorAll('[data-aos]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    aosElements.forEach(el => observer.observe(el));
}

// Initialize AOS on page load
window.addEventListener('DOMContentLoaded', initAOS);

// ===================================
// Smooth Scroll for Anchor Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Loading Animation
// ===================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

console.log('%c🍕 OM PIZZA BURGER CAFE', 'font-size: 24px; color: #e74c3c; font-weight: bold;');
console.log('%cWebsite loaded successfully! Enjoy browsing our menu.', 'font-size: 14px; color: #27ae60;');
