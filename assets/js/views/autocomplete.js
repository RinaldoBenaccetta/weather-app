import { autocompleteItem } from "../views/autocompleteItem.js"
// import { formatId } from "../utils/formatId.js"
// import { flushMainContainer } from "./flushMainContainer.js"

/**
 * Show 8 cards in DOM, each card represent 3 hours of prediction.
 * 
 * @param {Array} autocompleteCollection - Collection containing all cities items.
 */
export const autocomplete = (autocompleteCollection) => {
    console.log(autocompleteCollection);
    autocompleteCollection.forEach((city) => {
        autocompleteItem(city)
    });
}