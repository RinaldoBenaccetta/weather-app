import { ELEMENTS } from "../models/elements.js"

/**
 * Return the value of the city search input.
 *
 * @returns {String}
 */
export const getCitySearchValue = (): string | undefined => {
    const citySearchInput = ELEMENTS.citySearchInput as HTMLInputElement

    return citySearchInput.value
}
