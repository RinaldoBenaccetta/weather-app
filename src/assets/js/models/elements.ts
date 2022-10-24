import { APPLICATION } from "./application.js"

type Elements = {
    [key: string]: Element | undefined
}

/**
 * Return the DOM element corresponding to provided selector.
 *
 * @param id
 * @returns {Element}
 */
const getElement = (id: string): Element | undefined => {
    const element = document.querySelector(id)

    return element ? element : undefined
}

/**
 * An object with elements of the DOM.
 */
export const ELEMENTS: Elements = {
    body: document.body,
    main: getElement(APPLICATION.id.main.container),
    headerContainer: getElement(APPLICATION.id.header.container),
    mainContainer: getElement(APPLICATION.id.main.container),
    footerContainer: getElement(APPLICATION.id.footer.container),
    autocompleteList: getElement(APPLICATION.id.header.searchContainer.autocomplete.list),
    autocompleteContainer: getElement(APPLICATION.id.header.searchContainer.autocomplete.container),
    todayCardsContainer: getElement(APPLICATION.id.main.cards.container),
    weatherTitleContainer: getElement(APPLICATION.id.main.localisation),
    citySearchInput: getElement(APPLICATION.id.header.searchContainer.townInput),
    searchButton: getElement(APPLICATION.id.header.searchContainer.search),
}
