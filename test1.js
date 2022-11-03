var a = ["",""];
let options = document.querySelectorAll(`select[id='c'] option`);
const el = document.getElementById("res")

document.querySelector(`select[id='c']`).addEventListener(`change`, function () {
	for (let e of options) {
		console.log(e.value, e.selected);
        if (e.selected){
            el.innerHTML=e.value;
            a[0]=[e.value];
            break;
        }
	}
})


let options2 = document.querySelectorAll(`select[id='r'] option`);
const el2 = document.getElementById("ri")

document.querySelector(`select[id='r']`).addEventListener(`change`, function () {
	for (let e of options2) {
		console.log(e.value, e.selected);
        if (e.selected){
            el2.innerHTML=e.value;
            a[1]=[e.value];
            break;
        }
	}
})

function bt(){
    const ua = navigator.userAgent;
    if (ua.indexOf('iPhone') > -1) {
        // スマートフォン
        alert('iPhoneやで');
        window.location.href = 'twitter://post?message=test'
    } else if (ua.indexOf('Android') > -1) {
        // タブレット
        alert('androidやで');
    } else {
        // PC
        alert('PCやで');
        const eln = document.getElementById("tx")
        eln.innerHTML=a;
        //window.location.href = 'https://twitter.com/intent/tweet?text=本文';
    }
}

function search(){
    var tag = "";
    for(var i =0;i<a.length;i++){
        tag+=a[i];
    }
    window.location.href = 'https://twitter.com/search?q=%23'+tag+'&src=typed_query';
}