var data = [
    {
        "title":"Creatures of the Deep",
        "description": "A game for a course",
        "image":"images/cotd/FrontPagePic.png",
        "itch":"https://raul-martin.itch.io/creatures-of-the-deep",
        "page":"Hello"
    },
    {
        "title":"Anomaly Clean-up Squad",
        "description": "A game for a course",
        "image":"",
        "itch":"",
        "page":""
    },
    {
        "title":"Thingamajig-inator",
        "description": "A game for a course",
        "image":"YUwX1d.gif",
        "itch":"",
        "page":""
    }
]

function GetCreativeWorks(id){
    
    const container = document.getElementById(id);

    var html = "";

    for(let i = 0; i < data.length; i++) {
        let obj = data[i];

        html += '<section>';
        html += '<a href="#" class="image"><img src="'+ obj.image + '" alt="" data-position="center center" /></a>';
        html += '<div class="content"><div class="inner">';
        html += '<h2>' + obj.title + '</h2>';
        html += '<p>' + obj.description + '</p>';
        html += '<ul class="actions">'

        if(obj.itch){
            html += '<li><a href="'+obj.itch+'" class="button">Itch</a></li>'
        }

        if(obj.page){
            html += '<li><a href="creative.html?work='+i+'" class="button">Read More</a></li>'
        }

        html += '</ul>'
        html += '</div></div>';
        html += '</section>';
    }
container.innerHTML = html;
    console.log(html);
}

function SetCreativeWork(){
    var titles = document.getElementsByClassName('creative-title');
    for (var i = 0; i < titles.length; ++i) {
        var title = titles[i];  
        title.innerHTML = data[0].title;
    }
    var images = document.getElementsByClassName('creative-image');
    for (var i = 0; i < images.length; ++i) {
        var image = images[i];
        image.setAttribute("scr", data[0].image);
    }
}