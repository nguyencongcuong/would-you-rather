export interface UserI {
    id: string,
    name: string,
    avatarURL: string,
    answers: Record<string, string>
    questions: string[]
}

export interface UsersI {
    [p: string]: UserI;
}
