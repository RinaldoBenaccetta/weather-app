import { APPLICATION } from "../models/application.js"
import { getWeather } from "../models/weather/getWeather.js"
import { showTodayWeather } from "../views/todayCards/showTodayWeather.js"
import { classTimeout } from "../utils/classTimeout.js"
import { showWeatherTitle } from "../views/weatherTitle/showWeatherTitle.js"
import { hideAutocomplete } from "../views/autocomplete/hideAutocomplete.js"
import { removeAutocompleteContent } from "../views/autocomplete/removeAutocompleteContent.js"
import { emptySearchInput } from "../utils/emptySearchInput.js"

import { Location } from "../types/location"
import { WeatherCollection } from "../types/weatherCollection";
import {removeElementContent} from "../utils/removeElementContent";
import {ELEMENTS} from "../models/elements";

/**
 * Get weather for next 24hours according to provided city or according
 * to the latitude and longitude if provided.
 * and show them in the DOM. Also show a title with the city searched.
 *
 * @param {Object} location
 */
export const weatherController = async (location: Location): Promise<void> => {
    const weatherCollection: WeatherCollection | false = await getWeather(location)

    weatherCollection ? WeatherReturn(weatherCollection) : WeatherReturnError()
}

/**
 * Show the weather and selected city in DOM.
 *
 * @param weatherCollection
 * @constructor
 */
const WeatherReturn = (weatherCollection: WeatherCollection): void => {
    emptySearchInput()
    removeAutocompleteContent()
    hideAutocomplete()

    removeElementContent(ELEMENTS.weatherTitleContainer)

    // call the weather title view
    showWeatherTitle(weatherCollection.city)
    // call the today weather view
    showTodayWeather(weatherCollection.today)
}

/**
 * Add an error class to the search input when API send an error.
 */
const WeatherReturnError = (): void => {
    const errorClass: string = APPLICATION.class.error
    const inputElement: string = APPLICATION.id.header.searchContainer.container
    const timer: number = APPLICATION.errorTimeout

    hideAutocomplete()
    classTimeout(errorClass, inputElement, timer)
}
