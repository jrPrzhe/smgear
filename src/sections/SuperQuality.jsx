import { shoe8 } from "../assets/images";
import Button from "../components/Button";
import "animate.css";
import TrackVisibility from "react-on-screen";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-3">
            Мы предлагаем Тебе
          </span>
          <span className="text-purple-900">Технику </span>
          <span className="text-purple-900">Высшего</span> Качества
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
        Гарантируем надежность, современный дизайн и передовые технологии. Наши устройства созданы для того, чтобы улучшить ваш опыт использования — с отличным соотношением цены и качества, инновационными решениями и вниманием к деталям.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
        Мы делаем всё, чтобы вы остались довольны покупкой — быстро, выгодно и без лишних хлопот.


        </p>
        <div className="mt-11">
          {" "}
          <Button
            label="Связь с продавцом"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
            onClick={() =>
              window.open("https://t.me/smgear138",  "_blank")
            }
          />
        </div>
      </div>
      <TrackVisibility partialVisibility once>
        {({ isVisible }) => (
          <div
            className={`flex-1 flex justify-center items-center w-full ${
              isVisible
                ? "animate__animated animate__fadeIn animate__slower"
                : ""
            }`}
          >
            <img
              src={shoe8}
              alt="shoe8"
              width={650}
              height={600}
              className="object-contain rounded-lg"
            />
          </div>
        )}
      </TrackVisibility>
    </section>
  );
};

export default SuperQuality;
