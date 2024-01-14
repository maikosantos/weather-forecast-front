import styles from "./CardForecast.module.css";

export const CardForecast = (props) => {
  return (
    <div className={styles.cardForecast}>
      <strong>{props.forecast.name}</strong>
      <span className={styles.date}>
        {String(props.forecast.startTime).substring(0, 10)}
      </span>
      <a>
        <img src={props.forecast.icon} alt="" />
      </a>
      <span className={styles.temperature}>
        {`${props.forecast.temperature}°F`}
      </span>
      <span className={styles.shortForecast}>
        {props.forecast.shortForecast}
      </span>
    </div>
  );
};
