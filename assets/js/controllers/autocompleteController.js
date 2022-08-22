import { getInput } from "../utils/getInput.js"
import { getAutocomplete } from "../models/getAutocomplete.js";

/**
 * 
 */
export const autoCompleteController = () => {
    const searchInputValue = getInput()
    console.log(searchInputValue);

    const autocompleteArray = getAutocomplete(searchInputValue)

    console.log(autocompleteArray);

}