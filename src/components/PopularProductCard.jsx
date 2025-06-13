import { useState, useEffect } from "react";
import { star } from "../assets/icons";

import { shoe10, shoe11, shoe12, shoe7, shoe9 } from "../assets/images";
import { generateTelegramLink } from "../utils/generateTelegramLink";

const PopularProductCard = ({ imgURL, name, price, isLast }) => {
  const carrousel = [shoe7, shoe9, shoe10, shoe11, shoe12];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isLast) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carrousel.length);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isLast]);

  const displayedImage = isLast ? carrousel[currentIndex] : imgURL;

  // Генерация ссылки при клике
  const telegramLink = generateTelegramLink(name, price);

  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img src={displayedImage} alt={name} className="w-[280px] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-gray-900 text-2xl leading-normal">
        {price}
      </p>

      {/* Кнопка с Telegram-ссылкой */}
      <a
        href={telegramLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
      >
        Оформить заказ
      </a>
    </div>
  );
};

export default PopularProductCard;