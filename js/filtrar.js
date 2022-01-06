
export function filtro(ondaruido) {
    let ondaht=[], ondabajo=[];
    let rango = document.getElementById("ranfil")
    let b= rango.value *4
    console.log("el valor del fitrado es :") 
    console.log(b)
    console.log('filtrando' )
     // inicia el pasabajos
    for (let i = 0; i < ondaruido.length; i++) {
        ondabajo[i]=0;
        ondaht[i]=0;
        if (i<b||i> ondaruido.length-b) {
            // for (let k = 1; k <= i; k++) {
            //     ondabajo[i]= ondabajo[i] + ondaruido[i-k]+ondaruido[i+k] ; 
            // }
            // ondabajo[i]= Math.round(ondabajo[i]/(2*i+1))     
            ondabajo[i]=0;
            ondaht[i]=0;
        } else {
            ondabajo[i]=ondaruido[i];
            for (let j = 1; j <= b; j++) {
                 ondabajo[i]=ondabajo[i]+ondaruido[i+j]+ondaruido[i-j];            
            }
             ondabajo[i]=Math.round(ondabajo[i]/(2*b+1) ) ;
             
        }// fin del pasabajos
        
    }
    //inicia el pasaaltos
    let max=0, min=0;
    for (let m = 0; m < ondabajo.length; m++) {
        if (ondabajo[m]!==0) {
            ondaht[m]=(ondaruido[m] - ondabajo[m]) 
            if(ondaht[m]>max) max=ondaht[m];
            if(ondaht[m]<min) min=ondaht[m];
        }         
    }
    let rangoalto = document.getElementById("ranalt")
    let w = rangoalto.value*40
     w= w / (max-min)
    for (let u = 0; u < ondaht.length; u++) {
        ondaht[u]= ondaht[u]*w;   
    }
    //Pequeño filtrado
    let p=10 , ondax=ondaht ;
    for (let i = 0; i < ondaruido.length-p; i++) {
        
        if (i<p) {
            for (let k = 1; k <= i; k++) {
                ondaht[i]= ondaht[i] + ondax[i-k]+ondax[i+k] ; 
            }
            ondaht[i]= Math.round(ondaht[i]/(2*i+1))  
       
        } else {
            ondaht[i]=ondaruido[i];
            for (let j = 1; j <= p; j++) {
                ondaht[i]=ondaht[i]+ondax[i+j]+ondax[i-j];            
            }
            ondaht[i]=Math.round(ondaht[i]/(2*p+1) )  
        }   
    } 
    
    return {ondabajo, ondaht};
}
