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
        url: '/add',
        data: values,
        success: function(data) {
            //console.log(data);
            //$('.output').children().remove();
            //$('.output').append('<div>' + data + '</div>');
        }
    });

    $.ajax({
        type: 'GET',
        url: '/add',

        success: function(data) {
            $('.output').children().remove();
            $('.output').append('<div>' + data + '</div>');
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
        url: '/sub',
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
        url: '/mult',
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
        url: '/divide',
        data: values,
        success: function(data) {

        }
    });
}