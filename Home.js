


// function Home(props) {
//     console.log(props);
//     return (
//         <>
//             <p>Home Page!</p>
//             <button onClick={props.history.goBack}>Go back</button>
//             <button onClick={props.history.goForward}>Go forward</button>
//             <button onClick={() => props.history.push("./Post")}>Go to post-push</button>
//             <button onClick={() => props.history.replace("./Post")}>Go to post-replace</button>
//             <p>{props.location.search}</p>
            
//         </>
//     );
// }

// export default Home;

 import {useHistory,useLocation} from "react-router-dom";

function Home() {
    const history = useHistory();
    const location = useLocation();
    return (
        <>
            <p>Home Page!</p>
            <button onClick={history.goBack}>Go back</button>
            <button onClick={history.goForward}>Go forward</button>
            <button onClick={() => history.push("./Post")}>Go to post-push</button>
            <button onClick={() => history.replace("./Post")}>Go to post-replace</button>
            <p>{location.search}</p>
            
        </>
    );
}

export default Home;