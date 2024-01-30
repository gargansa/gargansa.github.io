import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faGithub} from '@fortawesome/free-brands-svg-icons'
import BasicCarousel from './Carousel'

export default class FlyBox extends Component {
  state = {
      slides: [
        ['https://i.imgur.com/Xvc9YAF.jpg','Resulting from inspiration from a sewing needle box I decided to develop a fly fishing tackle box with a similar opening concept.'],
        ['https://i.imgur.com/9yNKnUS.jpg','I first designed the cut lines in Inkscape so that a sewing needle box could be laser cut out of minimal material. The resulting box had magnets inset into the opposing corners so that the halves would \'click\' together. While the magnets were satisfing, this box was not nearly deep enough to contain the fly\'s.'],
        ['https://i.imgur.com/EjgapAS.jpg','Second attempt was scaled up in dimentions and a second layer of wood added to each side to add depth. I cut out a layer of cork for the inside where the flys would sit. The new depth created a waste problem each box would now take 3 times the amount of material of just the outside panels.'],
        ['https://i.imgur.com/SgR4XQY.png','Designed a housing in Blender to hold the wood panels. This would allow more flexability related to the depth as well as allowing a screw to be used on one side so that the box could swing open without it falling into the river by mistake.'],
        ['https://i.imgur.com/VjGS02M.jpg','The housing was printed in carbon fiber plastic which would increase the strength as well as help hide the layer lines in the plastic and make it look less 3D printed.'],
        ['https://i.imgur.com/vYnesnV.png','The cork proved difficult to keep the lines clean and straight. Designed the new cork insert to use holes instead of lines so that the final product would have a straighter look. The green corners are cut last in the laser since the cork comes in rolls and has a tendency to curl when cut.'],
        ['https://i.imgur.com/tY3OpNz.jpg','Final box with Wenge wood front and back. The wood is finished with bees wax and orange oil. This helps protect the wood from moisture.'],
        ['https://i.imgur.com/lynHHsM.jpg','Another example with Zebra wood. The plastic housing for these are printed with 25% infill so they float in addition to the cork and wood.'],
        ['https://i.imgur.com/dwVO5DC.jpg','Lacewood contains an interesting and unique pattern.'],
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
                These slides outline the process, problems that were encountered and how I arrived at the final product. The project was a success and have been one of our best sellers during the holiday markets.
              </li>
            </ul>
          </li>
        </ul>
        <BasicCarousel slides={this.state.slides} title={"Design Process"} />

    </div>
  )
}
 
}
