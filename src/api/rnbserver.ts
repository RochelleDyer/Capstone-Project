let token = '7ca9f2d388d4930e065c080f4d099026ccbb04dcfd1f3f12'

// R&B Songs
export const rnbserver_calls = {
    get: async () => {
        const rnbresponse = await fetch(`https://capstone-project-backend-x3j1.onrender.com/api/rnbsongs`,
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
        const rnbresponse = await fetch(`https://capstone-project-backend-x3j1.onrender.com/api/rnbsongs`,
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
        const rnbresponse = await fetch(`https://capstone-project-backend-x3j1.onrender.com/api/rnbsongs/${id}`,
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
        const rnbresponse = await fetch(`https://capstone-project-backend-x3j1.onrender.com/api/rnbsongs/${id}`,
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