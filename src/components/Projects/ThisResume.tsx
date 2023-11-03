import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCode} from '@fortawesome/free-solid-svg-icons'

function ThisResume() {
  return (
    <div>
        <ul className="fa-ul mb-0">
    <li className="wrapper">
    <FontAwesomeIcon icon={faCode} /><b> Resume Site</b>
      <ul>
        <li>
          Designed and developed this personal portfolio website using React with Typescript as well as Bootstrap, HTML, and CSS, to showcase a range of my ability in web design.
        </li>
      </ul>
    </li>
  </ul>
</div>
  )
}

export default ThisResume