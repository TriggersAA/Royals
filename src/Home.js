import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import RoyalIntro from './Pictures/RoyalIntro.jpg'
import MissionPic from './Pictures/MissionPic.jpg'
import VisionPic from './Pictures/VisionPic.jpg'
import PurposePic from './Pictures/PurposePic.jpg'
import RAdvertisement from './Pictures/RAdvertisement.jpg'
import REntertainment from './Pictures/REntertainment.jpg'
import RJobOffer from './Pictures/RJobOffer.jpg'
import RShopRoyal from './Pictures/RShopRoyal.jpg'
import './Home.css';
import { TypeAnimation } from 'react-type-animation';
import { Link } from "react-router-dom";
import Navig from './Navig';
import Footer from './Footer'

const inRoyalName = <TypeAnimation
  // Same String at the start will only be typed once, initially
  sequence={[
    'Cultivating people of the future',
  1000,
    'making people see what the futute looks like',
  1000,
  ]}
  speed={50} // Custom Speed from 1-99 - Default Speed: 40
  style={{ fontSize: '2em' ,display:'flex',alignItems:'center',justifyContent:'center' }}
  wrapper="span" // Animation will be rendered as a <span>
  repeat={Infinity} // Repeat this Animation Sequence infinitely
/>
// The mission
const Statement =({something,statement,Pic})=> {return(<div className="Mission" >
  <h1 style={{width:"100%", textAlign:'center',paddingBottom:'30px'}}>Our {statement} </h1>
  <div className='justforwrap' style={{border:"0px"}}>
    <AnimationOnScroll animateIn="animate__fadeInLeft" style={{border:'0px'}}>
      <div className='statementElem' style={{display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center',
          padding:'10px'}}>
        <h2 style={{width:'8.5em', height:'fitContent',textAlign:'center'}}>
          {something}
        </h2>
      </div>
    </AnimationOnScroll>
  
 
    <img src={Pic}  alt='mission' style={{width:'calc(6em + 25vw)', padding:'10px'}}/>

  </div>
  
</div>)}

//vision
const Vision =({something})=> {return(<div className="Mission Vision" >
  <hr/>
  <h1 style={{width:"100%", textAlign:'center'}}>Our Vision</h1>
  <div className='justforwrap ajforw' style={{border:"0px"}}>
    
      <img src={VisionPic}  alt='mission' style={{width:'calc(8em + 25vw)',
        padding:'10px', paddingBottom:'40px'}}/>
    

      <div className='statementElem statementElemTwo' style={{display:'flex',flexDirection:'column',alignItems:'center', justifyContent:'center',
      padding:'10px'}}>
      
        <h2 style={{width:'10em', height:'fitContent',textAlign:'center'}}>
          {something}
        </h2>
        <h3 style={{textAlign:'center'}}>Pepole are able to dream</h3>
        <h3 style={{textAlign:'center'}}>..and also stay MOTIVATED</h3>
      </div>
    
    

  </div>
  
   
  
</div>)}

//what we offer
const WhatWeoffer = ({offer,offerText,offerPic,extraclass}) =>{
  return(
    
    <div className='divisions'>
       
          <div className="offerTextWrapper">
          <AnimationOnScroll duration={1.2} animateIn="animate__pulse">
            <div className="offerText">
              <h1>{offer}</h1>
              <h3>{extraclass}</h3>
              <p>{offerText}</p>
            </div>
            </AnimationOnScroll>

          </div>
          <img src={offerPic} alt='royals'/>
        

    </div>
    
  )
}
const offerTexts = ['At Royals Entertainment, we give people the reasons to smile again. Through intruiging and evocative entertaining performance, we make people realize the YES! within',
'At Royal Advertisement, we provide precise, targeted advertisement of goods and services. We help our clients deliver to the right market at the right time. Here, maximizing the profit of our clients is our watch word.',
'Here, The best good and services are offered. Our prices are pocket friendly and targets the right people without descrimination. We accentuate quality and ensure our customers enjoy what they put there money into. We also value customer feedbacks',
'At Royals, we bring people to the right market. We ensure the right jobs for the right people by knowing what our clients look like. This makes us give them the best of what they desire']

const RoyalOffers = ['Royal Entertainment','Royal Advertisement', 'Shop Royal','Royal Job Offer']
const RoyalPics = [REntertainment, RAdvertisement,RShopRoyal,RJobOffer]
const extras =['..entertainment at its peak','...giving more into showcasing','...leaving impressions that last','...making your effots count']
//Final thoughts
const FinalThought = <div className="finalThought">
  <h1>Come Royal Concepts and Enjoy...</h1>
  <ul className="finalThoughtList">
  <AnimationOnScroll animateIn="animate__bounceInRight">
  <li>Hopitality</li>
  </AnimationOnScroll>
  <AnimationOnScroll animateIn="animate__bounceInRight" delay={200}>
  <li>Entertainment</li>
  </AnimationOnScroll>
  <AnimationOnScroll animateIn="animate__bounceInRight" delay={300}>
  <li>Security</li>
  </AnimationOnScroll>
  <AnimationOnScroll animateIn="animate__bounceInRight" delay={340}>
  <li>Good Advertisement</li>
  </AnimationOnScroll>
    
    
  </ul>
</div>



function Home() {
  return (
    
    <div className="Home">
    <Navig/>
    <div className="RoyalConceptIntro">
      <img id="RoyalIntroPic" src={RoyalIntro} alt="Royals"/>
      <div className="PicOverlay">
        <h1 id="royalName">Royal Concepts</h1>
        <div className="inRoyalName">
          {inRoyalName}
        </div>
      </div>
     
    </div>
    
     <Statement something={'To bring about more futuristic-oriented generations'} statement={'Mission'} Pic={MissionPic}/>
     <Vision something={'Our Vision entalis creating a World where....'}/>
     <h3 style={{textAlign:'center', color:'white'}}>We aslo aim to keep people connected to God through what we do</h3>
     <hr />
     <Statement something={'To SEED Sowers, future-Investors and to stand out !'} statement={'Purpose'}  Pic={PurposePic}/>
     <div className="emptydiv"></div>
     <h1 className="whatweoffer">What We Offer</h1>
     {RoyalOffers.map((elem,i)=> { return(<WhatWeoffer offer={elem} offerText = {offerTexts[i]} offerPic={RoyalPics[i]} extraclass={extras[i]} key={i}/>)})}
     {FinalThought}
     <hr/>
    <Footer/>
    </div>
  );
}

export default Home;
