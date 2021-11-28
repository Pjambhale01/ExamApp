import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import { Checkbox } from "./DisplayType/Checkbox";
import { Radio } from "./DisplayType/Radio";
import { useHistory } from "react-router-dom";
import { Resultpage } from "./Resultpage";

const Testpage = (props) => {
  let history = useHistory();
  let result = history.location.state;
  // console.log(result,"res")

  const [index, setIndex] = useState(0);
  const [checkBoxSelect, setCheckBoxSelect] = useState([])
  const state = useSelector((state) => state.userAns);

  const dispatch = useDispatch();
  const handleChechbox = () => {};

  const handleFinishBtn = (index) => {
    history.push(`/Result/${result.name}`, {
      name: result.name,
      correctOptions: result.questions[index]?.correctOptionIndex,
      noOfQuestions: result?.questions?.length,
      // correctAns: countMark,
    });
  };

  const handleNextBtn = () => {
    if(result.questions[index]?.type === "Multiple-Response"){
      let correctOption=result.questions[index]?.correctOptionIndex
      dispatch({type:"CHECKBOX_ANS",payload:{selected:checkBoxSelect,correctopt:correctOption}})
    }
   
    
    // const ras ={ id:result.questions[index]._id,ans :radioAns}
    // setTemp([...temp , ras])
    // const p ={
    //   questionId:result.questions[index]._id,
    //   userAns:[...new Set(checkAns)],
    //   radioAns: temp

    // }
    // dispatch({type:"USER_ANS",payload:[...state,checkAns]})

    // dispatch({type:"RADIO_ANS",payload:nextSelect})
    setIndex(index + 1);
  };

  const handlePreviousBtn = () => {
    setIndex(index - 1);
  };

  const handleMark = (ind) => {
    // console.log(ind,"ind")
    // setCountMark(countMark+1);
  };

  return (
    <div className="container">
      <h3> My Interview Portail</h3>
      <Card>
        <Card.Header>{result.name}</Card.Header>
        <Card.Body>
          <Card.Title>{result.questions[index]?.questionText}</Card.Title>
          <Card.Text>
            <div>
              {result.questions[index]?.type === "Multiple-Response" ? (
                <Checkbox
                  index={index}
                  questionId={result.questions[index]?._id}
                  options={result.questions[index]?.options}
                  correctOption={result.questions[index]?.correctOptionIndex}
                  onChange={handleMark}
                  setCheckBoxSelect={setCheckBoxSelect}
                  checkBoxSelect={checkBoxSelect}
                  // setnextSelect={setnextSelect}
                  // setPriviousSelect={setPriviousSelect}
                />
              ) : (
                <Radio
                  index={index}
                  options={result.questions[index]?.options}
                  correctOption={result.questions[index]?.correctOptionIndex}
                  quationId={result.questions[index]?._id}
                  onChange={handleMark}
                  // setnextSelect={setnextSelect}
                  // setPriviousSelect={setPriviousSelect}
                />
              )}
            </div>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <button
            type="button"
            className="btn btn-success btn-sm"
            onClick={handlePreviousBtn}
            disabled={index === 0}
          >
            Previous
          </button>
          <button
            type="button"
            className="btn btn-success btn-sm m-2"
            onClick={() => handleNextBtn(result.questions[index]?.type)}
            disabled={result?.questions?.length - 1 === index}
          >
            Next
          </button>
          <button
            type="button"
            className="btn btn-danger btn-sm float-end m-2"
            onClick={() => handleFinishBtn(index)}
          >
            Finish
          </button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Testpage;
