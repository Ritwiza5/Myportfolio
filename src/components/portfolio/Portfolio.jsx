import "./portfolio.scss"
import {useRef} from "react";
import {motion,useScroll,useSpring,useTransform} from "framer-motion";

const items=[{
   id:1,
   title:"Homeease",
   img:"/Homeease.png",
   link:"https://github.com/Ritwiza5/Homeease",
   desc:"Homeease is a complete webapp used for online shopping.From ordering products to make payments online,it makes every thing available at just one click.Super easy and user-friendly."
},
{
   id:2,
   title:"Let's connect",
   img:"/connect.png",
   link:"https://github.com/Ritwiza5/Lets-Connect",
   desc:" Designed a chat app with the help of Mern stack.Used Chakra UI and socket.io for real time communication."
},
{
   id:3,
   title:"Portfolio",
   img:"/portfolio.png",
   link:"https://github.com/Ritwiza5/Myportfolio",
   desc:"Personal portfolio made using React,Framer Motion and SCSS.Completely responsive and deployement is also done."
},
{
   id:4,
   title:"Spotify clone",
   img:"/Spotify.png",
   link:"https://github.com/Ritwiza5/spotify-clone",
   desc:"A Spotify clone using pure html,css and javascript.A music player made with Javascript and for styling HTML and CSS to listen to your favourites offline."
},
{
   id:5,
   title:"WildLife Treasure",
   img:"/Wildlife.png",
   link:"https://github.com/Ritwiza5/Wildlife-Treasure",
   desc:"A website made using HTML, CSS and Javascript to create awareness for wildlife and its conservation."
}];

const Single=({item})=>{
    const ref=useRef();
    const {scrollYProgress}=useScroll({target:ref});

    const y=useTransform(scrollYProgress,[0,1],[-300,300]);

    const handleClick = () => {
      console.log("hello");
      // Add any specific behavior you want on button click
      window.location.href = item.link; // Redirect to the provided link
    };
    const handleTouchStart = () => {
      // Simulate a click on touch devices
      handleClick();
    };
    return(
        <section >
           <div className="container">
           <div className="wrapper">
           <div className="imageContainer" ref={ref}>
           <img src={item.img} alt="" />
           </div>
           
            <motion.div className="textContainer" style={{y}}>
            <h2 >{item.title}</h2>
            <p>{item.desc}</p>
            <div className="buttonContainer" onClick={handleClick}>
              See Project
            </div>
            </motion.div>
           </div>
           </div>                                                                               
        </section>
    )
}

const Portfolio = () => {
    const ref=useRef();

    const {scrollYProgress}=useScroll({target:ref,offset:["end end","start start"]});
    const scaleX=useSpring(scrollYProgress,{stiffness:100,damping:30});
  return (
    <div className="portfolio" ref={ref}>
    <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{scaleX:scaleX}} className="progressBar"></motion.div>
    </div>
    {items.map(item=>(<Single item={item} key={item.id}/>))}
            </div>
  )
}

export default Portfolio