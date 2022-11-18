var a = ["",""];
var b =["",""];
const chr_lst=['澁谷かのん','唐可可','嵐千砂都','平安名すみれ','葉月恋','桜小路きな子','米女メイ','若菜四季','鬼塚夏美'];
const name_lst=['かのん','可可','千砂都','すみれ','恋','きな子','メイ','四季','夏美'];


let options = document.querySelectorAll(`select[id='c'] option`);
const el = document.getElementById("res")

document.querySelector(`select[id='c']`).addEventListener(`change`, function () {
	for (let e of options) {
		//console.log(e.value, e.selected);
        if (e.selected){
            //el.innerHTML=e.value;
            a[0]=chr_lst[e.value];
            b[0]=name_lst[e.value];
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
            //el2.innerHTML=e.value;
            a[1]=chr_lst[e.value];
            b[1]=name_lst[e.value];
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
    if(flg()){
        if (ua.indexOf('Mobile') > -1 || ua.indexOf('iPad') > -1 || ua.indexOf('Android') > -1) {
            // スマートフォン
            //alert('appやで');
            window.location.href = 'twitter://post?message='+tmp();
        } else {
            // PC
            //alert('PCやで');
            //const eln = document.getElementById("tx")
            //eln.innerHTML=a;
            window.location.href = 'https://twitter.com/intent/tweet?text='+tmp();
        }
    }else{
        console.log(a);
        alert("入力を確認してください");
    }
}

function tradetag(){
    var tag1="";
    tag1=tag1+b[0]+"求";
    tag1=tag1+b[1]+'譲';
    return tag1;
}

function searchtag(){
    var tag = "";
    tag=tag+b[1]+"求";
    tag=tag+b[0]+'譲';
    return tag;
}


//アプリ名とイベント名の変更よろしく☆
function tmp(){
    //var el_tx=document.getElementById('tx');
    var s='＜Liella 3rd ガチャ缶バッチ交換情報＞%0A【譲】'+a[0]+'%0A【求】'+a[1]+'%0A%23'+tradetag()+'%0A%23HKDP%0A%23アプリ名%0A%23lovelive%0A%23イベント名%0A%23'+a[0]+'%0A%23'+a[1];
    var st=check_b();
    s+=st;
    //el_tx.innerHTML=s;
    return s;
}

//-----------------------------------------------------

function search(){
    const ua1 = navigator.userAgent;
    if(flg()){
        if (ua1.indexOf('Mobile') > -1 || ua1.indexOf('iPad') > -1 || ua1.indexOf('Android') > -1) {
            // スマートフォン
            //alert('appやで');
            window.location.href = 'twitter://search?query=%23'+searchtag();
        } else {
            // PC
            //alert('PCやで');
            window.location.href = 'https://twitter.com/search?q=%23'+searchtag()+'&src=typed_query';
        }
    }else{
        alert("入力を確認してください");
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



//--------------------------------------------
function check_b(){
    var str = '%0A痛バッグをつくりたいです' ;
    var checks=document.getElementById("check_box");
    if(checks.checked){
        //console.log(str);
        return str;
    }
    return '';
}

//-------------------------------------------------
function flg(){
    var flg_cok = document.cookie.split(';');
    if(spl_req()==spl_pos()|| flg_cok.length==1){
        return false;
    }else{
        return true;
    }
}



//-----------------------------------------------
function redi(){
if(document.cookie == ""){
    console.log("none");
}else{
    console.log("exist");
}

var r_spl=document.cookie.split(";");
//console.log(r_spl)
if(r_spl.length==1){
    //el.innerHTML="選択してください";
    //el2.innerHTML="選択してください";
    console.log("選択してください");
}else{
    var in_req = document.getElementById("c");
    var op_req =in_req.options[spl_req()].value;
    //console.log(op_req);
    in_req.options[spl_req()].selected = true;
    //el.innerHTML=chr_lst[op_req];
    a[0]=chr_lst[op_req];
    b[0]=name_lst[op_req];

    var in_pos = document.getElementById("r");
    var op_pos =in_pos.options[spl_pos()].value;
    //console.log(op_pos);
    in_pos.options[spl_pos()].selected = true;
    //el2.innerHTML=chr_lst[op_pos];
    a[1]=chr_lst[op_pos];
    b[1]=name_lst[op_pos];
}
//alert('reload');

}
//window.onload=redi();

if (window.performance.navigation.type == 1) {
    //alert("リロードされました");
    redi();
    console.log(a,b);
}else{
    redi();
    console.log(a,b);
}
