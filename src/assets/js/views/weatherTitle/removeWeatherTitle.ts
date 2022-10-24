import { ELEMENTS } from "../../models/elements.js"

/**
 * Remove the content of the cards' container.
 */
export const removeWeatherTitle = (): void => {
    const weatherTitleContainer: Element = ELEMENTS.weatherTitleContainer;

    if (weatherTitleContainer) {
        weatherTitleContainer.innerHTML = ''
    }
}
