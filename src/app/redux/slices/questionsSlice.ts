import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { QuestionI, QuestionsI } from '../../models/QuestionModel';
import { questions } from '../../__mock/questions.mock';

export type QuestionState = QuestionsI

const initialState: QuestionState = questions;

export const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {

        getQuestions: (state) => {
            state = questions;
        },

        updateQuestion: (state, action: PayloadAction<{ question: QuestionI }>) => {
            const { question } = action.payload;
            state[question.id] = question;
        },

        addQuestion: (state, action: PayloadAction<{ id: string, question: QuestionI }>) => {
            const { id, question } = action.payload;
            state[id] = question;
        }

    }
});

export const { getQuestions, updateQuestion, addQuestion } = questionsSlice.actions;

export const selectQuestions = (state: RootState) => state.questions;

export default questionsSlice.reducer;
