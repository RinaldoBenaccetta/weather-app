import {weatherController} from "./weatherController.js"

type DevicePosition = {
    coords: {
        latitude: number,
        longitude: number
    }
}

/**
 * Get the current location of device.
 * If location is found, show the according weather.
 */
export const currentLocationController = ():void => {
    if (navigator.geolocation) navigator.geolocation.getCurrentPosition(currentLocationSuccess)
}

/**
 * Success callback for currentLocationController.
 * Call weather with longitude and latitude.
 *
 * @param {Object} devicePosition
 * @returns {Promise<void>}
 */
const currentLocationSuccess = async (devicePosition: DevicePosition): Promise<void> => {
    await weatherController(
        {
            lat: devicePosition.coords.latitude,
            long: devicePosition.coords.longitude
        }
    )
}
