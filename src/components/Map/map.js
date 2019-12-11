import React from 'react';
import

export default function Map() {
    const map = (<div class="map">
        <SimpleMap/>
    </div>);
    ReactDOM.render(map, document.getElementById('map'));
}
