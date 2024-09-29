import './Body.css';

import imgs from './imgs.jfif';

function Body() {
    return (
      <div className="body">
        <div className="bodys">
          <div id="flow">
            <h1 id='headA'>Web development builds a business's online presence.</h1>
            <h2 id='headB'>A well-designed website enhances user experience.</h2>
          </div>
          <div className="bodyss">
            <div className="bodymain">
              <i>
                <h1 id='ask'>What is Web Development</h1>
              </i>
              <p id='para'>
              <span>Web development</span> is the process of creating and maintaining websites. It involves a range of tasks, including web design, web content creation, client-side/server-side scripting, and network security configuration.<br/><br/><span>* Front-End Development:</span> This is what users interact with directly in their web browsers. It involves designing the layout, look, and feel of a website using technologies like HTML (for structure), CSS (for styling), and JavaScript (for interactivity).<br/><br/><span>* Back-End Development:</span> This involves working on the server side, where the logic and database management happen. Back-end developers use server-side languages like Python, PHP, Ruby, or Java to manage data and ensure the website functions correctly.<br/><br/><span>* Full-Stack Development:</span> A full-stack developer handles both front-end and back-end development. They are knowledgeable in both areas and can manage the entire web development process.
              </p>
            </div>
            <div className="bodymains">
              <img id='side' src={imgs} alt="" />
              <p><span>Did you know? The first-ever website, created by Tim Berners-Lee, went live on August 6, 1991. It was hosted on a NeXT computer at CERN (European Organization for Nuclear Research) and was dedicated to providing information about the World Wide Web project.</span></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Body;