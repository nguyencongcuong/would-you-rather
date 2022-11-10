import { UserI } from '../models/UserModel';

export const users: Record<string, UserI> = {
    sarahedo: {
        id: 'sarahedo',
        name: 'Sarah Edo',
        avatarURL: 'https://unsplash.com/photos/cIEb4UJ4ruk/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY3Nzk5NDU0&force=true&w=640',
        answers: {
            '8xf0y6ziyjabvozdd253nd': 'optionOne',
            '6ni6ok3ym7mf1p33lnez': 'optionTwo',
            'am8ehyc8byjqgar0jgpub9': 'optionTwo',
            'loxhs1bqm25b708cmbf3g': 'optionTwo'
        },
        questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
    },
    tylermcginnis: {
        id: 'tylermcginnis',
        name: 'Tyler McGinnis',
        avatarURL: 'https://unsplash.com/photos/ILip77SbmOE/download?force=true&w=640',
        answers: {
            'vthrdm985a262al8qx3do': 'optionOne',
            'xj352vofupe1dqz9emx13r': 'optionTwo',
        },
        questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
    },
    johndoe: {
        id: 'johndoe',
        name: 'John Doe',
        avatarURL: 'https://unsplash.com/photos/4Yv84VgQkRM/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjY3ODAwMTk0&force=true&w=640',
        answers: {
            'xj352vofupe1dqz9emx13r': 'optionOne',
            'vthrdm985a262al8qx3do': 'optionTwo',
            '6ni6ok3ym7mf1p33lnez': 'optionTwo'
        },
        questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
    }
};
