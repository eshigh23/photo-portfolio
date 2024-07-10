import './App.css';
import Main from './components/Main'
import Header from './components/Header'
import About from './components/About'
import React from "react"
import { 
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>

        <Route
          path="/"
          element={ 
            <div>
              <Header />
              <Main />
            </div> }
        />
        <Route
          path="/about"
          element={
            <div>
            <Header />
             <About/> 
            </div>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
