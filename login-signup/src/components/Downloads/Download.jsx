import React from 'react'
import { Nav } from '../Homepagenavbaar'
import DownloadData from './DownloadData'
import DownloadText from './DownloadText'

const Download = () => {
  return (
    <div>
      <Nav/>
      <DownloadText />
      <DownloadData />
    </div>
  )
}

export default Download
