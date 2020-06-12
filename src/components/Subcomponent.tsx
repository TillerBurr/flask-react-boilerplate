import * as React from 'react';

export default (props: any) => (
  <div className='subcomponent'>
    Subcomponent
    {props.children}
  </div>
)