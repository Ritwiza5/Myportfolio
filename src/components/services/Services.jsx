import "./services.scss";
import {useRef} from "react";
import {motion,useInView} from "framer-motion";
 

const variants={
    initial:{
       x:-500,
       y:100,
       opacity:0
    },
    animate:{
        x:0,
        y:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    }

}
const items=[{
    id:1,
    img:"/html.png",
    color:"rgba(242, 140, 40, 1)",
},
{
    id:2,
    img:"/css.png",
    color:"rgba(0, 150, 255, 1)",
},
{
    id:3,
    img:"/javascript.png",
    color:"rgba(223, 255, 0, 1)",
},
{
    id:4,
    img:"/java.png",
    color:"rgba(255, 0, 0, 1)",
},
{
    id:5,
    img:"/jquery.png",
    color:"rgba(137, 207, 240, 1)",
},
{
    id:6,
    img:"/bootstrap.png",
    color:"rgba(93, 63, 211, 1)",
},
{
    id:7,
    img:"/tailwind.png",
    color:"rgba(0, 255, 255, 1)",
},
{
    id:8,
    img:"/sass.png",
    color:"rgba(255, 105, 180, 1)",
},
{
    id:9,
    img:"./react.png",
    color:"#00FFFF",
},
{
    id:10,
    img:"./nodejs.png",
    color:"#32CD32",
},
{
    id:11,
    img:"./express.png",
    color:"rgba(250, 249, 246, 1)",
},
{
    id:12,
    img:"./mongo-db.png",
    color:"	#4CBB17",
},
{
    id:13,
    img:"./redux.png",
    color:"rgba(93, 63, 211, 1)",
},
{
    id:14,
    img:"./material.png",
    color:"rgba(64, 224, 208, 1)",
},
{
    id:15,
    img:"./chakra.png",
    color:"rgba(173, 216, 230, 1)",
},
{
    id:16,
    img:"./framer.png",
    color:"rgba(250, 249, 246, 1)",
},
{
    id:17,
    img:"./postman.png",
    color:"rgba(242, 140, 40, 1)",
},

{
    id:18,
    img:"/heroku.png",
    color:"rgba(170, 152, 169, 1)",
},
{
    id:19,
    img:"/render.png",
    color:"rgba(125, 249, 255, 1)",
},
{
    id:20,
    img:"/git.png",
    color:"rgba(255, 95, 21, 1)",
},
{
    id:21,
    img:"/github.png",
    color:"rgba(250, 249, 246, 1)",
},]
 const Box=({item})=>{
    return(
        <motion.div className="box" whileHover={{transform:"rotate(10deg)"}} style={{boxShadow:`2px 10px 8px 3px ${item.color}`}}>
            <img src={item.img} alt="" />
        </motion.div>
    )
 }
const Services = () => {
    const ref=useRef();
    const isInView=useInView(ref,{margin:"-100px"})

  return (
    <motion.div className="services" ref={ref} variants={variants} initial="initial" animate={"animate"}>
    <motion.div className="textContainer" variants={variants} initial="initial" animate="animate">
        <p>I can help you turn your imagination<br/> into reality</p>
        <hr/>
    </motion.div>
    <motion.div className="titleContainer" variants={variants} initial="initial" animate="animate">
        <div className="title">
            <img src="/people.webp" alt="" />
            <h1>
                <motion.b whileHover={{color:"orange"}}>Unique </motion.b>Ideas For
            </h1>
        </div>
        <div className="title">
            <h1>
                Your<motion.b whileHover={{color:"orange"}}> Projects</motion.b>
            </h1>
            <button>MY SKILLS</button>
        </div>
    </motion.div>
    <motion.div className="boxContainer" variants={variants} initial="initial" animate="animate">
    
    {items.map(item=>(
        <Box item={item} key={item.id} />))}
   
    
    </motion.div>
    </motion.div>
  )
}

export default Services