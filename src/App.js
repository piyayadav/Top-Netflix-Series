import React from "react";
import Card from './Card';
import Sdata from './Sdata';
 
function ncard(val){
     return(
       
      <Card
      key={val.id}
      src={ val.src}
      title={ val.title}
      link={ val.link}
      sname={ val.sname}
    />
      
     );
}


 const App=() =>(
  <>
  <h1 className="heading_style"> List of My Favourite Netflix Series</h1>
  {  Sdata.map(ncard)}
  
    {/* <Card  
    
    src={Sdata[1].src}
      title={Sdata[1].title}
      link={Sdata[1].link}
      sname={Sdata[1].sname}  />
    <Card   
       
       src={Sdata[2].src}
      title={Sdata[2].title}
      link={Sdata[2].link}
      sname={Sdata[2].sname} />
       
       
       
     <Card   
       
       src={Sdata[3].src}
      title={Sdata[3].title}
      link={Sdata[3].link}
      sname={Sdata[3].sname} />

<Card   
       
       src={Sdata[4].src}
      title={Sdata[4].title}
      link={Sdata[4].link}
      sname={Sdata[4].sname} /> */}

   
    
  </> 
);


export default App;