import React, { Component } from 'react'
import Link from 'gatsby-link'

import $ from 'jquery'

class IndexPage extends Component {

   componentDidMount() {
      $(() => {

         // Scroll animation
         // AOS.init()
         
         /* Height Blocks*/
         var widthw = $(window).width();  
         var heightW = $(window).height();   

         if(widthw >= 768){
            $(".allH").css('minHeight', heightW-200);
            $(".main, .activities").css('height', heightW-200);
         }else{
            $(".main").css('height', heightW-150);
         }
         


         /* Header Fixed */
         $(window).scroll(function () {
              var scroll = $(window).scrollTop();
              if (scroll >= 30) {
                $("header").addClass("fixed");
              } else {
                $("header").removeClass("fixed");
              }
          });


          /* Scroll To*/
          $(".menu a, .down").click(function() {
            var aHref = $(this.hash);
             $('html, body').animate({
                 scrollTop: aHref.offset().top-74
             }, 1500);
            return false;
         });

         /* menu mobile*/
         $(".icon-menu").click(function(){
            $(this).addClass("open");
            $("header .menu").addClass("open");
         });
         $(".icon-close").click(function(){
            $("header .menu").removeClass("open");
         });
         if(widthw <= 960){
            $("header .menu nav a").click(function(){
               $("header .menu").removeClass("open");
            });
         }

         //Video
         $('.button-play').click(function(){
            $("#video").attr("controls","controls");   
            video.play();
            $(this).hide();
         });
      })
   }

