import React, { Component } from 'react'

class ActivitiesComponent extends Component {
   
   render() {

      const activities = this.props.info
      console.log({
          "activities": activities
      })
      return (
        <div className="activities allH" id="activities">
            <div className="wrapper">
            <div className="cols">
                <h2 className="title">Activities</h2>        
                {
                    activities.body.map(function (activity, index){
                        return <div className="col" data-aos="zoom-in" dangerouslySetInnerHTML={{ __html: activity.value }}></div>
                    })
                }    
            </div>            
            </div>         
        </div>
      )
   }
}

export default ActivitiesComponent
