import React, { Component } from 'react'
import striptags from 'striptags'

class OurMissionComponent extends Component {

   render() {

      const ourmission = this.props.info
      console.log({
          "ourmission": ourmission
      })

      return (
        <div className="mision allH" id="mission">
            <div className="wrapper">
            <div className="col" data-aos="fade-right">
                <p className="quote">
                    <span>{ourmission.description}</span>
                </p>
                <div className="author">
                    <figure>
                        <img src={ ourmission.image.renditions.original.href } />
                        <figcaption>- { ourmission.image.title }</figcaption>
                    </figure>
                </div>
            </div>
            <div className="col" data-aos="fade-right" data-aos-delay="600">
                <h2 className="title">Our mission is to</h2>
                {
                    ourmission.body.map(function (txt_line, index) {
                        return <p className="txt-line" dangerouslySetInnerHTML={{ __html: striptags(txt_line.value) }}></p>
                    })
                }
            </div>
            </div>
        </div>
      )
   }
}

export default OurMissionComponent
