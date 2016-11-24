var arrayOfWindows = [$("#main"), $("#solving"), $("#creating"), $("#settings"), $("#registration")];

$("#dropdownButton").on("click", function(){
    if ($("#showList").hasClass("hidden")){
        $("#showList").removeClass("hidden");
        $("#showList").addClass("block");
    }
    else{
        $("#showList").removeClass("block");
        $("#showList").addClass("hidden");
    }
})

$(".backButton").on("click", function(){
    $(".backButton").parent().removeClass("block");
    $(".backButton").parent().addClass("hidden");
    $("#main").removeClass("hidden");
    $("#main").addClass("block");
})

$("#goToSolvingButton").on("click", function(){
    $("#main").removeClass("block");
    $("#main").addClass("hidden");
    $("#solving").removeClass("hidden");
    $("#solving").addClass("block");
    $.getJSON("http://127.0.0.1:8080/crosswords/crosswordsList.json").done(function(data){
        for (var i = 0; i < data.length; i++) {
            var template = $("<ul>");
            template.addClass("crosswordStringTemplate");
            template.append( $("<li>").html("Name: " + data[i].name));
            template.append( $("<li>").html("Size: " + data[i].sizeX + "x" + data[i].sizeY));
            template.append( $("<li>").html("Author: " + data[i].author));
            template.append( $("<li>").html("Complexity: " + data[i].complexity));
            $("#crosswordsList").append(template);
        }
    })   
})

$("#goToCreatingButton").on("click", function(){
    $("#main").removeClass("block");
    $("#main").addClass("hidden");
    $("#creating").removeClass("hidden");
    $("#creating").addClass("block");
})

$("#goToSettingsButton").on("click", function(){
    $("#main").removeClass("block");
    $("#main").addClass("hidden");
    $("#settings").removeClass("hidden");
    $("#settings").addClass("block");
})

$("#goToRegistrationButton").on("click", function(){
    for (var i = 0; i < arrayOfWindows.length - 1; i++){
        arrayOfWindows[i].removeClass("block");
        arrayOfWindows[i].addClass("hidden");
    }
    $("#registration").removeClass("hidden");
    $("#registration").addClass("block");
})

$("#confirmPassword").on("keyup", function(){
    if ($("#confirmPassword").val() != "" && $("#createPassword").val() != "" && $("#confirmPassword").val() != $("#createPassword").val()){
        $("#confirmPassword").addClass("warning");
    }
    else if ($("#confirmPassword").val() != "" && $("#createPassword").val() != "" && $("#confirmPassword").val() == $("#createPassword").val()){
        $("#confirmPassword").removeClass("warning");
    }
})

// Домашнее задание по localStorage
var str = "";
$("input[name=item]").on("click", function(target){
    str += $("input:radio:checked").val() + " ";
    localStorage.setItem("value", str);
})
$("#recall").on("click", function(){
        $("#outputValue").html(localStorage.getItem("value"));
})
$("#clearStorage").on("click", function(){
    localStorage.setItem("value", "");
    str = "";
})
