import { APPLICATION } from "../models/application.js"

/**
 * Remove the content of the cards container.
 */
export const flushWeatherIn = () => {
    const container = document.querySelector(APPLICATION.id.main.localisation)

    console.log(container);

    if (container) {
        container.innerHTML = ''
    }
}