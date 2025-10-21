// ================================
// PRODUCT DATA
// ================================
const products = [
    // CEMENT
    {
        id: 1,
        category: 'cement',
        name: 'ACC GOLD Cement',
        nameHi: 'ACC GOLD सीमेंट',
        price: 380,
        image: 'AG.jpeg',
        description: 'Premium quality cement for superior strength and durability. Best for all construction needs.',
        descriptionHi: 'बेहतर मजबूती और स्थायित्व के लिए प्रीमियम गुणवत्ता वाला सीमेंट। सभी निर्माण जरूरतों के लिए सर्वश्रेष्ठ।',
        unit: 'per bag'
    },
    {
        id: 2,
        category: 'cement',
        name: 'ACC F2R Cement',
        nameHi: 'ACC F2R सीमेंट',
        price: 360,
        image: 'F2R.jpeg',
        description: 'Fast setting cement ideal for quick construction projects.',
        descriptionHi: 'तेज़ निर्माण परियोजनाओं के लिए आदर्श फास्ट सेटिंग सीमेंट।',
        unit: 'per bag'
    },
    {
        id: 3,
        category: 'cement',
        name: 'Power Max Baunger',
        nameHi: 'पावर मैक्स बौंगर',
        price: 325,
        image: 'Bangr.jpeg',
        description: 'Economy cement with good strength for residential construction.',
        descriptionHi: 'आवासीय निर्माण के लिए अच्छी मजबूती वाला इकॉनमी सीमेंट।',
        unit: 'per bag'
    },
    {
        id: 4,
        category: 'cement',
        name: 'Star Cement Premium',
        nameHi: 'स्टार सीमेंट प्रीमियम',
        price: 400,
        image: 'starpre.jpeg',
        description: 'Top quality Star Cement for premium construction projects.',
        descriptionHi: 'प्रीमियम निर्माण परियोजनाओं के लिए शीर्ष गुणवत्ता वाला स्टार सीमेंट।',
        unit: 'per bag'
    },
    {
        id: 5,
        category: 'cement',
        name: 'Star Cement Standard',
        nameHi: 'स्टार सीमेंट स्टैंडर्ड',
        price: 360,
        image: 'starstand.jpeg',
        description: 'Standard quality cement for general construction.',
        descriptionHi: 'सामान्य निर्माण के लिए मानक गुणवत्ता वाला सीमेंट।',
        unit: 'per bag'
    },
    {
        id: 6,
        category: 'cement',
        name: 'Star Cement Economy',
        nameHi: 'स्टार सीमेंट इकॉनमी',
        price: 340,
        image: 'streco.jpeg',
        description: 'Budget-friendly cement without compromising on quality.',
        descriptionHi: 'गुणवत्ता से समझौता किए बिना बजट-अनुकूल सीमेंट।',
        unit: 'per bag'
    },

    // SARIYA (STEEL RODS)
    {
        id: 7,
        category: 'sariya',
        name: 'Captain 10-16mm Steel Rod',
        nameHi: 'कैप्टन 10-16mm सरिया',
        price: 6600,
        image: '7.jpeg',
        description: 'Top range premium steel rods (Captain Brand) - 10mm to 16mm. High tensile strength for all construction needs.',
        descriptionHi: 'शीर्ष श्रेणी प्रीमियम स्टील रॉड (कैप्टन ब्रांड) - 10mm से 16mm। सभी निर्माण जरूरतों के लिए उच्च तन्य शक्ति।',
        unit: 'per quintal',
        badge: '🎁 Free Gift on 1 Ton'
    },
    {
        id: 8,
        category: 'sariya',
        name: 'Captain 8mm Steel Rod',
        nameHi: 'कैप्टन 8mm सरिया',
        price: 6800,
        image: '8.jpeg',
        description: 'Premium 8mm steel rod from Captain Brand. Perfect for pillars and beams.',
        descriptionHi: 'कैप्टन ब्रांड से प्रीमियम 8mm स्टील रॉड। स्तंभों और बीम के लिए एकदम सही।',
        unit: 'per quintal',
        badge: '🎁 Free Gift on 1 Ton'
    },
    {
        id: 9,
        category: 'sariya',
        name: 'Mongiya 10-16mm Steel Rod',
        nameHi: 'मोंगिया 10-16mm सरिया',
        price: 6200,
        image: '9.jpeg',
        description: 'Medium range quality steel rods (Mongiya Brand) - 10mm to 16mm. Great balance of quality and price.',
        descriptionHi: 'मध्यम श्रेणी की गुणवत्ता वाले स्टील रॉड (मोंगिया ब्रांड) - 10mm से 16mm। गुणवत्ता और कीमत का बढ़िया संतुलन।',
        unit: 'per quintal',
        badge: '🎁 Free Gift on 1 Ton'
    },
    {
        id: 10,
        category: 'sariya',
        name: 'Mongiya 8mm Steel Rod',
        nameHi: 'मोंगिया 8mm सरिया',
        price: 6400,
        image: '10.jpeg',
        description: 'Medium range 8mm steel rod from Mongiya Brand.',
        descriptionHi: 'मोंगिया ब्रांड से मध्यम श्रेणी 8mm स्टील रॉड।',
        unit: 'per quintal',
        badge: '🎁 Free Gift on 1 Ton'
    },
    {
        id: 11,
        category: 'sariya',
        name: 'Max Super 10-16mm Steel Rod',
        nameHi: 'मैक्स सुपर 10-16mm सरिया',
        price: 5800,
        image: '11.jpg',
        description: 'Economy range steel rods (Max Super Brand) - 10mm to 16mm. Best value for money.',
        descriptionHi: 'इकॉनमी रेंज स्टील रॉड (मैक्स सुपर ब्रांड) - 10mm से 16mm। पैसे के लिए सबसे अच्छा मूल्य।',
        unit: 'per quintal',
        badge: '🎁 Free Gift on 1 Ton'
    },
    {
        id: 12,
        category: 'sariya',
        name: 'ICL 10-16mm Steel Rod',
        nameHi: 'ICL 10-16mm सरिया',
        price: 5800,
        image: '12.jpeg',
        description: 'Budget-friendly ICL Brand steel rods - 10mm to 16mm. Reliable quality at competitive price.',
        descriptionHi: 'बजट-अनुकूल ICL ब्रांड स्टील रॉड - 10mm से 16mm। प्रतिस्पर्धी कीमत पर विश्वसनीय गुणवत्ता।',
        unit: 'per quintal',
        badge: '🎁 Free Gift on 1 Ton'
    },

    // CHARRI
    {
        id: 13,
        category: 'charri',
        name: '5/8 Charri (Stone Aggregate)',
        nameHi: '5/8 चरी (पत्थर की बजरी)',
        price: 6250,
        priceRange: '₹6,000 - ₹6,500',
        image: '13.jpeg',
        description: '5/8 size stone aggregate perfect for concrete mixing. High quality crushed stones for strong construction.',
        descriptionHi: 'कंक्रीट मिश्रण के लिए बिल्कुल सही 5/8 आकार की पत्थर की बजरी। मजबूत निर्माण के लिए उच्च गुणवत्ता वाले कुचले हुए पत्थर।',
        unit: 'per truck'
    },
    {
        id: 14,
        category: 'charri',
        name: '3/4 Charri (Stone Aggregate)',
        nameHi: '3/4 चरी (पत्थर की बजरी)',
        price: 4650,
        priceRange: '₹4,500 - ₹4,800',
        image: '14.jpeg',
        description: '3/4 size stone aggregate for foundation and flooring. Durable and weather resistant.',
        descriptionHi: 'नींव और फर्श के लिए 3/4 आकार की पत्थर की बजरी। टिकाऊ और मौसम प्रतिरोधी।',
        unit: 'per truck'
    },

    // BRICKS
    {
        id: 15,
        category: 'bricks',
        name: 'Chimni Bricks (Red Bricks)',
        nameHi: 'चिमनी ईंट (लाल ईंट)',
        price: 16000,
        image: '15.jpeg',
        description: 'Premium quality red bricks for wall construction. Pack of 1500 pieces. High strength and durability.',
        descriptionHi: 'दीवार निर्माण के लिए प्रीमियम गुणवत्ता वाली लाल ईंटें। 1500 टुकड़ों का पैक। उच्च शक्ति और स्थायित्व।',
        unit: 'per 1500 pcs'
    },

    // SAND
    {
        id: 16,
        category: 'others',
        name: 'Baalu (Construction Sand)',
        nameHi: 'बालू (निर्माण रेत)',
        price: 110,
        image: '16.jpeg',
        description: 'Fine quality construction sand for plastering and concrete work. Clean and properly graded.',
        descriptionHi: 'प्लास्टरिंग और कंक्रीट के काम के लिए महीन गुणवत्ता वाली निर्माण रेत। साफ और ठीक से वर्गीकृत।',
        unit: 'per packet'
    },

    // VENTILATORS
    {
        id: 17,
        category: 'others',
        name: 'Cement Ventilator ½ ft',
        nameHi: 'सीमेंट वेंटिलेटर ½ ft',
        price: 110,
        image: '17.jpeg',
        description: 'Cement-made ventilator ½ ft size. Provides proper air circulation.',
        descriptionHi: 'सीमेंट से बना वेंटिलेटर ½ ft आकार। उचित हवा परिसंचरण प्रदान करता है।',
        unit: 'per piece'
    },
    {
        id: 18,
        category: 'others',
        name: 'Cement Ventilator 1×1.5 ft',
        nameHi: 'सीमेंट वेंटिलेटर 1×1.5 ft',
        price: 80,
        image: '18.jpeg',
        description: 'Medium size cement ventilator 1ft × 1.5ft. Ideal for bathroom and kitchen.',
        descriptionHi: 'मध्यम आकार का सीमेंट वेंटिलेटर 1ft × 1.5ft। बाथरूम और रसोई के लिए आदर्श।',
        unit: 'per piece'
    },
    {
        id: 19,
        category: 'others',
        name: 'Cement Ventilator 1×1 ft',
        nameHi: 'सीमेंट वेंटिलेटर 1×1 ft',
        price: 60,
        image: '19.jpeg',
        description: 'Compact cement ventilator 1ft × 1ft. Perfect for small spaces.',
        descriptionHi: 'कॉम्पैक्ट सीमेंट वेंटिलेटर 1ft × 1ft। छोटी जगहों के लिए बिल्कुल सही।',
        unit: 'per piece'
    },

    // IRON WIRE
    {
        id: 20,
        category: 'others',
        name: 'Iron Wire (Thick)',
        nameHi: 'लोहे की तार (मोटी)',
        price: 80,
        image: '20.jpeg',
        description: 'Thick iron wire for binding and construction work. High tensile strength.',
        descriptionHi: 'बाइंडिंग और निर्माण कार्य के लिए मोटा लोहे का तार। उच्च तन्य शक्ति।',
        unit: 'per kg'
    },
    {
        id: 21,
        category: 'others',
        name: 'Iron Wire (Thin)',
        nameHi: 'लोहे की तार (पतली)',
        price: 90,
        image: '21.jpeg',
        description: 'Thin iron wire for detailed binding work. Flexible and durable.',
        descriptionHi: 'विस्तृत बाइंडिंग कार्य के लिए पतला लोहे का तार। लचीला और टिकाऊ।',
        unit: 'per kg'
    },

    // IRON RINGS - HEAVY
    {
        id: 22,
        category: 'others',
        name: 'Heavy Iron Ring 7×7 inch',
        nameHi: 'भारी लोहे की रिंग 7×7 इंच',
        price: 12,
        image: '22.jpeg',
        description: 'Heavy duty iron ring 7×7 inch for pillar construction. Maximum strength.',
        descriptionHi: 'स्तंभ निर्माण के लिए हेवी ड्यूटी लोहे की रिंग 7×7 इंच। अधिकतम शक्ति।',
        unit: 'per piece'
    },
    {
        id: 23,
        category: 'others',
        name: 'Heavy Iron Ring 6×6 inch',
        nameHi: 'भारी लोहे की रिंग 6×6 इंच',
        price: 10,
        image: '23.jpeg',
        description: 'Heavy duty iron ring 6×6 inch. Ideal for column reinforcement.',
        descriptionHi: 'हेवी ड्यूटी लोहे की रिंग 6×6 इंच। कॉलम सुदृढीकरण के लिए आदर्श।',
        unit: 'per piece'
    },
    {
        id: 24,
        category: 'others',
        name: 'Heavy Iron Ring 4×6 inch',
        nameHi: 'भारी लोहे की रिंग 4×6 इंच',
        price: 8,
        image: '24.jpeg',
        description: 'Heavy duty iron ring 4×6 inch for beam construction.',
        descriptionHi: 'बीम निर्माण के लिए हेवी ड्यूटी लोहे की रिंग 4×6 इंच।',
        unit: 'per piece'
    },
    {
        id: 25,
        category: 'others',
        name: 'Heavy Iron Ring 3×4 inch',
        nameHi: 'भारी लोहे की रिंग 3×4 इंच',
        price: 6,
        image: '25.jpeg',
        description: 'Heavy duty iron ring 3×4 inch. Compact and strong.',
        descriptionHi: 'हेवी ड्यूटी लोहे की रिंग 3×4 इंच। कॉम्पैक्ट और मजबूत।',
        unit: 'per piece'
    },

    // IRON RINGS - MEDIUM
    {
        id: 26,
        category: 'others',
        name: 'Medium Iron Ring 7×7 inch',
        nameHi: 'मध्यम लोहे की रिंग 7×7 इंच',
        price: 8,
        image: '26.jpeg',
        description: 'Medium duty iron ring 7×7 inch for general construction.',
        descriptionHi: 'सामान्य निर्माण के लिए मध्यम ड्यूटी लोहे की रिंग 7×7 इंच।',
        unit: 'per piece'
    },
    {
        id: 27,
        category: 'others',
        name: 'Medium Iron Ring 6×6 inch',
        nameHi: 'मध्यम लोहे की रिंग 6×6 इंच',
        price: 7,
        image: '27.jpeg',
        description: 'Medium duty iron ring 6×6 inch. Good balance of strength and price.',
        descriptionHi: 'मध्यम ड्यूटी लोहे की रिंग 6×6 इंच। शक्ति और कीमत का अच्छा संतुलन।',
        unit: 'per piece'
    },
    {
        id: 28,
        category: 'others',
        name: 'Medium Iron Ring 4×6 inch',
        nameHi: 'मध्यम लोहे की रिंग 4×6 इंच',
        price: 6,
        image: '28.jpeg',
        description: 'Medium duty iron ring 4×6 inch for standard construction.',
        descriptionHi: 'मानक निर्माण के लिए मध्यम ड्यूटी लोहे की रिंग 4×6 इंच।',
        unit: 'per piece'
    },
    {
        id: 29,
        category: 'others',
        name: 'Medium Iron Ring 3×4 inch',
        nameHi: 'मध्यम लोहे की रिंग 3×4 इंच',
        price: 5,
        image: '30.jpeg',
        description: 'Medium duty iron ring 3×4 inch. Economy option with good quality.',
        descriptionHi: 'मध्यम ड्यूटी लोहे की रिंग 3×4 इंच। अच्छी गुणवत्ता के साथ इकॉनमी विकल्प।',
        unit: 'per piece'
    },

    // CHEMICAL WATER SHIELD
    {
        id: 30,
        category: 'others',
        name: 'Chemical Water Shield 1L',
        nameHi: 'केमिकल वाटर शील्ड 1L',
        price: 140,
        image: '30.jpeg',
        description: 'Waterproofing chemical 1 Litre. Protects walls from water seepage and dampness.',
        descriptionHi: 'वॉटरप्रूफिंग केमिकल 1 लीटर। दीवारों को पानी रिसाव और नमी से बचाता है।',
        unit: 'per litre'
    },
    {
        id: 31,
        category: 'others',
        name: 'Chemical Water Shield 5L',
        nameHi: 'केमिकल वाटर शील्ड 5L',
        price: 700,
        image: '31.jpeg',
        description: 'Waterproofing chemical 5 Litre pack. Cost-effective for large projects.',
        descriptionHi: 'वॉटरप्रूफिंग केमिकल 5 लीटर पैक। बड़ी परियोजनाओं के लिए लागत प्रभावी।',
        unit: 'per 5 litre'
    },
    {
        id: 32,
        category: 'others',
        name: 'Chemical Water Shield 10L',
        nameHi: 'केमिकल वाटर शील्ड 10L',
        price: 1400,
        image: '32.jpeg',
        description: 'Waterproofing chemical 10 Litre pack. Best value for contractors and builders.',
        descriptionHi: 'वॉटरप्रूफिंग केमिकल 10 लीटर पैक। ठेकेदारों और बिल्डरों के लिए सबसे अच्छा मूल्य।',
        unit: 'per 10 litre'
    },

    // CHIPS
    {
        id: 33,
        category: 'others',
        name: 'Construction Stone Chips',
        nameHi: 'निर्माण पत्थर चिप्स',
        price: 350,
        image: '33.jpeg',
        description: 'Premium quality stone chips for concrete mixing and flooring. Available in multiple sizes for different construction needs.',
        descriptionHi: 'कंक्रीट मिश्रण और फर्श के लिए प्रीमियम गुणवत्ता वाले पत्थर के चिप्स। विभिन्न निर्माण जरूरतों के लिए कई आकारों में उपलब्ध।',
        unit: 'per packet'
    }
];

