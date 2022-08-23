import { cityInputListener } from "./controllers/cityInputListener.js";
import { searchButtonListener } from "./controllers/searchButtonListener.js"

/**
 * Add listener to search button and city input.
 */
(() => {
    searchButtonListener()
    cityInputListener()
})()
