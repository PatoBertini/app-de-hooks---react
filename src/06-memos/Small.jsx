import React from "react";
import {memo} from 'react'

const Small = ({ value }) => {


    console.log('me volvi a dibujar :(');
  return (
    <div>
      <h2>{value}</h2>
    </div>
  );
};

export default memo(Small);
