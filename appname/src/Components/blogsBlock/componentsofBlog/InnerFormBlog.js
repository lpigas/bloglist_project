import React from "react";
import MyButton from "../../TopComponents/Button/MyButton";
import Input from "../../TopComponents/Input/Input";

export default function InnerFormBlog({
  classForInner,
  placeholder,
  addNewBlog,
  setAddNewBlog,
  onClick,
}) {
  return (
    <div>
      <div>
        <Input
          classForInner={classForInner}
          placeholder={placeholder[0]}
          value={addNewBlog.title}
          onChange={(e) =>
            setAddNewBlog({ ...addNewBlog, title: e.target.value })
          }
        />

        <Input
          classForInner={classForInner}
          placeholder={placeholder[1]}
          value={addNewBlog.body}
          onChange={(e) =>
            setAddNewBlog({ ...addNewBlog, body: e.target.value })
          }
        />
      </div>
      <div>
        <MyButton value="Add" onClick={() => onClick(addNewBlog)} />
      </div>
    </div>
  );
}
