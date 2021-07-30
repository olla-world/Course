import React from 'react';
import { Link } from 'react-router-dom';
import Emojis from 'react-emoji-component';

import ProgressBar from '../../core_components/ProgressBar';

import './../styles/course.style.css';

export default function Course(props){
    const {link, banner, berif, start_date, end_date, github, total_lecture, current_lecture, backgroundColor} = props;
    const background_style = {
        backgroundImage:`url('${banner}')`,
       
        backgroundColor: `${backgroundColor}`
    }

    return <div className="card--course">
        <div className="card--course__head" style={background_style}>

        </div>
        <div className="card--course__body">
            <div className="wrap--header">
                
                {/* <div className="wrap--progress-bar">
                    <ProgressBar 
                        bgcolor={backgroundColor} 
                        progress={Math.ceil((current_lecture*100)/total_lecture)}  
                        height={10}
                    />
                    <div className="status">
                        {current_lecture}/{total_lecture}
                    </div>
                </div> */}
            </div>
            <div className="des">
                <div className="berif">{berif}</div>
                <div className="gitlink">
                    <Link 
                        to={github}
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <Emojis size={24}>
                        🔗 
                        </Emojis> 
                        Github
                    </Link>
                </div>
                <div className="headline">
                    <Emojis size={24}>
                    🗓️
                    </Emojis>
                    {start_date}
                </div>
            </div>

            <div className="action">
                <Link 
                    to={`/course/${link}`}
                    style={background_style} 
                    className="button--continue"
                >
                    Continue
                </Link>
            </div>
        </div>
    </div>
}