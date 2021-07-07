import React from 'react'

export default function MembershipLevels(props) {
    return (
        <div>
            <h1>Select a Membership Level:</h1>
            {props.subscriptions.map((subscription) => 
            <div>
                <h1>{subscription.title.charAt(0).toUpperCase() + subscription.title.slice(1)}</h1>
            </div>
            )}
        </div>
    )
}
