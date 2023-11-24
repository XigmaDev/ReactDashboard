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
                    height="1em"
                    viewBox="0 0 640 512"
                    className="h-5 w-5 mr-3"
                  >
                    <path
                      d="M1.5 458.7c6-45.5 29.2-85.6 62.8-113.6C95.3 319.4 135 304 178.3 304H224h45.7c43.3 0 83 15.4 113.9 41.1c33.6 28 56.8 68.1 62.8 113.6c1 7.7 1.5 15.6 1.5 23.6c0 16.4-13.3 29.7-29.7 29.7H398.7 49.3 29.7C13.3 512 0 498.7 0 482.3c0-8 .5-15.9 1.5-23.6zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zm208 0a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM178.3 352c-47.8 0-89.5 25.7-112.2 64c-8.6 14.4-14.4 30.7-16.8 48H98 350h48.8c-.4-2.7-.8-5.3-1.4-8c-2.9-14.3-8.2-27.8-15.5-40c-22.7-38.3-64.4-64-112.2-64H178.3zm431 160H472.4c4.9-8.8 7.6-18.9 7.6-29.7c0-65-29.5-123.2-75.9-161.8c4.3-.4 8.7-.5 13.2-.5h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
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
                    height="1em"
                    viewBox="0 0 512 512"
                    className="h-5 w-5 mr-3"
                  >
                    <path
                      d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
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
