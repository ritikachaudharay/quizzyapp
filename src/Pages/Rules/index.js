import "./rules.css"
import RulesBox from "../../Components/rulesBox"
import Button from "../../Components/Button"
import { connect } from 'react-redux';
import { loadRules } from './State/action.js'
import { useEffect } from 'react';

function Rules({ loadRules, quizRules }) {
    useEffect(() => {
        loadRules()
    }, [])

    return (
        <>
            <h1 className="rules-heading">RULES</h1>
            <RulesBox rules={quizRules} />
            <Button label="PLAY" buttonStyles="rules-button" />

        </>
    );
}

function mapStateToProps({ rules }) {     // object :reducer list
    return {
        quizRules: rules.content
    }
}

const mapDispatchToProps = { loadRules }

export default connect(mapStateToProps, mapDispatchToProps)(Rules);
