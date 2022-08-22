import { autocompleteItem } from "../views/autocompleteItem.js"
import { toggleAutocomplete } from "../utils/toggleAutocomplete.js"

/**
 * Show 8 cards in DOM, each card represent 3 hours of prediction.
 * 
 * @param {Array} autocompleteCollection - Collection containing all cities items.
 */
export const autocomplete = (autocompleteCollection) => {
    toggleAutocomplete()
    autocompleteCollection.forEach((city) => {
        autocompleteItem(city)
    });
}