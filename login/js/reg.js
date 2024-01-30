
function _Form(){
    let user = document.forms['form']['user'].value
    let pass =  document.forms['form']['pass'].value
    let pass2 =  document.forms['form']['pass2'].value
    let email =  document.forms['form']['email'].value


 
    document.getElementById('user').addEventListener('input', function(){
        let txt = this.value
        if(
            (txt.search(/[ئ  ء ا-ی]/)) >= 0 ||
            (txt.search(/[0-9]/)) >= 0
        ){
            txt = txt.substring(0, txt.length-1)
            this.value = txt
        }
    })

    document.getElementById('email').addEventListener('input', function(){
        let txt = this.value
        if(
            (txt.search(/[ئ  ء ا-ی]/)) >= 0 
        ){
            txt = txt.substring(0, txt.length-1)
            this.value = txt
        }
    })
//  input1

    if( user == '' || user == null || (user.search(/<script/))>=0){
 
     document.getElementById('lab').innerText="Enter your username...!"
     document.getElementById('lab').style.color="#DC143C"
     document.getElementById('lab').style.fontFamily=" 'Times New Roman', Times, serif"
    }else if(user.search(/[!@#$%^&()=\s?<>:;"',/*-+-,-]/i)!= -1){
        document.getElementById('lab').innerText="Your username is incorrect..!"
        document.getElementById('lab').style.color="#DC143C"
        document.getElementById('lab').style.fontFamily=" 'Times New Roman', Times, serif"
    }
    else{
     document.getElementById('lab').innerText=""
    }
 

    //input2

    let _at = email.match(/@/g)
    if( email == '' || email == null || (email.search(/<script/))>=0){
        document.getElementById('lab1').innerText="Enter your email...!"
        document.getElementById('lab1').style.color="#DC143C"
             document.getElementById('lab1').style.fontFamily=" 'Times New Roman', Times, serif"

       
    }else if((email.search(/@/)) < 3 ||
    (_at.length) != 1 ){
        document.getElementById('lab1').innerText="You must at least put an ( @ ) "
        document.getElementById('lab1').style.color="#DC143C"
             document.getElementById('lab1').style.fontFamily=" 'Times New Roman', Times, serif"

       
    }else if(email.length < 10){
        document.getElementById('lab1').innerText="Your email is less than 10 ..!"
        document.getElementById('lab1').style.color="#DC143C"
             document.getElementById('lab1').style.fontFamily=" 'Times New Roman', Times, serif"

    }else if(email.search(/[!#$%^&()=\s?<>:;"',/*-+-,-]/i)!= -1){
        document.getElementById('lab1').innerText="Your email is incorrect..!"
        document.getElementById('lab1').style.color="#DC143C"
        document.getElementById('lab1').style.fontFamily=" 'Times New Roman', Times, serif"
    
    }else{
        document.getElementById('lab1').innerText=""
    }

//     //input3
 
    if( pass == '' || pass == null || (pass.search(/<script/))>=0
    ){
     document.getElementById('lab2').innerText="Enter your password...!"
     document.getElementById('lab2').style.color="#DC143C"
          document.getElementById('lab2').style.fontFamily=" 'Times New Roman', Times, serif"

 
    }else
    if(pass.length < 8){
     document.getElementById('lab2').innerText="Your password is less than 8 characters...! "
     document.getElementById('lab2').style.color="#DC143C"
          document.getElementById('lab2').style.fontFamily=" 'Times New Roman', Times, serif"

    }  else
    
    if((pass.search(/[A-Z]/)) == -1){
     document.getElementById('lab2').innerText= "Your password must contain uppercase letters A-z !"
     document.getElementById('lab2').style.color="#DC143C"
          document.getElementById('lab2').style.fontFamily=" 'Times New Roman', Times, serif"

 
    } 
     else
    if((pass.search(/[!@#$^&]/))==-1){
     document.getElementById('lab2').innerText= "Your password must contain special characters..!"
     document.getElementById('lab2').style.color="#DC143C"
          document.getElementById('lab2').style.fontFamily=" 'Times New Roman', Times, serif"

 
     } else if(pass.search(/[%()=\ `.<>:;"',/*-+-,-]/i)!= -1){
            document.getElementById('lab2').innerText="Your password is incorrect..!"
            document.getElementById('lab2').style.color="#DC143C"
            document.getElementById('lab2').style.fontFamily=" 'Times New Roman', Times, serif"
        }
    
    else
    
    if((pass.search(/[0-9]/)) == -1){
     document.getElementById('lab2').innerText= "Your password must contain numbers..!"
     document.getElementById('lab2').style.color="#DC143C"
          document.getElementById('lab2').style.fontFamily=" 'Times New Roman', Times, serif"

 
    } else 
    if((pass.search(/[a-z]/)) == -1){
     document.getElementById('lab2').innerText="Your password must contain lowercase letters a-z !"
     document.getElementById('lab2').style.color="#DC143C"
          document.getElementById('lab2').style.fontFamily=" 'Times New Roman', Times, serif"


    }
    else{
 
        document.getElementById('lab2').innerText=""
 }

 if( pass2 == '' || pass2 == null || (pass2.search(/<script/))>=0){
 
     document.getElementById('lab3').innerText="Enter your password...!"
     document.getElementById('lab3').style.color="#DC143C"
     document.getElementById('lab3').style.fontFamily=" 'Times New Roman', Times, serif"
    }else if( pass2 == pass){
     document.getElementById('lab3').innerText=""
    }else{
    document.getElementById('lab3').innerText="Your password is incorrect..!"
    document.getElementById('lab3').style.color="#DC143C"
    document.getElementById('lab3').style.fontFamily=" 'Times New Roman', Times, serif"
}

 return false
}