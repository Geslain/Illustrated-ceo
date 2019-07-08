import React from 'react'
import {withStyles} from "@material-ui/core";
import styles from "./styles";
import TextField from '@material-ui/core/TextField';
import {objectOf, func, string} from 'prop-types'
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useForm from "react-hook-form";

function CommentaryForm({classes, onSubmit}) {
    const {register, handleSubmit, errors} = useForm(); // initialise the hook

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
            <Typography variant="h5">Leave a comment</Typography>
            <TextField
                name="author"
                label="Your name"
                className={classes.authorField}
                margin="normal"
                error={Boolean(errors.author)}
                inputRef={register({required: true})}
            />
            <TextField
                name="text"
                label="Your commentary"
                multiline
                rows={4}
                className={classes.textField}
                margin="normal"
                error={Boolean(errors.text)}
                inputRef={register({required: true})}
            />
            <Button type="submit" color="primary" variant="contained">Send</Button>
        </form>
    )
}

CommentaryForm.propTypes = {
    classes: objectOf(string),
    onSubmit: func.isRequired
}

export default withStyles(styles)(CommentaryForm)
