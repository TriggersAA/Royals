import React from "react";
import './ContactUs.css'
import Footer from './Footer'

const ContactUs =()=>{
    return(
        <div>
            
            <div className="contact">
                
                <form className="form" action="https://formsubmit.co/d26ae8dbaaf9b050d8e3a472fee3d52a" method="POST">
                <h1 style={{width:"100%"}}>Contact Us
                <hr/>
                </h1>
                    <div className="innerdiv">
                        
                        <div>
                            <h3>Full Name *</h3>
                            <input name="FullName" type={'text'} placeholder={'Name'} required></input>
                            <h3>Email *</h3>
                            <input name="Email" type={'email'} placeholder={'adam@gmail.com'} required></input>
                            <h3>Text</h3>
                            <textarea name="complaint" type={'text'} rows='5' cols={20}></textarea>
                        </div>
                        <input type={'submit'}></input>

                    </div>
                    <div className="others">
                        <div className="smallothers">
                            <h3 style={{borderBottom:'2px solid goldenrod', width:'5.5em'}}>Phone</h3>
                            <h4>09066944736</h4>
                            <h4>08140893088</h4>
                        </div>
                        
                    </div>
                </form>
            </div>
            <Footer/>
        </div>
       
    )
}
export default ContactUs