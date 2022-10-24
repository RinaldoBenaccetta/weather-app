import { APPLICATION } from "../models/application.js";

/**
 * Return the name of the icon file in the provided icon list
 * according to the provided API code.
 *
 * @param {String} iconId
 * @param {Array} iconList
 * @returns {String}
 */
export const pickIconName = (iconId: string, iconList: string[][]): string => {
    const emptyIcon: string = APPLICATION.class.icons.empty
    const usableIconId: string = iconIdWithoutSuffix(iconId)
    const matchIcon: string[] | undefined = iconList.find(icon => icon[0] === usableIconId)

    return matchIcon ? matchIcon[1] : emptyIcon
}

/**
 * Returns the id of the icon without his suffix.
 *
 * @param iconId
 */
const iconIdWithoutSuffix = (iconId: string): string => iconId.slice(0, 2)
