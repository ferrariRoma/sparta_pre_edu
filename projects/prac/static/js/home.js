// async/await
// async function getQuery(){
//     const res = await fetch('/test?title_give=봄날은 왔다!', {
//         method: "GET",
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     })
//     const data = await res.json()
//     return console.log(data);
// }

// async/await 와 then
// async function getQuery(){
//     const res = await fetch('/test?title_give=봄날은 왔다!', {
//         method: "GET",
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     })
//     return res.json();
// }
// getQuery().then((data)=>console.log(data));

// jQuery ajax
// function postQuery() {
//     $.ajax({
//         type: "POST",
//         url: "/test",
//         data: {title_give: '봄날은 간다'},
//         success: function(res) {
//             console.log(res['msg']);
//         }
//     })
// }

 // const homeBtn = document.querySelector('button');
// homeBtn.addEventListener("click", getQuery);