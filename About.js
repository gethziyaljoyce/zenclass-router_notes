function About (props){
    return(
        <>
        <p>About Page!</p>
        <button onClick={props.history.goBack}>Go back</button>
        <button onClick={props.history.goForward}>Go forward</button>
        <button onClick={()=>props.history.push("./Post")}>Go to post-push</button>
        <button onClick={()=>props.history.replace("./Post")}>Go to post-replace</button>
        </>
    );
}

export default About;