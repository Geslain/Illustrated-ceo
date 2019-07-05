import React, {useEffect, useState} from 'react';
import Commentary from "../commentary/commentary";
import commentaryService from "../../services/commentary"

function CommentaryPage() {
    const [commentaryList, setCommentaryList] = useState([])

    useEffect(() => {
        setCommentaryList(commentaryService.getCommentaryList())
    }, [commentaryList]);

    const renderCommentaryList = (commentaryList) => {
        return commentaryList.map(commentary =>
            <Commentary {...commentary} key={commentary.id}/>
        )
    }
    return (
        <div>
            {renderCommentaryList(commentaryList)}
        </div>
    );
}

export default CommentaryPage;
