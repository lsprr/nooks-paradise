function getBaseUrl() {
    if (typeof window !== 'undefined') {
        return `${window.location.protocol}//${window.location.host}/api/category`;
    }
    return '';
}

export async function fetchData(
    endpoint: string,
    currentPage: number,
    itemsPerPage: number,
) {
    try {
        const baseUrl = getBaseUrl();
        const response = await fetch(`${baseUrl}/${endpoint}?page=${currentPage}&limit=${itemsPerPage}`);
        if (!response.ok) {
            throw new Error(
                `Error fetching data from ${endpoint}: ${response.statusText}`
            );
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error in fetchData:", error);
        throw error;
    }
}