   render() {
      return (
         <div className="content">

            <div className="main allH" id="main">
               <div className="wrapper">
                  <h1>
                     <img src={require('../images/logo.svg')} height="207" width="390" alt="Creative Thread Foundation" />
                  </h1>
                  <p className="description">The Creative Thread Foundation is a non-profit organization launched in July 2017 by FUSION TV with more than 60 additional corporations, public interest groups, and associations committed to creating pipelines and opening doors for multicultural representation, diversity, and inclusion in the media, entertainment and telecommunications industries.</p>          
               </div>
               <a href="#mission" className="down"></a>
            </div>

            <div className="mision allH" id="mission">
               <div className="wrapper">
                  <div className="col" data-aos="fade-right">
                     <p className="quote">We all should know that diversity makes for a rich tapestry, and we must understand that all the threads of the tapestry are equal in value no matter what their color.</p>
                     <div className="author">
                        <figure>
                           <img src={require('../images/img01.png')} />
                           <figcaption>- Maya Angelou</figcaption>
                        </figure>
                     </div>
                  </div>
                  <div className="col" data-aos="fade-right" data-aos-delay="600">
                     <h2 className="title">Our mission is to</h2>
                     <p className="txt-line">Break down barriers of entry for underrepresented content creators and those working behind the scenes in the media and entertainment.</p>

                     <p className="txt-line">Create pipelines and mentorship opportunities for uncovering and promoting talent and projects that reflect America’s diverse reality.</p>

                     <p className="txt-line">Share best practices to allow for better recruitment, retention and awareness of underrepresented content creators.</p>

                     <p className="txt-line">Encourage coalitions of corporations, industry associations, universities, and public interest groups to work together to provide better opportunities for underrepresented content creators and develop content featuring and representing untold stories of underrepresented groups.</p>
                  </div>
               </div>
            </div>

            <div className="supporters allH" id="supporters" >
               <div className="wrapper">
                  <h2 className="title" data-aos="fade-right">Supporters</h2>
                  <div className="txt-supporters" data-aos="zoom-in">            
                     <p>21st Century Fox <span>//</span> Amazon <span>//</span>  Asian Americans Advancing Justice <span>//</span> Asian & Pacific Islander Health Forum <span>//</span> AT&T <span>//</span> Black Mamas Matter Alliance <span>//</span> Building Skills Partnership <span>//</span> California State University of Fullerton <span>//</span> Campaign for Youth Justice <span>//</span> Care for Life and Limb <span>//</span> CBS Corporation <span>//</span> Central American Resource Center <span>//</span> Coalition for Humane Immigrant Rights <span>//</span> Color of Change <span>//</span> Computer and Communications Industry Association <span>//</span> Congressional Hispanic Caucus Institute <span>//</span> Congressional Hispanic Leadership Institute <span>//</span> Disney <span>//</span> Eastmont Community Center <span>//</span> El Rey Network <span>//</span> Entravision Communications <span>//</span> Entertainment Software Association <span>//</span> Green 2.0 <span>//</span> GreenLatinos <span>//</span> Fusion Media Group <span>//</span> Fusion TV <span>//</span> Hispanas Organized for Political Equality <span>//</span> Hispanic Heritage Foundation <span>//</span> Interactive Advertising Bureau <span>//</span> Latino Memphis <span>//</span> Latinos in Information Sciences and Technology Association <span>//</span> Lawyers Committee for Civil Rights Under Law <span>//</span> Miami Dade College<span>//</span> Mi Familia Vota <span>//</span> Mnet America, Motion Picture Association of America <span>//</span>  Multicultural Media <span>//</span>  Telecom and Internet Council <span>//</span>  National Action Network <span>//</span>  National Association for Equal Opportunity in Higher Education <span>//</span> National Association for the Advancement of Colored People <span>//</span> National Association of Black Owned Broadcasters <span>//</span> National Association of Broadcasters <span>//</span> National Association of Hispanic Journalists <span>//</span> National Association of Hispanic Publications <span>//</span> National Association of Latino Independent Producers <span>//</span> National Council of Asian Pacific Americans <span>//</span> National Hispanic Foundation for the Arts <span>//</span> National Hispanic Media Coalition <span>//</span> National Hispanic Medical Association <span>//</span> National Latina Institute for Reproductive Health <span>//</span> National Urban League <span>//</span> Native Public Media <span>//</span> Nielsen <span>//</span> Northwest Side Housing Center <span>//</span>  Pandora <span>//</span> Para Los Niños <span>//</span> Scripps Networks Interactive <span>//</span> Solutions Project <span>//</span> Spotify <span>//</span> UnidosUS <span>//</span> United Farm Workers <span>//</span> Univision Communications Inc. <span>//</span>  Urban Health Plan <span>//</span> U.S. Hispanic Leadership Institute <span>//</span> Valle del Sol <span>//</span> Viacom <span>//</span> Lady Parts Justice <span>//</span> The Group</p>
                  </div>
               </div>
            </div>

            <div className="activities allH" id="members">
               <div className="wrapper">
                  <div className="cols">
                     <h2 className="title">Board Members</h2>            
                     <div className="col" data-aos="zoom-in">
                        <h3 className="col-title">John C. Yang,</h3>
                        <p className="position">President & Executive Director,</p>
                        <p className="description"><strong>Asian Americans Advancing Justice - AAJC</strong></p>
                     </div>

                     <div className="col" data-aos="zoom-in">
                        <h3 className="col-title">Antonio Tijerino,</h3>
                        <p className="position">President & CEO</p>
                        <p className="description"><strong>of the Hispanic Heritage Foundation</strong></p>
                     </div>

                     <div className="col" data-aos="zoom-in">
                        <h3 className="col-title">Megan Hauck,</h3>
                        <p className="position">Director of the IAB</p>
                        <p className="description"><strong>Education Foundation</strong></p>
                     </div>

                  </div>   

                  <div className="cols">
                     <div className="col" data-aos="zoom-in">
                        <h3 className="col-title">John Gibson,</h3>
                        <p className="position">Advisor for Inclusion & Multicultural Outreach</p>
                        <p className="description"><strong>at the Motion Picture Association of America</strong></p>
                     </div>

                     <div className="col" data-aos="zoom-in">
                        <h3 className="col-title">Marcellus Alexander,</h3>
                        <p className="position">Executive Vice President, Television at the National Association of Broadcasters and President</p>
                        <p className="description"><strong>NAB Education Foundation</strong></p>
                     </div>

                     <div className="col" data-aos="zoom-in">
                        <h3 className="col-title">Rev. Al Sharpton,</h3>
                        <p className="position">Founder & President of the</p>
                        <p className="description"><strong>National Action Network</strong></p>
                     </div>
                  </div>      

                  <div className="cols">
                     <div className="col" data-aos="zoom-in">
                        <h3 className="col-title">Benjamin Lopez,</h3>
                        <p className="position">Executive Director at the</p>
                        <p className="description"><strong>National Association of Latino Independent Producers</strong></p>
                     </div>

                     <div className="col" data-aos="zoom-in">
                        <h3 className="col-title">Felix Sanchez,</h3>
                        <p className="position">Chairman & Co-Founder at the</p>
                        <p className="description"><strong>National Hispanic Foundation for the Arts</strong></p>
                     </div>

                     <div className="col" data-aos="zoom-in">
                        <h3 className="col-title">Alex Nogales,</h3>
                        <p className="position">President & CEO of the</p>
                        <p className="description"><strong>National Hispanic Media Coalition</strong></p>
                     </div>
                  </div>    

                  <div className="cols">
                     <div className="col" data-aos="zoom-in">
                        <h3 className="col-title">Marc Morial,</h3>
                        <p className="position">President & CEO of the</p>
                        <p className="description"><strong>National Urban League</strong></p>
                     </div>

                     <div className="col" data-aos="zoom-in">
                        <h3 className="col-title">Loris Taylor,</h3>
                        <p className="position">President & CEO of</p>
                        <p className="description"><strong>Native Public Media</strong></p>
                     </div>

                     <div className="col" data-aos="zoom-in">
                        <h3 className="col-title">Joseph Fortson,</h3>
                        <p className="position">Vice President</p>
                        <p className="description"><strong>Government Affairs at Nielsen</strong></p>
                     </div>
                  </div>            

                  <div className="cols">
                     <div className="col" data-aos="zoom-in">
                        <h3 className="col-title">Kimberly Hulsey,</h3>
                        <p className="position">Vice President, Legal & Government Affairs at</p>
                        <p className="description"><strong>Scripps Networks Interactive</strong></p>
                     </div>

                  </div>            
               </div>         
            </div>

            <div className="letter allH" id="message">
               <div className="wrapper">            
                  <div className="wrapper-video">
                     <video width="780" height="440" id="video">         
                        <source src={require('../images/video.mp4')} type="video/mp4" />
                        {/*<source src={require('../images/video.ogg')} type="video/ogg" />         */}
                        <source src={require('../images/video.webm')} type="video/webm" />
                        Your browser does not support the video tag.
                     </video>
                     <div className="button-play"></div>
                  </div>

                  <h2 className="title" data-aos="fade-up">Message from the Chairman</h2>            
                  <p className="description" data-aos="fade-down">On behalf of the Board of Directors of the Creative Thread Foundation, it is an honor to share in the launch of this important organization.</p>
                  <p className="description" data-aos="fade-down">We created the Creative Thread Foundation because all our members and supporters believe diversity needs to be represented more accurately in media and entertainment.</p>
                  <p className="description" data-aos="fade-down">And together, we will be a powerful, independent, non-partisan voice to educate influencers, policymakers, and stakeholders on the importance of representation on screen, behind the camera, and in the writer’s room – while also promoting the efforts of business, community and government leaders who are driving positive change and making an impact on this critical issue.</p>
                  <p className="description" data-aos="fade-down">The Creative Thread Foundation does not think small. Our collective mission is to break down barriers of entry for underrepresented content creators as well as those working behind the scenes. Create new pipelines that uncover and promote talent and projects that reflect the beautiful diversity of America. And share best practices amongst our members on recruiting and retaining talent, developing content, and driving awareness of under-representation in media and entertainment.</p>
                  <p className="description" data-aos="fade-down">Through this Foundation and with our supporters, we will encourage public interest groups, corporations, industry associations, and universities to work together to provide more opportunities for storytellers to tell untold stories and better represent all communities and people in our country.</p>
                  <p className="description" data-aos="fade-down">I’m encouraged and excited by how many share in our commitment and are ready to step up. We eager to see what the Creative Thread can accomplish working hand-in-hand with all of you.</p>
                  <div className="author aos-init aos-animate" data-aos="flip-left">
                     <figure>
                        <img src={require('../images/img02.png')} />
                     </figure>
                  </div>
               </div>
            </div>

            <div className="activities allH" id="activities">
               <div className="wrapper">
                  <div className="cols">
                     <h2 className="title">Activities</h2>            
                     <div className="col" data-aos="zoom-in">
                        <h3 className="col-title">Inclusion for the public good</h3>
                        <p className="description">Identify, organize, and provide support for events around the country that promote diversity and inclusion in the media, entertainment and telecommunications industries.</p>
                     </div>

                     <div className="col" data-aos="zoom-in">
                        <h3 className="col-title">Press conference and reception on july 26th</h3>
                        <p className="description">The Multicultural Media Caucus Members are invited to participate and serve as honorary co-chairs of the reception.</p>
                     </div>

                     <div className="col" data-aos="zoom-in">
                        <h3 className="col-title">Leading by example</h3>
                        <p className="description">Corporate and trade association members are committed to participating and partnering with  public interest groups, non-profits, and universities on content pitches, fellowships, internships, and other venues to provide diverse content creators opportunities to connect with industry professionals.</p>
                     </div>
                  </div>            
               </div>         
            </div>
         </div>
      )
   }
}

export default IndexPage
