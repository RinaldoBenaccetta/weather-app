import { autocompleteItem } from "./autocompleteItem.js"
import { showAutocomplete } from "../utils/addAutocomplete.js"

/**
 * Show autocomplete list in dom.
 * 
 * @param {Array} autocompleteCollection - Collection containing all cities items.
 */
export const buildAutocomplete = (autocompleteCollection) => {
    autocompleteCollection.forEach((city) => {
        autocompleteItem(city)
    })

    showAutocomplete()
}