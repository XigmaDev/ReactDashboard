import React from 'react'
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Button,
  Menu,
} from '@material-tailwind/react'

function FullReport() {
  return (
    <div className="rounded-3xl shadow-md w-96 mb-4  mr-3 ">
      <Card
        shadow={true}
        className="bg-gray-800 p-4 h-96 overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm flex flex-col justify-between bg-[url('./img/grunge-texture.png')] bg-cover"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 flex items-center justify-between p-6"
        >
          <div>
            <Typography variant="h4" color="white" className="mb-1">
              Bounce Rate
            </Typography>
          </div>
          <Menu placement="left-start">
            <Button
              size="lg"
              color="yellow"
              variant="text"
              className="!absolute top-4 right-6 rounded-full"
            >
              /2023
            </Button>
          </Menu>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-6 pt-0 pb-2 ">
          <Button size="lg" fullWidth={true} color="gray">
            <div className='flex flex-row justify-between h-10 items-center'>
              Download Report
              <div className="border-l-2 border-gray-600 h-20 "></div>
              <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 232V334.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31V232c0-13.3 10.7-24 24-24s24 10.7 24 24z" /></svg>
            </div>
          </Button>
        </CardBody>
      </Card>
    </div>
  )
}
export default FullReport
