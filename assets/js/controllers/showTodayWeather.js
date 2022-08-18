import { getTodayWeather } from "../models/getTodayWeather.js"
import { mainCard } from "../views/mainCard.js"
import { formatId } from "../utils/formatId.js";

export const showTodayWeather = async (lat, lon) => {
    const todayWeather = await getTodayWeather(lat, lon)

    // console.log(todayWeather);

    // test with first
    mainCard(todayWeather[0], formatId(1, 2))
}