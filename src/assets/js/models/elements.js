import { APPLICATION } from "./application.js"

/**
 * Return the DOM element corresponding to provided selector.
 *
 * @param id
 * @returns {Element}
 */
const getElement = (id) => {
    return document.querySelector(id)
}

/**
 * An object with elements of the DOM.
 *
 * @type {{mainContainer: Element, footerContainer: Element, autocompleteList: Element, todayCardsContainer: Element, weatherTitleContainer: Element, searchButton: Element, citySearchInput: Element, headerContainer: Element, autocompleteContainer: Element, main: Element, body: HTMLElement}}
 */
export const ELEMENTS = {
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
