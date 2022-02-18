 type languagesPropsType = {
    english: OneLanguageType
    russian: OneLanguageType
}

export type OneLanguageType = {
    hello: string
    buy:string

}

export const languages: languagesPropsType = {
    english: {
        hello: "hello",
        buy: "buy"
    },
    russian: {
        hello: "привет",
        buy: "пока"

    }

}