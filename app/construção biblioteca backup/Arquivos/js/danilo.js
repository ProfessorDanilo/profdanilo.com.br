/*meu script*/


function mostrateste(id){
    //ocultando todos
    document.getElementById('PA1').style.display='none';
    document.getElementById('PA2').style.display='none';
    document.getElementById('PA3').style.display='none';
    document.getElementById('PA4').style.display='none';
    document.getElementById('SA1').style.display='none';
    document.getElementById('SA2').style.display='none';
    document.getElementById('SA3').style.display='none';
    document.getElementById('SA4').style.display='none';
    document.getElementById('TA1').style.display='none';
    document.getElementById('TA2').style.display='none';
    document.getElementById('TA3').style.display='none';
    document.getElementById('EA1').style.display='none';
    document.getElementById('EA2').style.display='none';
    document.getElementById('EA3').style.display='none';
    document.getElementById('EA4').style.display='none';
    document.getElementById('EA5').style.display='none';
    document.getElementById('EA6').style.display='none';
    document.getElementById('EA7').style.display='none';    
    document.getElementById('HA1').style.display='none';
    document.getElementById('HA2').style.display='none';
    document.getElementById('HA3').style.display='none';
    document.getElementById('HA4').style.display='none';
    document.getElementById('HA5').style.display='none';
    document.getElementById('HA6').style.display='none';
    document.getElementById('HA7').style.display='none';
    document.getElementById(id).style.display='block';
}



function MostraComp(id){
    //ocultando todos    
    document.getElementById('SER').style.display='none';
    document.getElementById('PORTAS').style.display='none';
    document.getElementById('FUNC').style.display='none';
    document.getElementById(id).style.display='block';
}



function mostra(id){
    //ocultando todos
    if(document.getElementById(id).style.display == 'block'){
        document.getElementById(id).style.display='none';
    }
    else{
        document.getElementById(id).style.display='block';
    }
}
