import { useState } from "react";

const Button = ({ title, handleClick }) => {
  return <button onClick={handleClick}>{title}</button>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const Randomize = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const addVote = () => {
    const votesCopy = [...votes];
    votesCopy[selected] += 1;
    setVotes(votesCopy);
  };

  const mostVotedAnecdote = votes.indexOf(Math.max(...votes));

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>

      <Button handleClick={() => addVote()} title="vote" />
      <Button handleClick={() => Randomize()} title="next anecdote" />

      <h1>Anecdote with the most votes </h1>
      <p>{anecdotes[mostVotedAnecdote]}</p>
      <p>has {votes[mostVotedAnecdote]} votes</p>
    </div>
  );
};

export default App;
