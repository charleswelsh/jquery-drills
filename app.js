let formVal = $("#inputText").val();

// $("<div class = 'textDiv'></div>").insertAfter(".myForm");

if (formVal=== "") {
    $("#btnSubmit").attr("disabled", true);
}

$("#inputText").keyup(()=> {
    $("#btnSubmit").attr("disabled", false);
})

// $("#btnSubmit").click(() => {
//     $("<h2>"+ $("#inputText").val() + "</h2>").appendTo(".textDiv")
// })

$("<ul class ='list-group'></ul>").insertAfter(".my-form");

$("#btnSubmit").click(() => {
    $("<li class='list-item'>"+ $("#inputText").val() + "</li>").appendTo(".list-group")
    $(".list-item").click(() => {
        console.log("clicked")
        $(event.target).css("color", getRandomColor());
    })
    $(".list-item").dblclick(() => {
        $(event.target).remove();
    })
})


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }