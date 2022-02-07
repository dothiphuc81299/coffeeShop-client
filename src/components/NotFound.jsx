import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import questionIcon from '../assets/images/commons/_i_icon_question.svg';

export default function NotFound() {
  let { pathname } = useLocation();
  const isUser = (pathname.indexOf("admin") === -1 ? true : false);

  return (
    <div className="notFound">
      <div class="mainbox">
        <div class="err">4</div>
        <img src={questionIcon} alt="" />
        <div class="err2">4</div>
        <div class="msg">
          Maybe this page moved? Got deleted? 
          <br />
          Is hiding out in quarantine? 
          <br/> 
          Never existed in the first place?
          <p>
            Let's go 
            <Link to={isUser ? "/" : "/admin/statistic"}> home </Link>
            and try from there.
          </p>
        </div>
      </div>
    </div>
  )
}