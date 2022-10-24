/**
 * Remove the inner HTML of the provided container if it exists.
 *
 * @param container
 */
export const removeElementContent = (container: Element | undefined): void => {
    if (container) container.innerHTML = ''
}
