import { ELEMENTS } from "../../models/elements.js"

/**
 * Remove the content of the cards' container.
 */
export const removeTodayWeatherContent = (): void => {
    ELEMENTS.todayCardsContainer.innerHTML = ''
}
