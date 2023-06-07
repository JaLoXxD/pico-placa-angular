export const constants = {
    MODAL: {
        ICONS: {
            SUCCESS: {
                src: 'assets/img/modal/success.png',
                alt: 'success icon',
            },
            ERROR: {
                src: 'assets/img/modal/error.png',
                alt: 'error icon'
            },
        }
    },
    PLATES: [
        {
            LABEL: "days.monday",
            FIRST: 1,
            LAST: 2,
        },
        {
            LABEL: "days.tuesday",
            FIRST: 3,
            LAST: 4,
        },
        {
            LABEL: "days.wednesday",
            FIRST: 5,
            LAST: 6,
        },
        {
            LABEL: "days.thursday",
            FIRST: 7,
            LAST: 8,
        },
        {
            LABEL: "days.friday",
            FIRST: 9,
            LAST: 0,
        },
        {
            LABEL: "days.weekends"
        }
    ],
    SCHEDULES: [
        {
            TIME: "circulation.schedule.morning",
            ICON: "fa-solid fa-sun",
            FROM: "6:00AM",
            TO: "9:30AM"
        },
        {
            TIME: "circulation.schedule.afternoon",
            ICON: "fa-solid fa-moon",
            FROM: "4:00PM",
            TO: "8:00PM"
        }
    ],
    LANG_OPTIONS: [
        {
            LANG: "es",
            ICON: "assets/img/lang/es.png",
            LABEL: "lang.es"
        },
        {
            LANG: "en",
            ICON: "assets/img/lang/en.png",
            LABEL: "lang.en"
        }
    ]
}