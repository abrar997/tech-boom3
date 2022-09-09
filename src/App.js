import React from "react";
import { Home, Menu } from "./pages";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="bg-main h-screen " >
        <Router>
          <Routes >
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="menu" element={<Menu />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </AnimatePresence>
  );
};

export default App;
