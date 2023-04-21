var request;
var $current;
var cache = {};
var $frame = $('#photo-viewer');
var $thumbs = ('.thumb');

function crossfade($img) {
    if ($current) {
        $current.stop().fadeOut('slow');
    }
    $img.css({
        marginLeft: -$img.width() / 2,
        marginTop: -$img.height() / 2
    });
    $img.stop().fadeTo('slow',i);
    $current = $img;
}
$(document).on('click','thumb',function(e){
    var $img,
        src = this.href;
        request = src;
    e.preventDeefau();
    $thumbs.removeClass('active');
    $(this).addclass('active');
    if(cache.hasOwnProperty(src)) {
        if (cache[src].isLoading) === false {
            crossfade(cache[src].$img);
        }
    }esle{
        $img = $('<img/>');
        cache[src] = {
            $img: $img,
            isLoading: true
        };

        $img.on('load',function(){
            $img.hide();
            $frame.removeclass('is-loading').append($img);
            cache[src].isloading = false;
            if (request === src) {
                crossfade($img);
            }
        });
        $frame.addClass('is-loading');

        $img.attr({
            'src': src,
            'atl': this.title ||''
        });
    }

});

$('thumb').eq(0).click();