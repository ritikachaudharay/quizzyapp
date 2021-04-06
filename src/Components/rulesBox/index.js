import "./rulesBox.css"

function RulesBox(props) {


    return (

        <div className='rules-box'>
            <ul className='rules-list'>
                {props.rules && props.rules.rules.map((rule, index) => {

                    return (
                        <li key={index}>{rule}</li>
                    )
                })}

            </ul>
        </div>

    );
}

export default RulesBox;