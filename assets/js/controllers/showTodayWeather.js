import { getTodayWeather } from "../models/getTodayWeather.js"
import { mainCard } from "../views/mainCard.js"
import { formatId } from "../utils/formatId.js";

export const showTodayWeather = async (lat, lon) => {
    const todayWeather = await getTodayWeather(lat, lon)

    // console.log(todayWeather);
    todayWeather.forEach((time, index) => {
        mainCard(time, formatId(index, 2))
    });

    // test with first

}