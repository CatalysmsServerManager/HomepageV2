import * as React from 'react';
import * as c3 from 'c3';
import { chartColorPattern } from 'lib/style';
import { IChartData, IStats } from './interfaces';
import { LoadingContainer } from './style';
import { Loading } from 'lib/components';

export const Chart: React.FC = () => {
  const [data, setData] = React.useState<IChartData[]>(null);

  async function getData(): Promise<IChartData[]> {
    const regions = ['eu', 'au', 'us'];
    const chartData: IChartData[] = new Array(48).fill({ createdAt: '0', servers: 0, players: 0 });
    for (const region of regions) {
      let index = 0;
      const res = await fetch(`https://${region}.csmm.app/api/stats`);
      const stats: IStats[] = await res.json();

      for (const { createdAt, servers, players } of stats.slice(0, 48)) {
        chartData[index] = {
          createdAt: new Date(createdAt).toISOString().slice(0, 10),
          servers: chartData[index].servers + servers,
          players: chartData[index].players + players
        };
        index++;
      }
    }

    return chartData;
  }

  React.useEffect(() => {
    getData().then((regionData) => {
      setData(regionData);
    });
  }, []);

  React.useEffect(() => {
    if (data) {
      const dates = ['dates', ...data.map(({ createdAt }) => createdAt)];
      const players = ['players', ...data.map(({ players }) => players)];
      const servers = ['servers', ...data.map(({ servers }) => servers)];

      const chartConfig: c3.ChartConfiguration = {
        bindto: '#csmm-chart',
        line: { connectNull: false },
        data: {
          x: 'dates',
          columns: [
            dates as [string, ...c3.Primitive[]],
            players as [string, ...c3.Primitive[]],
            servers as [string, ...c3.Primitive[]]
          ],
          axes: {
            dates: 'x',
            players: 'y',
            servers: 'y2'
          },
          type: 'spline'
        },
        color: { pattern: chartColorPattern },
        legend: { show: true, position: 'right' },
        tooltip: { show: true },
        point: { show: false },
        axis: {
          x: {
            show: true,
            type: 'timeseries',
            tick: { format: '%e-%b', fit: true }
          },
          y: {
            show: true,
            label: { position: 'outer-middle', text: 'Players' },
            inner: false
          },
          y2: {
            show: true,
            label: { position: 'outer-middle', text: 'Servers' },
            inner: false
          }
        }
      };
      c3.generate(chartConfig);
    }
  }, [data]);

  // initial load
  if (data === null) {
    return (<LoadingContainer><Loading /></LoadingContainer>);
  } else {
    return (<div id="csmm-chart">this is the data</div>);
  }
};
