import { APPLICATION } from "../models/application.js"
import { getWeather } from "../models/weather/getWeather.js"
import { showTodayWeather } from "../views/todayCards/showTodayWeather.js"
import { removeWeatherTitle } from "../views/weatherTitle/removeWeatherTitle.js"
import { classTimeout } from "../utils/classTimeout.js"
import { showWeatherTitle } from "../views/weatherTitle/showWeatherTitle.js"
import { hideAutocomplete } from "../views/autocomplete/hideAutocomplete.js"
import { removeAutocompleteContent } from "../views/autocomplete/removeAutocompleteContent.js"
import { emptySearchInput } from "../utils/emptySearchInput.js"

/**
 * Get weather for next 24hours according to provided city or according
 * to the latitude and longitude if provided.
 * and show them in the DOM. Also show a title with the city searched.
 *
 * @param {Object|Null} location
 */
export const weatherController = async (location) => {
    const weatherCollection = await getWeather(location)

    weatherCollection ? WeatherReturn(weatherCollection) : WeatherReturnError()
}

/**
 * Show the weather and selected city in DOM.
 *
 * @param weatherCollection
 * @constructor
 */
const WeatherReturn = (weatherCollection) => {
    emptySearchInput()
    removeAutocompleteContent()
    hideAutocomplete()

    removeWeatherTitle()
    // call the weather title view
    showWeatherTitle(weatherCollection.city)
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
