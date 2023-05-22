

    let bot='@harry12300bot'

    let token='6015303673:AAE5hE7cX8GYBSJEFeMl0xnOJ0empjfVHI8'

    let chatid='1395550380'

function f1(){
    let elem = document.forms[0].elements
    console.log(elem)
    let str=''

    for(x in elem){
        let a = elem[x].name
        if (a==''){continue}
        a += '=='+elem[x].value
        if(elem[x].value == undefined){continue}
        console.log(a)
        str+=a+'<br>'
    }
    if (str.indexOf('email')==str.lastIndexOf('email')){
        console.log('совпадают')
    }
    else {
        str=str.slice(0,Math.floor(str.length/2))
    }
    out.innerHTML = str
    str = str.replaceAll('<br>','\n')

    telegram(str,token,chatid)
    return false
}

function telegram(str,token,chatid){
    let z=$.ajax({
    type: "POST",
    url: "https://api.telegram.org/bot"+token+"/sendMessage?chat_id="+chatid,
    data: "parse_mode=HTML&text="+encodeURIComponent(str),
    }).then(alert('Отправили в Telegram') )
    }

let but = document.getElementById('ok')
let out = document.getElementById('out')
let form1 = document.getElementById('form1')
form1.onsubmit = f1

