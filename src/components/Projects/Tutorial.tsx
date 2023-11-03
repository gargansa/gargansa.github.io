import React from 'react'

function Tutorial() {
  return (
    <div> 
        <ul className="fa-ul mb-0">
    <li className="wrapper">
      <i className="fas fa-file-code mb-2 text-blue"></i>
      <button className="dropbtn">Tutorial Blog</button>
      <ul>
        <li>
          Created a tutorial site to help develop understanding of complex subjects.
        </li>
        <li>
          <a href="https://gargansa.github.io/tutorial">Visit Page</a>
        </li>
        <embed src="https://gargansa.github.io/tutorial" style={{pointerEvents: 'fill', width:'75%', height: '300px'}} />
      </ul>
    </li>
  </ul> 
  </div>
  )
}

export default Tutorial