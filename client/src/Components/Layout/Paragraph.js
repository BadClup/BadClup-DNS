import React from "react"
import styles from "./Paragraph.module.css"

const Paragraph = (props) =>{
    return (
      <div className={styles.paragraph}>
        <p>{props.title}</p>
        <section style={props.style}>
          {props.children} <span style={props.spanStyle}>{props.desc}</span>
        </section>
      </div>
    );
}

export default Paragraph