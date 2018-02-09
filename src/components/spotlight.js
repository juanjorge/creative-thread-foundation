import React, { Component } from 'react'

class SpotlightComponent extends Component {

   render() {

      const spotlight = this.props.info

      return (
        <div className="main allH" id="main">
            <div className="wrapper">
            <h1>
                <img src={spotlight.image.renditions.original.href} height="207" width="390" alt={spotlight.title} />
            </h1>
            <p className="description">{spotlight.description}</p>          
            </div>
            <a href="#mission" className="down"></a>
        </div>
      )
   }
}

export default SpotlightComponent
