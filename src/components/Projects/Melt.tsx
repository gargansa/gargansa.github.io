import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faGithub} from '@fortawesome/free-brands-svg-icons'
import BasicCarousel from './Carousel'

export default class Melt extends Component {
  state = {
      slides: [
        ['https://i.imgur.com/bMBWVuc.jpeg','Melt allows a mixing nozzle to change between a red filament and a blue filament at varying percentages. In this example every 4-8 layers a new random percentage is chosen.'],
        ['https://i.imgur.com/LoV9brW.jpeg','Some colors of filaments such as black contain an overpowering amount of pigments. The MELT script contains a modifier that will allow the favor one percentage of the mixture over the other. This results in more gray banding where it would normally be mostly black.'],
        ['https://i.imgur.com/c5b5QNW.jpeg','Vase with random changes every 2-4 random layers between red and blue to bring out range of purples.'],
        ['https://i.imgur.com/AHS7JOz.jpeg','Voronoi pencil holder, black and white with random changes every 4-8 layers.'],
        ['https://i.imgur.com/fymr8km.jpeg','Pencil holder, gray and white. Settings were random changes every 1-2 layers.'],
        ['https://i.imgur.com/J88kqis.jpeg','Gradient Pencil holder adjustments every 4 layers to slowly shift towards white.'],
        ['https://i.imgur.com/NUiBW5Z.jpeg','Flexi Rex with slow shift from blue to red. Each layer is seperated by a change in percentage of color.'],
        ['https://i.imgur.com/hTvScjP.jpeg','Door Sign with single adjustment halfway through the print to shift from white to gray.']
    ]
  }


render(){
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
        <BasicCarousel slides={this.state.slides} title={"3D PRINTS CREATED USING MELT."} imgheight={300} slideheight={400} />

    </div>
  )
}
 
}
