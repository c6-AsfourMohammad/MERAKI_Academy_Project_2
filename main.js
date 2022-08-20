//creat array of object movie
const movie=[{imgMovie:"https://i.egycdn.com/pic/WmFwZndlY212bWJtRW1tbW1tcGFjdk5tYW1ibGxtdm1n.jpg"
,titleMovie:"Thor: Love and Thunder"
,type:"Fiction",
description:"Thor reunites with Jane Foster and Valkyrie, and the trio's lives are in jeopardy with the appearance of Gore, who is charged with killing all the gods in the universe.",
rate:"⭐⭐⭐⭐⭐",
link:"https://www.youtube.com/embed/Go8nTmfrQd8"},
{imgMovie:"https://i.egycdn.com/pic/WmFwZndlY212bUVtbW1ZbW1wRUVjY3dhbWptam1Fd2Z3bA.jpg",
titleMovie:"Top Gun: Maverick",
type:"action",
description:"After a career spanning more than thirty years to become one of the most qualified pilots in the US Air Force, Betty Mitchell takes a new step in his aviation career by experimenting with new aircraft.",
rate:"⭐⭐⭐"},
{imgMovie:"https://i.egycdn.com/pic/WmFwZndlY21tdmNtYm12dk5MUmNsYW1FbUlhbWpsbA.jpg"
,titleMovie:"Uncharted"
,type:"action",
description:"The events revolve around a young boy, Nathan Drake, and his relationship with Victor Sullivan, as the duo embark on many adventures in search of lost treasures, while Drake seeks to retrieve his family's legacy.",
rate:"⭐⭐⭐⭐"},
{imgMovie:"https://i.egycdn.com/pic/WmFwZndlY21MTnZtYm1qbWptYWN4dmNtam1tbW13VG1tYg.jpg"
,titleMovie:"Joker"
,type:"drama",
description:"Little by little, pressure and circumstances combine to make a failed comedian go crazy and turn into a criminal and a maniacal killer.",
rate:"⭐⭐⭐⭐"},
{imgMovie:"https://i.egycdn.com/pic/WmFwZndlY212bWptRW1MY21qbWJFY212bUVtZndhY05ibA.jpg"
,titleMovie:"Minions: The Rise of Gru "
,type:"animation",
description:"In the 1970s, a twelve-year-old puppy sets out to carry out his plan in which he hopes to become the most evil person on earth, and on his way encounters strange creatures.",
rate:"⭐⭐⭐⭐"},
{imgMovie:"https://i.egycdn.com/pic/WmFwZndlY212dmNtYm1wdm1FbW1FY212bVRFbUVtRXZ0TmI.jpg"
,titleMovie:"Prey"
,type:"drama",
description:"The work deals with the story of the famous predator known as the Predator and its original story from 300 years, where Naru, a skilled warrior, fights to protect her tribe from the predator.",
rate:"⭐⭐⭐"},]
//select to div(main)
const main=$("#main");
//creat div (bar) in top app 
const bar=$("<div></div>");
main.append(bar)
bar.addClass("bar");

const nameBar=$("<div>Shahid <span style=color:gray>App</span></div>");
bar.append(nameBar)
bar.addClass("nameBar");
//creat div search in bar  ins
const search=$("<div></div>")
search.addClass("search")
bar.append(search)
//creat button in search
const inputSearch=$(`<input class=inputSearch placeholder=Search... >`)
search.append(inputSearch)

inputSearch.addClass("inputSearch")

//creat input in search 
const buttonSearch=$(`<button claas=buttonSearch><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></button>`)
search.append(buttonSearch)
buttonSearch.addClass("buttonSearch")
const searchFun=buttonSearch.on("click",()=>{
   const c= movie.filter((elem,i)=>{
  return elem.titleMovie===inputSearch.val()
    })
c.forEach((elem,i)=>{
    main.text("")
main.append(bar)

    const listMovie=$(`<div><img src="${elem.imgMovie}"/>${elem.titleMovie}<div>${elem.rate}</div><div>${elem.description}</div></div>`)
        main.append(listMovie);
        listMovie.addClass("listMovie3")
        const back1=$("<button>Back</button>")
        listMovie.append(back1)
        back1.addClass("back1")
        //creat function back in click

        const backFun= back1.on("click",()=>{

            listMovie.text("")

            funMovie()
            
        })
})
//console.log(c);
})
//creat button sort in bar 
const sortBy=$(`<select class="sort" >
<option value="all">all sort</option>
<option value="action">action</option>
<option value="drama">drama</option>
<option value="comedy">comedy</option>
<option value="Historical">Historical</option>
<option value="Fiction">Fiction</option>
<option value="animation">animation</option>
</select>`)
bar.append(sortBy)
//creat function sort
 const sortFun=sortBy.on("change",(e)=>{
   const a=  movie.filter((elem,i)=>{
         elem.type===e.target.value
       
   })  
   a.forEach((elem1,i)=>{
    const listMovie=$(`<div><img src="${elem1.imgMovie}"/>${elem1.titleMovie}<div>${elem1.rate}</div><div>${elem1.description}</div></div>`)
    main.append(listMovie);
    listMovie.addClass("listMovie4")
    const back1=$("<button>Back</button>")
    listMovie.append(back1)
    back1.addClass("back2")
    //creat function back in click

    const backFun= back1.on("click",()=>{

        listMovie.text("")

        funMovie()
        
    })
})
//console.log(e.target.value); 
 })
