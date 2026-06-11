import { useContext, useRef } from "react";
import { PostList } from "../assets/store/post-list-store";

const CreatePost = ({ setSelectedTab }) => {
    const { addPost } = useContext(PostList);

    const userIdElement = useRef();
    const postTitleElement = useRef();
    const postBodyElement = useRef();
    const reactionsElement = useRef();
    const tagsElement = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const userId = userIdElement.current.value;
        const postTitle = postTitleElement.current.value;
        const postBody = postBodyElement.current.value; 
        const reaction = reactionsElement.current.value; 
        
        
        const tags = tagsElement.current.value.trim().split(/\s+/);

      
        addPost(userId, postTitle, postBody, reaction, tags);

      
        userIdElement.current.value = "";
        postTitleElement.current.value = "";
        postBodyElement.current.value = "";
        reactionsElement.current.value = "";
        tagsElement.current.value = "";

        alert("🎉 Success! Your new post has been published to the feed.");
        setSelectedTab("Home");
    };

    return (
        <form className="create-post" onSubmit={handleSubmit}>
            <h3 className="mb-4 text-secondary fw-bold">Create a New Post</h3>
            
            <div className="mb-3">
                <label htmlFor="userId" className="form-label fw-semibold">User ID</label>
                <input type="text" ref={userIdElement} className="form-control" id="userId" placeholder="e.g., user123" required />
            </div>

            <div className="mb-3">
                <label htmlFor="title" className="form-label fw-semibold">Post Title</label>
                <input type="text" ref={postTitleElement} className="form-control" id="title" placeholder="How are you feeling today..." required />
            </div>

            <div className="mb-3">
                <label htmlFor="body" className="form-label fw-semibold">Post Content</label>
                <textarea ref={postBodyElement} className="form-control" id="body" rows="4" placeholder="Tell us more about it..." required />
            </div>

            <div className="row">
                <div className="col-md-6 mb-3">
                    <label htmlFor="reactions" className="form-label fw-semibold">Initial Reactions</label>
                    <input type="number" ref={reactionsElement} className="form-control" id="reactions" placeholder="0" min="0" />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="tags" className="form-label fw-semibold">Hashtags (separated by space)</label>
                    <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder="vacation coding placement" />
                </div>
            </div>

            <button type="submit" className="btn btn-primary px-4 py-2 mt-2 shadow-sm">Publish Post</button>
        </form>
    );
};

export default CreatePost;