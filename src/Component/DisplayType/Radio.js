import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";


export const Radio = (props) => {
  const dispatch = useDispatch()
  const { options, correctOption, onChange,setRadioAns,index,quationId, } = props;
  console.log(quationId,"quationId")
  // const [countMark, setCountMark] = useState(0);
  
  const [selectoption, setSelectoption] = useState([])
  // const [flage, setFlage] = useState(false)
  const [optionsInd,setOptionsInd] = useState([])
  const [handleradio,setHandleradio]=useState()
  console.log(optionsInd,"options")
  // const [wrongAns, setWrongAns]  = useState([])
  // console.log(selectoption,"selectOption ")
 const state = useSelector(state=>state.userAns)
 const test =  useSelector(state=>state.TestDetails)
 
  useEffect(()=>{
    //  setHandleradio(quationId)
  },[])
  
  // console.log(count,"count")

  const handleChange = (i,ind) => {
    setHandleradio(quationId)
    // selectoption([...options[1].flag:!false])
    // setnextSelect({selectedOption:ind,questionid:quationId})
    // setSelectoption()
    // ind.target.checked=true
    if(correctOption === ind){
      dispatch({type:"RADIO_ANS",payload:ind})
      dispatch({type:"CORRECT_RADIO_ANS",payload:correctOption})  
      // setFlage(true)
    }
    // dispatch({type:"RADIO_ANS",payload:{selectedOption:ind,questionid:quationId,flage:flage}})
    // dispatch({type:"CORRECT_RADIO_ANS",payload:correctOption})  
  };
  // console.log(flage,"flage")
  return (
    <>
      <Card.Text>
        {options.map((i, ind) => {
          return (
            <div>
              <label>
                <input
                  type="radio"
                  checked={handleradio === quationId}
                  name={"option"+quationId}
                  value={quationId}
                  id={ind}
                  onChange={() => handleChange(i,ind)}
                />
                {"  "}
                {i}
              </label>
            </div>
          );
        })}
      </Card.Text>
    </>
  );
};
