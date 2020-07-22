import React, { Component } from 'react';
import SpacingGrid from './demo';

class Resume extends Component {

  // Grid(props) {
  //   //console.log(props);
  //   return (<SpacingGrid props={props<Array(props.length())}>/>);
  // }

  render() {
    if(this.props.data){
      //console.log(this.props.data.skills);
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <ul style={{listStyleType: "disc",paddingLeft:"2%"}}>
          {education.description.map((value, index) => {
              return <li key={index}>{value}</li>
          })}
        </ul></div>
      })
      var work = this.props.data.work.map(function(work){
        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <ul style={{listStyleType: "disc",paddingLeft:"2%"}}>
              {work.description.map((value, index) => {
                  return <li key={index}>{value}</li>
              })}
            </ul>
        </div>
      })
      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
      // var skills = () => {
      //   return <SpacingGrid props={this.props.skills}/>;
      // }
    }

    return (
      <section id="resume">


      {/*<div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>
            {/*<p>{skills}</p>

			</div>
      </div>*/}

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>


      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>




   </section>
    );
  }
}

export default Resume;
