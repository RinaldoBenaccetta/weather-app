import { autocompleteItem } from "../views/autocompleteItem.js"
import { addAutocomplete } from "../utils/addAutocomplete.js"

/**
 * Show autocomplete list in dom.
 * 
 * @param {Array} autocompleteCollection - Collection containing all cities items.
 */
export const autocomplete = (autocompleteCollection) => {
    addAutocomplete()
    autocompleteCollection.forEach((city) => {
        autocompleteItem(city)
    });
}