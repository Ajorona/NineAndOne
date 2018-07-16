import React from 'react';
import Control from '../Control/Control';

const RowGroup = (props) => {
  return (
    <div className="btn-group" role={props.role}>
      {props.elems.map(elem =>
        <Control
          active={elem.active}
          vertical={false}
          key={elem.name}
          label={elem.name}
          toggle={() => props.toggle(elem.name)} />
      )}
    </div>
  )
}

export default RowGroup;
