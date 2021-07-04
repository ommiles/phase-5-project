import React from 'react'
import TestButton from './TestButton'
import { useRouteMatch, withRouter } from "react-router-dom";

export default function TestPage() {
    // let match = useRouteMatch("/testpage");

    return (
        <div>
            <TestButton />
            <h1>This is the TestPage Component.</h1>
        </div>
    )
}
