//creat array of object movie
const movie=[{imgMovie:"https://i.egycdn.com/pic/WmFwZndlY212bWJtRW1tbW1tcGFjdk5tYW1ibGxtdm1n.jpg"
,titleMovie:"Thor: Love and Thunder"
,type:"Fiction",
description:"Thor reunites with Jane Foster and Valkyrie, and the trio's lives are in jeopardy with the appearance of Gore, who is charged with killing all the gods in the universe.",
rate:"⭐⭐⭐⭐⭐",
link:"https://youtu.be/Go8nTmfrQd8"},
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
const buttonSearch=$(`<input class=inputSearch placeholder=Search >`)
search.append(buttonSearch)

buttonSearch.addClass("inputSearch")

//creat input in search 
const inputSearch=$(`<button claas=buttonSearch>search</button>`)
search.append(inputSearch)
inputSearch.addClass("buttonSearch")
const searchFun=buttonSearch.on("click",()=>{
   const c= movie.filter((elem,i)=>{
  return elem.titleMovie===inputSearch.val()
  
    })
c.forEach((elem,i)=>{
    main.text("")
main.append(bar)

    const listMovie=$(`<div><img src="${elem.imgMovie}"/>${elem.titleMovie}<div>${elem.rate}</div><div>${elem.description}</div></div>`)
        main.append(listMovie);
        listMovie.addClass("listMovie1")
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
 const sortFun=sortBy.on("click",(e)=>{
   const a=  movie.filter((elem,i)=>{
         elem.type===e.target.value
       
   })  
  a.forEach((elem,i)=>{
    
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
    console.log(favArray[0]);

    favArray.map((elem,i)=>{
         const listMovie=$(`<div><img src="${elem.imgMovie}"/>${elem.titleMovie}<div>${elem.description}</div></div>`)
        main.append(listMovie);
        listMovie.addClass("listMovieFavorite")
        
    })

})
//creat button login in bar 
const Login=$("<button>Login</button>")
bar.append(Login)
Login.addClass("Login")
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
        listMovie.addClass("listMovie") 
       index++
       //click in the img
       listMovie.on("click",()=>{
        mainMovie.text("")
        const listMovie=$(`<div><img src="${elem.imgMovie}"/>${elem.titleMovie}<div>${elem.description}</div><div>${elem.rate}</div></div>`)
        mainMovie.append(listMovie);
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
        const favoriteFun=fav.on("click",()=>{
            array.push(elem)
            if(localStorage.getItem("Fav")){
                localStorage.setItem("Fav", JSON.stringify(...JSON.parse(localStorage.getItem("Fav")),array));

               }else{
                localStorage.setItem("Fav",JSON.stringify(array))
               }

            // console.log(array);
        })
    })
       
    })
}
 console.log(funMovie());




 





