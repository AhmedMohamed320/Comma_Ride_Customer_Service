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

export const LineChart = (props) => {
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
    const labels = ["1/10", "2/10", "3/10", "4/10", "5/10", "6/10", "7/10"];
    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: "بيع",
                data: labels.map(() =>
                    faker.datatype.number({ min: 0, max: 50 })
                ),
                borderColor: "#D63236",
                backgroundColor: "#D6323660",
                lineTension: 0.2,
            },
        ],
    };
    return (
        <>
            <div className={classes.chart}>
                <div className={classes.title}>
                    <p>{props.title}</p>
                    <select name="" id="">
                        <option value="">اخر 7 ايام</option>
                        <option value="">اخر 12 اسبوع</option>
                    </select>
                </div>
                <Line options={options} data={data} />
            </div>
        </>
    );
};

export default LineChart;
