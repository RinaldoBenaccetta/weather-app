export const trimStart = (string) => {
    return !string ? string : string.replace(/^\s+|\s+$/g, '')
};