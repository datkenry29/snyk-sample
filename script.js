// Chèn trực tiếp giá trị người dùng vào DOM mà không có biện pháp bảo vệ
function load() {
  let value = $("#MyText").val();
  console.log(value);
  $("#content").html(value);
}
