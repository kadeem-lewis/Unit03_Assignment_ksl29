//Kadeem Lewis
//ksl29
//12-01-2023
//IT301 - 001
//Unit 11 Assignment


import React, { Fragment } from "react";
import {
  useLoaderData,
  Link,
  useOutletContext,
  useSubmit,
} from "react-router-dom";
import { getComments } from "../service/PokemonDataService";
import styles from "./comment.module.css";

export async function commentsLoader({ params }) {
  const comments = await getComments(params.id);
  return comments;
}

export default function Comment() {
  const comments = useLoaderData();
  const { user } = useOutletContext();
  const submit = useSubmit();

  const handleDeleteCommentClick = async (commentId) => {
    submit({ commentId, userId: user.userId }, { method: "post" });
  };
  return (
    <>
      {user && (
        <Link to="add-comment" className={styles.addButton}>
          Add Comment
        </Link>
      )}
      {comments?.map((comment) => (
        <div key={comment._id}>
          <div className={styles.commentCard}>
            <span>{comment.username.slice(0, 1).toUpperCase()}</span>
            <div>
              <p>{comment.username}</p>
              <p>{new Date(Date.parse(comment.lastModified)).toDateString()}</p>
            </div>
            <p>{comment.comment}</p>
          </div>
          {user?.username === comment?.username && (
            <div className={styles.actions}>
              <Link to="add-comment" state={{ currentComment: comment }}>
                Edit Comment
              </Link>
              <button onClick={() => handleDeleteCommentClick(comment._id)}>
                Delete Comment
              </button>
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export async function deleteCommentAction({ request }) {
  const formData = await request.formData();
  const commentId = formData.get("commentId");
  const userId = formData.get("userId");
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/api/v1/ksl29/comments`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, commentId }),
    },
  );
  const data = await response.json();
  return data;
}
