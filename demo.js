$(function() {
    var $canvas = $('<canvas width="100" height="100">'),
    ctx = $canvas[0].getContext('2d');

    $('body').append($canvas);
    chain(ctx).fillRect(10, 10, 10, 10).fillRect(30, 30, 10, 10);
});

