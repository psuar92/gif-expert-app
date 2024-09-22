
export const getGifs = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=PUFY26w64bH8XXJwQtJGVFrD4Ti2Dd2k&q=${category}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));

    return gifs;
}