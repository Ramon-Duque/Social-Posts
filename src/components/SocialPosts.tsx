
import  Post  from '../models/Post'

import './SocialPosts.css'
import PostForm from './PostForm.modal'
import { useState } from 'react'
import './PostInList'
import PostInList from './PostInList'



export default function SocialPosts() {

    const [newThought, setNewThought] = useState<Post[]>([])

    const deletePost = (index:number): void => {
        setNewThought((prev) => {
          const newPost: Post[] = prev.slice(0);
          newPost.splice(index, 1);
          return newPost
        });
    };

    const addPost = (post:Post):void => {
        setNewThought((prev) => {
            const newPost: Post[]= prev.slice(0);
            newPost.push(post);
            return newPost
        })
    }

    return (
        <div className='contBackground'>
            <h1>My Thoughts</h1>
            <button className='openModalBtn'>New Thought</button>
        
         <PostForm onSubmitForm={addPost}/>
         <ul>
            {newThought.map((post, index) =>(
                <PostInList post={post} onDelete= {() => deletePost(index)}/>
            ))}
         </ul>

        </div>
    )

}
