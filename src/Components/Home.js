import React, {Components} from "react";
import Hello from "./Hello";
import ShowMessage from "./ShowMessage";

const Home = () => {
    return(
        <div>
            <h1>Home</h1>
            <Hello/>
            <ShowMessage/>
        </div>
    )
}
export default Home;