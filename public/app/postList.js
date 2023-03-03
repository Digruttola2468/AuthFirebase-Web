const div = document.querySelector(".iniciadoSesion");

export const setupPosts = (data) => {
    if(data.length) {
        let html = "";
        data.forEach(doc => {
            const post = doc.data();
            let container = `
                <b> ${post.title} </b>
                <b> ${post.content} </b>
                <br>
            `
            html += container;
        });
        div.innerHTML += html;
    }else {
        div.innerHTML += `<h1>There are no posts yet</h1>`
    }
}