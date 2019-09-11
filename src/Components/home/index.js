import React from 'react';
import Featured from './featured';
import Matches from './matches/index';
import MeetPlayers from './meetPlayers';
import Promotion from './promotion'

const Home = () => {
  return (
    <div className='bck_blue'>
      <Featured/>
      <Matches/>
      <MeetPlayers/>
      <Promotion/>
    </div>
  )
}

export default Home
