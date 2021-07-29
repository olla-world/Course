import React from 'react';
import Markdown from 'markdown-to-jsx';
import Emojis from 'react-emoji-component';

import './styles/detail.style.css';

export default function Details(props){
    const {detail} = props
    const LectureName = ({ children, ...props }) => (
        <h1 {...props}>
            <Emojis size={24}>
            📌
            </Emojis> 
            {children}
        </h1>
    );

    const TopicName = ({ children, ...props }) => (
        <h2 {...props}>
            {/* <Emojis size={16}>
            📎
            </Emojis> */}
            {children}
        </h2>
    );

    const TopicImportant= ({ children, ...props }) => (
        <h3 {...props}>
            <Emojis size={16}>
            📎
            </Emojis>
            {children}
        </h3>
    );


    const TopicDes = ({ children, ...props }) => (
        <div {...props}>{children}</div>
    );

    const TopicCode = ({ children, ...props }) => (
        <pre {...props}>{children}</pre>
    );

    return detail? 
        <div className="lecture-detail">
            <Markdown
                options={{
                    overrides: {
                        h1: {
                            component: LectureName,
                            props: {
                                className: 'lecture__name',
                            },
                        },

                        h2: {
                            component: TopicName,
                            props: {
                                className: 'topic__name',
                            },
                        },

                        h3:{
                            component: TopicImportant,
                            props: {
                                className: 'topic__important',
                            },
                        },

                        p:{
                            component: TopicDes,
                            props:{
                                className: 'topic__des'
                            }
                        },

                        pre:{
                            component: TopicCode,
                            props:{
                                className: 'topic__code'
                            }
                        },
                    },
                }}
            >
                {detail}
            </Markdown>
        </div>
        :<></>
}