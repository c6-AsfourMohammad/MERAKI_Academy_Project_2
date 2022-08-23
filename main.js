//creat array of object movie
const movie=
//movie (1)
[{imgMovie:"https://i.egycdn.com/pic/WmFwZndlY212bWJtRW1tbW1tcGFjdk5tYW1ibGxtdm1n.jpg"
,titleMovie:"Thor: Love and Thunder"
,type:"Fiction",
description:"Thor reunites with Jane Foster and Valkyrie, and the trio's lives are in jeopardy with the appearance of Gore, who is charged with killing all the gods in the universe.",
time:"Time:01:48:36",
rate:"⭐⭐⭐⭐⭐",
link:"https://www.youtube.com/embed/Go8nTmfrQd8"},
//movie (2)
{imgMovie:"https://i.egycdn.com/pic/WmFwZndlY212bUVtbW1ZbW1wRUVjY3dhbWptam1Fd2Z3bA.jpg",
titleMovie:"Top Gun: Maverick",
type:"action",
description:"After a career spanning more than thirty years to become one of the most qualified pilots in the US Air Force, Betty Mitchell takes a new step in his aviation career by experimenting with new aircraft.",
time:"Time:02:10:08",
rate:"⭐⭐⭐",
link:"https://youtu.be/giXco2jaZ_4"},
//movie (3)
{imgMovie:"https://i.egycdn.com/pic/WmFwZndlY21tdmNtYm12dk5MUmNsYW1FbUlhbWpsbA.jpg"
,titleMovie:"Uncharted"
,type:"action",
description:"The events revolve around a young boy, Nathan Drake, and his relationship with Victor Sullivan, as the duo embark on many adventures in search of lost treasures, while Drake seeks to retrieve his family's legacy.",
time:"Time:01:55:51",
rate:"⭐⭐⭐⭐",
link:"https://youtu.be/eHp3MbsCbMg"},
//movie (4)
{imgMovie:"https://i.egycdn.com/pic/WmFwZndlY21MTnZtYm1qbWptYWN4dmNtam1tbW13VG1tYg.jpg"
,titleMovie:"Joker"
,type:"drama",
description:"Little by little, pressure and circumstances combine to make a failed comedian go crazy and turn into a criminal and a maniacal killer.",
time:"Time:02:01:50",
rate:"⭐⭐⭐⭐",
link:"https://youtu.be/zAGVQLHvwOY"},
//movie (5)
{imgMovie:"https://i.egycdn.com/pic/WmFwZndlY212bWptRW1MY21qbWJFY212bUVtZndhY05ibA.jpg"
,titleMovie:"Minions: The Rise of Gru "
,type:"animation",
description:"In the 1970s, a twelve-year-old puppy sets out to carry out his plan in which he hopes to become the most evil person on earth, and on his way encounters strange creatures.",
time:"Time:01:27:36",
rate:"⭐⭐⭐⭐",
link:"https://youtu.be/HhIl_XJ-OGA"},
//movie (6)
{imgMovie:"https://i.egycdn.com/pic/WmFwZndlY212dmNtYm1wdm1FbW1FY212bVRFbUVtRXZ0TmI.jpg"
,titleMovie:"Prey"
,type:"drama",
description:"The work deals with the story of the famous predator known as the Predator and its original story from 300 years, where Naru, a skilled warrior, fights to protect her tribe from the predator.",
time:"Time:01:39:30",
rate:"⭐⭐⭐",
link:"https://youtu.be/3afFgl_bTW4"}]
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
const buttonSearch=$(`<button claas=buttonSearch><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
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
const Home=$(`<button> <svg  xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="svgHome" viewBox="0 0 16 16">
<path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
</svg></button>`)
bar.append(Home)
Home.addClass("Home")
//creat function Home
const HomeFun=Home.on("click",()=>{
    main.text("")
main.append(bar)
    funMovie()
})
///creat button favorite in bar
const Favorite=$(`<button><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-bookmark-heart-fill" viewBox="0 0 16 16">
<path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13.5zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
</svg></button>`)
bar.append(Favorite)
Favorite.addClass("Favorite")
//creat function favclick
const favclick=Favorite.on("click",()=>{
    main.text("")
    main.append(bar)
   
    const HomeFun=Home.on("click",()=>{
        main.text("")
       
    main.append(bar)
   
        funMovie()
        
    })
    // const favArray= localStorage.getItem("Fav");
    //  JSON.parse(favArray);
    //  console.log(favArray);

    array.map((elem,i)=>{
         const listMovie=$(`<div><img src="${elem.imgMovie}"/>${elem.titleMovie}<div>${elem.description}</div></div>`)
        main.append(listMovie);
        listMovie.addClass("listMovieFavorite")  
    })
})

//creat button login in bar 
const Login=$(`<button><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="svgLogin" viewBox="0 0 16 16">
<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
<path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg></button>`)
bar.append(Login)
Login.addClass("Login")
Login.on("click",()=>{
    main.text("")
    main.append(bar)
    login2=$(`<div class="login1"></div>`)
    const h1login=$(`<h1 class="h1login">Login</h1>`)
    login2.append(h1login)
    h1login.addClass("h1login")
    main.append(login2)
    const inputLogin1=$(`<input placeholder="User name"/>
<div class="hide">Enter User name</div>`)
login2.append(inputLogin1)
inputLogin1.addClass("inputLogin1")

const inputLogin2=$(`<input placeholder="Password" type="Password"/><div class="hide1">Enter Password</div>`)
login2.append(inputLogin2)
inputLogin2.addClass("inputLogin2")
    const reg1=$(`<button >Register</button>`)
    login2.append(reg1)
    reg1.addClass("reg1")
    const loginButton=$(`<button >Login</button>`)
    login2.append(loginButton)
    loginButton.addClass("loginButton")
    loginButton.on("click",()=>{
    users=JSON.parse(localStorage.getItem("users"));
    if(inputLogin1.val()===undefined||inputLogin1.val()===null||inputLogin1.val()===""){
        alert("please Enter User name and password ");
    }
    users.forEach((elem,i)=>{
       
     if(users[i].userName===inputLogin1.val()&&users[i].pass===inputLogin2.val()){
        alert("Welcome  "+users[i].userName);
        main.text("")
        main.append(bar)
        funMovie()
     }else{
        alert("Please Register ");
     }

     })
    })

    reg1.on("click",()=>{
        main.text("")
        login2.text("")
      
        const reg=$(`<div></div>`)
        reg.addClass("reg")
        const h1reg=$(`<h1>Register</h1>`)
        reg.append(h1reg)
        h1reg.addClass("h1reg")
       const input1=$(`<input placeholder="User name"/>`)
       reg.append(input1)
       input1.addClass("input1")
       const input2=$(`<input placeholder="Password" type="Password"/>`)
       reg.append(input2)
       input2.addClass("input2")

        main.append(bar)
        main.append(reg)
        const reg2=$(`<button>Register</button>`)
        reg.append(reg2)
        reg2.addClass("reg2")
        reg2.on("click",()=>{
            let users=localStorage.getItem("users")
            if(!users){
                users=[]
            }else{
                users=JSON.parse(users)
            }
let userName=input1.val()
let pass=input2.val()
if(userName===undefined||userName===null||userName===""){
    alert("fill all required fields");
return 
}
if(pass===undefined||pass===null||pass===""){
    alert("fill your password");
return 
}
user={userName:userName,pass:pass};
users.push(user)
localStorage.setItem("users",JSON.stringify(users))
alert("Registration success");
reg.text("")
Login.append(login2)
funMovie()
        })

    })
})

//creat dark mode in bar
const darkMode=$(`<button><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
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
//creat function light mode
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
        const listMovie=$(`<div><img  class="img1" src="${elem.imgMovie}"/>${elem.titleMovie}<div>${elem.description}</div><div>${elem.time}</div><div>${elem.rate}</div></div>`)
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
            mainMovie.text("")
            funMovie()
            
        })
        //creat button Trailer
    const Trailer=$(`<div><button class="back1"><a href="${elem.link}" class:"link">Trailer</a></button></div>`)
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
                // localStorage.setItem("Fav",JSON.stringify(array))
            //    }
            console.log(array);
        })
        
    })
       
    })
}
 console.log(funMovie());




 





