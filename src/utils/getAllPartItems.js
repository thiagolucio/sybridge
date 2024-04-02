const getAllPartsURL = 'http://localhost:5555/parts/';

export async function getAllParts() {
    const response = await fetch(getAllPartsURL);
    try {
        if(response.ok) {
            const data = await response.json();
            return data.data;
        }
    } catch (error) {
        console.error("Houston. We have a problem with our parts:", error);
    }
}

