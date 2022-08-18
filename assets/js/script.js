import { apiQuery } from "./models/apiQuery.js";
import { weatherController } from "./controllers/todayWeatherController.js";

// try bxl query
// console.log(apiQuery(50.85034, 4.35171))

weatherController(50.85034, 4.35171)