import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

export const Route = createLazyFileRoute("/graph")({
  component: Graph,
});

function Graph() {
  const [state, setState] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });

  useEffect(() => {
    setTimeout(() => {
      setState({
        options: {
          chart: {
            id: 'basic-bar'
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          },
        },
        series: [
          {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91],
          },
        ],
      });
    }, 2000);
  }, []);
  return (
    <div className="p-2">
      <Chart
        options={state.options}
        series={state.series}
        type="line"
        width="500"
      />
    </div>
  );
}
