import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
            <>
           <div><h1>Projects</h1></div>
           
           <div><a href="https://ashwinbethala.github.io/codingquiz/" target="blank"><img src={"assets/images/quiz.jpeg"}
           alt="Me" class="img-fluid col-lg-5 col-md-4 col-sm-12" /></a></div>

           <div> <a href="https://github.com/BrennanPredmore/project2" target="blank"><img src="assets/images/triforce.png"
          alt="Me" class="img-fluid col-lg-5 col-md-4 col-sm-12" /></a></div>

            <div><a href="https://ashwinbethala.github.io/generatepassword/" target="blank"><img src="assets/images/password.jpg"
        alt="Me" class="img-fluid col-lg-5 col-md-4 col-sm-12" /></a></div>

         <div> <a href="https://brennanpredmore.github.io/project_1/" target="blank"><img src="assets/images/trustafarian.jpg"
          alt="Me" class="img-fluid col-lg-5 col-md-4 col-sm-12" /></a></div>
          </>
        )
    }
}

export default Projects; 