import React from "react";

type OscarProps = {
    children: React.ReactNode
}

export const Oscar = (props: OscarProps) => {

    const {children} = props

    return (
        <div>
            <h2>{children}</h2>
        </div>
    )
}
