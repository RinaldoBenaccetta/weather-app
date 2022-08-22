import { getInput } from "../utils/getInput.js"
import { getAutocomplete } from "../models/getAutocomplete.js"
import { autocomplete } from "../views/autocomplete.js"
import { flushAutocomplete } from "../views/flushAutocomplete.js"

/**
 * 
 */
export const autoCompleteController = async () => {
    const searchInputValue = getInput()
    console.log(searchInputValue);

    const autocompleteArray = await getAutocomplete(searchInputValue)
    flushAutocomplete()
    autocomplete(autocompleteArray)

    console.log(autocompleteArray);

}