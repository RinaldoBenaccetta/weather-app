export const removeElementContent = (container: Element | undefined): void => {
    if (container) container.innerHTML = ''
}
