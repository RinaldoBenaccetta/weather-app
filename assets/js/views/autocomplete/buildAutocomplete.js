import { appendAutocompleteItem } from "./appendAutocompleteItem.js"
import { showAutocomplete } from "./showAutocomplete.js"

/**
 * Show autocomplete list in dom.
 * 
 * @param {Array} autocompleteCollection - Collection containing all cities items.
 */
export const buildAutocomplete = (autocompleteCollection) => {
    autocompleteCollection.forEach((city) => {
        appendAutocompleteItem(city)
    })

    showAutocomplete()
}