//creat array of object movie
const movie=[{imgMovie:"https://i.egycdn.com/pic/WmFwZndlY212bWJtRW1tbW1tcGFjdk5tYW1ibGxtdm1n.jpg"
,titleMovie:"Thor: Love and Thunder"
,type:"Fiction",
description:"Thor reunites with Jane Foster and Valkyrie, and the trio's lives are in jeopardy with the appearance of Gore, who is charged with killing all the gods in the universe.",
rate:"⭐⭐⭐⭐⭐"},
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
rate:"⭐⭐⭐⭐"},]
//select to div(main)
const main=$("#main");
//creat div (bar) in top app 
const bar=$("<div>Movies</div>");
main.append(bar)
bar.addClass("bar");
//creat div search in bar  ins
const search=$("<div><input></input><button>search</button></div>")
search.addClass("search")
bar.append(search)
//creat button sort in bar 
const sortBy=$(`<select name="sort" >
<option value="all">all sort</option>
<option value="action">action</option>
<option value="drama">drama</option>
<option value="comedy">comedy</option>
<option value="Historical">Historical</option>
<option value="Fiction">Fiction</option>
</select>`)
bar.append(sortBy)

//creat button Home in bar 
const Home=$("<button>Home</button>")
bar.append(Home)
//creat function Home
const HomeFun=Home.on("click",()=>{
    main.text("")
main.append(bar)
   
    funMovie()
})
///creat button favorite in bar
const Favorite=$("<button>Favorite</button>")
bar.append(Favorite)
const favclick=Favorite.on("click",()=>{
    main.text("")
    main.append(bar)
    array.map((elem,i)=>{
          const listMovie=$(`<div><img src="${elem.imgMovie}"/>${elem.titleMovie}</div>`)
        main.append(listMovie);
    })

})
//creat button login in bar 
const Login=$("<button>Login</button>")
bar.append(Login)
index=0;
array=[];
//creat function funMovie for movie array
const funMovie=()=>{
    const mainMovie=$("<div></div>")
    main.append(mainMovie)
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
        //creat function back in click
        const backFun= back1.on("click",()=>{
            listMovie.text("")
            funMovie()
            
        })
        //creat button fav
        const fav=$("<button>Add Favorite</button>")
        listMovie.append(fav)
       //creat function fav in click
        const favoriteFun=fav.on("click",()=>{
            array.push(elem)
            console.log(array);
        })
    })
       
    })
}
 console.log(funMovie());




 





