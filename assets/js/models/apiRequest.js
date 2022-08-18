import { APPLICATION } from "./application.js";

const request = (lat, lon) => `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${APPLICATION.externalApi.key}&units=${APPLICATION.units}`

export const apiRequest = (lat, lon) => fetch(request(lat, lon));