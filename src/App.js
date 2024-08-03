import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import ParentComponent from './Components/DataPassing/ParentComponent';
import ClickMe from './Components/Events/ClickMe';
import ChangeMe from './Components/Events/ChangeMe';
import SubmitForm from './Components/Events/SubmitForm';
import HoverMe from './Components/Events/HoverMe';
import EventHome from './Components/Events/EventHome';
import NewComponent from './Components/CRUD/NewComponent';


function App() {
  return (
    <div className="App">
      <Router>
        <nav className='main-nav'>

          <ul>

            <li><Link to="/">Home</Link></li>

            <li><Link to="/data-passing">Data Passing</Link></li>

            <li><Link to="/events">Events</Link></li>

            <li><Link to='/crud'>CRUD</Link></li>

          </ul>

        </nav>
    

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data-passing" element={<ParentComponent />} />
          <Route path="/crud" element={<NewComponent />} />

          <Route path="/events/*" element={<EventHome />} >
            <Route index element={<Navigate to="click" />} />
            <Route path="click" element={<ClickMe />} />
            <Route path='change' element={<ChangeMe />} />
            <Route path="submit" element={<SubmitForm />} />
            <Route path='mouse' element={<HoverMe />} />
          </Route>
        </Routes>

      </Router>


    </div>
  );
}

export default App;
