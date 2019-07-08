import React from 'react'
import {objectOf, string} from "prop-types";
import {Paper, withStyles} from "@material-ui/core";
import styles from "./styles";
import Transition from "react-transition-group/Transition";


const duration = 1000;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}

const transitionStyles = {
    entered:  { opacity: 1 },
};

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
    return (<Transition appear in={true} timeout={0}>
        {state => {
            return (
            <div style={{
                ...defaultStyle,
                ...transitionStyles[state]
            }}>
                <Paper className={classes.commentary}>
                    {author} ({date}): {text}
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
