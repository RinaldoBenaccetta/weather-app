import { APPLICATION } from "../../models/application.js"
import { weatherController } from "../weatherController.js"

/**
 * Listen The 'find' button and handle the query.
 */
export const searchButtonListener = () => {
    const searchButtonElement = document.querySelector(APPLICATION.id.header.searchContainer.search)

    searchButtonElement.addEventListener('click', weatherController)
}