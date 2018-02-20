import React, { Component } from 'react'
import Link from 'gatsby-link'
const axios = require(`axios`)

import $ from 'jquery'

class DeployPage extends Component {

   componentDidMount() {
      $(() => {
          $("#send-deploy").click(function() {
            $("#send-deploy").attr("disabled", "disabled");
            $('.info-label').html('Getting key...');

            $.get({
                url: "http://35.169.185.111/jenkins/crumbIssuer/api/json",
                contentType: "application/json",
                headers: {
                    "Authorization": 'Basic ' + btoa('user:ec75368408280f5f6890e52126b0216b')
                }
            }).done(function(data) {
                $('.info-label').html('Waiting for build job number.');
                $.post({
                    url: "http://35.169.185.111/jenkins/job/gatsby-prod/build",
                    contentType: "application/json",
                    data: {
                      "Jenkins-Crumb": data.crumb
                    },
                    headers: {
                        "Authorization": 'Basic ' + btoa('user:ec75368408280f5f6890e52126b0216b'),
                        "Jenkins-Crumb": data.crumb
                    }
                }).done(function(data_build) {
                  if(data_build == "")
                  {
                    setTimeout(function () { checkLastBuild(data.crumb) }, 10000);
                  }
                  if(console.log){
                    console.log({"data_build":data_build});
                  }
                });
            });
         });
         function checkLastBuild(crumb)
         {
            $.get({
                url: "http://35.169.185.111/jenkins/crumbIssuer/api/json",
                contentType: "application/json",
                headers: {
                    "Authorization": 'Basic ' + btoa('user:ec75368408280f5f6890e52126b0216b')
                }
            }).done(function(data) {
                $.post({
                    url: "http://35.169.185.111/jenkins/job/gatsby-prod/lastBuild/api/json",
                    contentType: "application/json",
                    data: {
                      "Jenkins-Crumb": data.crumb
                    },
                    headers: {
                        "Authorization": 'Basic ' + btoa('user:ec75368408280f5f6890e52126b0216b'),
                        "Jenkins-Crumb": data.crumb
                    }
                }).done(function(data_check) {
                  if(console.log){
                    console.log({"data_check":data_check});
                  }
                  if(data_check.building)
                  {
                    $('.info-label').html('Build job #' + data_check.id + ' in progress.');
                    setTimeout(function () { checkLastBuild(crumb) }, 2000);
                  }
                  else 
                  {
                    $('.info-label').html('Site deployed');
                    $("#send-deploy").removeAttr("disabled");
                  }
                });
            });
         }
      })
   }

   render() {
      return (
         <div className="content">
            <div className="supporters allH" id="supporters" >
               <div className="wrapper">
                  <h2 className="title" data-aos="fade-right">Deploy to production environment.</h2>
                  <div className="txt-supporters" data-aos="zoom-in">           
                    <input type="button" className="button" value="Deploy" id="send-deploy"  />
                    <br /><br />
                    <div className="info-label"></div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default DeployPage
