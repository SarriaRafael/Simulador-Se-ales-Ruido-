

function ondatriang(){
    let ondaruido=[],  x=[];
    
        for (let i = 0; i < 9192; i++) {
            
            if(i<=1000)ondaruido[i]= Math.round(  100*Math.random() - 100*Math.random() + i/5) ;
            if(i>1000 && i<=2000) ondaruido[i]= Math.round(  100*Math.random() - 100*Math.random() - (i-1000)*2/5 +200) ;        
            if(i>2000 && i<=3000) ondaruido[i]= Math.round(  100*Math.random() - 100*Math.random() + (i-2000)*2/5 -200) ;        
            if(i>3000 && i<=4000) ondaruido[i]= Math.round(  100*Math.random() - 100*Math.random() - (i-3000)*2/5 +200) ;        
            if(i>4000 && i<=5000) ondaruido[i]= Math.round(  100*Math.random() - 100*Math.random() + (i-4000)*2/5 -200) ;        
            if(i>5000 && i<=6000) ondaruido[i]= Math.round(  100*Math.random() - 100*Math.random() - (i-5000)*2/5 +200) ;        
            if(i>6000 && i<=7000) ondaruido[i]= Math.round(  100*Math.random() - 100*Math.random() + (i-6000)*2/5 -200) ;        
            if(i>7000 && i<=8000) ondaruido[i]= Math.round(  100*Math.random() - 100*Math.random() - (i-7000)*2/5 +200) ;        
            if(i>8000 && i<=9000) ondaruido[i]= Math.round(  100*Math.random() - 100*Math.random() + (i-8000)*2/5 -200) ;        
            if(i>9000 ) ondaruido[i]= Math.round(  100*Math.random() - 100*Math.random() - (i-9000)*2/5 +200) ;        
            
            x.push(i)            
        }
    //Pequeño filtrado     
    Pequeñofiltrado(ondaruido) ;           
    return {ondaruido, x} ;
}


function ondarecta(){
    let ondaruido=[],  x=[];
    
        for (let i = 0; i < 9192; i++) {
            
            if(i<=1000)ondaruido[i]= Math.round(  100*Math.random() - 100*Math.random() + 200) ;
            if(i>1000 && i<=2000) ondaruido[i]= Math.round(  100*Math.random() - 100*Math.random() - 200) ;        
            if(i>2000 && i<=3000) ondaruido[i]= Math.round(  100*Math.random() - 100*Math.random() + 200) ;        
            if(i>3000 && i<=4000) ondaruido[i]= Math.round(  100*Math.random() - 100*Math.random() - 200) ;        
            if(i>4000 && i<=5000) ondaruido[i]= Math.round(  100*Math.random() - 100*Math.random() + 200) ;        
            if(i>5000 && i<=6000) ondaruido[i]= Math.round(  100*Math.random() - 100*Math.random() - 200) ;        
            if(i>6000 && i<=7000) ondaruido[i]= Math.round(  100*Math.random() - 100*Math.random() + 200) ;        
            if(i>7000 && i<=8000) ondaruido[i]= Math.round(  100*Math.random() - 100*Math.random() - 200) ;        
            if(i>8000 && i<=9000) ondaruido[i]= Math.round(  100*Math.random() - 100*Math.random() + 200) ;        
            if(i>9000 ) ondaruido[i]= Math.round(  100*Math.random() - 100*Math.random() - 200) ;        
            
            x.push(i)   
        } 
    //Pequeño filtrado   
    Pequeñofiltrado(ondaruido) ; 
    return {ondaruido, x} ;
}


function ondacos(){
    let ondaruido=[],  x=[];
    for (let i = 0; i < 9192; i++) {
        ondaruido.push(Math.round(  100*Math.random() - 100*Math.random() + 200*Math.cos(i/150)) )
         x.push(i);
    }
    //Pequeño filtrado
    Pequeñofiltrado(ondaruido) ;
    console.log("generando la onda coseno")
return {ondaruido, x} ;

} // final de la funcion ondacos


function Pequeñofiltrado(onda) {
    let p=10 ;  // la calidad del pequeño filtro 
    for (let i=0; i<onda.length-p; i++) {
        if(i<p){
            for( let k = 1; k<= i; k++){
                onda[i]= onda[i] + onda[i-k]+onda[i+k] ;
            }
            onda[i]= Math.round(onda[i]/(2*i+1));
        } else {
            for (let j = 0; j <=p ; j++) {
                onda[i]= onda[i] + onda[i-j]+onda[i+j] ;                
            }
            onda[i]= Math.round(onda[i]/(2*p+1));
        }
    }
    console.log("la onda pequeñofiltrada");    
}

export {ondatriang, ondarecta, ondacos}