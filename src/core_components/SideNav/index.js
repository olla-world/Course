import React, { useState } from 'react';

import CloseBookImage from './img/close-book.png';
import OpenBookImage from './img/open-book.png';

import './style.css';

export default function SideNav(props){
    const { menu, updateCurrentLecture, currentLecture } = props;
    const [lectureListDisplay, setLectureListDisplay] = useState(false);

    const controllLectureListDisplay = () => setLectureListDisplay(!lectureListDisplay)

    return <>
        <div 
            className="sidenav__controller"
            onClick={()=>controllLectureListDisplay()}
        >
            <img 
                src={`${lectureListDisplay?OpenBookImage:CloseBookImage}`} 
                alt="book"
                className="book"
            />
        </div>
        <aside className={`sidenav ${lectureListDisplay? "sidenav--mini--show": "sidenav--mini--hide"}`}>
            {menu.map((menuItem, index)=>
                <div 
                    className={`menu ${currentLecture === index? 'menu--active':null}`} 
                    key={`menu-item-${index}`}
                    onClick={()=>updateCurrentLecture(index)}
                >
                    <div className="menu__label">{menuItem.label}</div>
                </div>
            )}
        </aside>
    </>
}