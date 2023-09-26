import React from "react";
import { render } from "react-dom";
class Card extends React.Component{

    render(){
        return(
            <div className="container">
        <h2 style={{marginTop:'30px'}}>Projects</h2>
        <div className="row">
          <div className="col-md-4 cardpro">
            <div className="card">
              {/* <img src="project1.jpg" className="card-img-top" alt="Project 1" /> */}
              <div className="card-body">
                <h5 className="card-title">CSS/HTML</h5>
                <p className="card-text">Description of Project 1.</p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              {/* <img src="project2.jpg" className="card-img-top" alt="Project 2" /> */}
              <div className="card-body">
                <h5 className="card-title">Java Script</h5>
                <p className="card-text">Description of Project 2.</p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              {/* <img src="project2.jpg" className="card-img-top" alt="Project 2" /> */}
              <div className="card-body">
                <h5 className="card-title">Database</h5>
                <p className="card-text">Description of Project 2.</p>
                <a href="#" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>


        )
    }
}
export default Card;