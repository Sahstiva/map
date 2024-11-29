class Backend {
    static async getMarkers() {
        const markers = JSON.parse(localStorage.getItem('markers')) || [];
        return markers;
    }

    static async addMarker(marker) {
        const markers = await this.getMarkers();
        marker.id = Date.now();
        markers.push(marker);
        localStorage.setItem('markers', JSON.stringify(markers));
        return marker;
    }
}

export default Backend;
