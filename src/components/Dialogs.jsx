import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components'

const Styled = styled.div`
  display: grid;  
  grid-template-columns:2fr 10fr;

  .dialogs-items{
    padding: 10px;
  }

  .dialog{

  }

  .dialog.active{
    color: gold;
  }

  .messages{
    padding: 10px;
  }

  .messages .message{

  }

`

export const Dialogs = (props) => {
    
  return (
    <Styled>
      <div className="dialogs-items">
        <div className="dialog active">
          <NavLink to='/dialogs/1'>Egor</NavLink>
        </div>
        <div className="dialog">
          <NavLink to='/dialogs/2'>Max</NavLink> 
        </div>
        <div className="dialog">
          <NavLink to='/dialogs/3'>Alex</NavLink>
        </div>
        <div className="dialog">
          <NavLink to='/dialogs/4'>Yellow</NavLink>
        </div>
        <div className="dialog">
          <NavLink to='/dialogs/5'>Roma</NavLink>
        </div>
      </div>
      <div className='messages'>
        <div className="message">Hi</div>
        <div className="message">How are you?</div>
        <div className="message">Hello World!!!</div>
      </div>
    </Styled>
  );
};
