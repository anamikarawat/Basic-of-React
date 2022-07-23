// export const UserGreeting = () => {
//   const isLoggedIn = false;
//   //const isLoggedIn = true;
//   return <div>Welcome {isLoggedIn ? "Vishwas" : "Guest"}</div>;
// };
export const UserGreeting = () => {
  const isLoggedIn = false;
  //const isLoggedIn = true;
  return <div>Welcome {isLoggedIn && "Anamika"}</div>;
};
