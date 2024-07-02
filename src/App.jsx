import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";
import HomePage from "./pages/HomePage";
import ViewCreator from "./pages/ViewCreator";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddCreator />} />
        <Route path="/edit/:id" element={<EditCreator />} />
        <Route path="/creator/:id" element={<ViewCreator />} />
      </Routes>
    </Router>
  );
};

export default App;
