import { useContext } from "react";
import { MdDelete, MdThumbUp, MdLocationOn, MdSchool, MdBookmarkBorder } from "react-icons/md";
import { PostList } from "../assets/store/post-list-store.jsx";

const Post = ({ post }) => {
    const { deletePost, addReaction } = useContext(PostList);

    
    const isMumbai = post.title.toLowerCase().includes("mumbai");
    
    return (
        <div 
            className={`card post-cart shadow border-0 overflow-hidden mb-4 rounded-4`}
            style={{ 
                minWidth: "32rem", 
                maxWidth: "35rem",
                transition: "transform 0.2s ease, box-shadow 0.2s ease"
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 1rem 3rem rgba(0,0,0,0.125)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 0.5rem 1rem rgba(0,0,0,0.075)";
            }}
        >
            {/* Fancy Accent Header Bar */}
            <div 
                style={{ 
                    height: "6px", 
                    background: isMumbai 
                        ? "linear-gradient(90deg, #00c6ff, #0072ff)" 
                        : "linear-gradient(90deg, #f12711, #f5af19)" 
                }} 
            />

            <div className="card-body p-4 position-relative">
                {/* Delete Trigger Icon */}
                <button 
                    className="btn btn-link text-muted p-0 position-absolute"
                    style={{ top: "1.5rem", right: "1.5rem", transition: "color 0.2s" }}
                    onClick={() => deletePost(post.id)}
                    onMouseEnter={(e) => e.target.style.color = "#dc3545"}
                    onMouseLeave={(e) => e.target.style.color = "#6c757d"}
                    title="Delete Post"
                >
                    <MdDelete size={22} />
                </button>

                {/* Header User Profile Section */}
                <div className="d-flex align-items-center mb-3">
                    <div 
                        className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold shadow-sm"
                        style={{ 
                            width: "45px", 
                            height: "45px", 
                            fontSize: "1.1rem",
                            background: isMumbai ? "#0072ff" : "#f12711"
                        }}
                    >
                        {post.userId.substring(0, 2).toUpperCase()}
                    </div>
                    <div className="ms-3">
                        <h6 className="mb-0 fw-bold text-dark">@{post.userId}</h6>
                        <small className="text-muted d-flex align-items-center gap-1">
                            {isMumbai ? <MdLocationOn className="text-primary" /> : <MdSchool className="text-danger" />}
                            {isMumbai ? "Mumbai, India" : "New Delhi, India"}
                        </small>
                    </div>
                </div>

                {/* Main Content Area */}
                <h4 className="card-title fw-extrabold text-dark mb-2" style={{ letterSpacing: "-0.5px" }}>
                    {post.title}
                </h4>
                <p className="card-text text-secondary lh-base mb-3" style={{ fontSize: "1.05rem" }}>
                    {post.body}
                </p>

                {/* Stylized Hashtags Area */}
                <div className="mb-4">
                    {post.tags.map((tag) => (
                        tag && (
                            <span 
                                key={tag} 
                                className={`badge me-2 px-3 py-2 rounded-pill shadow-sm fw-medium`}
                                style={{
                                    background: isMumbai ? "rgba(0, 114, 255, 0.1)" : "rgba(241, 39, 17, 0.1)",
                                    color: isMumbai ? "#0072ff" : "#f12711",
                                    fontSize: "0.85rem"
                                }}
                            >
                                #{tag}
                            </span>
                        )
                    ))}
                </div>

                {/* Interactive Footer Action Layout */}
                <div className="d-flex align-items-center justify-content-between pt-3 border-top border-light">
                    <button 
                        className={`btn d-flex align-items-center gap-2 px-3 py-2 rounded-3 fw-semibold shadow-sm text-white`}
                        style={{
                            background: isMumbai ? "#0072ff" : "#f12711",
                            border: "none",
                            transition: "opacity 0.2s"
                        }}
                        onClick={() => addReaction(post.id)}
                        onMouseEnter={(e) => e.target.style.opacity = "0.9"}
                        onMouseLeave={(e) => e.target.style.opacity = "1"}
                    >
                        <MdThumbUp /> Like
                    </button>
                    
                    <span 
                        className="fw-bold px-3 py-2 rounded-3 bg-light border text-secondary"
                        style={{ fontSize: "0.9rem" }}
                    >
                        🔥 <span className="text-dark fw-extrabold">{post.reactions}</span> Reactions
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Post;