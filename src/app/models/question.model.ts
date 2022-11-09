export interface QuestionI {
    id: string,
    author: string,
    timestamp: number,
    optionOne: {
        votes: string[],
        text: string
    },
    optionTwo: {
        votes: string[],
        text: string
    }
}

export type QuestionsI = Record<string, QuestionI>

export interface FormatQuestionI {
    optionOneText: string,
    optionTwoText: string,
    author: string
}
