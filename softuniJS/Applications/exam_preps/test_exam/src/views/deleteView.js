import * as albumService from "../services/albumService.js";

export const deleteVeiw = async (ctx) => {
    try {
        const album = await albumService.getAlbumById(ctx.params.id)

        let confirmed = confirm(`Do you want to delete the album: ${album.name}`);

        if(confirmed) {
            await albumService.deleteAlbum(album._id);
            ctx.page.redirect('/catalog');
        }
    } catch (err) {
        alert(err);
    }

};