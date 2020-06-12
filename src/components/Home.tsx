import * as React from 'react';
import { store } from '../store';


const Home = (props: any) => (
  <div className='home'>
    HOME
    {props.children}
    <pre>{JSON.stringify(store.getState())}</pre>
  </div>
)

export default Home;