$(document).ready(function () {
    show_order();
});

function show_order() {
    $.ajax({
        type: 'GET',
        url: '/mars',
        data: {},
        success: function (response) {
            const orders = response['orders']
            orders.filter((el)=>{
                console.log(el)
                const temp_html = `<tr>
                    <td>${el['name']}</td>
                    <td>${el['address']}</td>
                    <td>${el['size']}</td>
                </tr>`
                $('#order-box').append(temp_html)
            })
        }
    });
}

function save_order() {
    const name = $('#name').val();
    const address = $('#address').val();
    const size = $('#size').val();
    $.ajax({
        type: 'POST',
        url: '/mars',
        data: {
            name_give:name,
            address_give:address,
            size_give:size,
        },
        success: function (response) {
            alert(response['msg'])
            window.location.reload()
        }
    });
}