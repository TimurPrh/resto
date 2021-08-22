export default class RestoService {
    async getMenuItems() {
        const res = await fetch('http://localhost:3000/menu/');
        if (!res.ok) {
            throw new Error(`Could not fetch, status: ${res.status}`);
        }
        return await res.json();
    }
    async postMenuItems(data) {
        const res = await fetch('http://localhost:3000/order/', {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!res.ok) {
            throw new Error(`Could not fetch, status: ${res.status}`);
        }
        return await res.json();
    }
}