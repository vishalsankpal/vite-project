import "./App.css";
import CorrectedForm from "./Day-3-task/CorrectedForm";
//import Greetings from "./Day-2-component/Greetings";
//import Parent from "./Day-2-component/Parent";
import Form from "./Day-3-task/Form";
import TodoWrapper from "./Todo/TodoWrapper";
//import ClassBased from "./Day-3/ClassBased";

function App() {
  return (
    <>
      {/* <Greetings name="Rahul" company="abc" color="red" />
      <Greetings name="abc" company="abc" color="red" />
      <Greetings
        name="pqr"
        profile={{
          country: "bharat",
          city: "Mumbai",
          nationality: "IN",
          name: {
            n: "abc",
            p: "lmn",
          },
        }}
      />
      <Parent />
      <ClassBased name="vishal" /> */}
      {/* <Form />
      <CorrectedForm /> */}
      <TodoWrapper />
    </>
  );
}

export default App;
