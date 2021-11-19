import React from 'react';
import { useSelector } from 'react-redux';
import HobbyList from '../components/Home/HobbyList'

import { useDispatch } from 'react-redux';
import { addNewHobby, setActiveHobby } from '../actions/hobby';

HomePage.propTypes = {

};

const randomNumber = () => {
    return 1000 + Math.trunc((Math.random() *9000));
}

function HomePage(props)  {
    const hobbyList =useSelector(state =>state.hobby.list);
    const activeId =useSelector(state =>state.hobby.activeId);

    // const hobbyState =useSelector (state => (
    //     {
    //         list :state.hobby.list,
    //         activeId:state.hobby.list,
    //     }
    // ));

    const dispatch =useDispatch();
    console.log("hobbyList",hobbyList);

    const handleAddHobbyClick = () => {

        const newId =randomNumber()
     //   const newHobby = 
        // random a hobby object  :id + title 

        const newHobby = {
          id :newId,
          title : `Hobby ${newId}`
        }
        // dispatch action to add a new hobby to redux store
        const action  = addNewHobby(newHobby);

        dispatch(action);

    }

    const handleHobbyClick = (hobby) => {
        const action =setActiveHobby(hobby);
        dispatch(action);
    }

    return (
        <div className ="home-page">

            <h1 >REdusHOOK -home Page</h1>
            <button onClick ={handleAddHobbyClick}> Random hobbyList </button>
            <HobbyList
             hobbyList ={hobbyList}
             activeId ={activeId}
             onHobbyClick ={handleHobbyClick}
             />
        </div>
    )
}

export default HomePage;