import {APPLICATION} from "../../models/application.js"
import {weatherController} from "../weatherController.js"
import {autoCompleteController} from "../autocompleteController.js"
import {getAutocompleteItems} from "../../utils/getAutocompleteItems";

/**
 * Add a listener to the provided element
 * that call the autocomplete handler when clicked.
 *
 * @param {HTMLLIElement} item
 */
export const autoCompleteItemsListener = (item: HTMLLIElement): void => {
    item.addEventListener('click', (event: Event) => autoCompleteItemsHandler(event))
}

/**
 * Remove listeners from all items of autocomplete.
 */
export const removeAutocompleteItemsListener = (): void => {
    getAutocompleteItems().forEach((item: Element) =>
        item.removeEventListener('click', (event: Event) => autoCompleteItemsHandler(event)))
}

/**
 * Get the innerText of the provided item
 * and replace the value of city input by it.
 * Then call the find action as if the find button had clicked.
 *
 * @param {Event} event
 */
const autoCompleteItemsHandler = async (event: Event): Promise<void> => {
    if (event) {
        const newValue: string = getAutocompleteItemValue(event)

        replaceSearchByAutocomplete(newValue)
        await autoCompleteController('close')
        await weatherController({city: newValue})
    }
}

/**
 * Return the inner text of the provided event.
 *
 * @param {Event} event
 * @returns {String}
 */
const getAutocompleteItemValue = (event: Event): string => {
    if (event) {
        const eventTarget = event.target as HTMLElement;

        return eventTarget.innerText

    }

    return ''
}

/**
 *
 * Replace value of search input in the DOM by the provided string.
 *
 * @param {String} text
 */
const replaceSearchByAutocomplete = (text: string): void => {
    const searchInput: HTMLInputElement | null = document.querySelector(APPLICATION.id.header.searchContainer.townInput)

    if (searchInput) searchInput.value = text
}
