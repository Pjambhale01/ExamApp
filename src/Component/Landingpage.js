import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const Landingpage = (props) => {
  let history = useHistory();
  const [testInfo, setTestInfo] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://interviewapi.stgbuild.com/getQuizData").then((res) => {
      setTestInfo(res.data.tests);
    });
  }, []);

  const handleclick = (ind) => {
    dispatch({ type: "ADD_TEST", payload: testInfo });
    // history.push('/')
    history.push({
      pathname: testInfo[ind].name,
      state: testInfo[ind],
    });
  };
  return (
    <div className="container ">
      <h3> My Interview Portal</h3>
      <hr />
      <Table striped bordered hover size="lg" className="mt-3">
        <thead>
          <tr>
            <th>Test</th>
            <th>No of Questions</th>
          </tr>
        </thead>
        {testInfo.map((itm, ind) => {
          return (
            <tbody>
              <tr>
                <td>{itm.name}</td>
                <td>{itm.questions.length}</td>
                <td>
                  <button
                    type="button"
                    id="0"
                    onClick={() => handleclick(ind)}
                    className="btn btn-warning"
                  >
                    Start Test
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </Table>
      <div>
        <span>Api url:</span>
        <a href="http://interviewapi.stgbuild.com/getQuizData">
          http://interviewapi.stgbuild.com/getQuizData
        </a>
      </div>
    </div>
  );
};

export default Landingpage;
