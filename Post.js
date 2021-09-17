import {Link} from "react-router-dom";

let obj = [
    {
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    },
    {
        "id": 2,
        "title": "qui est esse",
    },
    {
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    },
    {
        "id": 4,
        "title": "eum et est occaecati",
    },
    {
        "id": 5,
        "title": "nesciunt quas odio",
    },
    {
        "id": 6,
        "title": "dolorem eum magni eos aperiam quia",
    },]

function Post({history}) {
    return (
        <>
        <p>Post Page!</p>
        <button onClick={history.goBack}>Go back</button>
        <button onClick={history.goForward}>Go forward</button>
        <button onClick={()=>history.push("./Post")}>Go to post-push</button>
        <button onClick={()=>history.replace("./Post")}>Go to post-replace</button>
        {obj.map((p)=>{
               return <p key={p.id}><Link to={`/Post/${p.id}`}>{p.title}</Link></p>
            })}
        </>
    );
}

export default Post;