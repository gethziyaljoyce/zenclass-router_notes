// function PostOne ({match}){
//     console.log(match.params);
//     return(
//         <>
//         <p>PostOne Page - {match.params.id}!</p>


//         </>
//     );
// }

// export default PostOne;

  // useRouteMatch method

// import { useRouteMatch} from "react-router-dom";

// function PostOne() {
//     const match = useRouteMatch();
//     return (
//         <>
//             <p>PostOne Page - {match.params.id}!</p>
//         </>
//     );
// }

// export default PostOne;

//useParam method

import { useParams} from "react-router-dom";

function PostOne() {
    const params = useParams();
    return (
        <>
            <p>PostOne Page - {params.id}!</p>
        </>
    );
}

export default PostOne;