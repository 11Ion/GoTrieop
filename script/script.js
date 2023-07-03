(function() {
    var rotate, timeline;
    var isDragging = false;
    var startX, endX;
    var lastSlideChange = Date.now();

    rotate = function() {
        $('.card:first-child').fadeOut(400, 'swing', function() {
            $('.card:first-child').appendTo('.gallery').hide();
        }).fadeIn(500, 'swing');
        lastSlideChange = Date.now(); 
    };

    $('.next').click(function() {
        rotate();
    });

    $('.back').click(function() {
        $('.card:last-child').prependTo('.gallery').hide().fadeIn(400, 'swing');
        lastSlideChange = Date.now();
    });

    $('.image').on('mousedown touchstart', function(event) {
        isDragging = true;
        startX = event.pageX || event.originalEvent.touches[0].pageX;
    });

    $(document).on('mousemove touchmove', function(event) {
        if (isDragging) {
            endX = event.pageX || event.originalEvent.touches[0].pageX;
        }
    });

    $(document).on('mouseup touchend', function() {
        if (isDragging) {
            isDragging = false;
            if (endX > startX) {
                rotate();
            }
        }
    });

    setInterval(function() {
        var currentTime = Date.now();
        var elapsedTime = currentTime - lastSlideChange;
        if (!isDragging && elapsedTime >= 7000) {
            rotate();
        }
    }, 5000);
})();
