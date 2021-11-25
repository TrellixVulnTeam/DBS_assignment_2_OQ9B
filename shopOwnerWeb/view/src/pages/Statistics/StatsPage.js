import CircleChart from "../../component/Statistics/CircleChart";
import BarChart from "../../component/Statistics/BarChat";
import { useParams } from "react-router";

const StatsPage = props => {

    const params = useParams();

    console.log(params);

    return (
        <div className='w-25'>
            <CircleChart />
            <BarChart />
        </div>
    )


};


export default StatsPage;