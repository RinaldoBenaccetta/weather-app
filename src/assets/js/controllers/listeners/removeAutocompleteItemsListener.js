import {getAutocompleteItems} from "../../utils/getAutocompleteItems.js"

/**
 * Remove listeners from all items of autocomplete.
 */
export const removeAutocompleteItemsListener = () => {
    getAutocompleteItems().forEach((item) =>
        item.removeEventListener('click', (element) => autoCompleteItemsHandler(element)))
}
