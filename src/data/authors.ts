import type { Author } from "./types";


export const AUTHORS: Author[] = [
    {username:"maryam", name: "Masuma Akhter Maryam"}
]

export function getAuthorByUsername(username: string): Author | undefined {
    return AUTHORS
    .find((author) => author.username === username )
}