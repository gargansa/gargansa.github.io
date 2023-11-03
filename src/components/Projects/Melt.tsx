import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faGithub} from '@fortawesome/free-brands-svg-icons'
import {MeltCarousel} from './Carousel'

function Melt() {



  return (
    <div> 
        <ul className="fa-ul mb-0">
          <li className="wrapper">
            <FontAwesomeIcon icon={faPython} /><b> MELT - Multi-Extruder Layering Tool</b>
            <ul>
              <li>
              Lead developer, along with a group of 3d printing enthusiasts. Together we produced a python plugin
              for
              an open source software known as Cura.
              </li>
              <li>
              The project enabled 3d printers such as the Promega and Crane (made by M3D), to mix plastics within
              the
              nozzle at varying rates.
              </li>
              <li>
              The results create gradients and other effects through the height of the print.
              </li>
              <li>
              Code can be found on my <a href="https://github.com/gargansa/MELT">Github <FontAwesomeIcon icon={faGithub} /></a>
              </li>
            </ul>
          </li>
        </ul>
        <MeltCarousel/>

    </div>
  )
}

export default Melt