import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {PostsActions} from "../../../Store/Actions";
import {Button, Skeleton} from "@mui/material";
import {GetPostById} from "../../../Services";
import './CoursesSchedules.scss'

const CoursesSchedulesView = () => {
    const dispatch = useDispatch();
    const [selectedPost, setSelectedPost] = useState({});
    const [selectedItemId, setSelectedItemId] = useState(1);
    const [isSelectedPostLoading, setIsSelectedPostLoading] = useState(false);
    const postsReducer = useSelector((state) => state.PostsReducers);

    const handlePostClick = useCallback(async (id) => {
        setIsSelectedPostLoading(true);

        const results = await GetPostById({id});
        if (results) {
            const {data} = results;
            setSelectedPost(data);
        }

        setIsSelectedPostLoading(false);
    }, []);

    useEffect(() => {
        dispatch(PostsActions.post());
    }, [dispatch]);

    useEffect(() => {
        handlePostClick(1);
    }, [handlePostClick]);

    return (
        <div className="courses-schedules-wrapper view-wrapper">
            <div className="courses-schedules-content">
                <div className="posts-side-menu-wrapper">
                    {postsReducer && postsReducer.postsResponse && postsReducer.postsResponse.data.map((item, index) => (
                        <div
                            className={`post-item-wrapper ${item.id === selectedItemId ? 'is-selected' : ''}`}
                            key={`${index + 1}-post`}
                        >
                            <Button onClick={() => {
                                handlePostClick(item.id);
                                setSelectedItemId(item.id);
                            }}>
                                <span>{item.title}</span>
                            </Button>
                        </div>
                    ))}
                </div>
                <div className="selected-post-wrapper">
                    {selectedPost && !isSelectedPostLoading ?
                        <>
                            <div className="selected-post-title">
                                {selectedPost.title}
                            </div>
                            <p className="selected-post-body">
                                {selectedPost.body}
                            </p>
                        </>
                        :
                        <div className="skeleton-wrapper">
                            <div className="skeleton-item is-title">
                                <Skeleton variant="rect"/>
                            </div>
                            <div className="skeleton-item">
                                <Skeleton variant="rect"/>
                            </div>
                            <div className="skeleton-item is-half">
                                <Skeleton variant="rect"/>
                            </div>
                            <div className="skeleton-item">
                                <Skeleton variant="rect"/>
                            </div>
                            <div className="skeleton-item">
                                <Skeleton variant="rect"/>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default CoursesSchedulesView;
