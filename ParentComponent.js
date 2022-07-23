import { ChildComponent } from "./ChildComponent";

export const ParentComponent = () => {
  const greetParent = (childName) => {
    alert(`Hello parent ${childName}`);
  };
  //   const greetParent = () => {
  //     alert("Hello Parent");
  //   };
  // return <ChildComponent/>
  return <ChildComponent greetHandler={greetParent} />;
};
