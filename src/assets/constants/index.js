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
  shoe8,
  shoe9,
  shoe10,
  shoe11,
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
    name: "Наушники AirPods 4",
    price: "1 500 ₽",
    telegramLink: generateTelegramLink("Наушники AirPods 4", "1 500 ₽"),
  },
  {
    imgURL: shoe5,
    name: "Наушники AirPods 2 pro",
    price: "1 500 ₽",
    telegramLink: generateTelegramLink("Наушники AirPods 2 pro", "1 500 ₽"),
  },
  {
    imgURL: shoe6,
    name: "Apple watch ultra 2",
    price: "2 500 ₽",
    telegramLink: generateTelegramLink("Apple watch ultra 2", "2 500 ₽"),
  },
  {
    imgURL: shoe7,
    name: "Умные часы Watch S9 LUX",
    price: "3 500 ₽",
    telegramLink: generateTelegramLink("Умные часы Watch S9 LUX", "3 500 ₽"),
  },
  {
    imgURL: shoe8,
    name: "Беспроводная зарядка MagSafe 5000mAh",
    price: "700 ₽",
    telegramLink: generateTelegramLink("Беспроводная зарядка MagSafe 5000mAh", "700 ₽"),
  },
  {
    imgURL: shoe9,
    name: "Комплект блок и кабель быстрой зарядки 25W",
    price: "380 ₽",
    telegramLink: generateTelegramLink("Комплект блок и кабель быстрой зарядки 25W", "380 ₽"),
  },
  {
    imgURL: shoe10,
    name: "JBL Pulse 5",
    price: "2 000 ₽",
    telegramLink: generateTelegramLink("JBL Pulse 5", "2 000 ₽"),
  },
  {
    imgURL: shoe11,
    name: "Беспроводное зарядное устройство",
    price: "350 ₽",
    telegramLink: generateTelegramLink("Беспроводное зарядное устройство", "350 ₽"),
  },
];
// Функция для генерации Telegram-ссылки
function generateTelegramLink(productName, productPrice) {
  const message = `Привет! Заинтересовался '${productName}' товаром за ${productPrice}. Есть в наличии?`;
  const encodedMessage = encodeURIComponent(message);
  return `https://t.me/?text=${encodedMessage}`;
}
export const reviews = [
  
];
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



export const footerLinks = [
  
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
