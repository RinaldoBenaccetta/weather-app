import { ELEMENTS } from "../../models/elements.js"

/**
 * Remove the content of the cards' container.
 */
export const removeWeatherTitle = () => {
    const weatherTitleContainer = ELEMENTS.weatherTitleContainer

    if (weatherTitleContainer) {
        weatherTitleContainer.innerHTML = ''
    }
}
