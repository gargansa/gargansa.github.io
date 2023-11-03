import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faGithub, 
  faReact, 
  faPython, 
  faNpm, 
  faWindows,
  faLinux,
  faApple,
  faJs,
  faNode
} from '@fortawesome/free-brands-svg-icons'

import {faCode,faTerminal} from '@fortawesome/free-solid-svg-icons'


function Skills() {
  return (
    <div>    {/* SKILLS */}
    <hr className="m-0"></hr>
    <section className="resume-section p-3 p-lg-5 d-flex flex-column text-left" id="skills">
      <div className="my-auto">
        <h2 className="mb-5">Skills</h2>
        
        <div className="mt-3 text-center">
        <ul className="text-left" style={{listStyleType: 'none', padding: '0', margin:'0'}}>
          <li><b>Problem Solving and Algorithm Design:</b> Proficient in dissecting intricate problems into manageable parts, facilitating effective problem resolution.</li>
          <li><b>Version Control:</b> Proficient using git.<FontAwesomeIcon icon={faGithub} /></li>
          <li><b>Full-Stack Development:</b> </li>
          <li><b>Database Management:</b> Used Transact SQL for 3 years</li>
        </ul>
      </div>


        <div className="subheading mb-3">Operating Systems, Programming Languages, Frameworks</div>
        <ul style={{listStyleType:'none', padding: '0'}}> 
           <li>
            Proven ability to effectively navigate and troubleshoot various operating systems.
            </li>
            <li>
            including <FontAwesomeIcon icon={faLinux} /> Linux, <FontAwesomeIcon icon={faWindows} /> Windows, and <FontAwesomeIcon icon={faApple} /> Mac OS
          </li>
          <br></br>
          <li>
            3 years professional experience
            </li>
          <li>
            <FontAwesomeIcon icon={faReact} /> React
          </li>
          <li>
            <FontAwesomeIcon icon={faCode} /> C#
          </li>          
          <li>
            <FontAwesomeIcon icon={faCode} /> ASP
          </li>
          <li>
            <FontAwesomeIcon icon={faCode} /> TypeScript
          </li>
          <li>
            <FontAwesomeIcon icon={faJs} /> Javascript
          </li>
          <li>
            <FontAwesomeIcon icon={faNode} /> Node.js
          </li>
          <li>
            <FontAwesomeIcon icon={faNpm} /> NPM
          </li>
          <li>
            <FontAwesomeIcon icon={faPython} /> Python
          </li>
          <li>
            <FontAwesomeIcon icon={faTerminal} /> Terminal
          </li>
        </ul> 
      </div>
  </section>
  </div>
  )
}

export default Skills