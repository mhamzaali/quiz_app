import { async } from "q";
import {shuffleArray} from './utilities'

export const fetchQuestions = async (amount: Number, category : Number ,difficulty: Difficulty) => 
{
    const endpoint = `http://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
    console.log(endpoint);
    const data = await(await fetch(endpoint)).json();
    return data.results.map((question:Question) => (
        {
        ...question,
        answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
        } 
    ))
};


export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}                                     

export type Question = {
    category : string;
    correct_answer : string;
    difficulty: string;
    incorrect_answers: string[];
    question : string;
    type : string; 
}

export type QuestionState = Question & {answers: string[]};