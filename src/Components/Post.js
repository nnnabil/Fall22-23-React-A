import React from "react";

const Post = (props)=>{

    const PostStyle={
        backgroundColor: "#7badd1",
        color:"#fff",
        padding: "10px",
    }

    return (
            <div style={PostStyle}>
               UserID: <span>{props.userId}</span>
               <br></br>
               Title: <span>{props.title}</span>
            </div>


    )

}
export default Post;  