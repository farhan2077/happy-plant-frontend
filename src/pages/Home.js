import { useState, useEffect } from "react";

import { agent } from "../helpers/agent";
import happyPlant from "../assets/happy-plant.svg";
import sadPlant from "../assets/sad-plant.svg";

export default function Home() {
  const [plantData, setPlantData] = useState("");

  useEffect(() => {
    agent
      .getPlantLastReading()
      .then((res) => res.json())
      .then((data) => setPlantData(data));
  }, []);

  return (
    <section className="grid h-full bg-red-50">
      <div className="m-auto text-center">
        {plantData.success && plantData.data.length ? (
          <>
            {plantData.data[0].reading < 20 && plantData.data[0].reading > 1 ? (
              <div>
                <img src={happyPlant} alt="" className="w-full h-auto" />
                Soil moisture is {plantData.data[0].reading}
              </div>
            ) : (
              <div>
                <img src={sadPlant} alt="" className="w-full h-auto" />
                <br />
                Soil moisture is {plantData.data[0].reading}
              </div>
            )}
          </>
        ) : (
          <div className="mx-10">
            Can not display plant status 😢.
            <br />
            Check if everything is working or try again later.
          </div>
        )}
      </div>
    </section>
  );
}
