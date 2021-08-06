import { useState, useEffect } from "react";

import { agent } from "../helpers/agent";

import happyPlant from "../assets/happy-plant.svg";
import sadPlant from "../assets/sad-plant.svg";

let upperValue = 600; // limit for values from moisture sensor
let lowerValue = 300;
let intervalValue = 60 * 30; // unit in second

export default function Home() {
  const [plantData, setPlantData] = useState("");

  useEffect(() => {
    document.title = `Happy Plant`;
  });

  useEffect(() => {
    const fetchPlantReading = () => {
      agent
        .getPlantLastReading()
        .then((res) => res.json())
        .then((data) => setPlantData(data));
    };
    fetchPlantReading();
  }, []);

  useEffect(() => {
    const fetchPlantReading = () => {
      agent
        .getPlantLastReading()
        .then((res) => res.json())
        .then((data) => setPlantData(data));
    };

    let interval = setInterval(() => fetchPlantReading(), 1000 * intervalValue);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* <MetaDecorator title="Happy Plant" /> */}
      <section className="grid h-full">
        <div className="m-auto text-center">
          {plantData.success && plantData.data.length ? (
            <div>
              <div className="w-64 sm:w-80">
                {plantData.data[0].reading < upperValue &&
                plantData.data[0].reading > lowerValue ? (
                  <>
                    <img
                      src={happyPlant}
                      alt="Happy plant"
                      className="w-full h-auto -mt-32 sm:-mt-10"
                    />
                    <p className="mt-3 text-xl">Your plant is happy 😀.</p>
                  </>
                ) : (
                  <div>
                    <img
                      src={sadPlant}
                      alt="Sad Plant"
                      className="w-full h-auto"
                    />
                    <p className="mt-3 text-xl">Your plant is sad 😢.</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="mx-10 text-xl">
              Can not display plant status.
              <br />
              Check if everything is working or try again later.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
