import Button from '../Button/index.js';
import './question.css';

function Qustion({selectedQuestion, displayAnswer}){
return (
    selectedQuestion ? 
    <>
    <div className = 'ques-component'>
    <p className = 'question'>{selectedQuestion.question}</p>
    <p >Options:</p>
    {selectedQuestion.options.map((option,index)=>{
        return (
            <div key={index}>
            <input type="radio" id={option} name="option" value={option} className='option'/>
            <label for={option} className='option-label'>{option}</label><br />
            </div>
        )
    })}
   
    </div>
    <Button buttonStyles={'submit-button'} label={'SUBMIT'} onClickHandler={displayAnswer}/>
    </> : <></>
)
}

export default Qustion;