import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/header';
import Footer from './component/footer';
import Sidebar from './component/sidebar';
import CreatePost from './component/createPost';
import PostList from './component/postlist';
import { useState } from 'react';
import PostListProvider from './assets/store/post-list-store.jsx';

function App() {
    const [selectedTab, setSelectedTab] = useState("Home");

    return (
        <PostListProvider>
            <div className="app-container">
                <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
                <div className="content d-flex flex-column min-vh-100">
                    <Header />
                    <main className="flex-grow-1">
                        {selectedTab === 'Home' ? (
                            <PostList />
                        ) : (
                            <CreatePost setSelectedTab={setSelectedTab} />
                        )}
                    </main>
                    <Footer />
                </div>
            </div>
        </PostListProvider> 
    );
}

export default App;