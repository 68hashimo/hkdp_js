let options = document.querySelectorAll(`select[id='c'] option`);
const el = document.getElementById("res")

document.querySelector(`select[id='c']`).addEventListener(`change`, function () {
	for (let e of options) {
		console.log(e.value, e.selected);
        if (e.selected){
            el.innerHTML=e.value;
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
            break;
        }
	}
})

function bt(){
    const ua = navigator.userAgent;
    if (ua.indexOf('iPhone') > -1) {
        // スマートフォン
        alert('スマートフォンやで');
    } else if (ua.indexOf('Android') > -1) {
        // タブレット
        alert('androidやで');
    } else {
        // PC
        alert('PCやで');
        window.location.href = 'https://twitter.com/intent/tweet?text=本文';
    }
}

function search(){
    window.location.href = 'https://twitter.com/search?q=%23ひらがな&src=trend_click&vertical=trends'
}