import { useContext } from "react";
import Post from "./post";
import { PostList as PostListData } from "../assets/store/post-list-store.jsx";

const PostList = () => {
    const { postList } = useContext(PostListData);

    return (
        <div className="d-flex flex-column align-items-center w-100 py-3">
            {postList.length === 0 ? (
                <div className="text-center my-5 p-5 bg-light rounded shadow-sm w-75">
                    <h3 className="text-secondary fw-bold">No Posts Available 🏜️</h3>
                    <p className="text-muted">The feed looks empty! Be the first one to share an update.</p>
                </div>
            ) : (
                postList.map((post) => (
                    <Post key={post.id} post={post} />
                ))
            )}
        </div>
    );
};

export default PostList;