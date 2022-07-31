$(document).ready(function(){

            
    $("#submit-form").validate({
        rules:{
            firstname:{
                required:true,
                minlength:3
            },
            email:{
                required:true,
                email:true,
            },
            numberphone:{
                required:true,
                number:true,
                minlength:10,
                maxlength:10
            },
            writehere:{
                required:true,
                minlength:3
            },
        },
        messages:{
            firstname:{
                required:"fill this part",
                minlength:"valid name please"
            },
            email:{
                required:"fill this part",
                email:"valid email please"
                
            },
            numberphone:{
                required:"fill this part",
                number:"numbers please",
                minlength:"valid number please",
                maxlength:"valid number please"
                
            },
            writehere:{
                required:"fill this part",
                minlength:"write your thoughts man"
                
            },
        }
       
    })



})