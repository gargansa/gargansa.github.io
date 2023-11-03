
import Hexwordz from './Projects/Hexwordz'
import Melt from './Projects/Melt'
import RecursiveTree from './Projects/RecursiveTree'

function Projects() {
  return (
  <div>
    <section className="resume-section p-3 p-lg-5 d-flex flex-column text-left" id="projects">
      <div className="my-auto">
        <h2 className="mb-5">Projects</h2>
        <Hexwordz/>
        {/* <hr className="m-5"></hr>
        <ThisResume/> */}
        <hr className="m-5"></hr>
        <Melt/>
        <hr className="m-5"></hr>
        <RecursiveTree/>
      </div>
    </section>
  </div>
  )
}

export default Projects