import React from 'react';
import { Wrapper, ButtonWrapper } from './Qcard.styles';

type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNum: Number;
    totalQuestions: Number;
}

export const Qcard: React.FC<Props> = ({question,answers,callback,userAnswer,questionNum,totalQuestions}) =>
{
  return (
    <Wrapper>
        <p>
        Question : {questionNum} / {totalQuestions}
        </p>
        <b>
        <p dangerouslySetInnerHTML={{__html : question}} />
        </b>
        <div>
            {answers.map(answer => (
                <ButtonWrapper                        
                correct = {userAnswer && userAnswer.correctAnswer === answer}
                userClicked = {userAnswer && userAnswer.answer === answer }
                >
                    <button disabled={userAnswer} value={answer} onClick={callback} >
                        <span dangerouslySetInnerHTML={{__html:answer}} />
                    </button>
                </ButtonWrapper>    
            ))}
        </div>
    </Wrapper>
  );
}

