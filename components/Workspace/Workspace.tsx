import React from 'react';
import Split from 'react-split';
import '../../styles/global.css';
import ProblemDescription from './ProblemDescription/Problemdescription';
import ProblemGround from './Playground/Playground';
import { Problem } from '../../utils/types/problem'; // Import the Problem type
import { problems } from '../mockProblems/mockProblems';

type Props = {
  problem: Problem ; // Define the problem prop
};

const workSpace = (props: Props) => {
  return (
    <>
      <main className="no-inherit-width" style={{ width: '100%' }}>
          <Split className='split' minSize={0}>
            <ProblemDescription problem={props.problem} /> 
            <ProblemGround problem={props.problem} />
          </Split>
      </main>
    </>
  );
};

export default workSpace;
