import React, { useState } from "react";
import {
  Form,
  useActionData,
  useLocation,
  useOutletContext,
} from "react-router-dom";

export default function AddComment() {
  const { state } = useLocation();
  const { user } = useOutletContext();
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
        "http://localhost:5000/api/v1/ksl29/comments",
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
      const data = await response.json();
      return data;
    case "PUT":
      const res = await fetch("http://localhost:5000/api/v1/ksl29/comments", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment,
          commentId,
          userId,
        }),
      });
      const results = await res.json();
      return results;
  }
}
