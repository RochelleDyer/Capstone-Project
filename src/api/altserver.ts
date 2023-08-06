let token = '7ca9f2d388d4930e065c080f4d099026ccbb04dcfd1f3f12'

// Alternative Songs

export const altserver_calls = {
    get: async () => {
        const altresponse = await fetch(`https://capstone-project-backend-x3j1.onrender.com/api/altsongs`,
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
        const altresponse = await fetch(`https://capstone-project-backend-x3j1.onrender.com/api/altsongs`,
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
        const altresponse = await fetch(`https://capstone-project-backend-x3j1.onrender.com/api/altsongs/${id}`,
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
        const altresponse = await fetch(`https://capstone-project-backend-x3j1.onrender.com/api/altsongs/${id}`,
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