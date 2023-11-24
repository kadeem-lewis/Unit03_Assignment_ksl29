import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { getComments } from '../api/GetPokemon'

export async function commentsLoader({params}){
  const comments = await getComments(params.id)
  return comments
}

export default function Comment() {
  const comments = useLoaderData();
  return (
    <>
    {comments?.map((comment) => (
      <p key={comment._id}>{comment.comment}</p>
    ))}
    </>
  )
}
