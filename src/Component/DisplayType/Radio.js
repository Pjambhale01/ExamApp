import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export const Radio = (props) => {
  const { index } = props;

  const [optionindex, setOptionindex] = useState({});
  console.log(optionindex, "optionIdex");
  //   console.log(optionindex1[0]?.questions[0]?.options((i)=>{
  //       console.log(i,"options")
  //   }),"optionindex1")

  useEffect(() => {
    const testInfo = localStorage.getItem("testInfo")
      ? JSON.parse(localStorage.getItem("testInfo"))
      : {};
    setOptionindex([testInfo]);
  }, []);

  const handleClick = (index) => {
    console.log(index, "ind");
    // setOptionindex([...optionindex[0].slice(0,index),{}])
  };

  return (
    <>
      <Card.Text>
        {optionindex[0]?.questions[index].options.map((i, index) => {
          return (
            <div>
              <input
                type="radio"
                checked={optionindex[0]?.check}
                onClick={() => handleClick(index)}
              />{" "}
              {i}
            </div>
          );
        })}
      </Card.Text>
    </>
  );
};
