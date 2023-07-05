
import './App.scss';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Note from './components/Note/Note';
import NoteList from './components/NoteList/NoteList';
import SideNavbar from './components/SideNavbar/SideNavbar';



function App() {
  return (
    
    
<BrowserRouter>
  <div className="App">
    <SideNavbar />
    <Routes>
      <Route path="/all-notes" element={<NoteList title="All Notes" />} />
      <Route path="/all-notes/:id" element={<Note />} />
      <Route path="/trash" element={<NoteList title="Trash" />} />
      <Route path="/trash/:id" element={<Note/>} />
    </Routes>
  </div>
</BrowserRouter>

  );
}

export default App;
