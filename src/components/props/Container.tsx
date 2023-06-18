import React from "react";

type ContainerProps = {
    styles: React.CSSProperties
}

export const Container = (props: ContainerProps) => {

    const {styles} = props

    return (
        <div style={styles}>
            <h2>Container</h2>
        </div>
    )
}
