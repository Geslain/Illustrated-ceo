import React from 'react'
import {objectOf, string} from "prop-types";
import {Paper, withStyles} from "@material-ui/core";
import styles from "./styles";

/**
 *
 * @param text
 * @param author
 * @param date
 * @param classes
 * @returns {*}
 * @constructor
 */
function Commentary({text, author, date,classes})
{
    return (<Paper className={classes.commentary}>
        {author} ({date}): {text}
    </Paper>)
}

Commentary.propTypes = {
    text: string,
    author: string.isRequired,
    date: string.isRequired,
    classes: objectOf(string)
}

export default withStyles(styles)(Commentary)
