import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";

const Landingpage = (props) => {
  const { history } = props;

  const [testInfo, setTestInfo] = useState([{}]);
 
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://interviewapi.stgbuild.com/getQuizData").then((res) => {
      setTestInfo([res.data]);
    });
  }, []);

  const handleclick = (res, id) => {
    res?.map((i) => {
      if (id.target.id == i.id) {
        dispatch({ type: "ADD_TEST", payload: i });
        localStorage.setItem("testInfo", JSON.stringify(i));
        history.push(`/testpage/${i.name}`);
        // localStorage.setItem("testInfo", JSON.stringify(i));
      }
    });
  };
  return (
    <div className="container ">
      <h3> My Interview Portail</h3>
      {testInfo?.map((item, ind) => {
        let res = item.tests?.map((i, ind) => {
          return { name: i.name, id: i._id, questions: i.questions, id: ind,check:false };
        });
        return (
          <Table striped bordered hover size="lg" className="mt-5">
            <thead>
              <tr>
                <th>Test</th>
                <th>No of Questions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AngularJS Test</td>
                <td>50</td>
                <td>
                  <button
                    type="button"
                    id="0"
                    onClick={(ind) => handleclick(res, ind)}
                    class="btn btn-warning"
                  >
                    Start Test
                  </button>
                </td>
              </tr>
              <tr>
                <td>Javascript Test</td>
                <td>25</td>
                <td>
                  <button
                    type="button"
                    id="1"
                    onClick={(id) => handleclick(res, id)}
                    class="btn btn-warning"
                  >
                    Start Test
                  </button>
                </td>
              </tr>
              <tr>
                <td>Java Test</td>
                <td>10</td>
                <td>
                  <button
                    type="button"
                    id="2"
                    onClick={(id) => handleclick(res, id)}
                    class="btn btn-warning"
                  >
                    Start Test
                  </button>
                </td>
              </tr>
              <tr>
                <td>NodeJS Test</td>
                <td>5</td>
                <td>
                  <button
                    type="button"
                    id="NodeJS"
                    onClick={(id) => handleclick(res, id)}
                    class="btn btn-warning"
                  >
                    Start Test
                  </button>
                </td>
              </tr>
            </tbody>
          </Table>
        );
      })}
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
