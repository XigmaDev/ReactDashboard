import React, { useState } from 'react'
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Alert,
  Button,
} from '@material-tailwind/react'
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/solid'
import { CubeTransparentIcon } from '@heroicons/react/24/outline'
import propTypes from 'prop-types'

function Sidebar({ theme, toggleTheme, data ,openSidenav }) {
  const [openAlert, setOpenAlert] = useState(true)
  return (
    <aside
      className={`${theme === 'dark'
        ? 'bg-gray-900 text-white shadow-inherit'
        : 'text-black shadow-blue-gray-900/5 shadow-sm'
      }
    ${openSidenav ? 'translate-x-0' : '-translate-x-80'
    } fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-8 shadow-xl rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100 flex flex-col justify-between items-center`}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="mb-2 flex items-center gap-4 p-4">
          <img
            src={`${theme === 'dark' ? ' ./img/logo-light.png' : './img/logo-dark.png '}`}
            alt="brand"
            className="h-8 w-8"
          />
          <Typography variant="h5">Wise</Typography>
        </div>
        <img
          className="h-40 w-40 rounded-full object-cover object-center"
          src={data.picture.large}
          alt="nature image"
        />
        <Typography variant="h6">
          {data.name.title}. {data.name.first} {data.name.last}
        </Typography>
        <Button
          variant="outlined"
          className={`${theme === 'dark' ? '  border-white' : ' '
          }text-black rounded-full flex flex-row justify-between bg-blue-gray-200 opacity-40`}
        >
          <svg
            className="mr-3"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
          </svg>
          Edit
        </Button>
        <List className={`${theme === 'dark' ? ' text-white' : 'text-black '}`}>
          <hr className="my-2  border-blue-gray-50" />
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Activity
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <svg
                className={`${theme === 'dark' ? 'fill-white' : ''} h-5 w-5`}
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
              </svg>
            </ListItemPrefix>
            Schedule
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
            Setting
          </ListItem>
        </List>
      </div>
      <div className="items-center">
        <Button
          variant="gradient"
          className="flex items-center gap-3 "
          onClick={toggleTheme}
        >
          <svg
            className="fill-white"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 384 512"
          >
            <path d="M144.7 98.7c-21 34.1-33.1 74.3-33.1 117.3c0 98 62.8 181.4 150.4 211.7c-12.4 2.8-25.3 4.3-38.6 4.3C126.6 432 48 353.3 48 256c0-68.9 39.4-128.4 96.8-157.3zm62.1-66C91.1 41.2 0 137.9 0 256C0 379.7 100 480 223.5 480c47.8 0 92-15 128.4-40.6c1.9-1.3 3.7-2.7 5.5-4c4.8-3.6 9.4-7.4 13.9-11.4c2.7-2.4 5.3-4.8 7.9-7.3c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-3.7 .6-7.4 1.2-11.1 1.6c-5 .5-10.1 .9-15.3 1c-1.2 0-2.5 0-3.7 0c-.1 0-.2 0-.3 0c-96.8-.2-175.2-78.9-175.2-176c0-54.8 24.9-103.7 64.1-136c1-.9 2.1-1.7 3.2-2.6c4-3.2 8.2-6.2 12.5-9c3.1-2 6.3-4 9.6-5.8c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-3.6-.3-7.1-.5-10.7-.6c-2.7-.1-5.5-.1-8.2-.1c-3.3 0-6.5 .1-9.8 .2c-2.3 .1-4.6 .2-6.9 .4z" />
          </svg>
          {`${theme === 'dark' ? 'Light Mode' : 'Dark Mode'}`}
        </Button>
      </div>
      <Alert
        open={openAlert}
        className="mt-auto"
        onClose={() => setOpenAlert(false)}
      >
        <CubeTransparentIcon className="mb-4 h-12 w-12" />
        <Typography variant="h6" className="mb-1">
          Upgrade to PRO
        </Typography>
        <Typography variant="small" className="font-normal opacity-80">
          Upgrade Message
        </Typography>
        <div className="mt-4 flex gap-3">
          <Typography
            as="a"
            href="#"
            variant="small"
            className="font-medium opacity-80"
            onClick={() => setOpenAlert(false)}
          >
            Dismiss
          </Typography>
          <Typography as="a" href="#" variant="small" className="font-medium">
            Upgrade Now
          </Typography>
        </div>
      </Alert>
    </aside>
  )
}
Sidebar.propTypes = {
  theme: propTypes.string,
  toggleTheme: propTypes.func,
  data: propTypes.object,
  openSidenav:propTypes.bool
}
export default Sidebar
