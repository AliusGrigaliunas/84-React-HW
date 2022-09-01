import React from 'react';
import SectionA from './Components/SectionA';
import SectionB from './Components/SectionB';
import ShowCase from './Components/ShowCase';
import SectionC from './Components/SectionC';

function App() {
  return (
    <>
        <ShowCase />
        <SectionA />
        <SectionB />
        <SectionC>
          <div className="box-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolorum est, molestias dolores quis sunt nobis temporibus veritatis libero odio!
          </div>
          <div className="box-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolorum est, molestias dolores quis sunt nobis temporibus veritatis libero odio!
          </div>
          <div className="box-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolorum est, molestias dolores quis sunt nobis temporibus veritatis libero odio!
          </div>
        </SectionC>
  </>
  );
}

export default App;
