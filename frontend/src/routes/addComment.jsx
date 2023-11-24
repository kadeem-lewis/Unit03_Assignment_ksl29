import React, {useState} from 'react'
import { Form, useLocation } from 'react-router-dom'

export default function AddComment() {
  const {state} = useLocation();
  let editing = false;
  let initialCommentState = "";

  if(state && state.currentComment){
    editing = true;
    initialCommentState = state.currentComment.comment;
  }

  const [comment, setComment] = useState(initialCommentState);

  return (
    <>
      <Form method={editing?"PUT":"POST"}>
        <textarea name="" id="" cols="30" rows="10" value={comment}/>
        <button type="submit">Submit</button>
      </Form>
    </>
  )
}


export async function action({request}){

}