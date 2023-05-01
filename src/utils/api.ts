function getBaseUrl() {
    if (typeof window !== 'undefined') {
        return `${window.location.protocol}//${window.location.host}/api/category`;
    }
    return '';
}

export async function fetchData(endpoint: string) {
    try {
        const baseUrl = getBaseUrl();
        const response = await fetch(`${baseUrl}/${endpoint}`);
        if (!response.ok) {
            throw new Error(`Error fetching data from ${endpoint}: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
