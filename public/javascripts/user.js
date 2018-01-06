/*document.querySelector(".delete-user-btn")
    .addEventListener("click", function(ev) {
        var btn = ev.currentTarget;
        var url;
        if (confirm("Törli a felhasználót?")) {
            var xhr = new XMLHttpRequest();
            xhr.onload = function(ev) {
                console.log(ev);
            };  
            url = "/users/delete/" + btn.getAttribute("data-id");
            xhr.open("get", url);
            xhr.send();          
        }
    });*/

$(".delete-user-btn").on("click", function() {
    var btn = $(this);
    var url = "/users/delete/" + btn.data("id");
    $.get(url, function(resp) {
        console.log(resp);
    });
});