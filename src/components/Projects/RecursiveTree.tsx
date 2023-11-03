import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodepen } from '@fortawesome/free-brands-svg-icons'
import Codepen from "react-codepen-embed";

function RecursiveTree() {
  // const ReactLoader = () => <div>Loading...</div>
  return (
    <div>
        <ul className="fa-ul mb-0 rounded-3">
            <li className="wrapper"></li>
                <FontAwesomeIcon icon={faCodepen} /><b> Codepen - Recursive Tree</b>
                <ul>
                  <li>Using a recursive function I draw a branch with a random color and call the same function a few more
                  times.</li>
                  <li>Each call to the function reduces the branch length, adjusts the color slightly, and picks a
                  new random angle.</li>
                  <li>Once the branch length is small enough it stops calling the function and sometimes places a leaf on the end.
                  </li>
                </ul>
                <div className="rounded-corners">
                  <Codepen hash="zMOZaK" user="gargansa" editable={false} title="Recursive Tree" defaultTab="result" height={500}  preview={false}/>
                </div>
                
          </ul>
    </div>
  )
}

export default RecursiveTree