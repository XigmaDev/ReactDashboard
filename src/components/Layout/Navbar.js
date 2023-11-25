import React from 'react'
import {
  Navbar,
  Typography,
  IconButton,
  Input,
} from '@material-tailwind/react'
import { BellIcon, Cog6ToothIcon, Bars3Icon } from '@heroicons/react/24/solid'
import propTypes from 'prop-types'
function MainNavbar({ theme, setOpenSidenav ,openSidenav}) {
  return (
    <Navbar
      shadow={false}
      fullWidth={true}
      className={`${theme === 'dark' ? 'bg-gray-900 ' : ''
      }mx-auto px-2 py-3 border-none`}
    >
      <div
        className={`${theme === 'dark' ? ' text-white' : 'text-black '
        } flex flex-wrap items-center justify-between gap-y-4`}
      >
        <Typography
          as="a"
          href="#"
          variant="h4"
          className="font-bold mr-4 ml-2 cursor-pointer py-1.5"
        >
          Statistics
        </Typography>
        <div className="relative flex ml-auto w-full gap-2 md:w-max">
          <Input
            type="search"
            label="Search"
            color={theme === 'dark' ? 'white' : 'gray'}
            containerProps={{
              className: 'min-w-[288px]',
            }}
          />
        </div>
        <div className="ml-auto flex gap-1 md:mr-4">
          <IconButton
            variant="text"
            color={`${theme === 'dark' ? 'white' : 'black'}`}
          >
            <Cog6ToothIcon className="h-4 w-4 " />
          </IconButton>
          <IconButton
            variant="text"
            color={`${theme === 'dark' ? 'white' : 'black'}`}
          >
            <BellIcon className="h-4 w-4" />
          </IconButton>
          <IconButton
            variant="text"
            color="blue-gray"
            className="grid xl:hidden"
            onClick={() => setOpenSidenav(!openSidenav)}
          >
            <Bars3Icon strokeWidth={3} className="h-6 w-6 text-blue-gray-500" />
          </IconButton>
        </div>
      </div>
    </Navbar>
  )
}
MainNavbar.propTypes = {
  theme: propTypes.string,
  setOpenSidenav: propTypes.func,
  openSidenav: propTypes.bool
}
export default MainNavbar