// ================================
// GLOBAL VARIABLES
// ================================
let currentLanguage = 'en';
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// ================================
// INITIALIZATION
// ================================
document.addEventListener('DOMContentLoaded', function() {
    // Determine initial language (optional: check browser language or saved preference)
    // For now, default is English, but we immediately switch to English if the page loads and the button text is Hindi.
    if (document.getElementById('langText').textContent === 'हिन्दी') {
        currentLanguage = 'en';
    } else {
        currentLanguage = 'hi'; // If button text is English, then current language is Hindi.
    }
    
    // Set initial language state correctly (starts in Hindi mode to display English text)
    currentLanguage = 'en'; // Force English first for the data-en values to show up initially
    updateTextContent(); // Apply initial English translations
    
    // Now setup the Hindi button text and actual current language state
    currentLanguage = 'en'; // Now set the actual working language
    document.getElementById('langText').textContent = 'हिन्दी'; // Set the button to show the opposite language
    
    displayProducts('all', document.querySelector('.filter-btn.active'));
    updateCartUI();
    setupPaymentToggle();
    setupCheckoutForm();
});

// ================================
// LANGUAGE TOGGLE
// ================================

function updateTextContent() {
    // 1. Update all elements with data-en/data-hi
    document.querySelectorAll('[data-en][data-hi]').forEach(element => {
        element.textContent = element.getAttribute('data-' + currentLanguage);
    });

    // 2. Update dynamic content
    updateCartUI(); // Re-render cart with new language
    // The products grid is re-rendered in toggleLanguage, so we skip it here.
    
    // 3. Update titles/alt texts (optional but good practice)
    document.querySelectorAll('[data-en-title][data-hi-title]').forEach(element => {
        element.setAttribute('title', element.getAttribute('data-' + currentLanguage + '-title'));
    });
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'hi' : 'en';
    document.getElementById('langText').textContent = currentLanguage === 'en' ? 'हिन्दी' : 'English';
    
    updateTextContent();
    
    // Reload products to show correct language names and descriptions
    const activeFilterButton = document.querySelector('.filter-btn.active');
    // Get the category from the onclick attribute safely
    const activeCategoryMatch = activeFilterButton.getAttribute('onclick').match(/'([^']+)'/);
    const activeCategory = activeCategoryMatch ? activeCategoryMatch[1] : 'all';
    
    // Pass the active button to re-apply the active class correctly
    displayProducts(activeCategory, activeFilterButton);
    
    // Update checkout text if modal is open (less common, but safe)
    if (document.getElementById('checkoutModal').classList.contains('active')) {
        showCheckout(false); // Re-render summary without toggling cart/modal state
    }
}

