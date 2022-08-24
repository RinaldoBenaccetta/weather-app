import { mainCard } from "./mainCard.js"
import { formatId } from "../../utils/formatId.js"
import { flushCardsContainer } from "./flushCardsContainer.js";

/**
 * Show cards in DOM, each card represent 3 hours of prediction.
 * 
 * @param {Array} weatherCollection
 */
export const showTodayWeather = (weatherCollection) => {
    // empty container before add new cards
    flushCardsContainer()

    weatherCollection.forEach((time, index) => {
        mainCard(time, formatId(index, 2))
    });
}