const Products = [
    {
      id: 'noteworthy-tech-2021',
      name: "Noteworthy technology acquisitions 2021",
      description: "Enterprise technology acquisitions of 2021",
      category: 'Electronics',
      price: 599.99,
      originalPrice: 699.99,
      images: [
        "https://m.media-amazon.com/images/I/71YhTRvNj5L._AC_UF1000,1000_QL80_.jpg",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop",
        "https://hips.hearstapps.com/hmg-prod/images/index-headphones-654d443e68a75.jpg"
      ],
      colors: ['Black', 'Silver', 'Space Gray'],
      sizes: ['Standard'],
      features: [
        'Latest technology acquisitions',
        'Enterprise-grade solutions',
        'Year 2021 collection'
      ],
      rating: 4.2,
      reviewCount: 87,
      quantity: 2,
      isSaved: false,
      isInCart: false,
      isFeatured: false,
      isBest: false
    },
    {
      id: 'premium-headphones',
      name: "Premium Wireless Headphones",
      description: "Noise cancelling with 30hr battery life",
      category: 'Electronics',
      price: 249.99,
      originalPrice: 299.99,
      images: [
        "https://m.media-amazon.com/images/I/71YhTRvNj5L._AC_UF1000,1000_QL80_.jpg",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop"
      ],
      colors: ['Black', 'White', 'Blue'],
      sizes: ['One Size'],
      features: [
        'Active Noise Cancellation',
        '30-hour battery life',
        'Bluetooth 5.0',
        'Built-in microphone',
        'Foldable design'
      ],
      rating: 4.5,
      reviewCount: 215,
      quantity: 1,
      isSaved: false,
      isInCart: false,
      isFeatured: false,
      isBest: false
    },
    {
      id: 'wireless-headphones',
      name: "Wireless Headphones",
      description: "High-quality wireless headphones",
      category: 'Electronics',
      price: 129.99,
      originalPrice: 159.99,
      images: [
        "https://hips.hearstapps.com/hmg-prod/images/index-headphones-654d443e68a75.jpg?crop=0.5xw:1xh;center,top&resize=640:*",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop"
      ],
      colors: ['Black', 'Red', 'White'],
      sizes: ['Adjustable'],
      features: [
        '20-hour battery life',
        'Built-in controls',
        'Comfortable ear cushions',
        'Bluetooth connectivity'
      ],
      rating: 4.0,
      reviewCount: 156,
      quantity: 1,
      isSaved: false,
      isInCart: false,
      isFeatured: true,
      isBest: false
    },
    {
      id: 'smart-watch-fitness',
      name: "Smart Watch with Fitness Tracker",
      description: "Advanced smartwatch with health monitoring",
      category: 'Electronics',
      price: 199.99,
      originalPrice: 249.99,
      images: [
        "https://i.ebayimg.com/images/g/-0UAAOSwaXpk7Z8g/s-l960.webp",
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop"
      ],
      colors: ['Black', 'Silver', 'Rose Gold'],
      sizes: ['40mm', '44mm'],
      features: [
        'Heart rate monitoring',
        'Sleep tracking',
        'Water resistant',
        'GPS tracking',
        'Smart notifications'
      ],
      rating: 4.3,
      reviewCount: 189,
      quantity: 1,
      isSaved: false,
      isInCart: false,
      isFeatured: true,
      isBest: false
    },
    {
      id: 'bluetooth-speaker',
      name: "Bluetooth Speaker - Waterproof",
      description: "Portable waterproof Bluetooth speaker",
      category: 'Electronics',
      price: 89.99,
      originalPrice: 109.99,
      images: [
        "https://cdn.mos.cms.futurecdn.net/6973xUBZFtvYeDmTUtuviF-1200-80.jpg",
        "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&auto=format&fit=crop"
      ],
      colors: ['Black', 'Blue', 'Red'],
      sizes: ['Portable'],
      features: [
        'IPX7 waterproof',
        '20-hour playtime',
        'Bluetooth 5.0',
        'Built-in microphone',
        '360° sound'
      ],
      rating: 4.1,
      reviewCount: 132,
      quantity: 1,
      isSaved: false,
      isInCart: false,
      isFeatured: false,
      isBest: false
    },
    {
      id: 'wireless-charger-1',
      name: "Wireless Charging Pad",
      description: "Fast wireless charging station",
      category: 'Electronics',
      price: 39.99,
      originalPrice: 49.99,
      images: [
        "https://myhypergear.com/cdn/shop/products/15328_HYG_3_in_1_wireless_charging_dock_002.jpg?v=1605997233"
      ],
      colors: ['White', 'Black'],
      sizes: ['Standard'],
      features: [
        'Qi-certified',
        'Fast charging',
        'LED indicator',
        'Non-slip surface'
      ],
      rating: 3.9,
      reviewCount: 76,
      quantity: 1,
      isSaved: false,
      isInCart: false,
      isFeatured: true,
      isBest: false
    },
    {
      id: 'multi-device-charger',
      name: "Multi-Device Wireless Charger",
      description: "Charges multiple devices simultaneously",
      category: 'Electronics',
      price: 39.99,
      originalPrice: 49.99,
      images: [
        "https://myhypergear.com/cdn/shop/products/15328_HYG_3_in_1_wireless_charging_dock_002.jpg?v=1605997233"
      ],
      colors: ['Black'],
      sizes: ['3-in-1'],
      features: [
        'Charges phone, watch, and earbuds',
        'Qi-certified',
        'Compact design',
        'LED charging indicators'
      ],
      rating: 4.0,
      reviewCount: 92,
      quantity: 1,
      isSaved: false,
      isInCart: false,
      isFeatured: true,
      isBest: true
    },
    {
      id: 'compact-charger',
      name: "Compact Wireless Charger",
      description: "Sleek and portable wireless charging solution",
      category: 'Electronics',
      price: 39.99,
      originalPrice: 49.99,
      images: [
        "https://myhypergear.com/cdn/shop/products/15328_HYG_3_in_1_wireless_charging_dock_002.jpg?v=1605997233"
      ],
      colors: ['White'],
      sizes: ['Travel'],
      features: [
        'Ultra-slim design',
        'Qi-certified',
        'Portable',
        'Fast charging'
      ],
      rating: 3.8,
      reviewCount: 64,
      quantity: 1,
      isSaved: false,
      isInCart: false,
      isFeatured: false,
      isBest: true
    },
    {
      id: 'premium-headphones-2',
      name: "Wireless Headphones",
      description: "Premium sound quality headphones",
      category: 'Electronics',
      price: 599.00,
      originalPrice: 699.00,
      images: [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop",
        "https://hips.hearstapps.com/hmg-prod/images/index-headphones-654d443e68a75.jpg"
      ],
      colors: ['Black', 'Silver', 'Gold'],
      sizes: ['Over-ear'],
      features: [
        'Premium sound quality',
        'Active noise cancellation',
        '30-hour battery',
        'Touch controls',
        'Foldable design'
      ],
      rating: 4.6,
      reviewCount: 278,
      quantity: 1,
      isSaved: false,
      isInCart: false,
      isFeatured: false,
      isBest: false
    },
    {
      id: 'smart-watch',
      name: "Smart Watch",
      description: "Latest generation smartwatch",
      category: 'Electronics',
      price: 599.00,
      originalPrice: 699.00,
      images: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop",
        "https://i.ebayimg.com/images/g/-0UAAOSwaXpk7Z8g/s-l960.webp"
      ],
      colors: ['Black', 'Silver', 'Rose Gold'],
      sizes: ['42mm', '46mm'],
      features: [
        'Health monitoring',
        'GPS tracking',
        'Water resistant',
        'Long battery life',
        'Customizable faces'
      ],
      rating: 4.4,
      reviewCount: 203,
      quantity: 1,
      isSaved: false,
      isInCart: false,
      isFeatured: false,
      isBest: true
    },
    {
      id: 'bluetooth-speaker-2',
      name: "Bluetooth Speaker",
      description: "High-fidelity portable speaker",
      category: 'Electronics',
      price: 599.00,
      originalPrice: 699.00,
      images: [
        "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&auto=format&fit=crop",
        "https://cdn.mos.cms.futurecdn.net/6973xUBZFtvYeDmTUtuviF-1200-80.jpg"
      ],
      colors: ['Black', 'Blue', 'Red'],
      sizes: ['Portable'],
      features: [
        'Premium sound quality',
        'Waterproof',
        '30-hour playtime',
        'Party mode',
        'Built-in mic'
      ],
      rating: 4.3,
      reviewCount: 187,
      quantity: 1,
      isSaved: false,
      isInCart: false,
      isFeatured: false,
      isBest: true
    },
    {
      id: 'gaming-keyboard',
      name: "Gaming Keyboard",
      description: "Mechanical keyboard for gamers",
      category: 'Electronics',
      price: 599.00,
      originalPrice: 699.00,
      images: [
        "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=500&auto=format&fit=crop"
      ],
      colors: ['Black', 'RGB'],
      sizes: ['Full-size', 'Tenkeyless'],
      features: [
        'Mechanical switches',
        'RGB lighting',
        'Anti-ghosting',
        'Wrist rest',
        'Customizable macros'
      ],
      rating: 4.5,
      reviewCount: 231,
      quantity: 1,
      isSaved: false,
      isInCart: false,
      isFeatured: false,
      isBest: true
    },
    {
      id: 'wireless-mouse',
      name: "Wireless Mouse",
      description: "Ergonomic wireless mouse",
      category: 'Electronics',
      price: 599.00,
      originalPrice: 699.00,
      images: [
        "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&auto=format&fit=crop"
      ],
      colors: ['Black', 'White', 'Silver'],
      sizes: ['Right-handed', 'Ambidextrous'],
      features: [
        'Ergonomic design',
        'Precision tracking',
        'Long battery life',
        'Customizable buttons',
        'Bluetooth connectivity'
      ],
      rating: 4.2,
      reviewCount: 178,
      quantity: 1,
      isSaved: false,
      isInCart: false,
      isFeatured: false,
      isBest: true
    },
    {
      id: 'external-ssd',
      name: "External SSD",
      description: "High-speed portable storage",
      category: 'Electronics',
      price: 599.00,
      originalPrice: 699.00,
      images: [
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&auto=format&fit=crop"
      ],
      colors: ['Black', 'Silver'],
      sizes: ['500GB', '1TB', '2TB'],
      features: [
        'High-speed transfers',
        'Shock resistant',
        'Compact design',
        'Password protection',
        'USB-C connectivity'
      ],
      rating: 4.4,
      reviewCount: 195,
      quantity: 1,
      isSaved: false,
      isInCart: false,
      isFeatured: false,
      isBest: false
    },
    {
      id: 'aw-series7',
      name: 'Apple Watch Series 7 GPS',
      description: 'Aluminium Case, Starlight Sport Band',
      category: 'Electronics',
      price: 599,
      originalPrice: 699,
      images: [
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-se-202503_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1739545405902',
        'https://sekyo.in/cdn/shop/files/Magic_pro_3.jpg?v=1742879539',
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MXL53_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1725647080396',
        'https://m.media-amazon.com/images/I/71YhTRvNj5L._AC_UF1000,1000_QL80_.jpg'
      ],
      colors: ['Starlight', 'Midnight', 'Blue', 'Product Red'],
      sizes: ['41mm', '45mm'],
      features: [
        'Always-On Retina display - Now brighter indoors without raising your wrist',
        'Blood oxygen sensor - Measure your blood oxygen with a revolutionary sensor and app',
        'ECG app - Take an electrocardiogram anytime, anywhere',
        'High and low heart rate notifications - Get notified if your heart rate is above or below your specified threshold',
        'Water resistant 50 meters - Swimproof design'
      ],
      rating: 4.7,
      reviewCount: 142,
      quantity: 1,
      isSaved: false,
      isInCart: false,
      isFeatured: true,
      isBest: false
    }
  ];


const promotions = [
    {
      id: 1,
      title: "Summer Sale!",
      subtitle: "Up to 50% off selected items",
      image: "https://images.unsplash.com/photo-1462396240927-52058a6a84ec?w=1200&auto=format&fit=crop",
      cta: "Shop Now",
      bgColor: "bg-gradient-to-r from-amber-500 to-orange-600"
    },
    {
      id: 2,
      title: "New Arrivals",
      subtitle: "Discover our latest collection",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&auto=format&fit=crop",
      cta: "Explore",
      bgColor: "bg-gradient-to-r from-blue-500 to-purple-600"
    },
    {
      id: 3,
      title: "Limited Time Offer",
      subtitle: "Free shipping on orders over $50",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&auto=format&fit=crop",
      cta: "Claim Offer",
      bgColor: "bg-gradient-to-r from-green-500 to-teal-600"
    }
  ];

export default Products;
export { promotions };