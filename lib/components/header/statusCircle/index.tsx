import * as React from 'react';
import { Circle } from './style';

interface IProps {
  coloredBackground?: boolean;
}

export const StatusCircle: React.FC<IProps> = ({ coloredBackground = false }) => {
  const [color, setColor] = React.useState('#000000');

  React.useEffect(() => {
    showState();
  }, []);

  async function showState(): Promise<void> {
    const urls = ['https://us.csmm.app/api/stats', 'https://eu.csmm.app/api/stats', 'https://au.csmm.app/api/stats'];
    let serversUp = 0;
    for (let i = 0; i < urls.length; i++) {
      const data = await fetch(urls[i]);
      const json = await data.json();
      serversUp += json.length; // max return value is 150 (50 per region)
    }

    switch (true) {
      case (serversUp > 125):
        coloredBackground ? setColor('#fff') : setColor('#28B766');
        break;
      case serversUp < 125 && serversUp > 100:
        setColor('#FF4500');
        break;
      case serversUp < 100:
        setColor('#DC143C');
        break;
    }
  }
  return (
    <Circle color={color} />
  );
};
