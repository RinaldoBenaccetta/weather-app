import { cityWeatherRequest } from "./request.js"

/**
 * Get the weather from API according to the coordinates in jon format.
 * If response code retuned by API is not 200 or if there is an error,
 * return false.
 * 
 * @param {String} city
 * @returns {Object|False} 
 */
export const weatherQuery = async (city) => {
    const response = await fetchCityWeather(city)

    console.log(response)

    return response ? await response.json() : false
    // const jsonResponse = await response.json()

    // return jsonResponse.cod === '200' ? jsonResponse : false


    // try {
    //     const response = await fetch(cityWeatherRequest(city))
    //     const jsonResponse = await response.json()

    //     return jsonResponse.cod === '200' ? jsonResponse : false

    // } catch (error) {
    //     console.log('There is an error :', error)
    //     return false
    // }
}

const fetchCityWeather = async (city) => {
    try {
        const jsonResponse = await fetch(cityWeatherRequest(city))
        console.log(jsonResponse)
        console.log(jsonResponse.status);

        return jsonResponse.status === 200 ? jsonResponse : false

    } catch (error) {
        console.log('There is an error :', error)
        return false
    }
}

// https://stackoverflow.com/questions/51781137/how-can-i-handle-error-404-in-async-await-fetch-api