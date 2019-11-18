import React from 'react'
import PropTypes from 'prop-types'
import { ResponsiveLine } from '@nivo/line'

export default function Chart({ data }){
  return (
    <ResponsiveLine
      areaOpacity={0.05}
      axisBottom={{
        orient:         'bottom',
        legend:         'date',
        legendOffset:   110,
        legendPosition: 'middle',
        tickRotation:   67.5,
        tickPadding:    10,
        tickSize:       5
      }}
      axisLeft={{
        orient:         'left',
        legend:         'servers',
        legendOffset:   -60,
        legendPosition: 'middle'
      }}
      axisRight={null}
      axisTop={null}

      colors={['#28B766']}
      curve="natural"
      data={data}
      enableArea={true}
      enableGridX={false}

      margin={{ top: 50, right: 50, bottom: 140, left: 100 }}
      useMesh
      yScale={{ type: 'linear', max: 800 }}/>
  )
}
Chart.propTypes = {
  data: PropTypes.array.isRequired
}
