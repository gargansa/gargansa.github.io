import React from 'react'

function Education() {
  return (
    <div>  {/* EDUCATION */}
    <hr className="m-0"></hr>
    <section className="resume-section p-3 p-lg-5 d-flex flex-column text-left" id="education">
      <div className="my-auto">
        <h2 className="mb-5">Education</h2>
  
        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <h3 className="mb-0">Montana Code School</h3>
            <div className="subheading mb-3">Bootcamp with strong focus in React, Adonis, Javascript, Git </div>
            <div>6 Months</div>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">October 2018 - March 2019</span>
          </div>
        </div>
  
        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <h3 className="mb-0">Montana State University</h3>
            <div className="subheading mb-3">Computer Science</div>
            <div>Classes in Java using the BlueJ IDE, Java Data Structures, HTML &amp; CSS, and Computer Ethics.</div>
            <div>1.5 Years</div>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">January 2006 - May 2007</span>
          </div>
        </div>
  
        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <h3 className="mb-0">Powell County High School</h3>
            <div className="subheading mb-3">General Studies</div>
            <div>Classes in Basic, Logo, HTML.</div>
            <div>4 Years</div>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">August 2001 - May 2005</span>
          </div>
        </div>
  
  
        <div className="resume-item d-flex flex-column flex-md-row mb-5">
          <div className="resume-content mr-auto">
            <h3 className="mb-0">Device Repair Technician Certification</h3>
            <div className="subheading mb-3">Apple and Samsung Devices.</div>
            <div>Developed skills needed to repair Android and IOS phones and tablets.</div>
            <div>3 Day Course</div>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">February 2014</span>
          </div>
        </div>
  
      </div>
    </section></div>
  )
}

export default Education