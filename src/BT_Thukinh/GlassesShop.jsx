import React, { Component } from "react";
import dataGlasses from './dataGlasses.json';
import GlassesList from "./GlassesList";

export default class GlassesShop extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        imgGlasses: './glassesImage/v1.png',
        nameGlasses: 'GUCCI G8850U',
        desGlasses: 'Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.'
      }
    }

    handleSelectGlasses = (glass) => {
        console.log(glass)
        this.setState({
          imgGlasses: `${glass.url}`, 
          nameGlasses: `${glass.name}`,
          desGlasses: `${glass.desc}`
        })
    }
  render() {
      const styleGlasses = {
        top: '75px', 
        right: 'calc(50% - 75px)', 
        opacity: '0.8', 
        zIndex: '1'
      }

      const infoGlasses = {
        bottom: '0', 
        left: 'calc(50% - 125px)', 
        width: '250px', textAlign: 'left', 
        backgroundColor: 'rgba(255, 127, 0, 0.5)', 
        paddingLeft: '15px', 
        height: '105px'
      }
    return (
      <div
        style={{
          backgroundImage: "url(./glassesImage/background.jpg)",
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
      >
        <div
          style={{ backgroundColor: "rgba(0, 0 ,0, 0.7)", minHeight: "100vh" }}
        >
          <h3
            className="text-center text-light p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, .3)" }}
          >
            TRY GLASSES APP ONLINE
          </h3>
          <div className="container">
            <div className="row mt-5 text-center">
              <div className="col-6">
                  <div className="position-relative">
                    <img src="./glassesImage/model.jpg" alt="modal" width="250"/>
                    <img 
                        className="position-absolute" src={this.state.imgGlasses} alt="glass" width="150"
                        style={styleGlasses}
                    />
                    <div 
                        className="position-absolute"
                        style={infoGlasses}
                    >
                        <span className="font-weight-bold" style={{color: '#AB82FF', fontSize: '18px'}}>{this.state.nameGlasses}</span><br/>
                        <span style={{fontSize: '13px', fontWeight: '300', color: '#ffffff'}}>{this.state.desGlasses}</span>
                    </div>
                  </div>
              </div>
              <div className="col-6">
                  <img src="./glassesImage/model.jpg" alt="modal" width="250"/>
              </div>
            </div>
          </div>
          <div className="container bg-light text-center d-flex flex-wrap justify-content-center mt-5 p-5">
            <GlassesList 
              glasses={dataGlasses}
              onSelect={this.handleSelectGlasses}
            />
          </div>
        </div>
      </div>
    );
  }
}
