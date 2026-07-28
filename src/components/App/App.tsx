
import { useState } from 'react'
import css from './App.module.css'
import type { Votes, VoteType } from '../../types/Votes'
import CafeInfo from '../CafeInfo/CafeInfo'
import VoteOptions from '../VoteOptions/VoteOptions'
import VoteStats from '../VoteStats/VoteStats'

function App() {
  
  const [votes, setVotes] = useState<Votes>({ good: 0, neutral: 0, bad: 0 });
  
  const handleVote = (type:VoteType) => {
    setVotes( votes=>({...votes,[type]:votes[type]+1,}));
  };

  const resetVotes = () => {
    setVotes({...votes, good: 0, neutral: 0, bad: 0 });
  };

  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes > 0 ? Math.round((votes.good / totalVotes)*100):0;

  return (
    <>
     <div className={css.app}></div>
     <CafeInfo />
     <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={true} />
     <VoteStats votes={votes} totalVotes={totalVotes} positiveRate={positiveRate}/>
    </>
  )
}

export default App
