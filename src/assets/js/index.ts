/**
 * Add style to html.
 */
import '../scss/styles.scss'

import { searchButtonListener } from "./controllers/listeners/searchButtonListener.js"
import { citySearchInputListener } from "./controllers/listeners/citySearchInputListener.js"
import { currentLocationController } from "./controllers/currentLocationController.js"

/**
 * Add listener to search button and city input.
 */
searchButtonListener()
citySearchInputListener()
currentLocationController()
