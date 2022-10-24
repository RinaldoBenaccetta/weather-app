export type WeatherCollection = {
    today: ParsedWeatherSlice[],
    all: ParsedWeatherSlice[],
    city: string,
}

export type ParsedWeatherSlice = {
    feel: string,
    hour: string,
    icon: string,
    state: string,
    temp: string
}
