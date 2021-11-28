import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

export const Resultpage = (props) => {
  // console.log(props,"props")
  const {history} = props
  let result = props.location.state;
  const dispatch = useDispatch()
  const [count, setCount] = useState(0)

  const RadioState = useSelector(state => state.radioAns)
  console.log(RadioState.lengthh,"radioState")
  const CheckboxState = useSelector(state => state.checkBoxAns)
  const correctAnsState = useSelector(state => state.correctRadioAns)
  const correctAnsArray = [...new Set(correctAnsState.sort())]
  const selectAnsArray = [...new Set(RadioState.sort())]

  

  console.log(correctAnsArray,"correctAnsArray")
  console.log(selectAnsArray,"selectAnsArray")
  // console.log(arr,"remove duploicate arr")
  // console.log(result.correctAns,"correctAns")
  // let wrongeAnx = result.noOfQuestions - result.correctAns;
  
  // let correntAns = result.noOfQuestions - wrongeAnx;

  const handleBackbtn =()=>{
    history.push('/');
    dispatch({type:"REFRESH_STATE",payload:[]})
    // window.location.reload();
  }

  return (
    <div className="container mt-3">
      <h3> My Interview Portal</h3>
      <hr/>
      <Card>
        <Card.Header>{result.name} - Result</Card.Header>
        <Card.Body>
          <Card.Text>
            <div className="text-center">
              <h2>Total No Of Question : {result.noOfQuestions}</h2> 
              <p1 className="text-success fs-5">Correct Answers : {selectAnsArray.length} </p1>
              <p1 className="text-danger fs-5">Wrong Answers : {} </p1>
            </div>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <button
            type="button"
            className="btn btn-success btn-sm float-end"
            onClick={handleBackbtn}
          >
            Back To Test
          </button>
        </Card.Footer>
      </Card>
    </div>
  );
};
