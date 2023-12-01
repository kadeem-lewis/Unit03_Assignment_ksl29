import React, { useState } from "react";
import {
  Form,
  useActionData,
  useLocation,
  useOutletContext,
  useParams,
  Link,
} from "react-router-dom";
import styles from "./addComment.module.css";

export default function AddComment() {
  const { state } = useLocation();
  const { user } = useOutletContext();
  const { id } = useParams();
  const response = useActionData();
  let editing = false;
  let initialCommentState = "";

  console.log(state);
  console.log(user);

  if (state && state.currentComment) {
    editing = true;
    initialCommentState = state.currentComment.comment;
  }
  const [comment, setComment] = useState(initialCommentState);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <>
      {response?.ok ? (
        <div className={styles.success}>
          <h4>Review submitted successfully</h4>
          <Link to={`/ksl29_pokemon/${id}`}>Back to Pokemon</Link>
        </div>
      ) : (
        <Form method={editing ? "put" : "post"}>
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            onChange={(e) => handleCommentChange(e)}
            value={comment}
          />
          <input type="hidden" name="username" value={user.username} />
          <input type="hidden" name="userId" value={user.userId} />
          <input
            type="hidden"
            name="commentId"
            value={state?.currentComment._id}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </>
  );
}

export async function commentAction({ request, params }) {
  const formData = await request.formData();
  const comment = formData.get("comment");
  const username = formData.get("username");
  const userId = formData.get("userId");
  const commentId = formData.get("commentId");
  switch (request.method) {
    case "POST":
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/ksl29/comments`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pokemonId: params.id,
            comment,
            username,
            userId,
          }),
        },
      );
      if (!response.ok) {
        throw new Error("Error adding comment");
      }
      return { ok: true };

    case "PUT":
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/ksl29/comments`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            comment,
            commentId,
            userId,
          }),
        },
      );
      if (!res.ok) {
        throw new Error("Error updating comment");
      }
      return { ok: true };
  }
}
