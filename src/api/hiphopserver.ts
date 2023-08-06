let token = '7ca9f2d388d4930e065c080f4d099026ccbb04dcfd1f3f12'

// Hip Hop Songs

export const hiphopserver_calls = {
    get: async () => {
        const hiphopresponse = await fetch(`https://capstone-project-backend-x3j1.onrender.com/api/hiphopsongs`,
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
        const hiphopresponse = await fetch(`https://capstone-project-backend-x3j1.onrender.com/api/hiphopsongs`,
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
        const hiphopresponse = await fetch(`https://capstone-project-backend-x3j1.onrender.com/api/hiphopsongs/${id}`,
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
        const hiphopresponse = await fetch(`https://capstone-project-backend-x3j1.onrender.com/api/hiphopsongs/${id}`,
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