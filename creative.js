function GetCreativeWorks(){
    fetch('data/creative_works.json')
    .then((response) => response.json())
    .then((json) => console.log(json));








}