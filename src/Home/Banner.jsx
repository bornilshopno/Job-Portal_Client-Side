import { motion } from "motion/react"
import team1 from "../assets/success.jpg"
import team2 from "../assets/meeting.jpg"

const Banner = () => {
    return (
        <div className="hero bg-gray-700 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse w-11/12 lg:w-9/12 mx-auto">
                <div className="flex-1 flex-col items-center justify-center">
                    <motion.img
                        src={team1} animate={{ y: [0, 40, 0] }} transition={{ duration: 10, repeat: Infinity }}
                        className="w-60 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-500 shadow-2xl" />
                    <motion.img src={team2} animate={{x:[100,140,100]}} transition={{duration:10, repeat:Infinity, delay:5}}
                        className="w-60 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-500 shadow-2xl" />
                </div>
                <div className="flex-1">
                    <h1 className="text-5xl font-bold">Latest <motion.span animate={{ color: ["#761b08", "#e7ac1d", "#d2e71d"] }} transition={{ duration: 2, repeat: Infinity }}
                    >JOB news</motion.span> for you!</h1>
                    <motion.h1 className="text-5xl font-bold"
                        animate={{ x: 100, color: 'green' }}
                        transition={{ delay: 1, duration: 2, repeat: Infinity }}
                    >Explore Now!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;