import React from 'react';
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/main";
import { FormPage } from "./pages/form";
import { ArchivePage } from "./pages/archive";
import { CreateNoteForm } from "./components/createNoteForm";
import { EditNoteForm } from "./components/editNoteForm";

import "./styles/css/index.css";
import "./styles/css/note-table.css"

function App() {  
  const dispatch = useDispatch()
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>}></Route>
        <Route path="/create" element={<FormPage title="Create note" form_component={<CreateNoteForm dispatch={dispatch}/>}/>}></Route>
        <Route path="/edit/:id" element={<FormPage title="Edit note" form_component={<EditNoteForm dispatch={dispatch}/>}/>}></Route>
        <Route path="/archive" element={<ArchivePage dispatch={dispatch}/>}></Route>
      </Routes>
  </Router>
  )
}

export default App;
