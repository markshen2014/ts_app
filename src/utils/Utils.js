const Utils = () =>{

}

export const BuildUrl = ([oper_code,company_str,job_str,  supplier_str])=>{

    const server = 'https://iybcons2.scrapitsoftware.com:4443/iyb/php/iyb.php?';

    let url_str = server + oper_code + "&" + encodeURI(company_str) + "&" + encodeURI(job_str) + "&" + encodeURI(supplier_str);
    //url_str = encodeURI(url_str);

    return url_str;

}

export const BuildJob = (jobArray)=>{

     let return_str = ''

    for (let i = 0; i < jobArray.length; i++) {
        let job_code ='';
        let j = i + 1
      
        if( j < 10){
             job_code = '0' + j
         }else{
             job_code = '' +  j
         }

         return_str = return_str + '~'+ job_code + jobArray[i] + '~~'+job_code
      } 

      return_str =  encodeURI(return_str);
      
      return return_str
     
    
}