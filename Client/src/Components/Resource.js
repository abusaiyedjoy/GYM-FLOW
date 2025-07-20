import {
  FaUsers,
  FaCalendarAlt,
  FaDumbbell,
  FaChartLine,
  FaCreditCard,
  FaMobileAlt,
} from "react-icons/fa";
import { FaCalculator } from "react-icons/fa6";

export const slides = [
  {
    title: "Welcome to GymFlow",
    description:
      "Step into a fitness journey like no other. GymFlow combines state-of-the-art equipment with expert guidance to help you achieve a healthier, stronger body.",
    buttonText: "Calculate BMI",
    path: "/bmi",
  },
  {
    title: "Transform Your Life",
    description:
      "Unlock your strength, boost endurance, and stay committed with our personalized fitness plans, tailored to meet your individual goals.",
    buttonText: "Start Today",
    path: "/register",
  },
  {
    title: "Get Stronger Every Day",
    description:
      "Join our community of motivated individuals and transform your routine with structured workouts and professional coaching.",
    buttonText: "View Schedule",
    path: "/schedule",
  },
  {
    title: "Redefine Your Lifestyle",
    description:
      "Start your transformation today. From weight loss to muscle building, we support you at every step with expert advice and top-notch facilities.",
    buttonText: "Join Now",
    path: "/register",
  },
  {
    title: "Build a Healthy & Fit Body",
    description:
      "GymFlow is more than a gym — it’s your partner in wellness. Our programs are designed to fit all fitness levels and deliver lasting results. Let’s shape a better you.",
    buttonText: "Contact Us",
    path: "/contact",
  },
];

