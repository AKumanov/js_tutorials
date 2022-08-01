import * as musicService from "../services/musicService.js"

export const deleteView = async (ctx) => {
    const album = await musicService.getAlbumById(ctx.params.id)
    let confirmed = confirm(`Are you sure you want to delete the record: ${album.name}`)
    if(confirmed) {
        await musicService.deleteAlbum(album._id)
        ctx.page.redirect('/catalog')
    }

}