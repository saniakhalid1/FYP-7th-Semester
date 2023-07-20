import Image from "next/image";
import Button from "../../Components/Button";
import { OfferTable } from "./OfferTable";
import Link from "next/link";
import { data } from "./DashboardData";
import { Data } from "./MessageData";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import Graphdropdown from "../../Components/Graphdropdown";
export const DashboardModule = () => {
  const options = {
    chart: {
    type: 'column',
    inverted: false,
    backgroundColor:['#151515']
    },
    colors: ['#df2020'],
    title: false,
    subtitle: false,
    yAxis: {
    gridLineDashStyle: 'longdash',
    gridLineColor: '#484040',
    title: false,
    },
    tooltip: {
    pointFormat: 'Total number of {series.name} <b>{point.y:,.0f}</b>'
    },
    credits: {
    enabled: false
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    legend: {
      enabled: false
    },
    xAxis: {
    
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    series: [ {
    name: 'earning',
    data: [15, 25, 10, 30, 18, 35, 15,45, 30, 50, 40, 50]
    }]
}
const dropdownData = [
  {
    title: "Daily",
  },
  {
    title: "Weekly"
  },
  {
    title: "Annualy"
  },

]
  return (
    <>
      <div className="2xl:col-span-4 col-span-1 grid md:grid-cols-2 lg:grid-cols-3 gap-8  w-full ">
        {data.map((e) => (
          <>
            <div className="bg-white shadow pt-[2.125rem] pb-8 pl-10 pr-8 rounded-xl flex justify-between items-end">
              <div>
                <h2 className="text-[1.75rem]  mb-10">{e.items}</h2>
                <h3 className="text-[#29303A] text-[2.875rem]   break-words">
                  {e.values}
                </h3>
              </div>
              
            </div>
          </>
        ))}
        
      </div>
      <div className="  rounded-[16px] px-6 pt-8 mt-8 ">
          <div className="flex   xs:block justify-between items-center ">
          <h4 className="mb-6 xl:text-[28px] text-black font-Circular-Medium  ">Our Earnings</h4>
          <div>
          <Graphdropdown data={dropdownData} />

          </div>
        
          </div>
         

          <HighchartsReact    
            highcharts={Highcharts}
            options={options}
          />
        </div>
    </>
  );
};
