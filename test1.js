var a = ["",""];
let options = document.querySelectorAll(`select[id='c'] option`);
const el = document.getElementById("res")

document.querySelector(`select[id='c']`).addEventListener(`change`, function () {
	for (let e of options) {
		//console.log(e.value, e.selected);
        if (e.selected){
            el.innerHTML=e.value;
            a[0]=[e.value];
            var c = 0;
            for(var f of options){
                if(f.selected){
                   document.cookie='req='+c+';max-age=6000' 
                   break;
                }
                c++;
            }
            break;
        }
	}
})


let options2 = document.querySelectorAll(`select[id='r'] option`);
const el2 = document.getElementById("ri")

document.querySelector(`select[id='r']`).addEventListener(`change`, function () {
	for (let e of options2) {
		//console.log(e.value, e.selected);
        if (e.selected){
            el2.innerHTML=e.value;
            a[1]=[e.value];
            var c = 0;
            for(var f of options2){
                if(f.selected){
                   document.cookie='pos='+c+';max-age=6000' 
                   break;
                }
                c++;
            }
            break;
        }
	}
})

//-------------------------------------------------------

function bt(){
    const ua = navigator.userAgent;
    if (ua.indexOf('Mobile') > -1 || ua.indexOf('iPad') > -1 || ua.indexOf('Android') > -1) {
        // スマートフォン
        alert('appやで');
        window.location.href = 'twitter://post?message=%23'+t()+'%0A';
    } else {
        // PC
        alert('PCやで');
        //const eln = document.getElementById("tx")
        //eln.innerHTML=a;
        window.location.href = 'https://twitter.com/intent/tweet?text=%23'+t()+'%0A'+tmp();
    }
}

function t(){
    var tag1="";
    tag1=tag1+a[0]+"求";
    tag1=tag1+a[1]+'譲';
    return tag1;
}


var el_tx=document.getElementById('tx');
function tmp(){
    var s='＜Liella 3rd ガチャ缶バッチ交換情報＞%0A【譲】%0A【求】'
    //el_tx.innerHTML=s;
    return s;
}

//-----------------------------------------------------

function search(){
    var tag = "";
    tag=tag+a[1]+"求";
    tag=tag+a[0]+'譲';
    const ua1 = navigator.userAgent;
    if (ua1.indexOf('Mobile') > -1 || ua1.indexOf('iPad') > -1 || ua1.indexOf('Android') > -1) {
        // スマートフォン
        alert('appやで');
        window.location.href = 'twitter://search?query=%23'+tag;
    } else {
        // PC
        alert('PCやで');
        window.location.href = 'https://twitter.com/search?q=%23'+tag+'&src=typed_query';
    }


}

//--------------------------------------------------

function spl_req(){
    var cok = document.cookie.split(';');
    var cc_req = 0;
    for(var l of cok){
        if(l.indexOf("req")>-1){
            var c_req = cok[cc_req].split('=');
            var nc_req = Number(c_req[1]);
            return nc_req;
        }
        cc_req++;
    }
}

function spl_pos(){
    var cok = document.cookie.split(';');
    var cc_pos = 0;
    for(var l of cok){
        if(l.indexOf("pos")>-1){
            var c_pos = cok[cc_pos].split('=');
            var nc_pos = Number(c_pos[1]);
            return nc_pos;
        }
        cc_pos++;
    }
}

//-----------------------------------------------
function redi(){
if(document.cookie == ""){
    console.log("none");
}else{
    console.log(a);
}

var r_spl=document.cookie.split(";");

if(r_spl[0]!="" && r_spl[1]!=""){
    var in_req = document.getElementById("c");
    var op_req =in_req.options[spl_req()].value;
    console.log(op_req);
    in_req.options[spl_req()].selected = true;
    el.innerHTML=op_req;
    a[0]=op_req;

    var in_pos = document.getElementById("r");
    var op_pos =in_pos.options[spl_pos()].value;
    console.log(op_pos);
    in_pos.options[spl_pos()].selected = true;
    el2.innerHTML=op_pos;
    a[1]=op_pos;
}else{
    el.innerHTML="選択してください";
    el2.innerHTML="選択してください";
}
alert('reload');

}
window.onload=redi();