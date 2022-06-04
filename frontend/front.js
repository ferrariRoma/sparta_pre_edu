function open_box() {
  $('#post-box').show();
}
const close_box = (event) => {
  $('#post-box').hide();
};
// $('#post-box').hide();
const button = document.getElementsByClassName("buttonBox__close");
button[0].addEventListener("click", close_box);

$.ajax({
  type: "GET",
  url: "http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99",
  data: {},
  success: function(response){
    response.RealtimeCityAir['row'].forEach((el)=> {
      console.log(el['MSRSTE_NM'], ':', el.IDEX_MVL);
    })
  }
})