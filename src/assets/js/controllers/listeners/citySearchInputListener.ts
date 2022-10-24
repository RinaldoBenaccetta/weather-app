import { ELEMENTS } from "../../models/elements.js"
import { APPLICATION } from "../../models/application.js"
import { autoCompleteController } from "../autocompleteController.js"

/**
 * Add a listener on search input on keyup
 */
export const citySearchInputListener = ():void => ELEMENTS.citySearchInput?.addEventListener('keyup', citySearchInputHandler)

/**
 * Remove listener on the search input,
 * add a delay provided by Application settings,
 * call the autocompletion controller
 * and add a new listener to the input.
 */
const citySearchInputHandler = ():void => {
    ELEMENTS.citySearchInput?.removeEventListener('keyup', citySearchInputHandler)

    delayedCallAutocomplete()
    delayedStartListener()
}

/**
 * Call autocomplete controller after a delay.
 */
const delayedCallAutocomplete = ():void => {
    setTimeout(() => autoCompleteController()
        , APPLICATION.inputTimeout)
}

/**
 * Start the city search listener after a delay.
 */
const delayedStartListener = ():void => {
    setTimeout(() => citySearchInputListener()
        , APPLICATION.inputTimeout)
}
