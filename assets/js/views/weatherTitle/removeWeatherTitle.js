import { APPLICATION } from "../../models/application.js"

/**
 * Remove the content of the cards container.
 */
export const removeWeatherTitle = () => {
    const weatherTitleId = APPLICATION.id.main.localisation
    const weatherTitleContainer = document.querySelector(weatherTitleId)

    if (weatherTitleContainer) {
        weatherTitleContainer.innerHTML = ''
    }
}