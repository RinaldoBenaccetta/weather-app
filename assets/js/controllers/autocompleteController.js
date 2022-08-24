import { getInput } from "../utils/getInput.js"
import { getAutocomplete } from "../models/getAutocomplete.js"
import { autocomplete } from "../views/autocomplete.js"
import { flushAutocomplete } from "../views/flushAutocomplete.js"

/**
 * Flush the autocomplete in DOM and replace it by new autocomplete
 * search if something is found.
 */
export const autoCompleteController = async () => {
    const searchInputValue = getInput()
    const autocompleteArray = await getAutocomplete(searchInputValue)

    flushAutocomplete()

    if (autocompleteArray.length > 0) {
        autocomplete(autocompleteArray)
    }
}