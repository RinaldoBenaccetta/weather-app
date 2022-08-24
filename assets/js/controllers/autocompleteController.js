import { getCitySearchValue } from "../utils/getCitySearchValue.js"
import { getAutocompleteList } from "../models/getAutocompleteList.js"
import { buildAutocomplete } from "../views/autocomplete/buildAutocomplete.js"
import { removeAutocompleteContent } from "../views/autocomplete/removeAutocompleteContent.js"

/**
 * Flush the autocomplete in DOM and replace it by new autocomplete
 * search if something is found.
 */
export const autoCompleteController = async () => {
    const autocompleteList = await getAutocompleteList(getCitySearchValue())

    removeAutocompleteContent()

    if (autocompleteList) buildAutocomplete(autocompleteList)
}