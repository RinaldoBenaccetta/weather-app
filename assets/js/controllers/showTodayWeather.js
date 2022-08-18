import { getTodayWeather } from "../models/getTodayWeather.js"
import { mainCard } from "../views/mainCard.js";

export const showTodayWeather = async (lat, lon) => {
    const todayWeather = await getTodayWeather(lat, lon)

    // test with first
    mainCard(todayWeather[0], '01')
}