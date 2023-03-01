import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AllUsers } from './components/AllUsers';
//import { NavBar } from './components/NavBar';
import { CreateUser } from './components/CreateUser';
import { DeleteUser } from './components/DeleteUsers';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <AllUsers /> } > </Route>
          <Route path='/create' element= { <CreateUser />}></Route>
          <Route path='/delete' element= { <DeleteUser /> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
