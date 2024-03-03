import { atom } from "nanostores";

type FetchedQuote = {
    author: string;
    content: string;
}

export const $fetchingQuote = atom(false)

export const $fetchedQuote = atom<FetchedQuote | null>({
    author: "",
    content: ""
})