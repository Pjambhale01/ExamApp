import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export const Checkbox = (props) => {
  const { index } = props;

  const [optionindex, setOptionindex] = useState({});

  useEffect(() => {
    const testInfo = localStorage.getItem("testInfo")
      ? JSON.parse(localStorage.getItem("testInfo"))
      : {};
    setOptionindex([testInfo]);
  }, []);

  return (
    <>
      <Card.Text>
        {optionindex[0]?.questions[index].options.map((i) => {
          return (
            <div>
              <input type='checkbox' /> {i}
            </div>
          );
        })}
      </Card.Text>
    </>
  );
};
