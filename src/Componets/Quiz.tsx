import React, {useState} from 'react';
import {Qcard} from "./Qcard";
import { fetchQuestions, Difficulty, QuestionState } from "./../Api";
import { GlobalStyle, Wrapper } from './Quiz.styles';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    '& > *': {
     
      marginTop:'30px',
      width: '350px',
      height: '400px',
      background: 'linear-gradient(90deg, #b8f2e6, #48cae4)',
      cursor:'pointer',
    },
    marginBottom:'40px',
    margin:'0 auto'
  },
  root2: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: '0 auto',
      marginTop:'30px',
      width: '350px',
      height: '80px',
      background: 'linear-gradient(90deg, #b8f2e6, #48cae4)',
      cursor:'pointer',
    },
    marginBottom:'40px',
 
  },
  paper:{
    margin:'20px',
    textAlign:'center',
  },
  button1:{
   background: 'linear-gradient(90deg, #02c39a, #028090)',
   textAlign:'center',
   padding: '30px 0',
   fontWeight:'bold',
   color:'white',
   margin:'10px',
   textShadow: '2px 1px 4px #000000',
   paddingLeft:'20px',
   paddingRight:'20px'
  },
  button2:{
    background: 'linear-gradient(90deg, #f77f00, #fcbf49)',
    textAlign:'center',
    padding: '30px 0',
    fontWeight:'bold',
    color:'white',
    margin:'10px',
    textShadow: '2px 1px 4px #000000',
    paddingLeft:'20px',
    paddingRight:'20px'
   },
   button3:{
    background: 'linear-gradient(90deg, #ef233c, #d90429)',
    textAlign:'center',
    padding: '30px 0',
    fontWeight:'bold',
    color:'white',
    margin:'10px',
    textShadow: '2px 1px 4px #000000',
    paddingLeft:'20px',
    paddingRight:'20px'
   },
   icons:{
     margin:'30px',
     width:'270px',
     height:'auto',
   },
   title:{

   },
   titlemain:{
    color:'white',
    textShadow: '2px 1px 4px #000000',
   },
}));

const Total_Questions = 10;

type AnswerObject = {
  question : string;
  answer : string;
  correct: boolean;
  correctAnswer: string;
}

