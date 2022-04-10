let clock=document.getElementById("clock");
// console.log(clock);
function showTime(){
    let d=new Date();
    // console.log(d);
    clock.innerHTML=`
    <p class="h5 text-danger">${d.getDay()}<br><span class="days">Days</span></p>
                       <span class="text-dots mt-2"></span>
                       <p class="h5 text-danger">${d.getHours()} <br><span class="days">Hours</span></p>
                       <span class="text-dots mt-2"></span>
                       <p class="h5 text-danger">${d.getMinutes()}<br><span class="days">Minutes</span></p>
                       <span class="text-dots mt-2"></span>
                       <p class="h5 text-danger">${d.getSeconds()} <br><span class="days">Seconds</span></p>
    `;
}
setInterval(showTime,1000);

let screenHeight=$(window).height();
console.log(screenHeight);
$(window).scroll(function(){
    let currentPosition=$(this).scrollTop();
    // console.log(currentPosition);
    if(currentPosition > screenHeight-100){
        $(".custom-bar").addClass("nav-scroll-link");
    }
    else{
        $(".custom-bar").removeClass("nav-scroll-link");
        setActive('home');
    }
});




function setActive(current){
    $(".nav-link").removeClass("current-section");
   $(`.nav-link[href='#${current}']`).addClass("current-section");

}
function navScroll(){
    let currentSection=$("section[id]");
    currentSection.waypoint(function(direction){
        if(direction == "down"){
            let currentId=$(this.element).attr("id");
            console.log(currentId);
            setActive(currentId);
        }
       

    },{
        offset:"15%"
    }
    );
    currentSection.waypoint(function(direction){
        if(direction == "up"){
            let currentId=$(this.element).attr("id");
            console.log(currentId);
            setActive(currentId);
        }
       

    },{
        offset:"15%"
    }
    );
    
}
navScroll();
$(window).on("load",function(){
    console.log("loading");
    $(".loader-container").fadeOut(500,function(){
        this.remove();
    });
});
$(".navbar-toggler").click(function(){
    let result=$(".navbar-collapse").hasClass("show");
    console.log(result);
    if(result){
        $(".menu-icon").removeClass("feather-x").addClass("feather-menu");
    }
    else{
        $(".menu-icon").removeClass("feather-menu").addClass("feather-x");
    }
})
