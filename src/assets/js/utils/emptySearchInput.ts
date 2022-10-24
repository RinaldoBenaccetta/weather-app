import { ELEMENTS } from "../models/elements.js"

export const emptySearchInput = ():void => {
    const searchInput = ELEMENTS.citySearchInput as HTMLInputElement

    searchInput.value = ''
}
