import './game.css';
import QuestionDeck from "../../Components/QuestionDeck";
import Button from '../../Components/Button';
import { connect } from 'react-redux';
import { loadItems } from './State/action.js';
import { useEffect, useState } from 'react';
import Question from '../../Components/Question';
import Answer from '../../Components/Answer';
import FinalScore from '../../Components/FinalScore';

function Game({ loadItems, quizItems, history }) {

    const [showQuestionDeck, setShowQuestionDeck]=useState(true);   //flag
    const [showQuestion, setShowQuestion] = useState(false);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [showAnswer,setShowAnswer]= useState(false);
    const [showFinalScore, setShowFinalScore] = useState(false);

    useEffect(() => {

        const usedQuestions= JSON.parse(localStorage.getItem('usedQuestions'));
        const wickets = JSON.parse(localStorage.getItem('wickets'));

        if(wickets>=3|| usedQuestions && usedQuestions.length===30){
            displayFinalScore();
        }

        loadItems();
        if(localStorage.getItem('score')===null){
        localStorage.setItem('score',0);
        }
        if(localStorage.getItem('wickets')===null){
        localStorage.setItem('wickets',0);
        }
        if(localStorage.getItem('usedQuestions')=== null){
        localStorage.setItem('usedQuestions','[]');
        }
    }, [])


    const displayQuestion=(id)=>{
        setShowQuestionDeck(false);
        setShowQuestion(true);

        const selQuestion = quizItems.items.find((item)=>{
            return item.id ===id ;
        })
        setSelectedQuestion(selQuestion);

        
        
    }


    const displayAnswer=(selectedItem,userAnswer)=>{

       
        const selectedQuestions = JSON.parse(localStorage.getItem('usedQuestions'));
        selectedQuestions.push(selectedItem.id );
        localStorage.setItem('usedQuestions',JSON.stringify(selectedQuestions));


        if(selectedItem.answer===userAnswer){
            const prevScore=JSON.parse(localStorage.getItem('score'));
            const newScore=prevScore+ parseInt(selectedItem.difficultyLevel);
            localStorage.setItem('score',newScore);
        }
        else{
            const prevWicket =JSON.parse(localStorage.getItem('wickets'));
            const newWickets = prevWicket+1;
            localStorage.setItem('wickets',newWickets)
        }
        setShowAnswer(true);
        setShowQuestion(false);
    }

    const displayQuestionDeck=()=>{
        setShowQuestionDeck(true);
        setShowAnswer(false);
    }

    const displayFinalScore=()=>{
        setShowFinalScore(true);
        setShowQuestionDeck(false);
        setShowAnswer(false);
        
    }

    const goToRulesRoute=()=>{
        localStorage.setItem('score',0);
        localStorage.setItem('wickets',0);
        localStorage.setItem('usedQuestions','[]');
        localStorage.removeItem('name');
        history.push('/')
    }

    return (
        <>
       {showQuestionDeck &&  <>
        
            <p className='game-label'>Choose Your Question {localStorage.getItem("name")} !</p>
            <div className='game-components'>
                <Button buttonStyles='declare-button' label='Declare' onClickHandler={displayFinalScore}/>
                <QuestionDeck quizItems={quizItems} displayQuestion={displayQuestion}/>
                <p className='score'>Score: {localStorage.getItem('score')}/{localStorage.getItem('wickets')}</p>
            </div>

        </> }
       { showQuestion && <Question selectedQuestion={selectedQuestion} displayAnswer={displayAnswer}/>}
       {showAnswer && <Answer answer={selectedQuestion.answer} displayQuestionDeck={displayQuestionDeck} displayFinalScore={displayFinalScore}/>}
       {showFinalScore && <FinalScore goToRulesRoute={goToRulesRoute}/>}
       </>

    )

}

function mapStateToProps({ items }) {
    return {
        quizItems: items.content
    }
}

const mapDispatchToProps = { loadItems };    //here loadItems is a prop

export default connect(mapStateToProps, mapDispatchToProps)(Game);


