import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Section from './../core_components/Section';
import Loading from '../core_components/Loading';

import Course from './components/Course';

import actions from './actions';
import {replace_space_with_hyphen} from './../helpers/string_format';

import "./style.css"

export default function Courses(){
    const {fetchCourses} = actions;
    const {courses, loading} = useSelector((state)=>state.courses);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(
            fetchCourses() 
        )
      },[dispatch, fetchCourses])

    return <div className="main">
        <Section classNameMod='courses'>{
            loading === true ? 
                <Loading/>:
                <div className="courses">{
                    courses && courses.map(course=>
                        <Course 
                            link = {replace_space_with_hyphen(course.name)}
                            banner={course.banner}
                            backgroundColor={course.backgroundColor}
                        />
                    )}
                </div>
        }</Section>
    </div>
}