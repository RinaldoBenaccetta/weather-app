import { APPLICATION } from "../models/application.js"
import { autoCompleteController } from "./autocompleteController.js";

/**
 * Add a listener on search input on keyup
 */
export const cityInputListener = () => {
    const cityInput = document.querySelector(APPLICATION.id.header.searchContainer.townInput)

    cityInput.addEventListener('keyup', inputListener)
}

/**
 * Remove listener on the search input,
 * add a delay provided by APPLICATION settings,
 * call the autocompletion controller
 * and add a new listener to the input.
 */
const inputListener = () => {
    const cityInput = document.querySelector(APPLICATION.id.header.searchContainer.townInput)
    const inputTimeout = APPLICATION.inputTimeout

    cityInput.removeEventListener('keyup', inputListener)

    setTimeout(() => {
        autoCompleteController()
        cityInputListener()
    }, inputTimeout);
}