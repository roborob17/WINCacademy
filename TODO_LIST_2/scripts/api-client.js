const apiUrl = "http://localhost:3000/";

// GET
export const getData = async() => {
    try {
        const response = await fetch(apiUrl, {
            method: "GET",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.log(error);
    }
}

// POST
export const postTodo = async(data) => {
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.log(error);
    }
}

// DELETE
export const deleteTodo = async(id) => {
    const endpoint = `http://localhost:3000/${id}`;
    try {
        const response = await fetch(endpoint, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.log(error);
    }
}

// UPDATE
export const updateTodo = async(id, data) => {
    const endpoint = `http://localhost:3000/${id}`;
    try {
        const response = await fetch(endpoint, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        console.log(error);
    }
}
