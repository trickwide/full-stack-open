import { useState } from "react";

const StatisticLine = ({ title, value }) => {
  if (title === "positive") {
    return (
      <tr>
        <td> {title} </td>
        <td> {value}% </td>
      </tr>
    );
  }

  return (
    <tr>
      <td> {title} </td>
      <td> {value} </td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = all > 0 ? (good - bad) / all : 0;
  const positive = all > 0 ? good / all : 0;

  if (all === 0) {
    return <div>No feedback given</div>;
  }

  return (
    <div>
      <StatisticLine title="good" value={good} />
      <StatisticLine title="neutral" value={neutral} />
      <StatisticLine title="bad" value={bad} />
      <StatisticLine title="all" value={all} />
      <StatisticLine title="average" value={average} />
      <StatisticLine title="positive" value={positive} />
    </div>
  );
};

const Button = ({ handleClick, title }) => {
  return <button onClick={handleClick}>{title}</button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementGood = () => {
    setGood(good + 1);
  };

  const incrementNeutral = () => {
    setNeutral(neutral + 1);
  };
  const incrementBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button title="good" handleClick={incrementGood} />
      <Button title="neutral" handleClick={incrementNeutral} />
      <Button title="bad" handleClick={incrementBad} />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
