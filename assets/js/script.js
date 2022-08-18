import { apiQuery } from "./models/apiQuery.js"
import { weatherController } from "./controllers/todayWeatherController.js"

import { searchButtonListener } from "./controllers/searchButtonListener.js"

// try bxl query
// console.log(apiQuery(50.85034, 4.35171))

// weatherController(50.85034, 4.35171)
// weatherController('bruxelles')

searchButtonListener()

// const test = 'https://api.teleport.org/api/cities/?search=Bruxelles'

// const testA = async () => {
//     const response = await fetch(test)
//     const jsonResponse = await response.json()
//     console.log(jsonResponse);
// }

// testA()