import * as postService from "../services/postService.js";

export const deleteView = async (ctx) => {
    const foundPost = await postService.getPostById(ctx.params.id);

        let confirmed = confirm(`Are you sure you want to delete post: ${foundPost.title}?`);

        if (confirmed) {
            let result = await postService.deletePost(foundPost._id);
            console.log(result);
            ctx.page.redirect('/');
        }
}