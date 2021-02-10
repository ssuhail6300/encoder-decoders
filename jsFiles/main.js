var CryptoJS = document.createElement('script');  
CryptoJS.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js');
document.head.appendChild(CryptoJS);

let inputText=document.querySelector('#input-text-1');
let resultText=document.querySelector('#input-text-2');
let appHeading=document.querySelector('#app-heading');

 const encodeButton=document.querySelector('#encode');
 const decodeButton=document.querySelector('#decode');

 const urlEncoder=document.querySelector('#url-encode');
 const urlDecoder=document.querySelector('#url-decode');
 const base64Encoder=document.querySelector('#base64-encode');
 const base64Decoder=document.querySelector('#base64-decode');
 const md5Hash=document.querySelector('#md5-hash');
 const sha1Hash=document.querySelector('#sha1-hash');
 const sha256Hash=document.querySelector('#sha256-hash');
 const sha512Hash=document.querySelector('#sha512-hash');

try{
 const myName=[
   {
      leftButton:urlEncoder,
      heading: 'URL Encoder/Decoder',
      firstButton:'Encode',
      secondButton:'Decode',
      firstLogic(somevalue){
         return encodeURIComponent(somevalue);
       },
       secondLogic(someValue){
          return decodeURIComponent(someValue);
       }
     },
     {
      leftButton:urlDecoder,
      heading: 'URL Encoder/Decoder',
      firstButton:'Encode',
      secondButton:'Decode',
      firstLogic(somevalue){
         return encodeURIComponent(somevalue);
       },
       secondLogic(someValue){
          return decodeURIComponent(someValue);
       }
     },
     {
      leftButton:base64Encoder,
      heading: 'Base64 Encoder',
      firstButton:'Base64 Encode',
      secondButton:'Base64 Decode',
      firstLogic(somevalue){
         return btoa(somevalue);
       },
       secondLogic(someValue){
          return atob(someValue);
       }
     },
     {
      leftButton:base64Decoder,
      heading: 'Base64 Decoder',
      firstButton:'Base64 Encode',
      secondButton:'Base64 Decode',
      firstLogic(somevalue){
         return btoa(somevalue);
       },
       secondLogic(someValue){
          return atob(someValue);
       }
     },
     {
      leftButton:md5Hash,
      heading: 'MD5 Hash Generator',
      firstButton:'MD5 Hash',
      secondButton:'Copy Value',
      firstLogic(somevalue){
         return CryptoJS.MD5(somevalue);
       },
       secondLogic(someValue){
         resultText.focus();
         resultText.select();
         document.execCommand("copy");
         return resultText.innerText;
      }
    },
     {
      leftButton:sha1Hash,
      heading: 'SHA1 Hash Generator',
      firstButton:'SHA1 Hash',
      secondButton:'Copy Value',
      firstLogic(somevalue){
         return CryptoJS.SHA1(somevalue);
       },
       secondLogic(someValue){
         resultText.focus();
         resultText.select();
         document.execCommand("copy");
         return resultText.innerText;
      }
    },
     {
      leftButton:sha256Hash,
      heading: 'SHA256 Hash Generator',
      firstButton:'SHA256 Hash',
      secondButton:'Copy Value',
      firstLogic(somevalue){
         return CryptoJS.SHA256(somevalue);
       },
       secondLogic(someValue){
         const dum=resultText.innerText;
         resultText.focus();
         resultText.select();
         document.execCommand("copy");
         return dum;

      }
    },
     {
      leftButton:sha512Hash,
      heading: 'SHA512 Hash Generator',
      firstButton:'SHA512 Hash',
      secondButton:'Copy Value',
      firstLogic(somevalue){
         return CryptoJS.SHA512(somevalue);
       },
       secondLogic(someValue){
          resultText.focus();
          resultText.select();
          document.execCommand("copy");
          return resultText.innerText;
       }
     }                     
 ];


 myName.forEach((someEvent)=>{
    someEvent.leftButton.addEventListener('click',()=>{
      appHeading.innerText=someEvent.heading;
      encodeButton.value=someEvent.firstButton;
      decodeButton.value=someEvent.secondButton;    
    })
 });


encodeButton.addEventListener('click',()=>{
   myName.forEach((clickEvent)=>{
      if(clickEvent.firstButton===encodeButton.value){
         resultText.innerText=clickEvent.firstLogic(inputText.value);
      }
   });
  })

decodeButton.addEventListener('click',()=>{
   myName.forEach((clickEvent)=>{
      if(clickEvent.secondButton===decodeButton.value){
         resultText.innerText=clickEvent.secondLogic(inputText.value);
      }
   });
 })

}catch(err){
   resultText.innerText='Please provide a valid value';
}