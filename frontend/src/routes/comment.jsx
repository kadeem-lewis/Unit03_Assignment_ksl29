import React, { Fragment } from "react";
import { useLoaderData, Link, useOutletContext } from "react-router-dom";
import { getComments } from "../api/GetPokemon";
import styles from "./comment.module.css";

export async function commentsLoader({ params }) {
  const comments = await getComments(params.id);
  return comments;
}

export default function Comment() {
  const comments = useLoaderData();
  const { user } = useOutletContext();
  const handleDeleteCommentClick = async () => {};
  return (
    <>
      <Link to="add-comment">Add Comment</Link>
      {comments?.map((comment) => (
        <div key={comment._id}>
          <div className={styles.commentCard}>
            <span>{comment.username.slice(0, 1).toUpperCase()}</span>
            <div>
              <p>{comment.username}</p>
              <p>{comment.lastModified}</p>
            </div>
            <p>{comment.comment}</p>
          </div>
          {user?.username === comment?.username && (
            <>
              <Link to="add-comment" state={{ currentComment: comment }}>
                Edit Comment
              </Link>
              <button onClick={() => handleDeleteCommentClick()}>
                Delete Comment
              </button>
            </>
          )}
        </div>
      ))}
    </>
  );
}
