import { APPLICATION } from "../../models/application.js"
import { autoCompleteController } from "../autocompleteController.js";

/**
 * Add a listener on search input on keyup
 */
export const citySearchInputListener = () => {
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

    cityInput.removeEventListener('keyup', inputListener)

    delayedCallAutocomplete()
    delayedStartListener()
}

/**
 * Call autocomplete controller after a delay.
 */
const delayedCallAutocomplete = () => {
    setTimeout(() => autoCompleteController()
        , APPLICATION.inputTimeout)
}

/**
 * Start the city search listener after a delay.
 */
const delayedStartListener = () => {
    setTimeout(() => citySearchInputListener()
        , APPLICATION.inputTimeout)
}