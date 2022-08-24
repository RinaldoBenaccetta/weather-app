import { APPLICATION } from "../../models/application.js"
import { weatherController } from "../weatherController.js"
import { getInput } from "../../utils/getInput.js"

/**
 * Listen The 'find' button and handle the query.
 */
export const searchButtonListener = () => {
    const searchButtonElement = document.querySelector(APPLICATION.id.header.searchContainer.search)

    searchButtonElement.addEventListener('click', cityFindHandler)
}

/**
 * get the value of the city input
 *  and call the controller that show the weather for it.
 */
export const cityFindHandler = () => {
    const searchInputValue = getInput()

    weatherController(searchInputValue)
}