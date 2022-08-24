import { getCitySearchValue } from "../utils/getCitySearchValue.js"
import { getAutocompleteList } from "../models/getAutocompleteList.js"
import { autocomplete } from "../views/autocomplete.js"
import { flushAutocomplete } from "../views/flushAutocomplete.js"

/**
 * Flush the autocomplete in DOM and replace it by new autocomplete
 * search if something is found.
 */
export const autoCompleteController = async () => {
    const autocompleteList = await getAutocompleteList(getCitySearchValue())

    flushAutocomplete()

    if (autocompleteList.length > 0) {
        autocomplete(autocompleteList)
    }
}