$(function (){
    

    var uname=localStorage.getItem('USERID');
    // get_value_from_storage('USERID');
    $('.uname').html(uname);
    
    $(document).on('click','.class-list li',function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })
    var classname=['移动2班','软信2班','网销2班'];
    var liContent= '';
    for(var i = 0;i < classname.length;i++){
        liContent+='<li>'+classname[i]+'</li>';
    }
    $('.class-list').html(liContent);
})