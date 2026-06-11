import { useContext } from "react";
import { PostList } from "../assets/store/post-list-store";

const Sidebar = ({ selectedTab, setSelectedTab }) => {
    const { postList } = useContext(PostList);

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{ width: "280px" }}>
            <a href="/" className="d-flex align-items-center mb-3 text-white text-decoration-none">
                <span className="fs-4 fw-bold text-warning">SocialSphere</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item mb-1" onClick={() => setSelectedTab("Home")}>
                    <a href="#" className={`nav-link text-white d-flex justify-content-between align-items-center ${selectedTab === 'Home' && "active"}`}>
                        <span>🏠 Home Feed</span>
                        <span className="badge bg-secondary rounded-pill">{postList.length}</span>
                    </a>
                </li>
                <li className="nav-item" onClick={() => setSelectedTab("Create Post")}>
                    <a href="#" className={`nav-link text-white ${selectedTab === 'Create Post' && "active"}`}>
                        ✍️ Create Post
                    </a>
                </li>
            </ul>
            <div className="mt-auto border-top pt-3 text-center text-muted small">
                NIT Agartala Dev Project
            </div>
        </div>
    );
};

export default Sidebar;