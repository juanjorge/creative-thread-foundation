import React, { Component } from 'react'

class ActivitiesComponent extends Component {
   
   render() {

      const message_chairman = this.props.info
      console.log({
          "message_chairman": message_chairman
      })
      return (
        <div className="letter allH" id="message">
            <div className="wrapper">            
                <div className="wrapper-video" dangerouslySetInnerHTML={{ __html: message_chairman.shortDescription }}></div>

                <h2 className="title" data-aos="fade-up">{message_chairman.title}</h2>            
                {
                    message_chairman.body.map(function (txt, index){
                        return <p className="description" data-aos="fade-down" dangerouslySetInnerHTML={{ __html: txt.value }}></p>
                    })
                }
                <div className="author aos-init aos-animate" data-aos="flip-left">
                    <figure>
                        <img src={ message_chairman.image.renditions.original.href } />
                    </figure>
                </div>
            </div>
        </div>
      )
   }
}

export default ActivitiesComponent
