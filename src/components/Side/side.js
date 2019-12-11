import React from 'react';
import Input from './input.js';
import Search from './search.js';
import Output from './output.js';


export default function Side() {
  return(
    <div class="side">
      <Search/>
      <Input/>
      <Output/>
    </div>
  );
}
