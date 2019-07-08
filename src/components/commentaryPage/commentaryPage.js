import React, {useEffect, useState} from 'react';
import Commentary from "../commentary/commentary";
import commentaryService from "../../services/commentary"
import CommentaryForm from "../commentaryForm/commentaryForm";
import {Paper} from "@material-ui/core";

function CommentaryPage() {
    const [commentaryList, setCommentaryList] = useState([])

    useEffect(() => {
        setCommentaryList(commentaryService.getCommentaryList())
    }, []);

    /**
     * Add a submitted comment
     *
     * @param values
     */
    const handleCommentaryFormSubmit = (values) => {
        commentaryService.addCommentary({
            ...values,
            date: new Date().toDateString()
        }).then((a) => {
            setCommentaryList(c => [...c, a])
        }).catch()
    }

    /**
     * render the commentary list
     * @param commentaryList
     * @returns {*}
     */
    const renderCommentaryList = (commentaryList) =>
        commentaryList.map(commentary =>{
            return <Commentary {...commentary} key={commentary.id}/>
        })

    return (
        <div>
            {renderCommentaryList(commentaryList)}
            <Paper>
                <CommentaryForm onSubmit={handleCommentaryFormSubmit}/>
            </Paper>
        </div>
    );
}

export default CommentaryPage;
