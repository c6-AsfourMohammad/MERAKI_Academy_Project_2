//creat array of object movie
const movie=[{imgMovie:"https://i.egycdn.com/pic/WmFwZndlY212bWJtRW1tbW1tcGFjdk5tYW1ibGxtdm1n.jpg",titleMovie:"Thor: Love and Thunder"},
{imgMovie:"https://i.egycdn.com/pic/WmFwZndlY212bUVtbW1ZbW1wRUVjY3dhbWptam1Fd2Z3bA.jpg",titleMovie:"Top Gun: Maverick"}]
//select to div(main)
const main=$("#main");
//creat div (bar) in top app 
const bar=$("<div>Movies</div>");
main.append(bar)
bar.addClass("bar");
//creat div search in bar
const search=$("<div><input>Search..</input><button>search</button></div>")
search.addClass("search")
bar.append(search)
//creat button sort in bar 
const sortBy=$("<button>Sort by</button>")
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
    //use map To view Movie
    movie.map((elem,i)=>{
        const listMovie=$("<button></button>")
        listMovie.text(elem);
        main.append(listMovie);
       
    })
}
console.log(funMovie());









