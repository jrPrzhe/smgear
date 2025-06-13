import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../images";

export const navLinks = [
  { href: "#home", label: "Главная" },
  { href: "#about-us", label: "О Нас" },
  { href: "#products", label: "Каталог" },
  { href: "#contact-us", label: "Контакты" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Товаров" },
  { value: "500+", label: "Поставщиков" },
  { value: "250k+", label: "Продаж" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "AirPods Pro 2",
    price: "15 990 ₽",
    telegramLink: generateTelegramLink("AirPods Pro 2", "15 990 ₽"),
  },
  {
    imgURL: shoe5,
    name: "Sony WH-1000XM5",
    price: "23 990 ₽",
    telegramLink: generateTelegramLink("Sony WH-1000XM5", "23 990 ₽"),
  },
  {
    imgURL: shoe6,
    name: "Xiaomi Buds 4 Pro",
    price: "5 990 ₽",
    telegramLink: generateTelegramLink("Xiaomi Buds 4 Pro", "5 990 ₽"),
  },
  {
    imgURL: shoe7,
    name: "JBL Live 660NC",
    price: "8 990 ₽",
    telegramLink: generateTelegramLink("JBL Live 660NC", "8 990 ₽"),
  },
  {
    imgURL: shoe7,
    name: "Samsung Galaxy Buds2 Pro",
    price: "12 990 ₽",
    telegramLink: generateTelegramLink("Samsung Galaxy Buds2 Pro", "12 990 ₽"),
  },
  {
    imgURL: shoe6,
    name: "Huawei FreeBuds Pro",
    price: "9 990 ₽",
    telegramLink: generateTelegramLink("Huawei FreeBuds Pro", "9 990 ₽"),
  },
  {
    imgURL: shoe5,
    name: "Beats Studio Pro",
    price: "17 990 ₽",
    telegramLink: generateTelegramLink("Beats Studio Pro", "17 990 ₽"),
  },
  {
    imgURL: shoe4,
    name: "Anker Soundcore Space NC",
    price: "4 990 ₽",
    telegramLink: generateTelegramLink("Anker Soundcore Space NC", "4 990 ₽"),
  },
];
// Функция для генерации Telegram-ссылки
function generateTelegramLink(productName, productPrice) {
  const message = `Привет! Заинтересовался '${productName}' товаром за ${productPrice}. Есть в наличии?`;
  const encodedMessage = encodeURIComponent(message);
  return `https://t.me/przhrdsk?text=${encodedMessage}`;
}

export const services = [
  {
    imgURL: truckFast,
    label: "Быстрая доставка",
    subtext: "Оперативная отправка заказов в любые города — без задержек и лишних хлопот.",
  },
  {
    imgURL: shieldTick,
    label: "Надежная покупка",
    subtext: "Гарантия оригинальности и безопасные способы оплаты для вашего спокойствия.",
  },
  {
    imgURL: support,
    label: "Всегда на связи",
    subtext: "Наши консультанты помогут с выбором и ответят на все вопросы — быстро и по делу.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "хуйня всякая",
    rating: 4.5,
    feedback:
      "Tхуйня всякая",
  },
  {
    imgURL: customer2,
    customerName: "хуйня всякая",
    rating: 4.5,
    feedback:
      "хуйня всякая",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "хуйня всякая", link: "/" },
      { name: "хуйня всякая", link: "/" },
      { name: "хуйня всякая", link: "/" },
      { name: "хуйня всякая", link: "/" },
      { name: "хуйня всякая", link: "/" },
      { name: "хуйня всякая", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "хуйня всякая", link: "/" },
      { name: "хуйня всякая", link: "/" },
      { name: "хуйня всякая", link: "/" },
      { name: "хуйня всякая", link: "/" },
      { name: "хуйня всякая", link: "/" },
    ],
  },
  {
    title: "хуйня всякая",
    links: [
      { name: "хуйня всякая", link: "mailto:хуйня всякая" },
      { name: "хуйня всякая", link: "tel:хуйня всякая" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
