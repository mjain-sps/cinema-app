import Header from "./Components/Header/Header";
import HomeScreen from "./Screens/HomeScreen";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Route render={(props) => <Header props={props} />} />

        <div className="app-wrapper">
          <div className="app-homescreen">
            <Route exact path="/" component={HomeScreen} />
            <Route path="/:type" exact component={HomeScreen} />
          </div>
          <Footer className="app-footer"></Footer>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
