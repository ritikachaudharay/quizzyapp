import Button from '../Button/index.js';
import './question.css';
import {useState} from 'react';

function Qustion({selectedQuestion, displayAnswer}){
    const [enableButton, setEnableButton] = useState(false);
    const [selectedAnswer, setSelectedAnswer]=useState(null);

    const selectAnswer=(event)=>{
        setEnableButton(true);
        //console.log("hiiiiiiiii...event.", event.target.value);
        setSelectedAnswer(event.target.value);

    }

return (
    selectedQuestion ? 
    <>
    <div className = 'ques-component'>
    <p className = 'question'>{selectedQuestion.question}</p>
    <p >Options:</p>
    {selectedQuestion.options.map((option,index)=>{
        return (
            <div key={index}>
            <input type="radio" id={option} name="option" value={option} className='option' onChange={selectAnswer}/>
            <label for={option} className='option-label'>{option}</label><br />
            </div>
        )
    })}
   
    </div>
    <Button buttonStyles={'submit-button'} label={'SUBMIT'} onClickHandler={()=>displayAnswer(selectedQuestion,selectedAnswer)} enableButton={!enableButton}/>
    </> : <></>
)
}

export default Qustion;