export const APPLICATION = {
    element: {
        headerContainer: document.querySelector(this.id.header.container),
        mainContainer: document.querySelector(this.id.main.container),
        footerContainer: document.querySelector(this.id.footer.container),
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
    }
    //request: 'https://thatsthespir.it/api',
    //defaultImage: '../assets/img/avatar.jpg'
}