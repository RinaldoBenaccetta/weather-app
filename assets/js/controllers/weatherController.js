import { APPLICATION } from "../models/application.js"
import { getWeather } from "../models/getWeather.js"
import { showTodayWeather } from "../views/todayCards/showTodayWeather.js"
import { removeWeatherTitle } from "../views/weatherTitle/removeWeatherTitle.js"
import { classTimeout } from "../utils/classTimeout.js"
import { showWeatherTitle } from "../views/weatherTitle/showWeatherTitle.js"
import { hideAutocomplete } from "../views/autocomplete/hideAutocomplete.js"
import { removeAutocompleteContent } from "../views/autocomplete/removeAutocompleteContent.js"
import { getCitySearchValue } from "../utils/getCitySearchValue.js"

/**
 * Get weather for next 24hours according to provided city
 * and show them in the DOM. Also show a title with the city searched.
 * 
 * @param {String} city
 */
export const weatherController = async () => {
    const city = getCitySearchValue()
    const weatherCollection = await getWeather(city)

    weatherCollection ? WeatherReturn(weatherCollection, city) : WeatherReturnError()
}

/**
 * Show the weather and selected city in DOM.
 * @param {Array} weatherCollection 
 * @param {String} city 
 */
const WeatherReturn = (weatherCollection, city) => {
    removeAutocompleteContent()
    removeWeatherTitle()
    // call the weather title view
    showWeatherTitle(city)
    // call the today weather view
    showTodayWeather(weatherCollection.today)
}

/**
 * Add an error class to the search input when API send an error.
 */
const WeatherReturnError = () => {
    const errorClass = APPLICATION.class.error
    const inputElement = APPLICATION.id.header.searchContainer.container
    const timer = APPLICATION.errorTimeout

    hideAutocomplete()
    classTimeout(errorClass, inputElement, timer)
}