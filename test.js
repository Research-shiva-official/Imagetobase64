"use strict";

function getbase64(file,encoded){

    if(encoded){
     const toBase64 = file => new Promise((resolve, reject) => {
         const reader = new FileReader();
         reader.readAsDataURL(file);
         reader.onload = () => {
             let encoded = reader.result.toString().replace(/^data:(.*,)?/, '');
             if ((encoded.length % 4) > 0) {
               encoded += '='.repeat(4 - (encoded.length % 4));
             }
             resolve(encoded);
           };
           reader.onerror = error => reject(error);
         });
      
     
     
         async function Main() {
           
           
           const result = await toBase64(file).catch(e => Error(e));
           if(result instanceof Error) {
            
              console.log('Error: ', result.message);
              return;
           }else{
           
           return result;
            
           }
           
        }
        Main();
    }else{
     const toBase64 = file => new Promise((resolve, reject) => {
         const reader = new FileReader();
         reader.readAsDataURL(file);
         reader.onload = () => {
             let encoded = reader.result.toString().replace(/^data:(.*,)?/, '');
             if ((encoded.length % 4) > 0) {
               encoded += '='.repeat(4 - (encoded.length % 4));
             }
             resolve(reader.result.toString());
           };
           reader.onerror = error => reject(error);
         });
      
     
     
         async function Main() {
           
           
           const result = await toBase64(file).catch(e => Error(e));
           if(result instanceof Error) {
            
              console.log('Error: ', result.message);
              return;
           }else{
           
           return result;
            
           }
           
        }
        Main();
    }
     
     
     }

var research=new getbase64();
