import React, { FormEvent, useState } from "react";
import  './PostForm.modal.css'
import './PostInList'
import PostInList from "./PostInList";

import  Post  from '../models/Post'

interface Props {
    onSubmitForm: (post:Post) => void;
}

function PostForm({onSubmitForm}:Props) {

    const [title, setTitle] = useState('')
    const [thought, setThought] = useState('')

    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();
        onSubmitForm({title, thought});
    };

    return (
        <div className="FormCont">
        <form className="Form" onSubmit={(event)=> handleSubmit(event)}>
            <button className="XoutForm">X</button>
            <label>Title</label><br></br>
            <input
            type="text"
            className="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            ></input><br></br>

            <label>Thought</label><br></br>
            <input
            type="text"
            className="thought"
            value={thought}
            onChange={(event) => setThought(event.target.value)}/><br></br>

            <button className="PostAdd">Add Post</button>
           

        </form>
        </div>
    )
}

export default PostForm;