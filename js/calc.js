const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');
const realtyPrice = document.querySelector('.realty-credit-summ-input');
const realtyPrice_range = document.querySelector('.realty-credit-summ-range');
const minValue_label = document.querySelector('.min-value-label');
const mediumValue_label = document.querySelector('.medium-value-label');
const maxValue_label = document.querySelector('.max-value-label');

const onChangePrice_range = (value) => {
    if(value === "0"){
        minValue_label.style.color = '#004091';
    }else {
        minValue_label.style.color = '#9BA5BA';
    }
    if(value === "50"){
        mediumValue_label.style.color = '#004091';
    }else {
        mediumValue_label.style.color = '#9BA5BA';
    }
    if(value === "100"){
        maxValue_label.style.color = '#004091';
    }else {
        maxValue_label.style.color = '#9BA5BA';
    } 

    if(value <= 50){
        realtyPrice.value = value *18000 + 100000;

    }
    else{
        realtyPrice.value = (value - 50) *280000 + 1000000;
    }
};

const onChangePrice = (value) => {
    let curVal=0;
    // Меняем цвета на шкале
    if(value <= 100000){
        minValue_label.style.color = '#004091';
    }else {
        minValue_label.style.color = '#9BA5BA';
    }
    if(value === "1000000"){
        mediumValue_label.style.color = '#004091';
    }else {
        mediumValue_label.style.color = '#9BA5BA';
    }
    if(value >= 15000000){
        maxValue_label.style.color = '#004091';
    }else {
        maxValue_label.style.color = '#9BA5BA';
    }
    // Управляем положением движка в зависимости от введенного значения
    if(value < 100000){
        curVal= 0;
    }
    if(value <= 1000000){
        curVal = Math.floor((value-100000)/18000)
    }
    else{
        curVal = Math.floor((value-1000000)/280000)+50;
    }
    realtyPrice_range.value = curVal;
};


const formHandler_1 = () => {
    alert("Следующий шаг");
};

// Toggle menu
selectSingle_title.addEventListener('click', () => {
	if ('active' === selectSingle.getAttribute('data-state')) {
		selectSingle.setAttribute('data-state', '');
	} else {
		selectSingle.setAttribute('data-state', 'active');
	}
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
	selectSingle_labels[i].addEventListener('click', (evt) => {
	selectSingle_title.textContent = evt.target.textContent;
	selectSingle.style.backgroundImage =  selectSingle_labels[i].style.backgroundImage;
	selectSingle.style.textIndent = '2rem'
	selectSingle.setAttribute('data-state', '');
	selectSingle_title.setAttribute('data-default', '0');
    });
}