import bcrypt from "bcryptjs";

export const data = {
  users: [
    {
      name: "Admin",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Jane",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: "Bed",
      slug: "Bed",
      category: "Funitures",
      image: "/images/bed1.webp",
      price: 70,
      brand: "Nike",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular shirt",
      isFeatured: true,
      banner: "/images/bed1.webp",
    },
    {
      name: "Mattress",
      slug: "Mattress",
      category: "Mattress",
      image: "/images/bed2.jpg",
      price: 80,
      brand: "Adidas",
      rating: 3.2,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt",
      isFeatured: true,
      banner: "/images/bed2.jpg",
    },
    {
      name: "Pillow",
      slug: "Pillow",
      category: "Accessories",
      image: "/images/duvets2.webp",
      price: 90,
      brand: "Raymond",
      rating: 4.5,
      numReviews: 3,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Duvetts",
      slug: "Duvetts",
      category: "Accessories",
      image: "/images/duvett1.jpg",
      price: 90,
      brand: "Oliver",
      rating: 2.9,
      numReviews: 13,
      countInStock: 20,
      description: "Smart looking pants",
    },
    {
      name: "Fit Pants",
      slug: "fit-pants",
      category: "Pants",
      image: "/images/mattress1.jpeg",
      price: 95,
      brand: "Zara",
      rating: 3.5,
      numReviews: 7,
      countInStock: 20,
      description: "A popular pants",
    },
    {
      name: "Classic Pants",
      slug: "classic-pants",
      category: "Pants",
      image: "/images/mattress2.jpg",
      price: 75,
      brand: "Casely",
      rating: 2.4,
      numReviews: 14,
      countInStock: 20,
      description: "A popular pants",
    },
  ],
};
