import { getCitySearchValue } from "../utils/getCitySearchValue.js"
import { getAutocompleteList } from "../models/autocomplete/getAutocompleteList.js"
import { buildAutocomplete } from "../views/autocomplete/buildAutocomplete.js"
import { removeAutocompleteContent } from "../views/autocomplete/removeAutocompleteContent.js"
import { autocompleteListener } from "./listeners/autocompleteListener.js"
import { hideAutocomplete } from "../views/autocomplete/hideAutocomplete.js"
import {removeAutocompleteItemsListener} from "./listeners/removeAutocompleteItemsListener.js"

/**
 * If close tag is not provided, open the autocomplete in DOM.
 * Else, remove the autocomplete in DOM.
 *
 * @param close
 * @returns {Promise<void>}
 */
export const autoCompleteController = async (close = null) => {
    close ? closeAutocomplete() : await openAutocomplete()
}

/**
 * Show autocomplete with a list of items corresponding to the search input value.
 *
 * @returns {Promise<void>}
 */
const openAutocomplete = async () => {
    const autocompleteList = await getAutocompleteList(getCitySearchValue())

    removeAutocompleteContent()

    if (autocompleteList) {
        buildAutocomplete(autocompleteList)
        autocompleteListener()
    }
}

/**
 * Remove the autocomplete content and hide it.
 */
const closeAutocomplete = () => {
    removeAutocompleteItemsListener()
    removeAutocompleteContent()
    hideAutocomplete()
}
