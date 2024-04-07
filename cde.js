var array = [
    {
        dp:"https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ,
        story:"https://images.unsplash.com/photo-1592199299806-e7349699f6a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"   
    },
    {
        dp:"https://images.unsplash.com/photo-1554180842-41b1dd69d588?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ,
        story:"https://images.unsplash.com/photo-1624870380386-412eb2f22187?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ,
        story:"https://images.unsplash.com/photo-1611754561041-3f047f9df5f0?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1542159919831-40fb0656b45a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ,
        story:"https://images.unsplash.com/photo-1632993950427-44e4c8f90023?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1614220683044-58f9e9548df6?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ,
        story:"https://images.unsplash.com/photo-1709115667926-cb28694d2e6b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]

var clutter = ""
array.forEach((element,idx) => {
    clutter += `<div class="story">
        <img id="${idx}" src="${element.dp}" alt="">
        </div>`;
});
let insta = document.querySelector(".insta");
insta.innerHTML=clutter;

insta.addEventListener("click",(det)=>{
    let g=array[det.target.id].story;
    let cross = document.querySelector("i");
    let full=document.querySelector("#full");
    full.style.display="block";
    full.style.backgroundImage=`url(${g})`;

    cross.style.display="block";
    setTimeout(()=>{
        full.style.display="none";
        cross.style.display="none";
    },3000)
    cross.addEventListener("click",()=>{
        full.style.display="none";
        cross.style.display="none";
    })

})
