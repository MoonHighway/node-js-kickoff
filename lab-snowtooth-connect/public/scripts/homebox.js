$(document).ready(function () {

    var delay = 6000,
        boxes = $('section#main-image>div'),
        order = boxes.map(function(i) {
            var top = i*$(this).height();
            $(this).css('top', top + 'px');
            return this.id;
        });

    order = $.makeArray( order );

    setInterval(function () {
        moveUp(boxes, order);
    }, delay);

});

function moveUp(boxes, order) {

    var called = 0;

    boxes.animate({
        top: '-=' + boxes.first().height() + 'px'
    }, 1500, function () {

        if (called == boxes.size()-1) {
            resetBox(order, boxes);
        }

        called++;
    });

}

function resetBox(order, boxes) {

    var box = $('div#' + order[0]),
        top = box.height()*2,
        moved;

    $(box).css('top', top + 'px');

    moved = order.shift();
    order.push(moved);
}
