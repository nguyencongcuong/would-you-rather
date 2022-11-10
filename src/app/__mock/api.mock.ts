import { questions } from './questions.mock';
import { users } from './users.mock';
import { QuestionsI } from '../models/QuestionModel';

class MockAPI {

    public sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    public async getQuestions(): Promise<QuestionsI> {
        const answeredQuestions = questions;
        return questions;
    }

    public async getUsers() {
        await this.sleep(1000);
        return users;
    }
}

const mockAPI = new MockAPI();

export { mockAPI };
