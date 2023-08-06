let token = '7ca9f2d388d4930e065c080f4d099026ccbb04dcfd1f3f12'

// Blues Songs

export const bluserver_calls = {
    get: async () => {
        const bluresponse = await fetch(`https://capstone-project-backend-x3j1.onrender.com/api/blusongs`,
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
        const bluresponse = await fetch(`https://capstone-project-backend-x3j1.onrender.com/api/blusongs`,
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
        const bluresponse = await fetch(`https://capstone-project-backend-x3j1.onrender.com/api/blusongs/${id}`,
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
        const bluresponse = await fetch(`https://capstone-project-backend-x3j1.onrender.com/api/blusongs/${id}`,
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