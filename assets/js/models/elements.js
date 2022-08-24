import { APPLICATION } from "./application.js"

export const ELEMENTS = {
    headerContainer: document.querySelector(APPLICATION.id.header.container),
    mainContainer: document.querySelector(APPLICATION.id.main.container),
    footerContainer: document.querySelector(APPLICATION.id.footer.container),
    autocompleteList: document.querySelector(APPLICATION.id.header.searchContainer.autocomplete.list),
    autocompleteContainer: document.querySelector(APPLICATION.id.header.searchContainer.autocomplete.container),
    todayCardsContainer: document.querySelector(APPLICATION.id.main.cards.container),
    weatherTitleContainer: document.querySelector(APPLICATION.id.main.localisation),
    citySearchInput: document.querySelector(APPLICATION.id.header.searchContainer.townInput),
    searchButton: document.querySelector(APPLICATION.id.header.searchContainer.search),
}