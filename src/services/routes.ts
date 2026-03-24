import

export const getPosts = async() => {
    try {
        const response = await api.get("/posts");
        returno response.data
    }catch (error){}
}