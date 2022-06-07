$(document).ready(function(){
    listing();
});

function listing() {
    $.ajax({
        type: 'GET',
        url: '/movie',
        data: {},
        success: function (response) {
            const movies = response['movies'];
            let comment, description, image, star, title;
            for(let i=0; i<movies.length; i++){
                comment = movies[i]['comment'];
                description = movies[i]['description'];
                image = movies[i]['image'];
                star = '⭐'.repeat(movies[i]['star']);
                title = movies[i]['title'];
                const temp_html = `
                    <div class="col">
                        <div class="card h-100">
                            <img src=${image} class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${title}</h5>
                                <p class="card-text">${description}</p>
                                <p>${star}</p>
                                <p class="mycomment">${comment}</p>
                            </div>
                        </div>
                    </div>
                `
                $('#cards-box').append(temp_html)
            }
        }
    })
}

function posting() {
    const url_give = $('#url').val();
    const star_give = $('#star').val();
    const comment_give = $('#comment').val();
    $.ajax({
        type: 'POST',
        url: '/movie',
        data: {
            url_give,
            star_give,
            comment_give
        },
        success: function (response) {
            alert(response['msg'])
        }
    });
}

function open_box(){
    $('#post-box').show()
}
function close_box(){
    $('#post-box').hide()
}