// ================================
// MOBILE MENU
// ================================
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('overlay');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
}

// ================================
// PRODUCT DISPLAY
// ================================
function displayProducts(category, clickedButton = null) {
    const grid = document.getElementById('productsGrid');
    const filteredProducts = category === 'all' ? products : products.filter(p => p.category === category);
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if (clickedButton) {
        clickedButton.classList.add('active');
    } else {
        // If no button is clicked (e.g., initial load), find the 'all' button
        document.querySelector('.filter-btn[onclick*="all"]').classList.add('active');
    }
    
    grid.innerHTML = filteredProducts.map(product => `
        <div class="product-card" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${currentLanguage === 'en' ? product.name : product.nameHi}">
                ${product.badge ? `<div class="product-badge">${product.badge}</div>` : ''}
            </div>
            <div class="product-info">
                <div class="product-category">${getCategoryName(product.category)}</div>
                <h3 class="product-title">${currentLanguage === 'en' ? product.name : product.nameHi}</h3>
                <p class="product-description">${currentLanguage === 'en' ? product.description : product.descriptionHi}</p>
                <div class="product-price">
                    ${product.priceRange || `₹${product.price.toLocaleString('en-IN')}`}
                    <small>${currentLanguage === 'en' ? product.unit : translateUnit(product.unit)}</small>
                </div>
                <div class="product-actions">
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i>
                        <span>${currentLanguage === 'en' ? 'Add to Cart' : 'कार्ट में डालें'}</span>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function getCategoryName(category) {
    const names = {
        'cement': currentLanguage === 'en' ? 'Cement' : 'सीमेंट',
        'sariya': currentLanguage === 'en' ? 'Steel Rods' : 'सरिया',
        'charri': currentLanguage === 'en' ? 'Charri' : 'चरी',
        'bricks': currentLanguage === 'en' ? 'Bricks' : 'ईंट',
        'others': currentLanguage === 'en' ? 'Other Materials' : 'अन्य सामग्री'
    };
    return names[category] || category;
}

function translateUnit(unit) {
    const units = {
        'per bag': 'प्रति बैग',
        'per quintal': 'प्रति क्विंटल',
        'per truck': 'प्रति ट्रक',
        'per 1500 pcs': 'प्रति 1500 पीस',
        'per packet': 'प्रति पैकेट',
        'per piece': 'प्रति पीस',
        'per kg': 'प्रति किलो',
        'per litre': 'प्रति लीटर',
        'per 5 litre': 'प्रति 5 लीटर',
        'per 10 litre': 'प्रति 10 लीटर'
    };
    return units[unit] || unit;
}

function filterProducts(category, buttonElement) {
    displayProducts(category, buttonElement);
}

// ================================
// CART FUNCTIONS
// ================================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            nameHi: product.nameHi,
            price: product.price,
            image: product.image,
            unit: product.unit,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    
    // Show notification
    showNotification(currentLanguage === 'en' ? 
        `${product.name} added to cart!` : 
        `${product.nameHi} कार्ट में जोड़ा गया!`, 
        'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    showNotification(currentLanguage === 'en' ? 'Item removed from cart.' : 'आइटम कार्ट से हटा दिया गया।', 'info');
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartUI();
        }
    }
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartCount.textContent = totalItems;
    cartTotal.textContent = `₹${totalPrice.toLocaleString('en-IN')}`;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `<p class="empty-cart">${currentLanguage === 'en' ? 'Your cart is empty' : 'आपकी कार्ट खाली है'}</p>`;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${currentLanguage === 'en' ? item.name : item.nameHi}">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-title">${currentLanguage === 'en' ? item.name : item.nameHi}</div>
                    <div class="cart-item-price">₹${item.price.toLocaleString('en-IN')} ${currentLanguage === 'en' ? item.unit : translateUnit(item.unit)}</div>
                    <div class="cart-item-quantity">
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');
    }
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('overlay');
    
    // Only allow toggle if checkout modal is NOT active
    if (!document.getElementById('checkoutModal').classList.contains('active')) {
        cartSidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}

// ================================
// CHECKOUT FUNCTIONS
// ================================
function showCheckout(toggleCartSidebar = true) {
    if (cart.length === 0) {
        showNotification(currentLanguage === 'en' ? 'Your cart is empty!' : 'आपकी कार्ट खाली है!', 'error');
        return;
    }
    
    const modal = document.getElementById('checkoutModal');
    const overlay = document.getElementById('overlay');
    const orderSummary = document.getElementById('orderSummary');
    const summaryTotal = document.getElementById('summaryTotal');
    
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Re-render summary based on current language
    orderSummary.innerHTML = cart.map(item => `
        <div class="summary-item">
            <span>${currentLanguage === 'en' ? item.name : item.nameHi} × ${item.quantity}</span>
            <span>₹${(item.price * item.quantity).toLocaleString('en-IN')}</span>
        </div>
    `).join('');
    
    summaryTotal.textContent = `₹${totalPrice.toLocaleString('en-IN')}`;
    
    // Show modal if not already open
    if (toggleCartSidebar) {
        modal.classList.add('active');
        overlay.classList.add('active');
        document.getElementById('cartSidebar').classList.remove('active'); // Close cart sidebar
    }
    
    // Ensure payment toggle UI is set up correctly (in case language changes)
    setupPaymentToggle();
}

function closeCheckout() {
    document.getElementById('checkoutModal').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

function setupPaymentToggle() {
    document.querySelectorAll('input[name="payment"]').forEach(radio => {
        // Remove existing listener to prevent duplicates
        radio.removeEventListener('change', toggleUpiSection);
        radio.addEventListener('change', toggleUpiSection);
        
        // Initial check on load/modal open
        if (radio.checked) {
            toggleUpiSection.call(radio);
        }
    });
}

function toggleUpiSection() {
    const upiSection = document.getElementById('upiSection');
    const paymentRef = document.getElementById('paymentRef');
    if (this.value === 'online') {
        upiSection.style.display = 'block';
        paymentRef.setAttribute('required', 'required');
    } else {
        upiSection.style.display = 'none';
        paymentRef.removeAttribute('required');
    }
}

function setupCheckoutForm() {
    document.getElementById('checkoutForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const confirmOrderBtn = document.getElementById('confirmOrderBtn');
        
        // Add loading state to button
        confirmOrderBtn.classList.add('btn-loading');
        confirmOrderBtn.innerHTML = `<i class="fas fa-spinner"></i> ${currentLanguage === 'en' ? 'Processing...' : 'प्रक्रिया हो रही है...'} (WhatsApp)`;

        setTimeout(() => {
            handleOrderSubmission();
            
            // Remove loading state (even if WhatsApp fails, we clear the form)
            confirmOrderBtn.classList.remove('btn-loading');
            confirmOrderBtn.innerHTML = currentLanguage === 'en' ? 'Confirm Order on WhatsApp' : 'व्हाट्सएप पर ऑर्डर की पुष्टि करें';
        }, 500); // Small delay to show 'processing'
    });
}

function handleOrderSubmission() {
    const name = document.getElementById('customerName').value;
    const phone = document.getElementById('customerPhone').value;
    const address = document.getElementById('customerAddress').value;
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
    const paymentRef = document.getElementById('paymentRef').value;
    
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Create WhatsApp message
    let message = `*🧾 Nazarana Enterprises - New Order*\n\n`;
    message += `*👤 Customer Details:*\n`;
    message += `*Name:* ${name}\n`;
    message += `*Phone:* ${phone}\n`;
    message += `*Address:* ${address}\n\n`;
    
    message += `*🛒 Order Details:*\n`;
    cart.forEach(item => {
        message += `  • ${currentLanguage === 'en' ? item.name : item.nameHi} (${item.unit}) × ${item.quantity} = ₹${(item.price * item.quantity).toLocaleString('en-IN')}\n`;
    });
    
    message += `\n*💰 TOTAL AMOUNT: ₹${totalPrice.toLocaleString('en-IN')}*\n\n`;
    
    if (paymentMethod === 'online' && paymentRef) {
        message += `*✅ Payment Status:* Paid Online (UPI)\n`;
        message += `*Payment Ref No:* ${paymentRef}\n`;
    } else {
        message += `*💵 Payment Method:* Cash on Delivery\n`;
    }
    
    message += `\n_कृपया इस ऑर्डर को प्रोसेस करें। धन्यवाद!_`;
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/918676037228?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab (this is the desired behavior)
    window.open(whatsappUrl, '_blank');
    
    // Clear form fields
    document.getElementById('checkoutForm').reset();
    
    // Clear cart and update UI
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartUI();
    closeCheckout();
    
    // Show success message
    showNotification(currentLanguage === 'en' ? 
        'Order confirmed! Redirecting to WhatsApp for final details.' : 
        'ऑर्डर की पुष्टि हो गई! अंतिम विवरण के लिए व्हाट्सएप पर रीडायरेक्ट कर रहे हैं।', 
        'success');
}


// ================================
// UTILITY FUNCTIONS
// ================================
function closeAll() {
    document.getElementById('cartSidebar').classList.remove('active');
    document.getElementById('mobileMenu').classList.remove('active');
    document.getElementById('checkoutModal').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

function showNotification(message, type = 'info') {
    // Check for an existing notification and remove it immediately
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    // Create notification element
    const notification = document.createElement('div');
    notification.classList.add('notification');
    
    // Set color based on type
    if (type === 'error') {
        notification.style.background = '#ff4444';
    } else if (type === 'info') {
        notification.style.background = 'var(--primary-color)';
    } else { // success
        notification.style.background = 'var(--success-color)';
    }
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out forwards';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// ================================
// SMOOTH SCROLL
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return; // Ignore if href is just '#'

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Close mobile menu after clicking a link
        if (document.getElementById('mobileMenu').classList.contains('active')) {
            toggleMobileMenu();
        }
    });
});