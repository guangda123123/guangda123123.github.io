function sayhello(){
console.log("12345")
var str =$("input").val();
$("#output").text(str);
}
$("#test").bind('click',sayhello);