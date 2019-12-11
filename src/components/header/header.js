import React from 'react';
import Routes from './routes.js';

export default function Header() {
    return(
      <div class="header">
        <h1>Tokyo coffee map - with wifi & plug.</h1>
          <Routes/>
          <a href="https://github.com/theyij/tokyo-dev-map" rel="noopener
   noreferrer" target="_blank">
            <p>github</p>
          </a>
      </div>
    );
}
