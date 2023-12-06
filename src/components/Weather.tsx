import { ReactElement } from "react"

interface WeatherProps {
    title?: string;
    widget?: ReactElement;
    link?: string;
    weather?: string;
}

// Weather component contains title with link, weather widget and text weather.

const Weather = ({widget, link, weather, title} : WeatherProps) => {
    return (
    <div className="weather">
      <a href={link || '#'}><h3>{title || ''}</h3></a>
      {widget}<p>{weather || ''}</p>
    </div>
    )
  }

export default Weather