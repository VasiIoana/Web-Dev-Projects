$(document).ready(function() {
    let itemCount = 5; 
    let is_loading = false; 

    $(window).scroll(function() {
        if ($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {
            
            if (!is_loading) {
                loadMoreContent();
            }
        }
    });

    function loadMoreContent() {
        is_loading = true;
        $("#loading-message").show();

        setTimeout(function() {
            for (let i = 0; i < 5; i++) {
                itemCount++;
                $("#item-list").append('<div class="content-block">Item ' + itemCount + '</div>');
            }
                    console.log("nu");


            $("#loading-message").hide();
            is_loading = false;
        }, 0); // 1 second delay

        console.log("da");
    }
});