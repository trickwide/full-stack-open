const Header = (props) => {
  return <h1>{props.coursename}</h1>;
};

const Part = (content) => {
  return (
    <p>
      {content.part} {content.ex}
    </p>
  );
};

const Content = (content) => {
  return (
    <div>
      <Part part={content.parts[0].name} ex={content.parts[0].exercises} />
      <Part part={content.parts[1].name} ex={content.parts[1].exercises} />
      <Part part={content.parts[2].name} ex={content.parts[2].exercises} />
    </div>
  );
};

const Total = (total) => {
  return (
    <p>
      Number of exercises{" "}
      {total.parts[0].exercises +
        total.parts[1].exercises +
        total.parts[2].exercises}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header coursename={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