export const products = [
  {
    id: 1,
    name: "Code T-Shirt",
    price: 19.99,
    vat: 12,
    rating: 4.5,
    stock: true,
    description: "A stylish and comfortable t-shirt for coding enthusiasts.",
    sizes: ["S", "M", "L"],
    colors: ["#000000", "#FFFFFF", "#808080", "#0047AB", "#008000"],
    brand: "Shirt Flex",
    category: "T-Shirt",
    imageUrl: "https://i.ibb.co/Bw621f8/code-t-shirt-png.webp",
    gallery: [
      "https://i.ibb.co/Bw621f8/code-t-shirt-png.webp",
      "https://i.ibb.co/Bw621f8/code-t-shirt-png.webp",
      "https://i.ibb.co/Bw621f8/code-t-shirt-png.webp",
    ],
  },
  {
    id: 2,
    name: "White Code T-Shirt",
    price: 21.99,
    vat: 12,
    rating: 4.8,
    stock: true,
    description: "Premium quality white t-shirt with a sleek coding design.",
    sizes: ["S", "M", "L"],
    colors: ["#FFFFFF", "#000000", "#CCCCCC", "#808080", "#0047AB"],
    brand: "Shirt Flex",
    category: "T-Shirt",
    imageUrl: "https://i.ibb.co/GnT0zQT/code-t-shirt-white-png.webp",
    gallery: [
      "https://i.ibb.co/GnT0zQT/code-t-shirt-white-png.webp",
      "https://i.ibb.co/GnT0zQT/code-t-shirt-white-png.webp",
      "https://i.ibb.co/GnT0zQT/code-t-shirt-white-png.webp",
    ],
  },
  {
    id: 3,
    name: "Graphic Tee G1",
    price: 16.99,
    vat: 12,
    rating: 4.4,
    stock: true,
    description: "Vibrant graphic tee for a casual look.",
    sizes: ["S", "M", "L"],
    colors: ["#FF0000", "#0000FF", "#008000", "#FFD700", "#8A2BE2"],
    brand: "Graphic Tee Co.",
    category: "T-Shirt",
    imageUrl: "https://i.ibb.co/2vH5pnD/g-1.png",
    gallery: [
      "https://i.ibb.co/2vH5pnD/g-1.png",
      "https://i.ibb.co/2vH5pnD/g-1.png",
      "https://i.ibb.co/2vH5pnD/g-1.png",
    ],
  },
  {
    id: 4,
    name: "Graphic Tee G2",
    price: 17.99,
    vat: 12,
    rating: 4.3,
    stock: true,
    description: "Trendy graphic t-shirt perfect for everyday wear.",
    sizes: ["M", "L"],
    colors: ["#000000", "#FFFFFF", "#808080", "#0047AB", "#008000"],
    brand: "Graphic Tee Co.",
    category: "T-Shirt",
    imageUrl: "https://i.ibb.co/wWXvPsZ/g-2.png",
    gallery: [
      "https://i.ibb.co/wWXvPsZ/g-2.png",
      "https://i.ibb.co/wWXvPsZ/g-2.png",
      "https://i.ibb.co/wWXvPsZ/g-2.png",
    ],
  },
  {
    id: 5,
    name: "Graphic Tee G5",
    price: 15.99,
    vat: 12,
    rating: 4.2,
    stock: true,
    description: "Casual graphic tee with a bold design.",
    sizes: ["S", "M", "L"],
    colors: ["#FF5733", "#33FF57", "#5733FF", "#FFFF57", "#57FFFF"],
    brand: "Graphic Tee Co.",
    category: "T-Shirt",
    imageUrl: "https://i.ibb.co/4MvLJzt/g-5.png",
    gallery: [
      "https://i.ibb.co/4MvLJzt/g-5.png",
      "https://i.ibb.co/4MvLJzt/g-5.png",
      "https://i.ibb.co/4MvLJzt/g-5.png",
    ],
  },
  {
    id: 6,
    name: "Gym Wear G7",
    price: 24.99,
    vat: 12,
    rating: 4.7,
    stock: true,
    description: "High-quality gym wear for intense workouts.",
    sizes: ["S", "M", "L"],
    colors: ["#000000", "#FFFFFF", "#A52A2A", "#FF4500", "#2E8B57"],
    brand: "Gym Flex",
    category: "Gym",
    imageUrl: "https://i.ibb.co/SydNYxr/g-7.png",
    gallery: [
      "https://i.ibb.co/SydNYxr/g-7.png",
      "https://i.ibb.co/SydNYxr/g-7.png",
      "https://i.ibb.co/SydNYxr/g-7.png",
    ],
  },
  {
    id: 7,
    name: "Gym Wear G8",
    price: 26.99,
    vat: 12,
    rating: 4.6,
    stock: true,
    description: "Breathable and durable gym attire.",
    sizes: ["S", "M", "L"],
    colors: ["#B22222", "#FFD700", "#008080", "#DAA520", "#9400D3"],
    brand: "Gym Flex",
    category: "Gym",
    imageUrl: "https://i.ibb.co/4N32Wfv/g-8.png",
    gallery: [
      "https://i.ibb.co/4N32Wfv/g-8.png",
      "https://i.ibb.co/4N32Wfv/g-8.png",
      "https://i.ibb.co/4N32Wfv/g-8.png",
    ],
  },
  {
    id: 8,
    name: "Gym Tank Top",
    price: 22.99,
    vat: 12,
    rating: 4.5,
    stock: true,
    description: "Comfortable tank top designed for gym sessions.",
    sizes: ["M", "L"],
    colors: ["#4682B4", "#FF6347", "#6A5ACD", "#5F9EA0", "#FFA07A"],
    brand: "Gym Flex",
    category: "Gym",
    imageUrl: "https://i.ibb.co/zSfzrfy/Gym-shop-image-14-768x952.jpg",
    gallery: [
      "https://i.ibb.co/zSfzrfy/Gym-shop-image-14-768x952.jpg",
      "https://i.ibb.co/zSfzrfy/Gym-shop-image-14-768x952.jpg",
      "https://i.ibb.co/zSfzrfy/Gym-shop-image-14-768x952.jpg",
    ],
  },
  {
    id: 9,
    name: "Gym Shorts",
    price: 18.99,
    vat: 12,
    rating: 4.3,
    stock: true,
    description: "Lightweight gym shorts for maximum comfort.",
    sizes: ["S", "M", "L"],
    colors: ["#000000", "#FFD700", "#8B0000", "#00CED1", "#FF7F50"],
    brand: "Gym Flex",
    category: "Gym",
    imageUrl: "https://i.ibb.co/JdrXKwH/Gym-shop-img-3.png",
    gallery: [
      "https://i.ibb.co/JdrXKwH/Gym-shop-img-3.png",
      "https://i.ibb.co/JdrXKwH/Gym-shop-img-3.png",
      "https://i.ibb.co/JdrXKwH/Gym-shop-img-3.png",
    ],
  },
  {
    id: 10,
    name: "JavaScript Developer T-Shirt",
    price: 20.99,
    vat: 12,
    rating: 4.9,
    stock: true,
    description: "Cool t-shirt for JavaScript developers.",
    sizes: ["S", "M", "L"],
    colors: ["#F0DB4F", "#000000", "#FFFFFF", "#808080", "#0047AB"],
    brand: "Dev Shirts",
    category: "T-Shirt",
    imageUrl: "https://i.ibb.co/tqpZNmm/js-developer-png.webp",
    gallery: [
      "https://i.ibb.co/tqpZNmm/js-developer-png.webp",
      "https://i.ibb.co/tqpZNmm/js-developer-png.webp",
      "https://i.ibb.co/tqpZNmm/js-developer-png.webp",
    ],
  },
];

