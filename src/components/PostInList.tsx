import './PostForm.modal';
import  Post  from '../models/Post'
import { FormEvent, useState } from 'react';
import { title } from 'process';

interface Props {
    onDelete: () => void;
    post: Post;
}

export default function PostInList ({post, onDelete}:Props) {
    

    return(
        <div className='PostCont'>
        <li className='PostInList'>
            <button className='closeBtn' onClick={() => onDelete()}>X</button>
            <p className='title'>{post.title}</p>
            <p className='thought'>{post.thought}</p>
            
        </li>
        </div>
             
            
       
    )
}