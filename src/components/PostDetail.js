import React, { useEffect } from 'react';
import {useState} from 'react'
import { useParams } from 'react-router-dom';
import { firestore } from '../firebase';

function PostDetail(props) {
    const [post, setPost] = useState({});
    const {postId} = useParams()

    useEffect(()=>{
        firestore.collection('posts').doc(postId).get()
        .then((snapshot) =>{
            console.log('snapshot', snapshot.data());
            setPost(snapshot.data());
        })
    }, [postId])
    return (
        <div className=''>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}

export default PostDetail;