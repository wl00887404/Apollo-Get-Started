import React from 'react'
// eslint-disable-next-line 
import styles from "./styles.css"
import logo from "./logo.svg"
const Hero = ({
    title,
    subtitle,
    children
}) => (
    <div>
        <section className="hero is-primary">
             <div className="hero-head ">
                 <div className="nav">
                    <div className="container">
                        <div className="nav-left">
                            <div className="nav-item">
                                <img alt="logo" className="logo" src={logo}/>
                            </div>
                            <div className="nav-item">
                                <a  className="is-active" href="http://localhost:8081/graphql" target="_blank" rel="noopener noreferrer">GraphiQL</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-body">
                <div className="container has-text-centered">
                <h1 className="title is-size-2">
                    {title}
                </h1>
                <h2 className="subtitle">
                    {subtitle}
                </h2>
                </div>
            </div>
            <div className="hero-foot">
                <div className="container has-text-centered">
                    {children}
                </div>
            </div>
        </section>
    </div>
)

export default Hero