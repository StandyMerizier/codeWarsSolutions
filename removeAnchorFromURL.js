//Complete the function/method so that it returns the url with anything after the anchor (#) removed.
//
//Examples
//// returns 'www.codewars.com'
//removeUrlAnchor('www.codewars.com#about')
//
//// returns 'www.codewars.com?page=1' 
//removeUrlAnchor('www.codewars.com?page=1') 


//solution
function removeUrlAnchor(url){
    return url.split("#").shift();
}


//another solution
function removeUrlAnchor(url){
  return url.split('#')[0];
}

