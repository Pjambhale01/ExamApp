import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import { Checkbox } from "./DisplayType/Checkbox";
import { Radio } from "./DisplayType/Radio";

const Testpage = (props) => {
  const { history } = props;

  const [test, setTest] = useState({});
  const [index, setIndex] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const testInfo = localStorage.getItem("testInfo")
      ? JSON.parse(localStorage.getItem("testInfo"))
      : {};
    setTest([testInfo]);
  }, []);

  // console.log(test[0]?.questions.map((i,ind)=>{
  //     console.log(ind,"ind")
  // }),"test")
  // console.log(test[0]?.questions[0],"test")

  const handleFinishBtn = () => {
    history.push("/");
    localStorage.clear("testInfo");
  };

  const handleNextBtn = () => {
    setIndex(index + 1);
  };

  const handlePreviousBtn = () => {
    setIndex(index - 1);
  };

  return (
    <div className="container">
      <h3> My Interview Portail</h3>
      <Card>
        <Card.Header>{test[0]?.name}</Card.Header>
        <Card.Body>
          <Card.Title>{test[0]?.questions[index]?.questionText}</Card.Title>
          <Card.Text>
            {/* {test[0]?.questions[index].options.map((i) => { */}
                <div>
                  {test[0]?.questions[index].type === "Multiple-Response" ? (
                    <Checkbox index={index}/>
                  ) : (
                    <Radio index={index}/>
                  )}
                </div>
             {/* })} */}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <button
            type="button"
            class="btn btn-success btn-sm"
            onClick={handlePreviousBtn}
          >
            Previous
          </button>
          <button
            type="button"
            class="btn btn-success btn-sm m-2"
            onClick={() => handleNextBtn()}
          >
            Next
          </button>
          <button
            type="button"
            class="btn btn-danger btn-sm float-end"
            onClick={handleFinishBtn}
          >
            Finish
          </button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Testpage;
