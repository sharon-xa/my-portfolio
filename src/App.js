import classes from "./App.module.css";
import Header from "./components/Header";
import Main from "./components/Main/Main";

function App() {
   return (
      <div className={classes.App}>
         <Header />
         <Main />
      </div>
   );
}

export default App;
