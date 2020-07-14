
  
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

    const toBase644 = file => new Promise((resolve, reject) => {
      const readerr = new FileReader();
      readerr.readAsDataURL(file);
      readerr.onload = () => {
          let encodedd = reader.result.toString().replace(/^data:(.*,)?/, '');
          if ((encodedd.length % 4) > 0) {
            encodedd += '='.repeat(4 - (encodedd.length % 4));
          }
          resolve(encodedd);
        };
        readerr.onerror = error => reject(error);
      });

    
    async function Main(file,encode) {
           
           
      if(encode==true){
        const result = await toBase64(file).catch(e => Error(e));
      }else if(encode==false){
        const result = await toBase644(file).catch(e => Error(e));
      }
      if(result instanceof Error) {
       
         console.error('Error: ', result.message);
         return;
      }else{
      
      return result;
       
      }
      
   }

