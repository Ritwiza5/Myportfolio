import "./services.scss";
import {motion} from "framer-motion";

const items=[{
    id:1,
    img:"",
    color:"",
},
{
    id:2,
    img:"",
    color:"",
},
{
    id:3,
    img:"",
    color:"",
},
{
    id:4,
    img:"",
    color:"",
},
{
    id:5,
    img:"",
    color:"",
},
{
    id:6,
    img:"",
    color:"",
},
{
    id:7,
    img:"",
    color:"",
},
{
    id:8,
    img:"",
    color:"",
},
{
    id:9,
    img:"",
    color:"",
},
{
    id:10,
    img:"",
    color:"",
},
{
    id:11,
    img:"",
    color:"",
},
{
    id:12,
    img:"",
    color:"",
},
{
    id:13,
    img:"",
    color:"",
},
{
    id:14,
    img:"",
    color:"",
},
{
    id:15,
    img:"",
    color:"",
},
{
    id:16,
    img:"",
    color:"",
},
{
    id:17,
    img:"",
    color:"",
},
{
    id:18,
    img:"",
    color:"",
},]
 const Box=({item})=>{
    return(
        <div className="box">
            <img src="" alt="" />
        </div>
    )
 }
const Services = () => {
  return (
    <motion.div className="services">
    <motion.div className="textContainer">
        <p>I can help you turn your imagination<br/> into reality</p>
        <hr/>
    </motion.div>
    <motion.div className="titleContainer">
        <div className="title">
            <img src="/people.webp" alt="" />
            <h1>
                <b>Unique Ideas For</b>
            </h1>
        </div>
        <div className="title">
            <h1>
                <b>Your Projects</b>
            </h1>
            <button>MY SKILLS</button>
        </div>
    </motion.div>
    <motion.div className="boxContainer">
    <div className="box">
    {items.map(item=>(
        <Box item={item} key={item.id}/>))}
    </div>
    
    </motion.div>
    </motion.div>
  )
}

export default Services