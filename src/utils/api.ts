export async function fetchData(
    category: string,
    currentPage: number,
    itemsPerPage: number,
    query: string,
) {
    try {
        const response = await fetch(`/api/${category}?page=${currentPage}&limit=${itemsPerPage}&q=${query}`);
        if (!response.ok) {
            throw new Error(
                `Error fetching data from ${category}: ${response.statusText}`
            );
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error in fetchData:", error);
        throw error;
    }
}



