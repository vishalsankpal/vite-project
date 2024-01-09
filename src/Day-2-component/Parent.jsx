import Child from "./Child";
import { useState } from "react";

const Parent = () => {
  const [first, setfirst] = useState("parent");
  const parentHandler = () => {
    setfirst("child");
  };
  return (
    <div>
      <h1>{first}</h1>
      <Child onSelectLanguage={parentHandler} />
    </div>
  );
};

export default Parent;
