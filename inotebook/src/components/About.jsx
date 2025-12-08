import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import { useEffect } from 'react'

function About() {
  const a = useContext(noteContext)

  return (
    <div>
      This is about Page
    </div>
  )
}

export default About