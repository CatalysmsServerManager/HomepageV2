import * as React from 'react';
import { Block, Container } from './style';

import { Comment, Statistics, Tracking, Vr } from 'lib/icons';

const SCALE = 2.5;

export const Info: React.FC = () => (
  <Container>
    <Block>
      <Vr scale={SCALE} />
      <h3>In-game features</h3>
      <p>Economy, teleports, custom commands, support tickets, server automation</p>
    </Block>
    <Block>
      <Statistics scale={SCALE} />
      <h3>Statistics</h3>
      <p>Economy, teleports, custom commands, support tickets, server automation</p>
    </Block>
    <Block>
      <Tracking scale={SCALE} />
      <h3>Player tracking</h3>
      <p>Catch cheaters and raiders like never before. Search for player, location and/or timeframe to find the data you need.</p>
    </Block>
    <Block>
      <Comment scale={SCALE} />
      <h3>Discord bot</h3>
      <p>CSMM comes with a powerful Discord bot that lets you execute server commands from Discord, create a Discord channel and send notifications</p>
    </Block>
  </Container>
);
