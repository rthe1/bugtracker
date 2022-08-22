import { Routes, Route } from 'react-router-dom';
import Bugs from './components/Bugs';
import Group from './components/Group';
import Project from './components/Project';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import { Protected } from './components/Protected';
const Main = () => {
return (         
    <Routes>
    <Route path='/bugs' element={<Protected><Bugs/></Protected>} />
    <Route path='/group' element={<Protected><Group/></Protected>} />
    <Route path='/project' element={<Protected><Project/></Protected>} />
    <Route path='/signin' element={<SignIn/>} />
    <Route path='/dashboard' element={<Protected><Dashboard/></Protected>} />
  </Routes>
);
}
export default Main;