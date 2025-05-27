const dec=document.getElementById("dec");
const inc=document.getElementById("inc");
const num=document.getElementById("num");
let counter=0;
dec.addEventListener("click",()=>
{
    counter--;
    num.textContent=counter;
});
inc.addEventListener("click",()=>
{
    counter++;
    num.textContent=counter;
});