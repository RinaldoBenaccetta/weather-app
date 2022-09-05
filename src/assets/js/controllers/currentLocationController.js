import {weatherController} from "./weatherController.js"

/**
 * Get the current location of device.
 * If location is found, show the according weather.
 */
export const currentLocationController = () => {
    if (navigator.geolocation) navigator.geolocation.getCurrentPosition(currentLocationSuccess)
}

/**
 * Success callback for currentLocationController.
 * Call weather with longitude and latitude.
 *
 * @param {Object} position
 * @returns {Promise<void>}
 */
const currentLocationSuccess = async (position) => {
    await weatherController(
        {
            lat: position.coords.latitude,
            long: position.coords.longitude
        }
    )
}
