import { getCitySearchValue } from "../utils/getCitySearchValue.js"
import { getAutocomplete } from "../models/getAutocomplete.js"
import { autocomplete } from "../views/autocomplete.js"
import { flushAutocomplete } from "../views/flushAutocomplete.js"

/**
 * Flush the autocomplete in DOM and replace it by new autocomplete
 * search if something is found.
 */
export const autoCompleteController = async () => {
    const autocompleteArray = await getAutocomplete(getCitySearchValue())

    flushAutocomplete()

    if (autocompleteArray.length > 0) {
        autocomplete(autocompleteArray)
    }
}