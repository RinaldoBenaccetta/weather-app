import { APPLICATION } from "../models/application.js";
import { getWeather } from "../models/getWeather.js"
import { todayWeather } from "../views/todayWeather.js"
import { flushMainContainer } from "../views/flushMainContainer.js"
import { classTimeout } from "../utils/classTimeout.js"
import { weatherIn } from "../views/weatherIn.js";

/**
 * Get weather for next 24hours according to provided coordinates
 * and show them in the DOM.
 * 
 * @param {String} city
 */
export const weatherController = async (city) => {
    const weatherCollection = await getWeather(city)

    weatherCollection ? WeatherReturn(weatherCollection, city) : WeatherReturnError()

    // if (weatherCollection) {
    //     // flushMainContainer()
    //     // // call the today weather view
    //     // todayWeather(weatherCollection.today)
    //     WeatherReturn(weatherCollection)
    // } else {
    //     // const errorClass = APPLICATION.class.error
    //     // const inputElement = APPLICATION.id.header.townInput
    //     // const timer = APPLICATION.errorTimeout

    //     // classTimeout(errorClass, inputElement, timer)
    //     WeatherReturnError()
    // }
}

const WeatherReturn = (weatherCollection, city) => {
    flushMainContainer()
    // call the today weather view
    weatherIn(city)
    todayWeather(weatherCollection.today)
}

const WeatherReturnError = () => {
    const errorClass = APPLICATION.class.error
    const inputElement = APPLICATION.id.header.townInput
    const timer = APPLICATION.errorTimeout

    classTimeout(errorClass, inputElement, timer)

}