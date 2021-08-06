import React from 'react';
import { useParams } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import Emojis from 'react-emoji-component';

import {replace_hyphen_with_space} from './../../helpers/string_format';

import './styles/detail.style.css';

export default function Details(props){
    const {detail} = props
    const { courseName } = useParams();

    const LectureName = ({ children, ...props }) => (
        <h1 {...props}>
            {children}
        </h1>
    );

    const TopicName = ({ children, ...props }) => (
        <h2 {...props}>
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

    const TopicLink = ({children, ...props}) => (
        <a {...props}>
            <Emojis size={16}>
            🔗
            </Emojis>
            {children}
        </a>
    )

    const TopicSimpleCode = ({ children, ...props }) => (
        <code {...props}>{children}</code>
    );

    return <div className="lecture-detail">
        <div className="course--name">
            {replace_hyphen_with_space(courseName)}
        </div>
        {detail? 
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

                        a:{
                            component: TopicLink,
                            props:{
                                className: 'topic__link'
                            }
                        },

                        code:{
                            component: TopicSimpleCode,
                            props:{
                                className: 'topic__simple-code'
                            }
                        }
                    },
                }}
            >
                {detail}
            </Markdown>
            :<></>
        }
    </div>

}