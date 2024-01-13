import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

import { MagnifyingGlass } from "phosphor-react";
import toast, { Toaster } from "react-hot-toast";
import { getWeatherForecast } from "./services/weatherForecastService";

function App() {
  const [inProgress, setInProgress] = useState(false);
  const [forecast, setForecast] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    //"Street": "1600 Pennsylvania Ave NW",
    //"City": "Washington",
    //"StateAbbreviation": "DC",
    //"ZipCode": "20500"

    setInProgress(true);
    setForecast([]);

    getWeatherForecast("1600 Pennsylvania Ave NW", "Washington", "DC", "20500")
      .then((response) => {
        console.log("response: ", response.periods);

        setForecast(response.periods);

        setInProgress(false);
      })
      .catch((err) => {
        setInProgress(false);
        console.error(err);
        toast.error(err.message, {
          duration: 5000,
          position: "top-right",
        });
      });
  };

  return (
    <div className="wrapper">
      <header className="header">
        <strong>ENTER YOUR POST ADDRESS BELOW</strong>
      </header>
      <div className="content">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <section className="sectionFields">
            <div>
              <label htmlFor="houseAndStreet">
                House number & Street name:
              </label>
              <input
                type="text"
                size="50"
                {...register("houseAndStreet", { required: true })}
              />
            </div>
            {errors.houseAndStreet && <span>This field is required</span>}

            <div>
              <label htmlFor="city">City:</label>
              <input
                type="text"
                size="50"
                {...register("city", { required: true })}
              />
            </div>
            {errors.city && <span>This field is required</span>}

            <div>
              <label htmlFor="state">State:</label>
              <input
                type="text"
                size="50"
                {...register("state", { required: true })}
              />
            </div>
            {errors.state && <span>This field is required</span>}

            <div>
              <label htmlFor="zipCode">ZIP Code:</label>
              <input
                type="text"
                size="50"
                {...register("zipCode", {
                  required: true,
                })}
              />
            </div>
            {errors.zipCode && <span>This field is required</span>}
          </section>

          <section className="sectionFooter">
            <button
              className="btnProcessar"
              type="submit"
              disabled={inProgress ? true : false}
            >
              <MagnifyingGlass size={30} weight="regular" />
              {inProgress ? "Searching forecast..." : "Search Weather Forecast"}
            </button>
          </section>
        </form>

        {forecast.length === 0 ? (
          <div className="contentWhaterForecast"></div>
        ) : (
          <div className="contentWhaterForecast">
            <div className="cardForecast">
              Mostly Cloudy then Light Rain Likely
            </div>
            <div className="cardForecast">
              <strong>Thursday</strong>
              <span>Icon</span>
              <span>Sunny</span>
            </div>
            <div className="cardForecast">Day 3</div>
            <div className="cardForecast">Day 4</div>
            <div className="cardForecast">Day 5</div>
            <div className="cardForecast">Day 6</div>
            <div className="cardForecast">Day 7</div>
          </div>
        )}
      </div>
      <Toaster />
    </div>
  );
}

export default App;
