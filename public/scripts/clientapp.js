$(document).ready(function() {
    $('.buttons').on('click', '.add', calculateAdd);
});

function calculateAdd() {
    event.preventDefault();
    var values = {};

    $.each($('#calcInput').serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });
    //console.log(values);

    $('.calcInput').find('input[type=text]').val('');

    $.ajax({
        type: 'POST',
        url: '/math',
        data: values,
        success: function(data) {
            //console.log(data);
            //$('.output').children().remove();
            //$('.output').append('<div>' + data + '</div>');
        }
    });
}