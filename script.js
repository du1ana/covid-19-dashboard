console.clear();

//local,global data. src:HPB
fetch('https://hpb.health.gov.lk/api/get-current-statistical')
	.then(res => {
		if(!res.ok){
			throw Error("Error");
		}
		return res.json()}
	)
	.then(data =>{
		  var sldata= data
		  .data;
	
	


		
document.getElementById("update_date_time").innerHTML=sldata.update_date_time;
		
document.getElementById("local_new_cases").innerHTML=sldata.local_new_cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		
document.getElementById("local_total_cases").innerHTML=sldata.local_total_cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	
document.getElementById("local_active_cases").innerHTML=(sldata.local_total_cases-sldata.local_deaths-sldata.local_recovered).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		
document.getElementById("local_deaths").innerHTML=sldata.local_deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		
document.getElementById("local_recovered").innerHTML=sldata.local_recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	
//console.log(sldata);
	
document.getElementById("local_progress").max=sldata.local_total_cases-sldata.local_deaths;
document.getElementById("local_progress").value=sldata.local_recovered;

document.getElementById("global_total_cases").innerHTML=sldata.global_total_cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

document.getElementById("global_active_cases").innerHTML=(sldata.global_total_cases-sldata.global_deaths-sldata.global_recovered).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

document.getElementById("global_deaths").innerHTML=sldata.global_deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

document.getElementById("global_recovered").innerHTML=sldata.global_recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

document.getElementById("global_progress").max= sldata.global_total_cases-sldata.global_deaths;
document.getElementById("global_progress").value=sldata.global_recovered;





});



//local hospital data. src:HPB
fetch('https://hpb.health.gov.lk/api/get-current-statistical')
	.then(res => {
		if(!res.ok){
			throw Error("Error");
		}
		return res.json()})
	.then(data=>{
		  	var temp="";
		  data.data.hospital_data
			  .forEach((u)=>
				{
					temp+=`<tr>
									<td style="border-radius:7vw 0 0 7vw;padding-left:1rem;">${u.hospital.name}</td>
									<td style="text-align:right">${u.treatment_local}</td>
									<td style="text-align:right">${u.treatment_foreign}</td>
									<td style="text-align:right;border-radius:0 7vw 7vw 0;padding-right:1rem">${u.treatment_total}</td>
						</tr>`;
				});
				 document.getElementById("hospital_tbody").innerHTML=temp;
	});
