import { useForm } from "react-hook-form"
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
import { RiLoader2Line } from "react-icons/ri";
import { useState } from "react";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { useSelector } from "react-redux";



export default function ContactPage(){
    const color = useSelector((state) => state.theme.color)

    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async(data) => {
    if(Object.keys(errors).length>0) 
        return;
    setIsLoading(true)
    const userInfo = {
        Name: data.Name,
        Email: data.Email,
        Message : data.Message
    }
    try{
        const result = await axios.post("https://getform.io/f/aqoevmma", userInfo)
        // alert("Message Sent")
        toast.success("Your Message has been successfully sent")
        reset();
    }
    catch(err){
        toast.error("Something went Wrong")
    }
    finally{
        setIsLoading(false);

    }
  }
    return(
        <div name="Contact" className={`contactPage ${color === "light" ? "whiteContact" : "blackContact"}`}>
            <h2 className="contactHeading mainHeading">Contact Me</h2>
            <div className="contactSection">
                {/* <div className="contactDesc subHeading">Please Fill out the form below to contact me</div> */}
                
                <div className="formSection">
                    <h3 className="msgHeading">Send Your Message</h3>
                    <form onSubmit={handleSubmit(onSubmit)} method="POST">
                        <div className="formCard">
                            <label htmlFor="">Full Name</label>
                        <br/>
                        <input 
                        {...register("Name", { required: true })}
                        name="Name" className="inputBox" type="text" 
                         placeholder="Enter your full name"

                        />
                        {errors.Name && <div className="errorMsg">This field is required</div>}
                        </div>
                        <div className="formCard">
                            <label htmlFor="">Email</label>
                        <br/>
                        <input 
                        {...register("Email", { required: true })}
                        name="Email" className="inputBox" type="text" 
                         placeholder="Enter your email address"
                        />
                        {errors.Email && <div className="errorMsg">This field is required</div>}
                        </div>
                        <div className="formCard">
                            <label htmlFor="">Message</label>
                        <br/>
                        <textarea
                        {...register("Message", { required: true })}
                        name="Message" className="inputBox" type="text" 
                         placeholder="Type your Message here"

                        />
                        {errors.Message && <div className="errorMsg">This field is required</div>}
                        </div>
                        <button  type="submit" className="submitbtn">
                            {
                                ((isLoading) && (!errors.Name && !errors.Email && !errors.Message))? <RiLoader2Line className="submitIcon" size={22} /> : 
                                "Send"
                            }
                        </button>
                    </form>
                </div>
                <div className="directContact">
                    <div className="reachMeHeading subHeading">Get in touch</div>
                    <div className="reachMeSubHeading">Got an idea or opportunity? I’m just a call or mail away.</div>
                    <div className="reachMeDetails">
                        <a className="contactLinks" target="_blank" href="mailto:khushigarg1120@gmail.com">
                            <IoMdMail size={24} color="#6BA292" />
                            <div className="reachPart">khushigarg1120@gmail.com</div>

                        </a>
                        <a className="contactLinks" target="_blank" href="tel:+919528481950">
                            <FaPhoneAlt size={24} color="#6BA292" />
                            <div className="reachPart">+91-7217519889</div>
                        </a>
                    </div>
                </div>
            </div>
            <hr className="horizrule"/>
        </div>
    )
}