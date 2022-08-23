import { cityInputListener } from "./controllers/listeners/cityInputListener.js";
import { searchButtonListener } from "./controllers/listeners/searchButtonListener.js"

import { APPLICATION } from "./models/application.js";

/**
 * Add listener to search button and city input.
 */
(() => {
    searchButtonListener()
    cityInputListener()
})()
