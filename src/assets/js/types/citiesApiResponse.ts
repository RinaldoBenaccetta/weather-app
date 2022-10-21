export type CitiesApiResponse = {
    count: number,
    _embedded: {
        "city:search-results": CitySearchResult[]
    },
    _links: {
        curies: { href: string }[],
        self: { href: string }
    }
}

export type CitySearchResult = {
    matching_alternate_names: { name: string }[],
    matching_full_name: string,
    _links: {
        "city:item": { href: string }
    }
}
