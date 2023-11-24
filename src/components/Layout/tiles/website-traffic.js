import React from 'react'
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Button,
} from '@material-tailwind/react'
import Chart from 'react-apexcharts'

function WebSiteTraffic() {
  const chartdata = {
    type: 'donut',
    height: 200,
    width: 320,
    series: [78, 22],
    options: {
      legend: {
        show: false,
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: false,
              name: {},
              value: {},
            },
          },
        },
      },
      chart: {
        toolbar: {
          show: false,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
      fill: {
        opacity: 0.9,
        colors: ['#000000', '#A9A9A9'],
      },
      tooltip: {
        theme: 'dark',
      },
      markers: {
        colors: ['#000000', '#A9A9A9'],
      },
    },
  }

  return (
    <div className=" rounded-3xl shadow-md w-96 mb-4  mr-3">
      <Card
        shadow={true}
        className="bg-yellow-500 p-4 h-96 overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm flex flex-col justify-between"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 flex items-center justify-between p-6"
        >
          <div>
            <Typography variant="h4" color="blue-gray" className="mb-1">
              Website traffic
            </Typography>
          </div>
          <Button
            size="sm"
            color="gray"
            variant="text"
            className="!absolute top-4 right-6 rounded-full"
          >
            More
          </Button>
        </CardHeader>
        <CardBody className="px-0 pt-0 pb-2 ">
          <div className="flex flex-row justify-center p-4">
            <div>
              <Chart {...chartdata} />
            </div>
          </div>
          <div className="flex flex-row justify-between m-4 ">
            <div className="flex flex-col justify-center">
              <div className="flex flex-row justify-between w-80 px-4 py-2">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="mb-1 font-bold flex flex-row justify-between"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5 mr-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                    />
                  </svg>
                  Social Media
                </Typography>
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="mb-1 font-bold"
                >
                  78%
                </Typography>
              </div>
              <hr className="w-80"></hr>
              <div className="flex flex-row justify-between w-80 px-4 py-2">
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="mb-1 font-bold flex flex-row justify-between"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5 mr-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                    />
                  </svg>
                  Organic Search
                </Typography>
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="mb-1 font-bold"
                >
                  22%
                </Typography>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
export default WebSiteTraffic
