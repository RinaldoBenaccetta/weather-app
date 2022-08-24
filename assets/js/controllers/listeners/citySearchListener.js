// import { APPLICATION } from "../../models/application.js"
// import { autoCompleteController } from "../autocompleteController.js";

// /**
//  * Add a listener on search input on keyup.
//  */
// export const citySearchButtonListener = () => {
//     const cityInput = document.querySelector(APPLICATION.id.header.searchContainer.townInput)

//     cityInput.addEventListener('keyup', citySearchHandler)
// }

// /**
//  * Remove listener on the search input,
//  * call the autocompletion controller
//  * and add a new listener to the input.
//  */
// const citySearchHandler = () => {
//     const cityInput = document.querySelector(APPLICATION.id.header.searchContainer.townInput)

//     cityInput.removeEventListener('keyup', citySearchHandler)

//     delayedCallAutocomplete()
//     delayedStartListener()
// }

// /**
//  * Call autocomplete controller after a delay.
//  */
// const delayedCallAutocomplete = () => {
//     setTimeout(() => autoCompleteController()
//         , APPLICATION.inputTimeout)
// }

// /**
//  * Start the city search listener after a delay.
//  */
// const delayedStartListener = () => {
//     setTimeout(() => citySearchButtonListener()
//         , APPLICATION.inputTimeout)
// }