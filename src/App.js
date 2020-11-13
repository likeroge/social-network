import './App.css';
import styled from 'styled-components'
import './index.css'
// import tw from 'twin.macro'

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import { Dialogs } from './components/Dialogs';
import { Route } from 'react-router-dom';

const Styled = styled.div`
  margin: 0 auto;
  display: grid;
  width: 1200px;
  grid-template-areas:
    "h h"
    "n c";

  grid-template-rows: 70px 1fr;
  grid-template-columns: 2fr 10fr;
  grid-gap: 10px;

  .content-wrapper{
    grid-area: c;
  background-color: rgb(61, 175, 147);
  }
`

function App() {
  return (
    <Styled> 
     <Header />
      <Navbar />
      <div className='content-wrapper'>
        <Route path='/dialogs' exact={true} component={Dialogs}/>
        <Route path='/profile' component={Profile}/>
      </div>
    </Styled>
  );
}

export default App;
