// export const ChildComponent = () => {
//   return (
//     <div>
//       <button>Greet Parent</button>
//     </div>
//   );
// };
export const ChildComponent = (props) => {
  return (
    <div>
      {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
      <button onClick={() => props.greetHandler("child")}>Greet Parent</button>
    </div>
  );
};
