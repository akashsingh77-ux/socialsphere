import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {},
    addReaction: () => {},
});

const DEFAULT_POST_LIST = [
    {
        id: '1',
        title: 'Going to Mumbai',
        body: 'Hi Friends! I am heading out for my summer internship.',
        reactions: 7,
        userId: 'user9',
        tags: ['vacation', 'mumbai', 'internship'],
    },
    {
        id: '2',
        title: 'UPSC Aspirations',
        body: 'Starting the grind to serve the nation. Civil services preparation mode is ON!',
        reactions: 33,
        userId: 'user10',
        tags: ['ias', 'ips', 'civilservice'],
    },
];

const postListReducer = (currPostList, action) => {
    if (action.type === 'DELETE_POST') {
        return currPostList.filter(post => post.id !== action.payload.postId);
    } 
    if (action.type === 'ADD_POST') {
        return [action.payload, ...currPostList];
    }
    if (action.type === 'ADD_REACTION') {
        return currPostList.map(post => 
            post.id === action.payload.postId 
                ? { ...post, reactions: post.reactions + 1 } 
                : post
        );
    }
    return currPostList;
};

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

    const addPost = (userId, postTitle, postBody, reaction, tags) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: {
                id: Date.now().toString(),
                title: postTitle,
                body: postBody,
                reactions: parseInt(reaction) || 0,
                userId: userId,
                tags: tags,
            }
        });
    };

    const deletePost = (postId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: { postId }
        });
    };

    const addReaction = (postId) => {
        dispatchPostList({
            type: "ADD_REACTION",
            payload: { postId }
        });
    };

    return (
        <PostList.Provider value={{ postList, addPost, deletePost, addReaction }}>
            {children}
        </PostList.Provider>
    );
};

export default PostListProvider;