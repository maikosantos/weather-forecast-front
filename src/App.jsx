import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

import { MagnifyingGlass } from "phosphor-react";
import Spinner from "./components/Spinner";

function App() {
  const [inProgress, setInProgress] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

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
              {inProgress ? "Searching..." : "Search Weather Forecast"}
            </button>
            {/* <Spinner /> */}
          </section>
        </form>
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
      </div>
    </div>
  );
}

export default App;
