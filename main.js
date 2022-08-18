//creat array of object movie
const movie=[{imgMovie:"https://i.egycdn.com/pic/WmFwZndlY212bWJtRW1tbW1tcGFjdk5tYW1ibGxtdm1n.jpg"
,titleMovie:"Thor: Love and Thunder"
,type:"Fiction"},
{imgMovie:"https://i.egycdn.com/pic/WmFwZndlY212bUVtbW1ZbW1wRUVjY3dhbWptam1Fd2Z3bA.jpg",
titleMovie:"Top Gun: Maverick",
type:"action"}]
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
///creat button favorite in bar
const Favorite=$("<button>Favorite</button>")
bar.append(Favorite)
//creat button login in bar 
const Login=$("<button>Login</button>")
bar.append(Login)
index=0;
//creat function funMovie for movie array
const funMovie=()=>{
    const mainMovie=$("<div></div>")
    main.append(mainMovie)
    //use map To view Movie
    movie.map((elem,i)=>{
        const listMovie=$(`<div><img src="${elem.imgMovie}"/>${elem.titleMovie}</div>`)
        mainMovie.append(listMovie);
        listMovie.addClass("listMovie") 
       index++
       listMovie.on("click",()=>{
        mainMovie.text("")
        const listMovie=$(`<div><img src="${elem.imgMovie}"/>${elem.titleMovie}</div>`)
        mainMovie.append(listMovie);
        const back1=$("<button>back</button>")
        listMovie.append(back1)
        const backFun= back1.on("click",()=>{
            listMovie.text("")
            funMovie()
        })
    })
       
    })

}
 console.log(funMovie());
// sortBy.on("click",typeFun(e))
// const typeFun=()=>{
//     movie.filter((elem,i)=>{
// return elem.type===e.target.value

//     })

// }










