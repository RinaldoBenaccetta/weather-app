import { APPLICATION } from "../models/application.js"

export const flushAutocomplete = () => {
    const container = document.querySelector(APPLICATION.id.header.searchContainer.autocomplete.list)

    container.innerHTML = ''
}