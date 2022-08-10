import { Routes, Route } from 'react-router-dom';
import Bugs from './components/Bugs';
import Group from './components/Group';
import Project from './components/Project';
import SignIn from './pages/SignIn';
const Main = () => {
return (         
    <Routes>
    <Route path='/bugs' element={<Bugs/>} />
    <Route path='/group' element={<Group/>} />
    <Route path='/project' element={<Project/>} />
    <Route path='/signin' element={<SignIn/>} />
  </Routes>
);
}
export default Main;