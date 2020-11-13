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

  .active{
    color: gold;
  }

  .messages{
    padding: 10px;
  }

  .messages .message{

  }
`

const DialogItem = ({name,id}) => {
  let path = '/dialogs/'+ id
  return (
    <div className="dialog">
    <NavLink activeClassName='active' to={path}>{name}</NavLink>
  </div>
  )
}

const Message = ({message}) =>{
  return(
  <div className="message">{message}</div>
  )
}

export const Dialogs = (props) => {
  
  let dialogsData = [
    {id:1, name:'Egor'},
    {id:2, name:'Alex'},
    {id:3, name:'Roma'},
    {id:4, name:'Max'},
    {id:5, name:'Yellow'},
  ]

  let messagesData = [
    {id: 1, message: 'Hi'}
  ]

  return (
    <Styled>
      <div className="dialogs-items">
        <DialogItem name='Egor' id='1'/>
        <DialogItem name='Alex' id='2'/>
        <DialogItem name='Max' id='3'/>
        <DialogItem name='Roma' id='4'/>
        <DialogItem name='Yello' id='5'/>
        <DialogItem name='Yello' id='5'/>
        <DialogItem name='Yello' id='5'/>
        
      </div>
      <div className='messages'>
        <Message message='Hello my dear Friend'/>
        <Message message='Hello World!!!!!'/>
        <Message message='How are you bro)'/>
      </div>
    </Styled>
  );
};
