import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import "animate.css";
import TrackVisibility from "react-on-screen";

// Встроенный компонент Button — теперь с поддержкой onClick
const Button = ({ label, iconURL, onClick, backgroundColor, borderColor, textColor }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-5 py-3 font-medium rounded-lg text-base transition-all hover:opacity-90
        ${backgroundColor || "bg-coral-red"}
        ${borderColor ? `border ${borderColor}` : ""}
        ${textColor || "text-white"}
      `}
      onClick={onClick}
    >
      {label}
      {iconURL && <img src={iconURL} alt="icon" width={20} height={20} />}
    </button>
  );
};

const SpecialOffer = () => {
  return (
    <section className="flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <TrackVisibility partialVisibility once>
        {({ isVisible }) => (
          <div
            className={`flex-1 ${
              isVisible
                ? "animate__animated animate__fadeIn animate__slower"
                : ""
            }`}
          >
            <img src={offer} alt="offer" className="w-full rounded-lg" />
          </div>
        )}
      </TrackVisibility>

      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-purple-900">КОНКУРС Электроники</span>
        </h2>
        <p className="mt-4 info-text"></p>
        <p className="mt-6 info-text">
          🏆 Призы по местам:<br />
          <span className="mt-4 info-text">
            🥇 1 место — AirPods 4 🔥<br />
            🥈 2 место — JBL Pulse 5 🔥<br />
            🥉 3 место — Быстрая зарядка 25W 🔥<br />
            🏅 4 место — Беспроводная зарядка MagSafe 🔥<br />
          </span>
        </p>

        <div className="mt-11 flex flex-wrap gap-4">
          <Button
            label="Принять участие"
            iconURL={arrowRight}
            onClick={() =>
              window.open("https://t.me/smartgear138/20",  "_blank")
            }
          />
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
    </section>
  );
};

export default SpecialOffer;