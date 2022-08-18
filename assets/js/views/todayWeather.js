import { mainCard } from "../views/mainCard.js"
import { formatId } from "../utils/formatId.js";

export const todayWeather = (weatherCollection) => {
    weatherCollection.forEach((time, index) => {
        mainCard(time, formatId(index, 2))
    });
}