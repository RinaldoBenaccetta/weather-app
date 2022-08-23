import { cityInputListener } from "./controllers/listeners/cityInputListener.js";
import { searchButtonListener } from "./controllers/listeners/searchButtonListener.js"

/**
 * Add listener to search button and city input.
 */
(() => {
    searchButtonListener()
    cityInputListener()
})()
