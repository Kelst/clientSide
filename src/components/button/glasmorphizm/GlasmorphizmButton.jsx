import React from 'react'
import clases from "./GlasmorphizmButton.module.css";

export default function GlasmorphizmButton({label="Button"}) {
  return (
    <div className={clases.container}>
    <div className={clases.btn}><span>{label}</span></div>
    </div>
  )
}
