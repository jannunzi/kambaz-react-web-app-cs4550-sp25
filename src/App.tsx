import Kambaz from "./Kambaz";
import Labs from "./Labs";
import { HashRouter, Navigate, Route, Routes } from "react-router";
import store from "./Kambaz/store";
import { Provider } from "react-redux";
// import "./App.css";
function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/Kambaz" />} />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kambaz/*" element={<Kambaz />} />
            <Route path="/Project" element={<h1>Project</h1>} />
          </Routes>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
