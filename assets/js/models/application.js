/**
 * An object containg application datas.
 */
export const APPLICATION = {
    element: {
        headerContainer() { document.querySelector(this.id.header.container) },
        mainContainer: document.querySelector('#main'),
        footerContainer() { document.querySelector(this.id.footer.container) },
        townInput() { document.querySelector(this.id.header.townInput) },
        search() { document.querySelector(this.id.header.search) },
    },
    id: {
        header: {
            container: '#header',
            townInput: '#town-input',
            search: '#town-search-button',
        },
        main: {
            container: '#main',
            card: {
                container: '#main-card-',
                hour: '#main-card-hour-',
                icon: '#main-card-icon-',
                state: '#main-card-state-',
                temp: '#main-card-temp-',
                feel: '#main-card-feel-',
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
            townInput: 'header__town-input',
            search: 'header__button',
        },
        main: {
            container: 'main',
            card: {
                container: 'main__card',
                hour: 'main__card__hour',
                icon: 'main__card__icon',
                state: 'main__card__state',
                temp: 'main__card__temperature',
                feel: 'main__card__feel-temperature',
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
        }
    },
    externalApi: {
        key: 'f9c943a7adbe8a3ad653fe2f3d5d2794'
    },
    units: 'metric',
    errorTimeout: 500,
    //request: 'https://thatsthespir.it/api',
    //defaultImage: '../assets/img/avatar.jpg'
}