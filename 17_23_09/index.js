$('#button-modal').on('click', function () {
    $('#myModal').modal('show');
    });
    
$("#close").on("click", function() {
    $("#myModal").modal("hide")
}) 

$(".btn-primary").on("click", function() {
    $("#myModal").modal("hide")
}) 

const $window = $(window);

$window.on("resize", function() {
    if($window.width() <= 768) {
        $('#myModal').modal('show'); 
    } else {
        $("#myModal").modal("hide")
    }
})



