import React from "react"
import styles from "./Paragraph.module.css"

const Paragraph = (props) =>{
    return (
      <div className={styles.paragraph}>
        <h2>{props.title}</h2>
        <section style={props.style}>
          {props.children} <span style={props.spanStyle}>{props.desc}</span>
        </section>
      </div>
    );
}

export default Paragraph