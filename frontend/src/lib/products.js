
// Product data (replace with your actual data source or API fetch)
export const products = [
    {
      id: 1,
      name: 'Chowmein',
      description: 'Our signature product',
      price: 'Rs. 110 ',
      image: '/assets/images/raw_chowmein.jpg',
      href: '/products/special-chowmein'
    },
    {
      id: 2,
      name: 'Chilly Sauce',
      description: 'Made by using mix of vegetable that gives a nice taste',
      price: 'Rs. ',
      image: '/assets/images/IMG_20250806_134311.jpg',
      href: '/products/veg-momo'
    },
    {
      id: 3,
      name: 'Mix Vegetalbe Chatani Sauce',
      description: 'Made by using mix of vegetables',
      price: 'Rs. ',
      image: '/assets/images/tAQg2w8kJr5NuDuM8Zr8XS-650-80.jpeg',
      href: '/products/tomato-sauce'
    },
    {
      id: 4,
      name: 'Vinegar',
      description: '',
      price: 'Rs. 150 ',
      image: '/assets/images/IMG_20250806_144230.jpg',
      href: '/products/spicy-noodles'
    },
    {
      id: 5,
      name: 'Sweet & Sour Sauce',
      description: 'A perfect blend of sweet and tangy flavors',
      price: 'Rs. ',
      image: '/assets/images/sweet_sour_sauce.jpg',
      href: '/products/sweet-sour-sauce'
    },
    {
      id: 6,
      name: 'Vegetable Spring Rolls',
      description: 'Crispy and delicious spring rolls with fresh vegetables',
      price: 'Rs. 80 ',
      image: '/assets/images/spring_rolls.jpg',
      href: '/products/spring-rolls'
    }
  ];
  
  export const featuredProducts = products.slice(0, 3);
