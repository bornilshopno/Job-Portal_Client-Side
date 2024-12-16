import Banner from "./Banner";
import HotJobs from "./HotJobs";


const Home = () => {
    return (
        <div className="mx-auto w-11/12 md:w-10/12">
        <Banner></Banner>
        <HotJobs></HotJobs>
        </div>
    );
};

export default Home;