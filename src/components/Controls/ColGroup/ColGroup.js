import React from 'react';
import Control from '../Control/Control';

const ColGroup = (props) => {
  return (
    <div className="btn-group-vertical" role={props.role}>
      {props.elems.map(elem =>
        <Control
          active={elem.active}
          blue={props.blue}
          key={elem.name}
          label={elem.name}
          toggle={() => props.toggle(elem.name)} />
      )}
    </div>
  )
}

export default ColGroup;
