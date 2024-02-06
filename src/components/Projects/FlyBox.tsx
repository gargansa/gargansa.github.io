import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faGithub} from '@fortawesome/free-brands-svg-icons'
import BasicCarousel from './Carousel'

export default class FlyBox extends Component {
  state = {
      slides: [
        ['https://i.imgur.com/Xvc9YAF.jpg','Resulting from inspiration from a sewing needle box I decided to develop a fly fishing tackle box with a similar opening concept.'],
        ['https://i.imgur.com/Q2bw0Ev.png','I first designed the cut lines in Inkscape so that a sewing needle box could be laser cut out of minimal material. The topographic lines (pink) come from the Geographic Information System (GIS) mapping data from \'https://apps.nationalmap.gov\'. This data is exported as a vector file using QGIS an open source project. These topographic lines are of Sleeping Giant near Helena, Mt.'],
        ['https://i.imgur.com/9yNKnUS.jpg','The design is then cut out of 1/8inch wood using a Glowforge laser cutter. With the Topographical lines etched in at the same time. Magnets were inserted into the opposing corners which allowed the halves to \'click\' into place. While the magnets were satisfing and the first box was a solid proof of concept, this box was not nearly deep enough to contain fishing fly\'s.'],
        ['https://i.imgur.com/EjgapAS.jpg','For the second iteration dimensions were scaled up and a second layer of wood added to each side to increase depth. I cut out a layer of cork for the inside where the flys would sit. The pieces proved difficult to align easily. The new depth created a waste problem each box would now take 3 times the amount of material of just the outside panels to produce a single box.'],
        ['https://i.imgur.com/SgR4XQY.png','Designed a housing in Blender to hold the wood panels. This would allow more flexability related to the depth as well as allowing a screw to be hidden within one side so that the box could swing open without it falling into the river by mistake.'],
        ['https://i.imgur.com/VjGS02M.jpg','The housing was printed in carbon fiber plastic which would increase the strength as well as help hide the layer lines in the plastic and make it look less 3D printed.'],
        ['https://i.imgur.com/vYnesnV.png','The cork proved difficult to keep the lines clean and straight. Designed a new cork insert to use holes instead of lines so that the final product would have a straighter look. The green corners are cut last in the laser since the cork comes in rolls and has a tendency to curl when cut.'],
        ['https://i.imgur.com/tY3OpNz.jpg','Final box with Wenge wood (originates in Central Africa) front and back. The wood is finished with bees wax and orange oil. This helps protect the wood from moisture.'],
        ['https://i.imgur.com/lynHHsM.jpg','Another example with Zebra wood (originates in West Africa). The plastic housing for these are printed with 25% infill so they float in addition to the cork and wood.'],
        ['https://i.imgur.com/dwVO5DC.jpg','Lacewood (originates in Brazil). It contains an distinct lacelike pattern.'],
        ['https://i.imgur.com/GPgocim.jpg','Iridecent Acrylic with topographic lines from the Sleeping Giant near Helena, MT']
    ]
  }


render(){
  return (
    <div> 
        <ul className="fa-ul mb-0">
          <li className="wrapper">
            <FontAwesomeIcon icon={faPython} /><b> Product Design - Fly Fishing Box</b>
            <ul>
              <li>
                During the Fall of 2023 I designed a Fly Fishing Tackle box that would become christmas gifts for family as well as something that could be produced and sold.
                These slides outline the process, problems that were encountered and how I arrived at the final product. The project was a success and has been one of our best sellers during the holiday markets.
              </li>
            </ul>
          </li>
        </ul>
        <BasicCarousel slides={this.state.slides} title={"Design Process"} imgheight={400} slideheight={550} />

    </div>
  )
}
 
}
