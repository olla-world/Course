import React from 'react';
import { Link } from 'react-router-dom';

import './../styles/course.style.css';

export default function Course(props){
    const {link, banner, backgroundColor} = props;
    const background_style = {
        backgroundImage:`url('${banner}')`,
       
        backgroundColor: `${backgroundColor}`
    }
 
    return <Link 
            to={`/course/${link}`}
            style={background_style} 
            className="card--course"
        >
        </Link>
}