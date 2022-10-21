import {ELEMENTS} from "../../models/elements.js"
import {APPLICATION} from "../../models/application.js"
import {autoCompleteController} from "../autocompleteController.js"

/**
 * Listen for click on an item from the autocomplete.
 */
export const autocompleteListener = (): void => {
    ELEMENTS.body?.addEventListener('click', (e: Event) => autocompleteClickOutsideHandler(e))
}

/**
 * Remove the autocomplete listener.
 */
const removeAutocompleteListener = (): void => {
    ELEMENTS.body?.removeEventListener('click', (e: Event) => autocompleteClickOutsideHandler(e))
}

/**
 * If user click outside the autocomplete, remove autocomplete listener and close autocomplete.
 *
 * @param {Event} e
 * @returns {Promise<void>}
 */
const autocompleteClickOutsideHandler = async (e: Event): Promise<void> => {
    const target = e.target as HTMLLabelElement

    if (target && isClickedOutsideAutocomplete(target)) {
        removeAutocompleteListener()
        await autoCompleteController('close')
    }
}

/**
 * Check if user have clicked outside the autocomplete container.
 *
 * @param {HTMLLabelElement} target
 * @returns {boolean}
 */
const isClickedOutsideAutocomplete = (target: HTMLLabelElement): boolean => {
    return (
        target !== ELEMENTS.autocompleteContainer
        && target !== ELEMENTS.autocompleteList
        && !target.classList.contains(APPLICATION.class.header.searchContainer.autocomplete.list.item)
    )
}

