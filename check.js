$(function (){
    $('input[name^="parent"]').change(function() {
        if ($(this).is(':checked')) {
            $(this).parents('.checkbox').find('input:checkbox').prop('checked', true);
        }else{
            $(this).parents('.checkbox').find('input:checkbox').prop('checked', false);
        }
    });
});