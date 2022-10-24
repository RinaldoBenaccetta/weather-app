import { getCitySearchValue } from "../utils/getCitySearchValue.js"
import { getAutocompleteList } from "../models/autocomplete/getAutocompleteList.js"
import { buildAutocomplete } from "../views/autocomplete/buildAutocomplete.js"
import { autocompleteListener } from "./listeners/autocompleteListener.js"
import { hideAutocomplete } from "../views/autocomplete/hideAutocomplete.js"
import { removeAutocompleteItemsListener } from "./listeners/autoCompleteItemsListener"
import { ELEMENTS } from "../models/elements"
import { removeElementContent } from "../utils/removeElementContent"

/**
 * If close tag is not provided, open the autocomplete in DOM.
 * Else, remove the autocomplete in DOM.
 *
 * @param close
 * @returns {Promise<void>}
 */
export const autoCompleteController = async (close: "close"|null = null): Promise<void> => {
    close ? closeAutocomplete() : await openAutocomplete()
}

/**
 * Show autocomplete with a list of items corresponding to the search input value.
 *
 * @returns {Promise<void>}
 */
const openAutocomplete = async (): Promise<void> => {
    const autocompleteList = await getAutocompleteList(getCitySearchValue())

    removeElementContent(ELEMENTS.autocompleteList)

    if (autocompleteList) {
        buildAutocomplete(autocompleteList)
        autocompleteListener()
    }
}

/**
 * Remove the autocomplete content and hide it.
 */
const closeAutocomplete = (): void => {
    removeAutocompleteItemsListener()
    removeElementContent(ELEMENTS.autocompleteList)
    hideAutocomplete()
}
