

function plot(ctrl,x,y,color){
    if(!color)color='rgb(0,200, 0)';
    let dc=500;
    ctrl.clearRect(0, 0, 9192, 1024); 
    for (let i = 1; i < y.length; i++) {        
        ctrl.beginPath();
        ctrl.fillStyle = color;   // color= 'rgb(200, 0, 0)'
        ctrl.arc(x[i], y[i]+dc, 9, 0, Math.PI * 2, true);  // Right eye
        ctrl.fill();
    }
    console.log("ploteando la onda selecionada") ;    
}

export {plot}