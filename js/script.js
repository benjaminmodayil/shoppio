$(document).ready(function() {


    function deleteTask() {

        $('.xe').on('click', function(e) {
            e.preventDefault();
            var $newCheck = $(this).parent().parent().slideUp("fast", function() {
                $(this).remove().fadeOut();
            });
            checkTasks();

        });
    }

    function checkTasks() {
        var itemsLeft = $('li.item').length;
        if (itemsLeft == 1) {
            var visible = $('.visible').css('visibility', 'visible').hide().fadeIn('medium');
        }

        // else {
        // 	alert('there has been an error')
        // }
    };
    deleteTask();

    function completeTask() {
        $('.check').on('click', function(e) {
            e.preventDefault();
            var $tec = $(this).parent().parent().fadeIn('slow', function() {
                $(this).css('text-decoration', 'line-through');
            });
        });
    }
    completeTask();

    $('form').on('submit', function(e) {
        e.preventDefault();
        var $data = $('.input').val();
        var el = $("<li class=\"item\"><a href=\"#\"><img src=\"images/svgs/fi-x.svg\" alt=\"delete\" class=\"xe\"/></a><p>" + $data +
            "</p><a href=\"#\"><img src=\"images/svgs/fi-check.svg\" alt=\"completed\" class=\"check\"/></a></li>");
        var $data = $('.input').val('');
        $(el).prependTo('ul.items').hide().slideDown(200);
        deleteTask();
        completeTask();
        if($('.visible').hasClass('visible')) {
            $('.visible').css('visibility', 'hidden');
        }

    });







});
