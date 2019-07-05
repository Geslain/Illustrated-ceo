import React from 'react'
import {string} from "prop-types";
import {Paper} from "@material-ui/core";

export default function Commentary({text})
{
    return (<Paper>
        {text}
    </Paper>)
}

Commentary.propTypes = {
    text: string
}
