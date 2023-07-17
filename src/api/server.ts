let token = '342a60a402ff34133ff9c4153933bc7f8a71810d9fde3029'

// Alternative Songs

export const altserver_calls = {
    get: async () => {
        const altresponse = await fetch(`http://127.0.0.1:5000/api/altsongs`,
        {
            method: 'GET',
            headers: {
                "Content-type": "application/json",                
                "x-access-token" : `Bearer ${token}`,
            }
        });

        if(!altresponse.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await altresponse.json()
    },

    create: async (data: any = {}) => {
        const altresponse = await fetch(`http://127.0.0.1:5000/api/altsongs`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "x-access-token" : `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        });

        if(!altresponse.ok){
            throw new Error('Failed to create new data on the server')
        }

        return await altresponse.json()
    },

    update: async (id:string, data: any = {}) => {
        const altresponse = await fetch(`http://127.0.0.1:5000/api/altsongs/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "x-access-token" : `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        });

        if(!altresponse.ok){
            throw new Error('Failed to update data on server')
        }

        return await altresponse.json()
    },

    delete: async (id:string) => {
        const altresponse = await fetch(`http://127.0.0.1:5000/api/altsongs/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                "x-access-token" : `Bearer ${token}`,
            },

        });

        if(!altresponse.ok){
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}





// Blues Songs

export const bluserver_calls = {
    get: async () => {
        const bluresponse = await fetch(`http://127.0.0.1:5000/api/blusongs`,
        {
            method: 'GET',
            headers: {
                "Content-type": "application/json",                
                "x-access-token" : `Bearer ${token}`,
            }
        });

        if(!bluresponse.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await bluresponse.json()
    },

    create: async (data: any = {}) => {
        const bluresponse = await fetch(`http://127.0.0.1:5000/api/blusongs`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "x-access-token" : `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        });

        if(!bluresponse.ok){
            throw new Error('Failed to create new data on the server')
        }

        return await bluresponse.json()
    },

    update: async (id:string, data: any = {}) => {
        const bluresponse = await fetch(`http://127.0.0.1:5000/api/blusongs/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "x-access-token" : `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        });

        if(!bluresponse.ok){
            throw new Error('Failed to update data on server')
        }

        return await bluresponse.json()
    },

    delete: async (id:string) => {
        const bluresponse = await fetch(`http://127.0.0.1:5000/api/blusongs/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                "x-access-token" : `Bearer ${token}`,
            },

        });

        if(!bluresponse.ok){
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}





// Country Songs

export const countryserver_calls = {
    get: async () => {
        const countryresponse = await fetch(`http://127.0.0.1:5000/api/countrysongs`,
        {
            method: 'GET',
            headers: {
                "Content-type": "application/json",                
                "x-access-token" : `Bearer ${token}`,
            }
        });

        if(!countryresponse.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await countryresponse.json()
    },

    create: async (data: any = {}) => {
        const countryresponse = await fetch(`http://127.0.0.1:5000/api/countrysongs`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "x-access-token" : `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        });

        if(!countryresponse.ok){
            throw new Error('Failed to create new data on the server')
        }

        return await countryresponse.json()
    },

    update: async (id:string, data: any = {}) => {
        const countryresponse = await fetch(`http://127.0.0.1:5000/api/countrysongs/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "x-access-token" : `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        });

        if(!countryresponse.ok){
            throw new Error('Failed to update data on server')
        }

        return await countryresponse.json()
    },

    delete: async (id:string) => {
        const countryresponse = await fetch(`http://127.0.0.1:5000/api/countrysongs/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                "x-access-token" : `Bearer ${token}`,
            },

        });

        if(!countryresponse.ok){
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}





// Hip Hop Songs

export const hiphopserver_calls = {
    get: async () => {
        const hiphopresponse = await fetch(`http://127.0.0.1:5000/api/hiphopsongs`,
        {
            method: 'GET',
            headers: {
                "Content-type": "application/json",                
                "x-access-token" : `Bearer ${token}`,
            }
        });

        if(!hiphopresponse.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await hiphopresponse.json()
    },

    create: async (data: any = {}) => {
        const hiphopresponse = await fetch(`http://127.0.0.1:5000/api/hiphopsongs`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "x-access-token" : `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        });

        if(!hiphopresponse.ok){
            throw new Error('Failed to create new data on the server')
        }

        return await hiphopresponse.json()
    },

    update: async (id:string, data: any = {}) => {
        const hiphopresponse = await fetch(`http://127.0.0.1:5000/api/hiphopsongs/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "x-access-token" : `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        });

        if(!hiphopresponse.ok){
            throw new Error('Failed to update data on server')
        }

        return await hiphopresponse.json()
    },

    delete: async (id:string) => {
        const hiphopresponse = await fetch(`http://127.0.0.1:5000/api/hiphopsongs/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                "x-access-token" : `Bearer ${token}`,
            },

        });

        if(!hiphopresponse.ok){
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}





// Heavy Metal Songs

export const metalserver_calls = {
    get: async () => {
        const metalresponse = await fetch(`http://127.0.0.1:5000/api/metalsongs`,
        {
            method: 'GET',
            headers: {
                "Content-type": "application/json",                
                "x-access-token" : `Bearer ${token}`,
            }
        });

        if(!metalresponse.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await metalresponse.json()
    },

    create: async (data: any = {}) => {
        const metalresponse = await fetch(`http://127.0.0.1:5000/api/metalsongs`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "x-access-token" : `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        });

        if(!metalresponse.ok){
            throw new Error('Failed to create new data on the server')
        }

        return await metalresponse.json()
    },

    update: async (id:string, data: any = {}) => {
        const metalresponse = await fetch(`http://127.0.0.1:5000/api/metalsongs/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "x-access-token" : `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        });

        if(!metalresponse.ok){
            throw new Error('Failed to update data on server')
        }

        return await metalresponse.json()
    },

    delete: async (id:string) => {
        const metalresponse = await fetch(`http://127.0.0.1:5000/api/metalsongs/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                "x-access-token" : `Bearer ${token}`,
            },

        });

        if(!metalresponse.ok){
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}





// R&B Songs
export const rnbserver_calls = {
    get: async () => {
        const rnbresponse = await fetch(`http://127.0.0.1:5000/api/rnbsongs`,
        {
            method: 'GET',
            headers: {
                "Content-type": "application/json",                
                "x-access-token" : `Bearer ${token}`,
            }
        });

        if(!rnbresponse.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await rnbresponse.json()
    },

    create: async (data: any = {}) => {
        const rnbresponse = await fetch(`http://127.0.0.1:5000/api/rnbsongs`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "x-access-token" : `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        });

        if(!rnbresponse.ok){
            throw new Error('Failed to create new data on the server')
        }

        return await rnbresponse.json()
    },

    update: async (id:string, data: any = {}) => {
        const rnbresponse = await fetch(`http://127.0.0.1:5000/api/rnbsongs/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "x-access-token" : `Bearer ${token}`,
            },
            body: JSON.stringify(data)
        });

        if(!rnbresponse.ok){
            throw new Error('Failed to update data on server')
        }

        return await rnbresponse.json()
    },

    delete: async (id:string) => {
        const rnbresponse = await fetch(`http://127.0.0.1:5000/api/rnbsongs/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                "x-access-token" : `Bearer ${token}`,
            },

        });

        if(!rnbresponse.ok){
            throw new Error('Failed to delete data on server')
        }

        return;
    },
}