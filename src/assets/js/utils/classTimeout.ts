/**
 * Add provided class to the DOM element with provided id,
 * and remove the class after provided time in milliseconds.
 *
 * @param {String} elementClass
 * @param {String} id
 * @param {Number} timer
 */
export const classTimeout = (elementClass: string, id: string, timer: number): void => {
    const container = document.querySelector(id) as HTMLElement

    // add class to container.
    container?.classList.add(elementClass);
    // wait before removing class.
    setTimeout(() => container?.classList.remove(elementClass), timer);
};
