import React, {useEffect, useState} from 'react';
import Commentary from "../commentary/commentary";
import commentaryService from "../../services/commentary"
import CommentaryForm from "../commentaryForm/commentaryForm";
import {Paper, withStyles} from "@material-ui/core";
import styles from "./styles";
import {objectOf, string} from "prop-types";
import Typography from "@material-ui/core/Typography";

function CommentaryPage({classes}) {
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
        commentaryList.map(commentary => {
            return <Commentary {...commentary} key={commentary.id}/>
        })

    return (
        <div>
            <Typography variant="h2" align="center">
                Illus<span className={classes.clue}>t</span>r<span className={classes.clue}>at</span>ed
                <span className={classes.clue}>C</span>EO</Typography>
            <div className={classes.commentaryList}>
                {renderCommentaryList(commentaryList)}
            </div>
            <Paper>
                <CommentaryForm onSubmit={handleCommentaryFormSubmit}/>
            </Paper>
        </div>
    );
}

CommentaryPage.propTypes = {
    classes: objectOf(string)
}

export default withStyles(styles)(CommentaryPage);
