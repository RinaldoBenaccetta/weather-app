import { APPLICATION } from "../models/application.js"
import { weatherController } from "./weatherController.js"
import { encodeInput } from "../utils/encodeInput.js"

export const searchButtonListener = () => {
    const searchButtonElement = document.querySelector(APPLICATION.id.header.searchContainer.search)

    searchButtonElement.addEventListener('click', buttonListener)
}

const buttonListener = () => {
    const searchInputElement = document.querySelector(APPLICATION.id.header.searchContainer.townInput)
    const searchInputValue = encodeInput(searchInputElement.value)

    weatherController(searchInputValue)
}