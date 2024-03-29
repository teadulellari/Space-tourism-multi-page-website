import "../styling/global.css";
import "../styling/home.css"
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.body.style.setProperty(
      'background',
      'var(--homeImg)'
    );
  }, []);

    return (
    
     
      <div className="home-container">
        
        <div className="container-1">
        <h2>So, you want to travel to</h2>
        <h1>SPACE</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well, sit
          back, and relax because we’ll give you a truly out-of-this-world
          experience!
        </p>
        </div>
        <div className="container-2">
        <button className="circle-button">Explore</button>
        </div>
      </div>
      
    );
  };
  
  export default Home;