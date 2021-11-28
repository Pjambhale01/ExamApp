import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";

export const Checkbox = (props) => {
  const { options, correctOption, onChange,setCheckBoxSelect,checkBoxSelect} = props;
  console.log(correctOption,"correctOption")
  // const [opt, setOpt] = useState()
  const dispatch = useDispatch();
  // const [newOptions,setNewOptions]=useState([])
  // const [selectOpt, setselectOpt] = useState([]);
  // console.log(selectOpt.length,"selectOpt")
  // useEffect(()=>{
  //   initialValue()
  // },[])

  // const initialValue =()=>{

  //   const optArr=[]
  //   const newOpt = options?.map((item)=> {
  //     let optVals={}
  //     optVals["value"]= item;
  //     optVals["checked"]= false;
  //     optArr.push(optVals)
  //   }
  //     );
  //   setNewOptions(optArr);
  //   setResult(optArr)

  // }
  // console.log(options,"option")

  const handleChange = (item, ind) => {
    // if(correctOption.length == )
    setCheckBoxSelect([...checkBoxSelect,ind])
    // setselectOpt([...selectOpt,ind])
    // dispatch({type:"CHECKBOX_ANS",payload:selectOpt})
    // let a = ind
    // let arr =[]
    // let temp = arr.push(a)
    // console.log(temp,"temp")
    //  setselectOpt([...selectOpt,ind])
    //  let temparr = []
    //  if(temparr.includes(ind)==true){
    //   let indx = temparr.indexOf(ind)
    //   temparr.splice(indx, 1)
    //  }
    //  else{
    //   temparr.push(ind)
    //  }
    //  console.log(temparr,"temparr")
    //  let arr = [...arr1,ind]
    //  let temp = [...ind]
    //  console.log(arr,"temp")
    //  let arr = [...new Set(temp)]
    //  console.log(arr)
    // dispatch({ type: "CHECKBOX_ANS", payload: ind });
    // setResult([...result, item])
    // const checkBoxpayload = {
    //   id:questionId,
    //   ans: [...new Set(result)]

    // }

    // setCheckAns(checkBoxpayload)

    // console.log("checkBoxpayload",checkBoxpayload);
  };
  // console.log(selectOpt,"selectOpt")
  // dispatch({type:"CHECKBOX_ANS",payload:selectOpt})
  // localStorage.setItem('count',JSON.stringify(count))

  // useEffect(()=>{
  //   const result = localStorage.getItem('res')?JSON.parse(localStorage.getItem('res')):{}
  //   console.log(result,"result in checkbox")
  //   setOpt(result)
  // },[])

  // console.log(opt,"opt")
  // localStorage.setItem("opt",JSON.stringify(opt))
  return (
    <>
      <Card.Text>
        {options.map((i, ind) => {
          return (
            <div>
              <input type="checkbox" onChange={() => handleChange(i, ind)} />{" "}
              {i}
            </div>
          );
        })}
      </Card.Text>
    </>
  );
};
