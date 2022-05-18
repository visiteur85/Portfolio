 type languagesPropsType = {
    english: OneLanguageType
    russian: OneLanguageType
}

export type OneLanguageType = {
    hello: string
    buy:string
    main:string

}

export const languages: languagesPropsType = {
    english: {
        hello: "hello",
        buy: "buy",
        main:"main"
    },
    russian: {
        hello: "привет",
        buy: "пока",
        main:"Главная"

    }

}