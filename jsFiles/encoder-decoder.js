window.onload=()=>{
    const encodeButton=document.querySelector('#option-1');
    const decodeButton=document.querySelector('#option-2');
    const inputText1=document.querySelector('#input-text-1');
    const inputText2=document.querySelector('#input-text-2');

    encodeButton.addEventListener('click',()=>{
    inputText2.value=encodeURIComponent(inputText1.value);
    })

    decodeButton.addEventListener('click',()=>{
        inputText2.value=decodeURIComponent(inputText1.value);
        })

        

}