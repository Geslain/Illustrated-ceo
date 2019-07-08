import React from 'react'
import {objectOf, string} from "prop-types";
import {Paper, withStyles} from "@material-ui/core";
import styles from "./styles";
import Transition from "react-transition-group/Transition";
import Typography from "@material-ui/core/Typography";

/**
 *
 * @param text
 * @param author
 * @param date
 * @param classes
 * @returns {*}
 * @constructor
 */
function Commentary({text, author, date, classes}) {
    const defaultStyle = {
        transition: `opacity 1000ms ease-in-out`,
        opacity: 0,
    }

    const transitionStyles = {
        entered:  { opacity: 1 },
    };

    return (<Transition appear in={true} timeout={0}>
        {state => {
            return (
            <div style={{
                ...defaultStyle,
                ...transitionStyles[state]
            }}>
                <Paper className={classes.commentary}>
                    {author} (<Typography variant={"caption"}>{date}</Typography>): {text}
                </Paper>
            </div>
        )}}
    </Transition>)
}

Commentary.propTypes = {
    text: string,
    author: string.isRequired,
    date: string.isRequired,
    classes: objectOf(string)
}

export default withStyles(styles)(Commentary)
