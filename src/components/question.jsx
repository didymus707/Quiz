import questionsArray from "../../questions.json";

export const Question = () => {
  
  return (
    <div>
      {questionsArray.map((que) => (
        <div key={que.id}>
          <p>{que.question}</p>
          <div className="options-container">
            <input type="radio" name={que.id} id="que1.optionA" />
            <label htmlFor="que1.optionA">{que.options[0]}</label>
          </div>
          <div className="options-container">
            <input type="radio" name={que.id} id="que1.optionB" />
            <label htmlFor="que1.optionB">{que.options[1]}</label>
          </div>
          <div className="options-container">
            <input type="radio" name={que.id} id="que1.optionC" />
            <label htmlFor="que1.optionC">{que.options[2]}</label>
          </div>
        </div>
      ))}
    </div>
  );
};
