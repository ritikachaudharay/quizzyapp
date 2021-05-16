import './questionIcon.css';

function QuestionIcon({ item, displayQuestion}) {
    const usedQuestions =JSON.parse(localStorage.getItem('usedQuestions'));
    const isSelectedQuestion = usedQuestions.includes(item.id)? true : false ;
    return (
        <div style={isSelectedQuestion?{cursor: 'not-allowed'}:{  cursor: 'pointer'}} className='ques-icon' onClick={isSelectedQuestion?()=>{}:(e)=>displayQuestion(item.id)} >
         <p style={isSelectedQuestion?{  color:'brown'}:{  color:'rgb(28, 138, 228)'}} className='ques-diff'>{item.difficultyLevel} {item.difficultyLevel === '1' ? 'Run' :'Runs'}</p>
        </div>
    )
}
export default QuestionIcon;
