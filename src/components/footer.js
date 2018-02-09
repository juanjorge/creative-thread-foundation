import React from 'react'

const FooterComponent = () => (
    <footer>
      <div className="wrapper">
         <figure>
            <img src={require('../images/logoBlack.png')} height="60" width="154" />
         </figure>
         <div className="copy">
            <p>&copy; Fusion Media Network LLC - Creative Thread Foundation</p>
            <p><a href="http://www.univision.com/global/terms-of-use-en" target="_blank"> Terms and conditions</a> | <a href="http://www.univision.com/global/privacy-policy-en" target="_blank">Privacy policy</a></p>
         </div>
      </div>
   </footer>
)

export default FooterComponent
