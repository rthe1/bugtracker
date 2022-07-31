import { Routes, Route } from 'react-router-dom';
import Bugs from './components/Bugs';
import Group from './components/Group';
import Project from './components/Project';
const Main = () => {
return (         
    <Routes>
    <Route path='/bugs' element={<Bugs/>} />
    <Route path='/group' element={<Group/>} />
    <Route path='project' element={<Project/>} />
  </Routes>
);
}
export default Main;