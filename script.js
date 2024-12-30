function loadAlbumsFromJSON(jsonData) {
    const albums = jsonData.map(albumData => {
        const tracks = albumData.tracklist.map(trackData => new Track(trackData.name, trackData.duration));
        return new Album(albumData.title, albumData.artist, albumData.releaseYear, tracks);
    });
    return albums;
}