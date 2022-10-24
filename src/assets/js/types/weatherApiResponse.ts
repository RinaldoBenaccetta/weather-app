export type WeatherApiResponse = {
    city: WeatherApiInCity,
    cnt: number,
    cod: string,
    list: WeatherApiSlice[],
    message: 0|string,
}

export type WeatherApiInCity = {
    coord: {
        lat: number,
        long: number
    },
    country: string,
    id: number,
    name: string,
    population: number,
    sunrise: number,
    sunset: number,
    timezone: number
}

export type WeatherApiSlice = {
    clouds: {
        all: number
    },
    dt: number,
    dt_txt: string,
    main: {
        feels_like: number,
        grnd_level: 996,
        humidity: number,
        pressure: number,
        sea_level: number,
        temp: number,
        temp_kf: number,
        temp_max: number,
        temp_min: number
    },
    pop: number,
    sys: {
        pod: string
    },
    visibility: number,
    weather: [
        {
            id: number,
            main: string,
            description: string,
            icon: string
        }
    ],
    wind: {
        speed: number,
        deg: number,
        gust: number
    }
}
