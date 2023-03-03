import './App.css';
import React from 'react';

function Question(props) {  
    const[selected, setselected] = React.useState('0');

    const func = event => {
      setselected(event.currentTarget.id);
    };

    React.useEffect(function() {
      console.log(selected);
      const opts = props.seloption;
      opts[props.id - 1] = selected;
      console.log(opts);
    }, [selected])

    return (
      <div className="quess">
        <p className="aques">{props.question}</p>
        <div className="options">
            <div className="option" id="1" onClick={func} style={props.result===true ? {backgroundColor: selected === '1' ? (props.correctoptn === '1' ? '#94D7A2' : '#F8BCBC'): (props.correctoptn === '1' ? '#94D7A2' : 'white')} : {backgroundColor: selected === '1' ? '#D6DBF5' : 'white'}}>{props.optn1}</div>
            <div className="option" id="2" onClick={func} style={props.result===true ? {backgroundColor: selected === '2' ? (props.correctoptn === '2' ? '#94D7A2' : '#F8BCBC'): (props.correctoptn === '2' ? '#94D7A2' : 'white')} : {backgroundColor: selected === '2' ? '#D6DBF5' : 'white'}}>{props.optn2}</div>
            <div className="option" id="3" onClick={func} style={props.result===true ? {backgroundColor: selected === '3' ? (props.correctoptn === '3' ? '#94D7A2' : '#F8BCBC'): (props.correctoptn === '3' ? '#94D7A2' : 'white')} : {backgroundColor: selected === '3' ? '#D6DBF5' : 'white'}}>{props.optn3}</div>
            <div className="option" id="4" onClick={func} style={props.result===true ? {backgroundColor: selected === '4' ? (props.correctoptn === '4' ? '#94D7A2' : '#F8BCBC'): (props.correctoptn === '4' ? '#94D7A2' : 'white')} : {backgroundColor: selected === '4' ? '#D6DBF5' : 'white'}}>{props.optn4}</div>
        </div>
        <hr></hr>
      </div>
    );
  }
  
  export default Question;