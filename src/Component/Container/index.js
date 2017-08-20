import React from 'react'

const Container = ({
    children
}) => (
    <section className="section">
        <div className="container">{children}</div>
    </section>
)

export default Container