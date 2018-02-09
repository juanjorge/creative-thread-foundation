import React, { Component } from 'react'
import Link from 'gatsby-link'

import HeaderComponent from '../components/header'
import SpotlightComponent from '../components/spotlight'
import OurMissionComponent from '../components/ourmission'
import SupportersComponent from '../components/supporters'
import MembersComponent from '../components/members'
import MessageChairmanComponent from '../components/message-chairman'
import ActivitiesComponent from '../components/activities'
import FooterComponent from '../components/footer'

import $ from 'jquery'

class CreativeThreadFoundationTemplate extends Component {

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
   get_full_article(all_article, uid)
   {
      for (let i = 0; i < all_article.length; i++) {
        const article = JSON.parse( all_article[i] );
        if(article.uid == uid) return article;
      }
      return null;
   }
   render() {
      const node = this.props.pathContext.node
      const widgets = JSON.parse(node['widgetsJSON'])

      const menu = widgets[0] //menu
      const spotlight = widgets[1]["contents"][0] //spotlight
      const our_mission = this.get_full_article(node.articles, widgets[1]["contents"][1].uid)
      const supporters = this.get_full_article(node.articles, widgets[1]["contents"][2].uid)
      const members = this.get_full_article(node.articles, widgets[1]["contents"][3].uid)
      const message_chairman = this.get_full_article(node.articles, widgets[1]["contents"][4].uid)
      const activities = this.get_full_article(node.articles, widgets[1]["contents"][5].uid)


      console.log({
        spotlight: spotlight
      });
      
      const articles = node.articles.map(art => {
         return JSON.parse(art)
      })

      const openning = articles[0] //openning
      console.log(openning)
      
      return (
         <div>
            <HeaderComponent menuItems={menu['contents']} />
            <div className="content">
              <SpotlightComponent info={spotlight} />
              <OurMissionComponent info={our_mission} />
              <SupportersComponent info={supporters} />
              <MembersComponent info={members} />
              <MessageChairmanComponent info={message_chairman} />
              <ActivitiesComponent info={activities} />
            </div>
            <FooterComponent />
         </div>
      )
   }
}

export default CreativeThreadFoundationTemplate
