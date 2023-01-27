import React from "react";
import '../components/footer/footer.css'
export const Footer = () => {
  return (
    <>   {/*Footer Container / wrapper */}
      <div className="footer-container">
        {/*footer inside (used for grid)*/}
        <div class="footer-inside">
          {/*Grid Column for Account*/}
          <div class="footerColumn account">
            {/*Account heading*/}
            <h3>My Account</h3>
            <br></br>
            {/*Account items*/}
            <a href="#"><p>Profile</p></a>
            <a href="#"><p>BCIT Daily Login</p></a>
            <a href="#"><p>Newsletters</p></a>
            <a href="#"><p>About BCIT Daily Accounts</p></a>
          </div>
          {/*Grid Column for connect*/}
          <div class="footerColumn connect">
            {/*Connect heading*/}
            <h3>Connect @ BCIT Daily</h3>
            <br></br>
            {/*Connect items*/}
            <a href="#"><p>Facebook</p></a>
            <a href="#"><p>Twitter</p></a>
            <a href="#"><p>Youtube</p></a>
            <a href="#"><p>Instagram</p></a>
            <a href="#"><p>Podcasts</p></a>
          </div>
          {/*Grid Column for contact*/}
          <div class="footerColumn contact">
            {/*Contact heading*/}
            <h3>Contact BCIT Daily</h3>
            <br></br>

            {/*Account items*/}
            <a href="#"><p>Submit FeedBack</p></a>
            <a href="#"><p>Help Center</p></a>
            {/*br's are there to mimic what CBC had */}
            <p>Audience Relations, CBC
              <br></br>
              P.O. Box 500 Station A
              <br></br>
              Toronto, ON
              <br></br>
              Canada, M5W 1E6</p>
            <p>Toll-free (Canada only):
              <br></br>
              1-866-306-4636</p>
          </div>
          {/*Grid Column for about*/}
          <div class="footerColumn about">
            {/*About heading*/}
            <h3>About BCIT Daily</h3>
            <br></br>
            {/*About items*/}
            <a href="#"><p>Corporate Info</p></a>
            <a href="#"><p>Terms of Use</p></a>
            <a href="#"><p>Privacy</p></a>
            <a href="#"><p>Jobs</p></a>
            <a href="#"><p>Our Unions</p></a>
            <a href="#"><p>Political Ads Registry</p></a>
          </div>
          {/*Grid Column for services*/}
          <div class="footerColumn services">
            {/*Services heading*/}
            <h3>Services</h3>
            <br></br>
            {/*Services items*/}
            <a href="#"><p>Public Appearances</p></a>
            <a href="#"><p>Commercial Services</p></a>
            <a href="#"><p>BCIT Daily Shop</p></a>
            <a href="#"><p>Doing Business with Us</p></a>
            <a href="#"><p>Renting Facilities</p></a>
            <a href="#"><p>Radio Canada International</p></a>
          </div>
          {/*Grid Column for Accessibility*/}
          <div class="footerColumn services">
            {/*Accessibility heading*/}
            <h3>Accessibility</h3>
            <br></br>
            {/*Accessibility items, br was used to mimic CBC.*/}
            <p>It is a priority for BCIT Daily
              <br></br>to create a website that is
              <br></br> accessible to all Canadians
              <br></br> including people with visual,
              <br></br> hearing, motor and cognitive
              <br></br> challenges.</p>
            <p>Closed Captioning and
              <br></br> Described Video is available
              <br></br> for many CBC shows offered
              <br></br> on BCIT Daily.</p>
            <a href="#"><p>About BCIT Daily Accessibility</p></a>
            <a href="#"><p>Accessibility Feedback</p></a>
          </div>

        </div>

      </div>

    </>
  );
};
