function calculate(day, elementId){
  var year =day/365;
  
  //dasawarsa
	if(year>=10){
  	var dasawarsa = Math.floor(year/10);
    
    if(dasawarsa>0)
    {
    	document.getElementById(elementId).innerHTML  += dasawarsa + " dasawarsa" + "<br>";
      year -= dasawarsa*10;
    }
  }
  
  //windu
  if(year >=8){
  	var windu =  Math.floor(year/8);
    
    if(windu>0)
    {
    	document.getElementById(elementId).innerHTML  += windu + " windu" + "<br>";
      year -= windu*8;
    }
  }
  
  //lustrum
  if(year >=5){
  	var lustrum =  Math.floor(year/5);
    
    if(lustrum>0)
    {
    	document.getElementById(elementId).innerHTML  += lustrum + " lustrum" + "<br>";
      year -= lustrum*5;
    }
  }
  
  //tahun
  if(year >=1){
  	var tahun =  Math.floor(year);
    
    if(tahun>0)
    {
    	document.getElementById(elementId).innerHTML  += tahun + " tahun" + "<br>";
      year -= tahun;
    }
  }
  
  //semester
  if(year *12 >=6){
  	var semester =  Math.floor((year*12)/6);
    
    if(semester>0)
    {
    	document.getElementById(elementId).innerHTML  += semester + " semester" + "<br>";
      year -= semester/2;
    }
  }
  
  //caturwulan
  if(year *12 >=4){
  	var caturwulan =  Math.floor((year*12)/4);
    
    if(caturwulan>0)
    {
    	document.getElementById(elementId).innerHTML  += caturwulan + " caturwulan" + "<br>";
      year -= caturwulan/4;
    }
  }
  
  //triwulan
  if(year *12 >=3){
  	var triwulan =  Math.floor((year*12)/3);
    
    if(triwulan>0)
    {
    	document.getElementById(elementId).innerHTML  += triwulan + " triwulan" + "<br>";
      year -= triwulan/3;
    }
  }  
  
  // //bulan
  // if(year *12 >=1){
  	// var bulan =  Math.floor((year*12));
    
    // if(bulan>0)
    // {
    	// document.getElementById(elementId).innerHTML  += bulan + " bulan" + "<br>";
      // year -= bulan/12;
    // }
  // }
  
  // //hari
  // if(year *12 <1){
  	// var hari =  Math.floor((year*12*30));
    
    // if(hari>0)
    // {
    	// document.getElementById(elementId).innerHTML  += hari + " hari";
    // }
  // }
}

function getLeftDate(birthDay, elementId){
	var date = new Date(birthDay);
	date.setDate(date.getDate() + (63 * 365));
	
	var today =new Date(Date.now());
	var leftDay = (date.getTime() - today.getTime())/(1000 * 3600 * 24);
	
	calculate(leftDay, elementId);
}

function showMessage(placeholder, mess, messType) {
	$("#" + placeholder).empty();
	$("#" + placeholder).show();
	$("#" + placeholder)
		.append('<div class="alert alert-'+ messType + ' alert-dismissible fade show">' + mess +
			'<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>');
}