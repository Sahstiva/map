class Backend {
    static async getMarkers() {
        return JSON.parse(localStorage.getItem('markers')) || [];
    }

    static async addMarker(marker) {
        const markers = await this.getMarkers();
        const exist = markers.find(item => item.address === marker.address);
        if (exist) return exist;
        marker.id = Date.now();
        markers.push(marker);
        localStorage.setItem('markers', JSON.stringify(markers));
        return marker;
    }
    static async deleteMarker(markerId) {
        const markers = await this.getMarkers();
        const updatedMarkers = markers.filter((marker) => marker.id !== markerId);
        localStorage.setItem('markers', JSON.stringify(updatedMarkers));
    }

    static async deleteAllMarkers() {
        localStorage.setItem('markers', JSON.stringify([]));
    }
}

export default Backend;
