import React from 'react'
import {string} from "proptypes";

export default function Commentary({text})
{
    return (<>
        {text}
    </>)
}

Commentary.propTypes = {
    text: string
}
