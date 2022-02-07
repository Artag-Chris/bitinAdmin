import Chart from "../../components/chart/Chart";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetLg from "../../components/widgetLg/WidgetLg";


export default function Home() {
  return (
    
        <div className="home container-fluid m-0 p-n5">
        
            <WidgetLg />
          <div className="homeWidgets">
          
          </div>
          <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
        </div>
   
      );
}