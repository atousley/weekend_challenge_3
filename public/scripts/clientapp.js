$(document).ready(function() {
    $('#calcInput').on('click', '#add', calculateAdd);
    $('#calcInput').on('click', '#sub', calculateSub);
    $('#calcInput').on('click', '#mult', calculateMult);
    $('#calcInput').on('click', '#div', calculateDiv);
});

function calculateAdd() {
    event.preventDefault();
    var values = {};

    $.each($('#calcInput').serializeArray(), function(i, field) {
        values.type = 'add';
        values[field.name] = field.value;
    });

    console.log(values);

    $('#calcInput').find('input[type=text]').val('');

    $.ajax({
        type: 'POST',
        url: '/math',
        data: values,
        success: function(data) {
            $.ajax({
                type: 'GET',
                url: '/add',
                success: function (data) {
                    console.log('From Server: ', data);
                    $('.output').append('<div>' + data + '</div>');
                }
            });
            //console.log(data);
            //$('.output').children().remove();
            //$('.output').append('<div>' + data + '</div>');
        }
    });
}

function calculateSub() {
    event.preventDefault();
    var values = {};

    $.each($('#calcInput').serializeArray(), function(i, field) {
        values.type = 'sub';
        values[field.name] = field.value;

    });
    console.log(values);

    $('#calcInput').find('input[type=text]').val('');

    $.ajax({
        type: 'POST',
        url: '/math',
        data: values,
        success: function(data) {

        }
    });
}

function calculateMult() {
    event.preventDefault();
    var values = {};

    $.each($('#calcInput').serializeArray(), function(i, field) {
        values.type = 'mult';
        values[field.name] = field.value;

    });
    console.log(values);

    $('#calcInput').find('input[type=text]').val('');

    $.ajax({
        type: 'POST',
        url: '/math',
        data: values,
        success: function(data) {

        }
    });
}

function calculateDiv() {
    event.preventDefault();
    var values = {};

    $.each($('#calcInput').serializeArray(), function(i, field) {
        values.type = 'div';
        values[field.name] = field.value;

    });
    console.log(values);

    $('#calcInput').find('input[type=text]').val('');

    $.ajax({
        type: 'POST',
        url: '/math',
        data: values,
        success: function(data) {

        }
    });
}