export const features = [
  {
    title: "Member Management",
    description:
      "Easily track members, manage profiles, and handle membership plans with our intuitive interface.",
    icon: <FaUsers size={24} />,
  },
  {
    title: "Class Scheduling",
    description:
      "Create and manage class schedules, allow online bookings, and send automatic reminders.",
    icon: <FaCalendarAlt size={24} />,
  },
  {
    title: "Equipment Tracking",
    description:
      "Monitor equipment usage, maintenance schedules, and repairs to ensure everything runs smoothly.",
    icon: <FaDumbbell size={24} />,
  },
  {
    title: "BMI Calculator",
    description:
      "Enter your weight and height to calculate your BMI and get personalized health insights.",
    icon: <FaCalculator size={24} />,
  },
  {
    title: "Payment Processing",
    description:
      "Secure and automated billing system with multiple payment options and invoice management.",
    icon: <FaCreditCard size={24} />,
  },
  {
    title: "Mobile Access",
    description:
      "Access your gym management system anywhere, anytime with our responsive mobile interface.",
    icon: <FaMobileAlt size={24} />,
  },
];

export const schedule = {
  Monday: [
    { time: "9:00am - 10:00am", title: "FITNESS", color: "text-orange-500" },
    {
      time: "10:00am - 11:00am",
      title: "BODY BUILDING",
      color: "text-sky-500",
    },
    { time: "4:00pm - 5:00pm", title: "RUNNING", color: "text-purple-500" },
    { time: "6:00pm - 7:00pm", title: "FITNESS", color: "text-orange-500" },
  ],
  Tuesday: [
    { time: "9:00am - 10:00am", title: "BOXING", color: "text-red-500" },
    { time: "4:00pm - 5:00pm", title: "RUNNING", color: "text-purple-500" },
  ],
  Wednesday: [
    { time: "9:00am - 10:00am", title: "CYCLING", color: "text-lime-500" },
    {
      time: "11:00am - 12:00pm",
      title: "BODY BUILDING",
      color: "text-sky-500",
    },
  ],
  Thursday: [
    { time: "1:00pm - 2:00pm", title: "BOXING", color: "text-red-500" },
  ],
  Friday: [
    { time: "1:00pm - 2:00pm", title: "MEDITATION", color: "text-teal-500" },
  ],
  Saturday: [
    { time: "1:00pm - 2:00pm", title: "BOXING", color: "text-red-500" },
  ],
  Sunday: [
    {
      time: "10:00am - 11:00am",
      title: "BODY BUILDING",
      color: "text-sky-500",
    },
    { time: "4:00pm - 5:00pm", title: "RUNNING", color: "text-purple-500" },
  ],
};

export const hours = [
  "9:00am",
  "10:00am",
  "11:00am",
  "1:00pm",
  "4:00pm",
  "6:00pm",
];

export const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const trainers = [
  {
    name: "Henry Carlose",
    role: "Gym Trainer",
    image: "https://i.ibb.co/JdrXKwH/Gym-shop-img-3.png",
    socials: ["facebook", "twitter", "linkedin"],
  },
  {
    name: "Jhon Williams",
    role: "Fitness Trainer",
    image: "https://i.ibb.co/Bw621f8/code-t-shirt-png.webp",
    socials: ["facebook", "twitter", "linkedin"],
  },
  {
    name: "Henry Joseph",
    role: "Gym Trainer",
    image: "https://i.ibb.co/JdrXKwH/Gym-shop-img-3.png",
    socials: ["facebook", "twitter", "linkedin"],
  },
  {
    name: "Esa Elizabed",
    role: "Fitness Trainer",
    image: "https://i.ibb.co/Bw621f8/code-t-shirt-png.webp",
    socials: ["facebook", "twitter", "linkedin"],
  },
];