import { APPLICATION } from "../../models/application.js"
import { weatherController } from "../weatherController.js"
import { getCitySearchValue } from "../../utils/getCitySearchValue.js"

/**
 * Listen The 'find' button and handle the query.
 */
export const searchButtonListener = () => {
    const searchButtonElement = document.querySelector(APPLICATION.id.header.searchContainer.search)

    searchButtonElement.addEventListener('click', cityFindHandler)
}

/**
 * Call the controller that show the weather
 * according to the search input value.
 */
export const cityFindHandler = () => weatherController(getCitySearchValue())