//creat button Home in bar 
const Home=$("<button>Home</button>")
bar.append(Home)
Home.addClass("Home")
//creat function Home
const HomeFun=Home.on("click",()=>{
    main.text("")
main.append(bar)
    funMovie()
})
///creat button favorite in bar
const Favorite=$("<button>Favorite</button>")
bar.append(Favorite)
Favorite.addClass("Favorite")
//creat function favclick
const favclick=Favorite.on("click",()=>{
    main.text("")
    main.append(bar)
    const favArray= localStorage.getItem("Fav");
     JSON.parse(favArray);
     console.log(favArray);

    array.map((elem,i)=>{
         const listMovie=$(`<div><img src="${elem.imgMovie}"/>${elem.titleMovie}<div>${elem.description}</div></div>`)
        main.append(listMovie);
        listMovie.addClass("listMovieFavorite")  
    })
})
//creat button login in bar 
const Login=$("<button>Login</button>")
bar.append(Login)
Login.addClass("Login")
//creat dark mode in bar
const darkMode=$(`<button><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
<path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
</svg></button>`)
bar.append(darkMode)
darkMode.addClass("darkMode")
//creat function dark mode


   darkMode.on("click",()=>{
    main.css("background-color", "black")
    nameBar.css("color","azure")

    bar.css("background-color","rgb(98, 95, 95)")
    Home.css("background-color","rgb(98, 95, 95)")
    Home.css("border-left","rgb(98, 95, 95)")

    sortBy.css("background-color","rgb(98, 95, 95)")
    sortBy.css("border-left","rgb(98, 95, 95)")

    buttonSearch.css("background-color","rgb(98, 95, 95)")
    buttonSearch.css("border-left","rgb(98, 95, 95)")

    Favorite.css("background-color","rgb(98, 95, 95)")
    Favorite.css("border-left","rgb(98, 95, 95)")

    Login.css("background-color","rgb(98, 95, 95)")
    Login.css("border-left","rgb(98, 95, 95)")

    darkMode.css("background-color","rgb(98, 95, 95)")
    darkMode.css("border-left","rgb(98, 95, 95)")

    darkMode.on("click",()=>{
        main.css("background-color", "azure")
        nameBar.css("color","black")
        bar.css("background-color","rgb(240, 210, 42)")
        Home.css("background-color","rgb(240, 210, 42)")
        Home.css("border-left","rgb(240, 210, 42)")
        sortBy.css("background-color","rgb(240, 210, 42)")
        sortBy.css("border-left","rgb(240, 210, 42)")
        buttonSearch.css("background-color","rgb(240, 210, 42)")
        buttonSearch.css("border-left","rgb(240, 210, 42)")
    
        Favorite.css("background-color","rgb(240, 210, 42)")
        Favorite.css("border-left","rgb(240, 210, 42)")
    
        Login.css("background-color","rgb(240, 210, 42)")
        Login.css("border-left","rgb(240, 210, 42)")
    
        darkMode.css("background-color","rgb(240, 210, 42)")
        darkMode.css("border-left","rgb(240, 210, 42)")
   })
   })
index=0;
array=[];
//creat function funMovie for movie array
const funMovie=()=>{
    const mainMovie=$("<div></div>")
    main.append(mainMovie)
    mainMovie.addClass("mainMovie")
    
    //use map To view Movie in main
    movie.map((elem,i)=>{
        const listMovie=$(`<div><img src="${elem.imgMovie}"/>${elem.titleMovie}<div>${elem.rate}</div></div>`)
        mainMovie.append(listMovie);
        listMovie.addClass("listMovie1") ;
       index++
       //click in the img
       listMovie.on("click",()=>{
        mainMovie.text("")
        const listMovie=$(`<div><img  class="img1" src="${elem.imgMovie}"/>${elem.titleMovie}<div>${elem.description}</div><div>${elem.rate}</div></div>`)
        mainMovie.append(listMovie);
        listMovie.addClass("listMovie2") 
mainMovie.addClass("mainMovie2")
        //creat button back 
        const back1=$("<button>Back</button>")
        listMovie.append(back1)
        back1.addClass("back1")
        //creat function back in click
        const backFun= back1.on("click",()=>{
            listMovie.text("")
            funMovie()
            
        })
        //creat button Trailer
    const Trailer=$(`<div><iframe src=elem.link></iframe></div>`)
    mainMovie.append(Trailer)
    Trailer.addClass("Trailer")
        //creat button fav
        const fav=$("<button>Add Favorite</button>")
        listMovie.append(fav)
        fav.addClass("AddFavorite")
       //creat function fav in click
       fav.on("click",()=>{
            array.push(elem)
            // if(localStorage.getItem("Fav")){
            //     localStorage.setItem("Fav", JSON.stringify(array));

            //    }else{
                localStorage.setItem("Fav",JSON.stringify(array))
            //    }
            //console.log(array);
        })
        
    })
       
    })
}
 console.log(funMovie());




 





