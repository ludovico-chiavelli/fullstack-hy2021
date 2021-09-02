import React from "react"

const Notification = ({ message, color }) => {
    if (message === null) {
        return null
    }

    return (
        <div className="notification" style={color}>
            {message}
        </div>
    )
}

export default Notification;