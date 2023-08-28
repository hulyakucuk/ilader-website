import React from "react";
import Accordion from "react-bootstrap/Accordion";
import QuestionsData from "./QuestionsData";

const FrequentlyAskedQuestions = () => {
  return (
    <div>
      <Accordion flush>
        {QuestionsData.map((item, idx) => (
          <Accordion.Item eventKey={idx} className="lh-lg p-2">
            <Accordion.Header>{item.question}</Accordion.Header>
            <Accordion.Body>{item.reply} </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default FrequentlyAskedQuestions;
