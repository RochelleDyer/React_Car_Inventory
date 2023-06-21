const token = 'c760668ba49b6afa140f22be4d9e28467c44ef4bb6016d14'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://car-inventory-api.onrender.com/api/cars`,
        {
            method: 'GET',
            headers: {
                "Content-type": "application/json",
                'Access-Control-Allow-Origin':'*',
                'x-access-token': `Bearer ${token}` ,
                
            },
            
         });
        

        if(!response.ok){
            throw new Error('Failed to fetch data from the server')
        }

        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://car-inventory-api.onrender.com/api/cars`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*',
                'x-access-token': `Bearer ${token}`,
                                
            },

            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to create new data on the server')
        }

        return await response.json()
    },

    update: async (id:string, data: any = {}) => {
        const response = await fetch(`https://car-inventory-api.onrender.com/api/cars/${id}`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin':'*'
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to update data on server')
        }

        return await response.json()
    },

    delete: async (id:string) => {
        const response = await fetch(`https://car-inventory-api.onrender.com/api/cars/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'Access-Control-Allow-Origin':'*'
            },

        });

        if(!response.ok){
            throw new Error('Failed to delete data on server')
        }

        return;
    },
    
}
