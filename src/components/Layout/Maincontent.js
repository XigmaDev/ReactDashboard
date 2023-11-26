import React from 'react'
import WebSiteTraffic from './tiles/website-traffic'
import FullReport from './tiles/full-report'
import Bouncerate from './tiles/bouncerate'
import Roi from './tiles/roi'
import Webscore from './tiles/webscore'
import CustomerChurn from './tiles/customerchurn'
import propTypes from 'prop-types'

function Maincontent({ seriesData, trafficdata ,roiData }) {
  return (
    <div className="flex flex-wrap justify-evenly p-4">
      <WebSiteTraffic trafficdata={trafficdata} />
      <FullReport />
      <Bouncerate />
      <Roi roiData={roiData} />
      <Webscore />
      <CustomerChurn seriesData={seriesData} />
    </div>
  )
}
Maincontent.propTypes = {
  seriesData: propTypes.array,
  trafficdata: propTypes.array,
  roiData:propTypes.array
}
export default Maincontent
