import './questionIcon.css';

function QuestionIcon({ item, displayQuestion}) {
    return (
        <div className='ques-icon' onClick={(e)=>displayQuestion(item.id)} >
         <p className='ques-diff'>{item.difficultyLevel} {item.difficultyLevel === '1' ? 'Run' :'Runs'}</p>
        </div>
    )
}
export default QuestionIcon;
