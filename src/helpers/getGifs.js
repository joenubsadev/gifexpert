export const getGifs = async (category) => {
    const apiKey = 'G84xlDgF0kuObDZuD6PgUSnEvtWp1qDo'
    const url = 'https://api.giphy.com/v1/gifs/search'
    const search = `${url}?api_key=${apiKey}&q=${category}&limit=10`
    const resp = await fetch(search)
    const { data = [] } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));
    console.log(gifs);
    return gifs;
   
}
