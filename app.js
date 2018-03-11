
document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
    //event listener 
     
    const get = document.getElementById('get');



    //events

    get.addEventListener('click', getData);
    
    

    function getData() {
        var xhr = new XMLHttpRequest();
        xhr.open ('GET',"https://api.myjson.com/bins/mke4l");
        xhr.onload = function() {
            if (xhr.status ===200 && xhr.readyState==4) {
                console.log(JSON.parse(xhr.responseText));
            }
            else {
                console.log("request failed. status: "+xhr.status);
            }
        };
        xhr.send();
    }   
}}