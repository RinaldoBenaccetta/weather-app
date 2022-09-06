import {ELEMENTS} from "../../models/elements.js"
import {APPLICATION} from "../../models/application.js"
import {autoCompleteController} from "../autocompleteController.js"

/**
 * Listen for click on an item from the autocomplete.
 */
export const autocompleteListener = () => {
    ELEMENTS.body.addEventListener('click', (e) => autocompleteClickOutsideHandler(e))
}

const removeAutocompleteListener = () => {
    ELEMENTS.body.removeEventListener('click', (e) => autocompleteClickOutsideHandler(e))
}

/**
 * If user click outside the autocomplete, remove autocomplete listener and close autocomplete.
 *
 * @param e
 * @returns {Promise<void>}
 */
const autocompleteClickOutsideHandler = async (e) => {
    if (isClickedOutsideAutocomplete(e.target)) {
        removeAutocompleteListener()
        await autoCompleteController('close')
    }
}

/**
 * Check if user have clicked outside the autocomplete container.
 *
 * @param target
 * @returns {boolean}
 */
const isClickedOutsideAutocomplete = (target) => {
    return (
        target !== ELEMENTS.autocompleteContainer
        && target !== ELEMENTS.autocompleteList
        && !target.classList.contains(APPLICATION.class.header.searchContainer.autocomplete.list.item)
    )
}

