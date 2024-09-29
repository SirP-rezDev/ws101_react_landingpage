import './About.css';

import sp from './sp.gif';

function About() {
    return (
      <div className="aboutss">
        <div className="anim">
          <h3 id="headA">Websites provide valuable data analytics for businesses.</h3>
          <h2 id="headB">Web development ensures accessibility across devices.</h2>
        </div>
        <div className="con">
          <div className="about">
            <img id='sps' src={sp} alt="" />
            <h4>Information</h4>
            <a href="https://explorer.globe.engineer/search?qd=%5B%7B%22searchbox_query%22%3A%22importance%20of%20web%20development%22%2C%22search_id%22%3A%22de020c1b-bd92-4a9e-8476-1c913912361b%22%2C%22index%22%3A0%2C%22type%22%3A%22initial_searchbox%22%2C%22clicked_category%22%3Anull%2C%22staged_image%22%3Anull%2C%22location%22%3Anull%7D%5D&sid=de020c1b-bd92-4a9e-8476-1c913912361b" target='_blank' rel="noreferrer">For other information, Click Me...</a>
          </div>
          <div className="abouts">
          <h1 id="ask">Importance</h1>
          <p id="paraA">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The process of creating and managing websites is called web development. It is significant because: Websites are necessary for companies and organizations to create an online identity, connect with a larger clientele, and offer goods and services to end consumers. Website development is the process of creating and managing websites. Good web development makes sure websites are aesthetically pleasing, easy to use, and work effectively on all platforms and browsers. It is significant because: For individuals, corporations, and organizations, websites serve as their principal online presence. A website that is developed effectively guarantees that it is aesthetically pleasing, useful, and offers a satisfying user experience. Increased traffic, engagement, and conversions may result from this. Skills in web development are quite significant in the job market because there is a high need for qualified</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;