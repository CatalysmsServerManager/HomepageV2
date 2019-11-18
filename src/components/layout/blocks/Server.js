import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import Chart from '../Chart'

const Container = styled.section`
  margin: 150px 0;
  width: 80%;
  h2{
    font-size: 3rem;
  }
`


const Regions = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content:flex-end;
  margin-bottom: 30px;
`
const Region = styled.div`
  font-weight: 600;
  margin-left: 10px;
  margin-right: 10px;
  text-transform: uppercase;
  cursor: pointer;
  &:hover{
    color: ${({theme}) => theme.main}
  }

  &.selected{
    color: ${({theme}) => theme.main };
    &:hover{
      color: ${({theme}) => darken(0.1,theme.main)};
    }
  }
`
const Inner = styled.div`
  width: 80%;
  margin-left: auto;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  border-radius: 10px;
`

export default function Server(){
  let dataset = {}
  const REGIONS = ['us', 'eu', 'au']
  const [chartData, setChartData] = useState({loading: true})

  // init
  useEffect(() =>componentLoad(), [])

  async function componentLoad(){
    // select eu by default
    document.querySelector('.region').classList.add('selected')
    // date month ago
    let d = new Date()
    d.setMonth(d.getMonth()-1)

    for(let i=0; i < REGIONS.length; i++){
      dataset[REGIONS[i]] = await getStats(d,REGIONS[i])
    }
    getChartData()
  }

  function getChartData(){
    const regions = getSelectedRegions()
    let serverdatas = []

    let servers = Array(dataset[regions[0]].length).fill(0)

    for(let i=0; i<dataset[regions[0]].length;i++){// equal to amount of days
      for(let j=0; j < regions.length; j++){
        console.log('the region is' + regions[j])
        servers[i] += dataset[regions[j]][i].servers
      }
    }
    console.log(servers)

    let serverData = []

    if(regions.length>1){
      setChartData({
        data: [
          { 'id': 'servers', 'data': serverData }
        ],
        loading: false
      })

    } else {
      // init or only one is selected
      dataset[regions[0]].map((regiondata) => {
        serverData.push({ 'x': regiondata.date, 'y': regiondata.servers })
      })

      setChartData({
        data: [
          { 'id': 'servers','data': serverData }
        ],
        loading: false
      })
    }
  }


  async function getStats(date,region){
    let res = await fetch(`https://${region}.csmm.app/api/stats?since=${date.valueOf()}`)
    let json = await res.json()
    let regionData = []
    let max = 0;

    json.map((day) => {
      regionData.push({players: day.players, servers: day.servers, date: new Date(day.createdAt).toISOString().slice(0,10)})
    })
    return regionData
  }

  function setSelectRegion(e){
    const el = e.currentTarget
    el.classList.contains('selected') ? el.classList.remove('selected') : el.classList.add('selected')
    getChartData()
  }

  function getSelectedRegions(){
    let r = []
    const selectedRegions = document.querySelectorAll('.region.selected')
    for(let i=0;i<selectedRegions.length;i++){
      r.push(selectedRegions[i].dataset.region)
    }
    return r
  }


  return (
    <Container>
      <h2>Servers & Players.</h2>
      <Regions>
        {
          REGIONS.map((region) => <Region key={region} className="region" data-region={region} onClick={setSelectRegion}>{region}</Region>)
        }
      </Regions>
      <Inner>
        {
          chartData.loading ? <div>loading..</div> : <Chart data={chartData.data}/>
        }
      </Inner>
    </Container>
  )
}
