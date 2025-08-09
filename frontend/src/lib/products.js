
// Product data (replace with your actual data source or API fetch)
export const products = [
    {
      id: 1,
      name: 'Chowmein',
      description: 'Fresh, high-quality raw chowmein noodles made from premium wheat flour, perfect for making delicious chowmein. Best before 3 days from manufacture date.',
      price: 'Rs. 110 ',
      image: '/assets/images/raw_chowmein.jpg',
      href: '/products/special-chowmein'
    },
    {
      id: 2,
      name: 'Chilly Mix vegetable Sauce',
      description: 'Made by using mix of vegetable & ingredents like that gives a nice taste. Ingrdents: Pumpkin, spicy green chilly, ginger powder, garlic powder, onion powder, salt, sugar, edible food colour, sodium benzoate.',
      price: 'Rs. 60',
      image: '/assets/images/IMG_20250806_134311.jpg',
      href: '/products/veg-momo'
    },
    {
      id: 3,
      name: 'Mix Vegetable Chatani Sauce',
      description: 'Made by using mix of vegetable. Ingrdents: Carrot, Pumpkin, ginger powder, garlic powder, onion powder, salt, sugar, edible food colour, sodium benzoate',
      price: 'Rs. 60',
      image: '/assets/images/tAQg2w8kJr5NuDuM8Zr8XS-650-80.jpeg',
      href: '/products/tomato-sauce'
    },
    {
      id: 4,
      name: 'Synthetic Vinegar',
      description: 'High-quality synthetic vinegar, perfect for enhancing the taste and aroma of your favorite dishes. Ingredients: Acetic acid (diluted to food-grade strength), Purified water',
      price: 'Rs. 60 ',
      image: '/assets/images/IMG_20250806_144230.jpg',
      href: '/products/spicy-noodles'
    },
  ];
  
  export const featuredProducts = products.slice(0, 3);
