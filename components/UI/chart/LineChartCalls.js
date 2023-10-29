import React from "react";
import classes from "./LineChart.module.css";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

const LineChartCalls = (props) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
                text: "Chart.js Line Chart",
            },
        },
    };
    const labels = [
        "11:00",
        "12:00",
        "01:00",
        "02:00",
        "03:00",
        "04:00",
        "05:00",
        "06:00",
        "07:00",
    ];
    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: "بيع",
                data: labels.map(() =>
                    faker.datatype.number({ min: 0, max: 10 })
                ),
                borderColor: "#D63236",
                backgroundColor: "#D6323660",
                lineTension: 0.2,
            },
        ],
    };
    return (
        <div className={classes.chart}>
            <div className={classes.title}>
                <p>{props.title}</p>
                <select name="" id="">
                    <option value="">تقيم</option>
                    <option value="">متابعه</option>
                    <option value="">بيع</option>
                    <option value="">طلب</option>
                    <option value="">استشاره</option>
                </select>
            </div>
            <Line options={options} data={data} />
        </div>
    );
};

export default LineChartCalls;
