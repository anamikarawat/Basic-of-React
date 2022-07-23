// function Greet() {
//   return <h1>Hello Annu {2 + 2}</h1>;
// }
// const Greet = () => {return <h1>Hello Annu</h1>}   //arrow function
export const Greet = (props) => {
  return (
    <div>
      <h1>
        Hello {props.name} {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};
export default Greet;
