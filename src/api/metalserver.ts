let token = '7ca9f2d388d4930e065c080f4d099026ccbb04dcfd1f3f12'

// Heavy Metal Songs

export const metalserver_calls = {
    get: async () => {
        const metalresponse = await fetch(`https://capstone-project-backend-x3j1.onrender.com/api/metalsongs`,
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
        const metalresponse = await fetch(`https://capstone-project-backend-x3j1.onrender.com/api/metalsongs`,
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
        const metalresponse = await fetch(`https://capstone-project-backend-x3j1.onrender.com/api/metalsongs/${id}`,
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
        const metalresponse = await fetch(`https://capstone-project-backend-x3j1.onrender.com/api/metalsongs/${id}`,
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
