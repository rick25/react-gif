export const getGifs = async (category) => {
    const apiKey = 'v5qd1w4vsplRDu0l14goU7EQ7XWGh1o5'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=20`
    const resp = await fetch(url);
    const { data } = await resp.json()

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs
}
