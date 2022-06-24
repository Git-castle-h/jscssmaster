import logo from './logo.svg';
import './App.css';
import './css/reset.css';
import './css/style.css';
import './css/main.css';
import './css/textfilup.css';
import './css/ripple.css';
import './css/pathanime.css';
import './css/tingle.css';
import './css/magbtn.css';
import './css/textflow.css';
import './css/glitch.css';
import './css/painter.css';
import {Main} from './pages/main.js';
import {Header} from './pages/header.js';
import {Textfillup} from './pages/textfillup.js';
import {Ripple} from './pages/ripple.js';
import {PathAnime} from './pages/pathanime.js';
import {BrowserRouter, Routes, Router, Route, Link, useNavigate, Outlet, useParams, Navigate} from 'react-router-dom'
import {Provider} from 'react-redux';
import {Tingle} from './pages/tingle.js';
import {Magbtn} from './pages/magbtn.js';
import {Textflow} from './pages/textflow.js';
import {Glitch} from './pages/glitch.js';
import {Painter} from './pages/canvaspainter.js';
import store from './redux/store.js';


function App() {
  return (
    <div className='App'>
    <Provider store={store}>
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path ='/' element={<Navigate replace to ={'/jscssmaster'}></Navigate>}></Route>
          <Route path ='/jscssmaster'>
            <Route path ='' element = {<Main></Main>}></Route>
            <Route path = 'fillup' element = {<Textfillup></Textfillup>}></Route>
            <Route path = 'ripple' element = {<Ripple></Ripple>}></Route>
            <Route path = 'pathanime' element = {<PathAnime></PathAnime>}></Route>
            <Route path = 'tingle' element = {<Tingle></Tingle>}></Route>
            <Route path = 'magbtn' element = {<Magbtn></Magbtn>}></Route>
            <Route path = 'textflow' element = {<Textflow></Textflow>}></Route>
            <Route path = 'glitch' element = {<Glitch></Glitch>}></Route>
            <Route path = 'painter' element = {<Painter></Painter>}></Route>
          </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
