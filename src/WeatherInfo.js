import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
                            <div className="current-location">
                <h1>{props.data.city}</h1>
                <ul>
                    <li>Last updated: <FormattedDate date={props.data.date} /></li>
                    <li className="text-capitalize">{props.data.description}</li>
                </ul>
            <div className="row middle-section">
                <div className="col-6">
                    <WeatherIcon code={props.data.icon} size={54} className="icon-image" />
                    <WeatherTemperature celsius={props.data.temperature} />
                   
                </div>
                <div className="col-6">
                    <ul className="information">
                        <li>Humidity: {props.data.humidity}%</li>
                        <li>Wind: {Math.round(props.data.wind)} km/h</li>
                    </ul>
                </div>
            </div>
            
                </div>
        </div>
    );
}