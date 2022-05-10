function attachEvents() {
    const btnLoadPosts = document.getElementById('btnLoadPosts');
    const getAllPostsUrl = `http://localhost:3030/jsonstore/blog/posts`;
    const postsList = document.querySelector('#posts');
    const postTitlteElement = document.querySelector('#post-title');
    const postBodyElement = document.querySelector('#post-body');
    const btnViewPost = document.querySelector('#btnViewPost');
    const postCommentsElement = document.querySelector('#post-comments');

    const loadComments = async function (postId) {
        postCommentsElement.replaceChildren();
        const response = await fetch(`http://localhost:3030/jsonstore/blog/comments`)
        try {
            if(!response.status === 200) throw new Error('error');

            const data = await response.json();
            for (let post in data) {
                if(data[post]['postId'] === postId) {
                    const liElement = document.createElement('li');
                    liElement.setAttribute('id', data[post]['id']);
                    liElement.textContent = data[post]['text'];
                    postCommentsElement.appendChild(liElement);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }


    const loadPosts = async function (event) {
        const response = await fetch(getAllPostsUrl)

        try {
            if (!response.status === 200) throw new Error('Error!');
            const data = await response.json();
            for (let postKey in data) {
                const postOption = document.createElement('option');
                postOption.value = postKey;
                postOption.textContent = data[postKey]['title'];
                postsList.appendChild(postOption);
            }

        }
        catch (error) {
            console.log(error);
        }
    }

    const showPost = async function (event) {
        const response = await fetch(`${getAllPostsUrl}/${postsList.value}`);

        try {
            if (!response.status === 200) throw new Error('error');

            const data = await response.json();
            postBodyElement.textContent = data.body;
            postTitlteElement.textContent = data.title;
            await loadComments(data.id);

        } catch (error) {
            console.log(error);

        }


    }

    btnLoadPosts.addEventListener('click', loadPosts.bind(this));

    btnViewPost.addEventListener('click', showPost.bind(this));
}

attachEvents();