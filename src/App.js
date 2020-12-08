import Image from './image.jpg';
import './App.css';
import './style.css';

function App() {
  return (
     <div>
    <div style={{border:'solid 1px black',maxwidth:'100vw'}}>
      <h1 className="title red">Khelil Ben Sassi</h1> 
      <br/>         
      
      <img src={Image} width="300" height="300" alt="image"/> 
       <br/>
       <img src={process.env.PUBLIC_URL+"/logo192.png"} width="300" height="300" alt="image"/>
       </div>
       <video width={320} height={240} controls>
       <source src="myVideo.mp4" type="video/mp4" />
     </video>
        
    </div>
  );
}

export default App;
