import { ELEMENTS } from "../../models/elements.js"
import { weatherController } from "../weatherController.js"
import { getCitySearchValue } from "../../utils/getCitySearchValue.js"

/**
 * Listen The 'find' button and handle the query.
 */
export const searchButtonListener = () => ELEMENTS.searchButton.addEventListener('click', () => weatherController({city: getCitySearchValue()}))
