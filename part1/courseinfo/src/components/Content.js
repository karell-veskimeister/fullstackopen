import React from "react";

const Content = ({ data }) => {
  return data.map((lesson, i) => <Lesson key={i} data={lesson} />);
};

const Lesson = ({ data }) => (
  <p>
    {data.name} {data.exercises}
  </p>
);
export default Content;
