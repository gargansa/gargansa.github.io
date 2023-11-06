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
          <li><b>Version Control:</b> Git</li>
          <li><b>Full-Stack Development:</b> React, C#, ASP, TypeScript, JavaScript, Python</li>
          <li><b>Database Management:</b> Transact SQL (3 years)</li>
          <li><b>Tools:</b> Azure, SourceTree, Confluence, Jira, Visual Studio, Cygwin, PuTTY</li>
          <li><b>Operating Systems:</b> Linux, Windows, Mac OS</li>
        </ul>
      </div>

      </div>
  </section>
  </div>
  )
}

export default Skills