import { APPLICATION } from "../models/application.js"
import { getInput } from "../utils/getInput.js"
import { autoCompleteController } from "./autocompleteController.js";

export const cityInputListener = () => {
    const cityInput = document.querySelector(APPLICATION.id.header.searchContainer.townInput)

    cityInput.addEventListener('keyup', inputListener)
}

const inputListener = () => {
    const searchInputValue = getInput()

    autoCompleteController(searchInputValue)

}