function Quiz() {

  const classes = useStyles();
    const [start,setStart] = useState(false);
    const [startCat,setStartCat] = useState(false);
    const [Loading,setLoading] = useState(false);
    const [Cat,setCat] = useState(0);
    const [questions,setQuestions] = useState<QuestionState[]>([]);
    const [number,setNumber] = useState(0);
    const [userAnswers,setUserAnswers] = useState<AnswerObject[]>([]);
    const [score,setScore] = useState(0);
    const [quizOver,setQuizOver]= useState(true);

    const seteasy = async() => {
      setLoading(true);
      setQuizOver(false);
      const newQuestions = await fetchQuestions(Total_Questions,Cat,Difficulty.EASY);
      setQuestions(newQuestions);   
      console.log("easy");
      setScore(0);
      setUserAnswers([]);
      setNumber(0);
      setLoading(false);
      setStart(false);
    };
    const setmedium = async() => {
      setLoading(true);
      setQuizOver(false);
      const newQuestions = await fetchQuestions(Total_Questions,Cat,Difficulty.MEDIUM);
      setQuestions(newQuestions);   
      console.log("Med");
      setScore(0);
      setUserAnswers([]);
      setNumber(0);
      setLoading(false);
      setStart(false);

    };
    const sethard = async() => {
      setLoading(true);
      setQuizOver(false);
      const newQuestions = await fetchQuestions(Total_Questions,Cat,Difficulty.HARD);
      setQuestions(newQuestions);   
      console.log("Hard");
      setScore(0);
      setUserAnswers([]);
      setNumber(0);
      setLoading(false);
      setStart(false);
    };
    const startButton = async() => {
      setStartCat(true);
    };
    const setCeleb = async() => {
      setCat(26);
      setStart(true);
      setStartCat(false);
    };
    const setHistory = async() => {
      setCat(23);
      setStart(true);
      setStartCat(false);
    };
    const setSports = async() => {
      setCat(21);
      setStart(true);
      setStartCat(false);
    };
    const setMusic = async() => {
      setCat(12);
      setStart(true);
      setStartCat(false);
    };
    const setComputer = async() => {
      setCat(18);
      setStart(true);
      setStartCat(false);
    };
    const setBooks = async() => {
      setCat(10);
      setStart(true);
      setStartCat(false);
    };
    const setGeo = async() => {
      setCat(22);
      setStart(true);
      setStartCat(false);
    };
    const setVehicles = async() => {
      setCat(28);
      setStart(true);
      setStartCat(false);
    };
    const setGK = async() => {
      setCat(9);
      setStart(true);
      setStartCat(false);
    };
    const setGames = async() => {
      setCat(15);
      setStart(true);
      setStartCat(false);
    };
    const setAnimals = async() => {
      setCat(27);
      setStart(true);
      setStartCat(false);
    };

    const nextQuestion = async()=>{
      const nextQuestion = number + 1;
      if(nextQuestion === Total_Questions){
        setQuizOver(true);
      }
      else{
        setNumber(nextQuestion)
      }
    };
    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) =>{
      if(!quizOver){
        const answer = e.currentTarget.value;
        const correct = questions[number].correct_answer === answer;
        if(correct){
          setScore(prev => prev + 1)
        }
      const answerObject = {
        question : questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      }
      setUserAnswers(prev => [...prev, answerObject])  
      }
    };


  return (
    <>

    <GlobalStyle />
    <Wrapper>
    {(quizOver && !startCat && !start) || userAnswers.length === Total_Questions ? (
      <h1>Quiz App</h1>) : null}
      {(quizOver && !startCat && !start) || userAnswers.length === Total_Questions ? (
      <img className='titleimage' src='https://illustratious.s3.amazonaws.com/screenshots/ow4qiv-online-education-webp.webp' alt="quiz" />) : null}
      {(quizOver && !startCat && !start) || userAnswers.length === Total_Questions ? (
      <button className='start' onClick={startButton}>Start Quiz</button> ) : null}
      {(startCat && !start) ? (
      <>
      <Typography variant="h3" className={classes.titlemain}>
         Select Category
       </Typography>  
      <div className={classes.root}>
      <Paper className={classes.paper} onClick={setCeleb} elevation={3} >
      <img src="https://image.flaticon.com/icons/svg/2040/2040629.svg" alt='icon' className={classes.icons}/>
      <Typography variant="h6" className={classes.title}>
            Celebrity
      </Typography>
      </Paper>
      <Paper className={classes.paper} onClick={setHistory} elevation={3} >
        <img src="https://image.flaticon.com/icons/svg/2234/2234697.svg" alt='icon' className={classes.icons}/>
        <Typography variant="h6" className={classes.title}>
            History
          </Typography>
      </Paper>
      <Paper className={classes.paper} onClick={setSports} elevation={3} >
      <img src="https://image.flaticon.com/icons/svg/606/606545.svg" alt='icon' className={classes.icons}/>
      <Typography variant="h6" className={classes.title}>
            Sports
          </Typography>
      </Paper>
      <Paper className={classes.paper} onClick={setGeo} elevation={3} >
      <img src="https://image.flaticon.com/icons/svg/174/174249.svg" alt='icon' className={classes.icons}/>
      <Typography variant="h6" className={classes.title}>
            Geography
          </Typography>
      </Paper>
      <Paper className={classes.paper} onClick={setAnimals} elevation={3} >
      <img src="https://image.flaticon.com/icons/svg/616/616408.svg" alt='icon' className={classes.icons}/>
      <Typography variant="h6" className={classes.title}>
            Animals
          </Typography>
      </Paper>
      <Paper className={classes.paper} onClick={setMusic} elevation={3} >
      <img src="https://image.flaticon.com/icons/svg/3043/3043665.svg" alt='icon' className={classes.icons}/>
      <Typography variant="h6" className={classes.title}>
            Music
          </Typography>
      </Paper>
      <Paper className={classes.paper} onClick={setComputer} elevation={3} >
      <img src="https://image.flaticon.com/icons/svg/2933/2933245.svg" alt='icon' className={classes.icons}/>
      <Typography variant="h6" className={classes.title}>
            Computer
          </Typography>
      </Paper>
      <Paper className={classes.paper} onClick={setGK} elevation={3} >
      <img src="https://image.flaticon.com/icons/svg/2490/2490421.svg" alt='icon' className={classes.icons}/>
      <Typography variant="h6" className={classes.title}>
            General Knowledge
          </Typography>
      </Paper>
      <Paper className={classes.paper} onClick={setVehicles} elevation={3} >
      <img src="https://image.flaticon.com/icons/svg/296/296216.svg" alt='icon' className={classes.icons}/>
      <Typography variant="h6" className={classes.title}>
            Vehicles
          </Typography>
      </Paper>
      <Paper className={classes.paper} onClick={setBooks} elevation={3} >
      <img src="https://image.flaticon.com/icons/svg/2232/2232688.svg" alt='icon' className={classes.icons}/>
      <Typography variant="h6" className={classes.title}>
            Books
          </Typography>
      </Paper>
      <Paper className={classes.paper} onClick={setGames} elevation={3} >
      <img src="https://image.flaticon.com/icons/svg/2991/2991606.svg" alt='icon' className={classes.icons}/>
      <Typography variant="h6" className={classes.title}>
            Video Games
          </Typography>
      </Paper>
      </div> </>) : null}
      {start ? (
      <>
      <Typography variant="h3" className={classes.titlemain}>
      Select Difficulty
      </Typography>  
      <div className={classes.root2}>
      <Paper className={classes.button1} onClick={seteasy} elevation={3} >
      Easy
      </Paper>
      <Paper className={classes.button2} onClick={setmedium} elevation={3} >
      Medium
      </Paper>
      <Paper className={classes.button3} onClick={sethard} elevation={3} >
      Hard
      </Paper>
      </div></> ) : null}
      {!quizOver && !start && !startCat ? (
      <p className='score'>Score : {score}</p> ) : null}
      {Loading ? (
      <p>Loading...</p> ): null} 
 {!Loading && !quizOver && !start && !startCat ? (
      <Qcard
        questionNum= {number+1}
        totalQuestions={Total_Questions}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
 /> ) : null}
      {!quizOver && !Loading && userAnswers.length === number + 1 && number!== Total_Questions - 1 ? (
      <button className='next' onClick={nextQuestion}>Next Question</button>): null}
    </Wrapper>
    </>
  );
}

export default Quiz;
