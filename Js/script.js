

let cli1=document.querySelector('.cli1');
let cli2=document.querySelector('.cli2');

let top1=document.querySelector('.top1');
let bottom=document.querySelector('.bottom');

cli1.addEventListener('click',function()
{
    bottom.classList.remove('hid');
    bottom.classList.add('show');
    top1.classList.remove('show');
    top1.classList.add('hid');


});

cli2.addEventListener('click',function()
{  bottom.classList.remove('show');
 bottom.classList.add('hid');
 top1.classList.add('show');
 top1.classList.remove('hid');
});