import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";

import SideNav from './../core_components/SideNav';
import Detail from './components/Details';

import {replace_space_with_hyphen} from './../helpers/string_format';

import actions from './actions';

export default function Lecture(props){
    const {fetchMenu, fetchDetail} = actions;
    const {menu, detail, loading} = useSelector((state)=>state.menu);

    const { courseName } = useParams();
    const dispatch = useDispatch();

    const [currentLecture, setCurrentLecture] = useState(0)

    const updateCurrentLecture = (lecture_index) => setCurrentLecture(lecture_index)

    useEffect(()=>{
        dispatch(
            fetchMenu(courseName) 
        )
      },[dispatch, fetchMenu, courseName])

    useEffect(()=>{
        const currentLectureName = menu[currentLecture]? menu[currentLecture].label: '';
        if (currentLectureName!==''){
            dispatch(
                fetchDetail(courseName, replace_space_with_hyphen(currentLectureName))
            )
        }
        
    }, [dispatch, fetchDetail, courseName, currentLecture, menu] )

    return <div className="main">
        <div className="wrap wrap--detail">
            <SideNav 
                menu={menu}
                updateCurrentLecture={updateCurrentLecture}
                currentLecture={currentLecture}
            />
            <Detail detail={detail}/>
        </div>
    </div>
}