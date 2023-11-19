import "./contact.scss";
import {useRef,useState} from "react";
import {motion,useInView} from "framer-motion";
import emailjs from "@emailjs/browser";

const variants={
  initial:{
    x:-50,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
     duration:1.5,
     staggerChildren:0.1,
    }
  }
}
const astronautVariants = {
  initial: { y: -20, opacity: 0 },
  animate: {
    y: [0, -10, 0], // Create a floating effect by specifying multiple y values
    opacity: 1,
    transition: {
      y: {
        repeat: Infinity, // Repeat the animation infinitely
        duration: 2, // Duration of each animation cycle
        ease: 'easeInOut', // You can change the easing function
      },
    },
  },
};
const Contact = () => {
  const ref=useRef();
  const isInView=useInView(ref,{margin:"-100px"});
  
  const[error,setError]=useState(false);
  const[success,setSuccess]=useState(false);
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2yvm3y4', 'template_rkurlaa',e.target, 'a0Hae7exlIjVbKDpJ')
      .then((result) => {
         setSuccess(true);
      }, (error) => {
        setError(true); 
      });
      e.target.reset();
  };
  return (
    <motion.div  ref={ref} className="contact" variants={variants} initial="initial" whileInView="animate">
        <motion.div className="textContainer" variants={variants}>
          <motion.h1 variants={variants}> Looking forward to collaborate</motion.h1> 
          <motion.div className="item" variants={variants}>
            <h2>Mail</h2>
            <span>mailritu2002@gmail.com</span>
          </motion.div>
          </motion.div>
        <div className="formContainer">
        <motion.div className="phoneSvg" initial={{opacity:1}} whileInView={{opacity:0}} transition={{delay:3,duration:1}}>
       <motion.img src="header.png" alt="" transition={{duration:3}} initial="initial" animate="animate"
      variants={isInView && astronautVariants}/>
</motion.div>
            <motion.form  onSubmit={sendEmail} initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:4,duration:1}}>
                <input type="text" required placeholder="Name" name="name"/>
                <input type="email" required placeholder="Email" name="email"/>
                <textarea rows={8} placeholder="Message" name="message"/>
                <button>Submit</button>
                {error && "Error"}
                {success && "Success"}
                
            </motion.form>
        </div>

    </motion.div>
  )
}

export default Contact

