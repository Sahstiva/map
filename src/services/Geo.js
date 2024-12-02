const API_KEY=process.env.VUE_APP_API_KEY;
export async function geocode(latlng) {
    console.log('API KEY', API_KEY);
    const response = await fetch(
        `https://geocode.maps.co/reverse?lat=${latlng.lat}&lon=${latlng.lng}&api_key=${API_KEY}`
    );
    const data = await response.json();
    if (data && data.display_name) {
        return data.display_name;
    } else {
        throw new Error('Address not found');
    }
}

export async function getLocationByIP() {
    try {
        const ip = await getIPAddress();
        const response = await fetch(`https://ipapi.co/${ip}/json/`);
        const data = await response.json();
        if (data && data.latitude && data.longitude) {
            return [data.latitude, data.longitude];
        } else {
            throw new Error('Не удалось определить геопозицию по IP');
        }
    } catch (error) {
        console.error(error);
    }
}

export async function getIPAddress() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error('Не удалось получить IP-адрес:', error);
        throw error;
    }
}

