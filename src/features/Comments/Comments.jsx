import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadComments } from "./commentsSlice";

const Comments = () => {
    const comments = useSelector((state) => state.comments);
    const { isLoading, allComments, error } = comments;
    const dispatch = useDispatch();

    useEffect(() => {
        let mount = true;
        if (mount) {
            dispatch(loadComments(`https://jsonplaceholder.typicode.com/comments`));
        }
        return () => mount = false;
    }, [dispatch])

    return (
        <div>
            {
                isLoading && <h3>Loading...</h3>
            }
            {
                error && <h3>{error}</h3>
            }
            <h3>Comments: {allComments.length}</h3>
            {
                allComments.map((comment, idx) => <div key={idx} style={{
                    padding: '16px',
                    margin: '12px',
                    border: "2px solid #646cff",
                    borderRadius: '12px'
                }}>
                    <h3>{comment?.name}</h3>
                    <p>{comment?.body}</p>
                </div>)
            }
        </div>
    );
};

export default Comments;