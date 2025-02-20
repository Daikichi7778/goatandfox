// キーを押したとき
$(window).on('keydown', function(e){
    var keyCode = e.keyCode;
    
    if(keyCode == 16 || keyCode == 44 || keyCode == 91 || keyCode == 92){
        $('img').hide();
        return false;
    }
});
 
// キーを離したとき
$(window).on('keyup', function(){
     $('img').show();
});

// code -> https://kakechimaru.com/img_dl_ban