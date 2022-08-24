import { autocompleteItem } from "./autocompleteItem.js"
import { addAutocomplete } from "../utils/addAutocomplete.js"

/**
 * Show autocomplete list in dom.
 * 
 * @param {Array} autocompleteCollection - Collection containing all cities items.
 */
export const showAutocomplete = (autocompleteCollection) => {
    addAutocomplete()

    autocompleteCollection.forEach((city) => {
        autocompleteItem(city)
    });
}