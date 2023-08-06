let token = '7ca9f2d388d4930e065c080f4d099026ccbb04dcfd1f3f12'

// Country Songs

export const countryserver_calls = {
    get: async () => {
        const countryresponse = await fetch(`https://capstone-project-backend-x3j1.onrender.com/api/countrysongs`,
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
        const countryresponse = await fetch(`https://capstone-project-backend-x3j1.onrender.com/api/countrysongs`,
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
        const countryresponse = await fetch(`https://capstone-project-backend-x3j1.onrender.com/api/countrysongs/${id}`,
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
        const countryresponse = await fetch(`https://capstone-project-backend-x3j1.onrender.com/api/countrysongs/${id}`,
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