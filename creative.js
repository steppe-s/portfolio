import data from 'data/creative_works.json' assert { type: 'json' };

function GetCreativeWorks(){
    for(let i = 0; i < data.length; i++) {
        let obj = data[i];
    
        console.log(obj.id);
    }
}