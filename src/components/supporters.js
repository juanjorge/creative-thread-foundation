import React, { Component } from 'react'

import striptags from 'striptags'

class SupportersComponent extends Component {
   
   render() {

      const supporters = this.props.info
      console.log({
          "supporters": supporters
      })
      var string_supporters = ''
      for (let i = 0; i < supporters.body.length; i++) {
          const txt_line = supporters.body[i];
          string_supporters += striptags(txt_line.value) + ' <span>//</span> ';
      }
      return (
        <div className="supporters allH" id="supporters" >
            <div className="wrapper">
                <h2 className="title" data-aos="fade-right">Supporters</h2>
                <div className="txt-supporters" data-aos="zoom-in">
                    <p dangerouslySetInnerHTML={{ __html: string_supporters }}></p>
                </div>
            </div>
        </div>
      )
   }
}

export default SupportersComponent
