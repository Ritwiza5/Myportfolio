import "./navbar.scss"
import {motion} from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
const Navbar = () => {
  return (
    <div className="navbar">
        {/*Sidebar*/}
        <Sidebar/>
        <div className="wrapper">
            <motion.span initial={{opacity:0,scale:0.5}}
            animate={{opacity:1,scale:1}}
            transition={{duration:0.5}}>Ritwiza Tomar</motion.span>
            <div className="social">
                <a href="https://leetcode.com/Ritwiza_Tomar/"><img src="/leetcode.png" alt="" /></a>
                <a href="https://instagram.com/ritwiza_tomar?igshid=OGQ5ZDc2ODk2ZA=="><img src="/instagram.png" alt=""/></a>
                <a href="https://www.linkedin.com/in/ritwiza-tomar-a864111b7"><img src="/linkedin.png" alt=""/></a>
                <a href="https://twitter.com/Ritwiza_Tomar?t=-NdNhF55PDTjXAc_4xuerA&s=09"><img src="/twitter.png" alt=""/></a>
                <a href="https://github.com/Ritwiza5"><img src="/github(1).png" alt=""/></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar