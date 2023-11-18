import "./portfolio.scss"
import {useRef} from "react";
import {motion,useScroll,useSpring,useTransform} from "framer-motion";
const items=[{
   id:1,
   title:"Homeease",
   img:"/Homeease.png",
   desc:"Homeease is a complete webapp used for online shopping.From ordering products to make payments online,it makes every thing available at just one click.Super easy and user-friendly."
},
{
   id:2,
   title:"Let's connect",
   img:"",
   desc:"Homeease is a complete webapp used for online shopping.From ordering products to make payments online,it makes every thing available at just one click.Super easy and user-friendly."
},
{
   id:3,
   title:"Portfolio",
   img:"",
   desc:"Homeease is a complete webapp used for online shopping.From ordering products to make payments online,it makes every thing available at just one click.Super easy and user-friendly."
},
{
   id:4,
   title:"Spotify clone",
   img:"/Spotify.png",
   desc:"Homeease is a complete webapp used for online shopping.From ordering products to make payments online,it makes every thing available at just one click.Super easy and user-friendly."
},
{
   id:5,
   title:"WildLife Treasure",
   img:"/Wildlife.png",
   desc:"Homeease is a complete webapp used for online shopping.From ordering products to make payments online,it makes every thing available at just one click.Super easy and user-friendly."
}];

const Single=({item})=>{
    const ref=useRef();
    const {scrollYProgress}=useScroll({target:ref});

    const y=useTransform(scrollYProgress,[0,1],[-300,300]);

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
            <button>See Project</button>
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
    {items.map(item=>(<Single item={item} key={item.id}/>))}</div>
  )
}

export default Portfolio