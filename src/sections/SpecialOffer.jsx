import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";
import "animate.css";
import TrackVisibility from "react-on-screen";

const SpecialOffer = () => {
  return (
    <section
      className={`flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container `}
    >
      <TrackVisibility partialVisibility once>
        {({ isVisible }) => (
          <div
            className={`flex-1 ${
              isVisible
                ? "animate__animated animate__fadeIn animate__slower"
                : ""
            }`}
          >
            <img src={offer} className="w-full rounded-lg" />
          </div>
        )}
      </TrackVisibility>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-purple-900">КОНКУРС Электроники</span>
          
        </h2>
        <p className="mt-4 info-text">
           
        </p>
        <p className="mt-6 info-text">
          🏆 Призы по местам:<br></br>
          <p className="mt-4 info-text">
           
        </p>
🥇 1 место — AirPods 4 🔥<br></br>
🥈 2 место — JBL Pulse 5 🔥<br></br>
🥉 3 место — Быстрая зарядка 25W 🔥<br></br>
🏅 4 место — Беспроводная зарядка MagSafe 🔥<br></br>
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          {" "}
          <Button label="Принять участие" iconURL={arrowRight} />
          <Button
            label="Связь с продавцом"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
