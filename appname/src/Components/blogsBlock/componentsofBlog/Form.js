import React from "react";
import MyButton from "../../TopComponents/Button/MyButton";

export default function Form({ post, remove }) {
  return (
    <div className="blog" id={post.body} key={post.id}>
      <div className="BlogContent">
        <strong>
          {post.id}.{post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post__bts">
        <div>
          <MyButton
            style={{ margin: "5px", width: "90px", border: "2px solid black" }}
            value="Change"
            onClick={() => alert(post)}
          />
        </div>
        <div>
          <MyButton
            style={{ margin: "5px", width: "90px", border: "2px solid black" }}
            value="Delete"
            onClick={() => remove(post)}
          />
        </div>
      </div>
    </div>
  );
}
