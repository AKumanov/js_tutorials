import * as shoeServices from "../services/shoeServices.js";

export const deleteShoeView = async(ctx) => {
    const shoe = await shoeServices.getShoeById(ctx.params.id)

    let confirmed = confirm(`Are you sure you want to delete shoe: ${shoe.model}`);

    if (confirmed) {
        await shoeServices.deleteShoe(ctx.params.id);
        ctx.page.redirect('/dashboard');
    }
}