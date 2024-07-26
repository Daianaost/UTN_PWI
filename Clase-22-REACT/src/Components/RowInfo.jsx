import React from 'react'

const RowInfo = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <main>
                {props.children}
            </main>
        </div>

    )
}

export default RowInfo