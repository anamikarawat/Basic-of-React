import "./App.css";
import "./appStyles.css";
import { PostForm } from "./components/PostForm";
// import styles from "./appStyles.module.css";
// import { Inline } from "./components/Inline";
// import { NameList } from "./components/NameList";
// import Greet from "./components/Greet";
// import { UserGreeting } from "./components/UserGreeting";
//import {Greet} from "./components/Greet";
// import { Message } from "./components/Message";
// import { ClickHandler } from "./components/ClickHandler";
// import { ParentComponent } from "./components/ParentComponent";
//import {StyleSheet} from "./components/StyleSheet"

// import { Form } from "./components/Form";
import { PostList } from "./components/PostList";
function App() {
  return (
    <div className="App">
      {/* <Greet /> */}
      {/* <Greet name="Annu" heroName="Batman" />
      <Greet name="Anuuu" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Annnnnu" heroName="Women">
        <p>This is children props</p>
      </Greet> */}

      {/* <Message /> */}
      {/* <ClickHandler /> */}
      {/* <ParentComponent /> */}

      {/* <UserGreeting/> */}
      {/* <NameList/> */}
      {/* <StyleSheet/> */}
      {/* <Inline /> */}

      {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Form /> */}
      
      <PostForm/>
      <PostList/>
    </div>
  );
}

export default App;
