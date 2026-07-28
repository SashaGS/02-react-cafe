
import { useState } from 'react'

import CafeInfo from '../CafeInfo/CafeInfo'
import type { Votes, VoteType } from '../../types/Votes'

import css from './App.module.css' 
import VoteOptions from '../VoteOptions/VoteOptions'

function App() {
  
  const [votes, setVotes] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });
  
  const handleVote = (type:VoteType) => {
    setVotes( votes=>({...votes,[type]:votes[type]+1,}));
      // console.log("Test");
  };

  const resetVotes = () => {
    setVotes({...votes, good: 0, neutral: 0, bad: 0 });
  };


  return (
    <>
     <div className={css.app}></div>
     <CafeInfo />
     <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={true}/>
    </>
  )
}

export default App
