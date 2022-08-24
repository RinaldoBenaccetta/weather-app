/**
 * An object containg application datas.
 */
export const APPLICATION = {
    id: {
        header: {
            container: '#header',
            searchContainer: {
                container: '#search-container',
                townInput: '#town-input',
                search: '#town-search-button',
                autocomplete: {
                    container: '#autocomplete',
                    list: '#autocomplete-list'
                },
            }
        },
        main: {
            container: '#main',
            localisation: "#localisation",
            cards: {
                container: '#today-cards-container',
                card: {
                    container: '#main-card-',
                    hour: '#main-card-hour-',
                    icon: '#main-card-icon-',
                    state: '#main-card-state-',
                    temp: '#main-card-temp-',
                    feel: '#main-card-feel-',
                }
            }
        },
        footer: {
            container: '#footer',
            card: {
                container: '#footer-card-',
                day: '#footer-card-day-',
                icon: '#footer-card-icon-',
                state: '#footer-card-state-',
                minTemp: '#footer-card-min-temp-',
                maxTemp: '#footer-card-max-temp-',
            }
        }
    },
    class: {
        error: 'error',
        header: {
            container: 'header',
            searchContainer: {
                container: 'header__search-container',
                townInput: 'header__town-input',
                search: 'header__button',
                autocomplete: {
                    container: 'header__autocomplete',
                    list: {
                        container: 'header__autocomplete__list',
                        item: 'header__autocomplete__item'
                    }
                },
            }
        },
        main: {
            container: 'main',
            localisation: 'main__lacalisation',
            card: {
                container: 'main__card',
                hour: 'main__card__hour',
                icon: 'main__card__icon',
                state: 'main__card__state',
                temp: 'main__card__temperature',
                feel: 'main__card__feel-temperature',
                feelLabel: 'main__card__feel-label',
            }
        },
        footer: {
            container: 'footer',
            card: {
                container: 'footer__card',
                day: 'footer__card__day',
                icon: 'footer__card__icon',
                state: 'footer__card__state',
                minTemp: 'footer__card__min-temperature',
                maxTemp: 'footer__card__max-temperature',
            }
        },
        hidden: 'hidden',
        icons: {
            empty: 'na',
            weather: [
                ['01', 'clear-sky'],
                ['02', 'few-clouds'],
                ['03', 'scattered-clouds'],
                ['04', 'broken-clouds'],
                ['09', 'shower-rain'],
                ['10', 'rain'],
                ['11', 'thunderstorm'],
                ['13', 'snow'],
                ['50', 'mist'],
            ]
        }
    },
    externalApi: {
        key: 'f9c943a7adbe8a3ad653fe2f3d5d2794'
    },
    units: 'metric',
    errorTimeout: 500,
    inputTimeout: 500,
    todayCardsCount: 8,
}