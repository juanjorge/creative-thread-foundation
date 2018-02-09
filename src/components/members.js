import React, { Component } from 'react'

class MembersComponent extends Component {
   render() {

      const members = this.props.info
      console.log({
          "members": members
      })
      return (
        <div className="activities allH" id="members" style={{ "min-height" : "581px", height : "581px" }}>
            <div className="wrapper">
                <div className="cols">
                    <h2 className="title">Board Members</h2>            
                    {
                        members.body.map(function (member, index){
                            return <div className="col aos-init aos-animate" data-aos="zoom-in" dangerouslySetInnerHTML={{ __html: member.value }}></div>
                        })
                    }
                </div>            
            </div>         
        </div>
      )
   }
}

export default MembersComponent
