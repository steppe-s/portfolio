var data = [
    {
        "title":"Creatures of the Deep",
        "description": "An atmospheric horror simulator game I made for a university course together with 5 other students. I contributed to this project by implementing the submarine control and malfunction interactions. I also created all the surface shaders for the different rusted materials.",
        "image":"images/cotd/FrontPagePic.png",
        "itch":"https://raul-martin.itch.io/creatures-of-the-deep",
        "page":"Hello",
        "tags":["Game", "Unity"]
    },
    {
        "title":"Anomaly Clean-up Squad",
        "description": "A game for a course",
        "image":"images/acs/acs.png",
        "itch":"https://grassland.itch.io/anomaly-clean-up-sqaud",
        "page":"asdasd",
        "tags":["Game", "Unity"]
    },
    {
        "title":"Thingamajig-inator",
        "description": "A game for a course",
        "image":"images/thingamajig/YUwX1d.gif",
        "itch":"https://buddhadom.itch.io/thingamajig-inator",
        "page":"asdasd",
        "tags":["Game", "Unity"]
    },
    {
        "title":">Hotfix",
        "description": "A game for a course",
        "image":"images/hotfix/b0Xz57.png",
        "itch":"https://grassland.itch.io/hotfix",
        "page":"asdasd",
        "tags":["Game", "Unity", "Game Jam"]
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
        
        html += '<ul class="title-tag-list">'
        html += '<li><h2>' + obj.title + '</h2></li>';
        
        for(let j = 0; j < obj.tags.length; j++) {
            let tag = obj.tags[j];
            html += '<li><code class="tag">' + tag + '</code></li>'
        }
        html += '</ul>'
        
        // html += '<h2>' + obj.title + '</h2>';


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
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const index = urlParams.get('work')


    var titles = document.getElementsByClassName('creative-title');
    for (var i = 0; i < titles.length; ++i) {
        var title = titles[i];  
        title.innerHTML = data[index].title;
    }
    var images = document.getElementsByClassName('creative-image');
    for (var i = 0; i < images.length; ++i) {
        var image = images[i];
        image.setAttribute("scr", data[index].image);
    }
}