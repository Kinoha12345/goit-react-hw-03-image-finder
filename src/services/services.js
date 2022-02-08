export default function getPhotos (photos,page) {
    const BASE_URL = 'https://pixabay.com/api/';
    const KEY  = '25285142-2756dd9fbbfad4490da234cf6';
    const url = `${BASE_URL}?key=${KEY}&q=${photos}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`
    console.log(page);
    return fetch(url).then(response=>  {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
    }