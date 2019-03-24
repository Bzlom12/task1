$(document).ready(function() {
    
    $('.main_btna, .main_btn, li:nth-child(2)').on('click', function() {
        
        $('.overlay').animate({
            opacity: "toggle",
            display: 'block'
            }, 2000
        );
        $('.modal').animate({
            'opacity': "toggle",
            'height': "+=50px",
            'width': '+=50px',
            "top":"50px"

        }, 1500);
      
    });

    $('.close').on('click', function() {
        $('.overlay').animate({
            opacity: "toggle",
            display: 'none',
        }, 2000);
        $('.modal').animate({
            'height': "-=50px",
            'width': '-=50px',
            'opacity': "toggle",
            "top":"-50px"
        }, 1500);
    });
   $('form').submit(function(event) {
        event.preventDefault();

        $.ajax({
            type: $(this).attr('method'),
            url: $(this).attr('action'),
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            
            success: function() {
                alert('Ok');
            }
        });
   });
});