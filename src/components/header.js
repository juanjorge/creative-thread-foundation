import React, { Component } from 'react'

class HeaderComponent extends Component {

   hashUrl(uri) {
      let r = uri.split('#')
      return (typeof r !== "undefined" && r.length > 0) ? r[r.length - 1] : '#'
   }

   render() {

      const menuItems = this.props.menuItems

      return (
         <header>
            <div className="wrapper">  
               <span className="icon-menu"></span>     

               <div className="menu">
                  <span className="icon-close"></span> 
                  <figure className="logo">
                     <a href="#main">
                        <img src={require('../images/logoBlack.png')} height="60" width="154" />
                     </a>
                  </figure>    
                  <nav>
                     {
                        menuItems.map((menuItem, key) => {
                           return (<a key={key} href={`#${this.hashUrl(menuItem.uri)}`}>{menuItem.title}</a>)     
                        })
                     }
                     {/*<a href="#mission">Mission</a>
                     <a href="#supporters">Supporters</a>
                     <a href="#members">Board members</a>         
                     <a href="#message">Message from the chairman</a>
                     <a href="#activities">Activities</a>         */}
                  </nav>
               </div>
               
               <nav className="menu-social">
                  <a href="https://www.facebook.com/CreativeThreadFoundation" target="_blank" className="icn-fb"></a>
                  <a href="https://twitter.com/CTFDN" target="_blank" className="icn-tw"></a>            
                  <a href="https://www.instagram.com/CreativeThreadFdn" target="_blank" className="icn-insta"></a>
               </nav>
            </div>
         </header>
      )
   }
}

export default HeaderComponent
