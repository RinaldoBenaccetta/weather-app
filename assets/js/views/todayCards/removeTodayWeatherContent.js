import { APPLICATION } from "../../models/application.js"

/**
 * Remove the content of the cards container.
 */
export const removeTodayWeatherContent = () => {
    const container = document.querySelector(APPLICATION.id.main.cards.container)

    container.innerHTML = ''
}