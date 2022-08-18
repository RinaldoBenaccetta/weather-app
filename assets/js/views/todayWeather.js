import { mainCard } from "../views/mainCard.js"
import { formatId } from "../utils/formatId.js"
// import { flushMainContainer } from "./flushMainContainer.js"

/**
 * Show 8 cards in DOM, each card represent 3 hours of prediction.
 * 
 * @param {Array} weatherCollection - Collection containing 8 objects
 *                representing 24 hours of weather predictions,
 *                one object by 3 hours.
 */
export const todayWeather = (weatherCollection) => {
    // flushMainContainer()

    weatherCollection.forEach((time, index) => {
        mainCard(time, formatId(index, 2))
    });
}