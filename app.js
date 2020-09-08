let $ul = $('<ul></ul>')
$($ul).appendTo('body')

$('#btnSubmit').on('click',(e)=>{
    e.preventDefault()
    let someText = $('#inputText').val()
    let $li = $(`<li>${someText}</li>`)
    $($li).appendTo('ul')
    $($li).on('click',()=>{
        let x = Math.floor(Math.random()*256)
        let y = Math.floor(Math.random()*256)
        let z = Math.floor(Math.random()*256)
        let rgb = `rgb(${x},${y},${z})`
        $($li).css('color',rgb)
    })
    $($li).on('dblclick',()=>{
        $($li).remove() //why can't I use "this" instead of $li?
    })
})

//disables button to start
$('#btnSubmit').attr('disabled',true);

//enables/disables button 
$('#inputText').keyup(function(){ 
    if($(this).val().length !=0)
        $('#btnSubmit').attr('disabled', false);            
    else
        $('#btnSubmit').attr('disabled',true);
})

