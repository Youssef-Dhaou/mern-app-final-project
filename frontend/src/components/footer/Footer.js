import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div>

<footer>
  <div className="content">
    <div className="left boxit">
      <div className="upper">
        <div className="topic">About us</div>
        <p>LostThings App Is The Free Database And Information Center For Lost And Found Things</p>
      </div>
      <div className="lower">
        <div className="topic">Contact us</div>
        <div className="phone">
          <a href="#aa"><i className="fas fa-phone-volume" />+216 25 497 397</a>
        </div>
        <div className="email">
          <a href="#aa"><i className="fas fa-envelope" />YoussefDhaouu@gmail.com</a>
        </div>
      </div>
    </div>
    <div className="middle boxit">
      <div className="topic">Our Services</div>
      <div><a href="#aa">Missing announcements </a></div>
      <div><a href="#aa">Finding announcements</a></div>
      <div><a href="#aa"> Regiter/Login </a></div>
      <div><a href="#aa"> Comment and like posts</a></div>
      <div><a href="#aa">Contact others </a></div>
    </div>
    <div className="right boxit">
      <div className="topic">Subscribe us</div>
      <form action="#">
        <input type="text" placeholder="Enter email address" />
        <input type="submit" defaultValue="Send" />
        <div className="media-icons">
          <a href="https://www.facebook.com/youssef.dhaou.10" rel="noreferrer" target="_blank"><i className="fab fa-facebook-f" /></a>
          <a href="https://www.instagram.com/dhaou.youssef/?hl=fr" rel="noreferrer"  target="_blank"><i className="fab fa-instagram" /></a>
          <a href="#home"><i className="fab fa-twitter" /></a>
          <a href="#home"><i className="fab fa-youtube" /></a>
          <a href="https://www.linkedin.com/in/youssef-dhaou-808293160/" rel="noreferrer"  target="_blank"><i className="fab fa-linkedin-in" /></a>
        </div>
      </form>
    </div>
  </div>
  <div className="bottom">
    <p>Copyright © 2022 <a href="#home">lostThings APP</a> All rights reserved</p>
  </div>
</footer>

    </div>
  )
}

export default Footer