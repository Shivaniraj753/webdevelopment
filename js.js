let pic=["shi.jpg","shi1.jpg","shi2.jpg",];

let c=0;
function nextImg()
{
    let p;
    if(pic.length-1==c){
        c=0
p=pic[c];
    }else{
c=c+1
p=pic[c];
    }

document.getElementById("slider").src = p;
}
function preImg()
{
    let p;
    if(c>=1){
c=c-1
 p=pic[c];
    }else{
        c=0
        p=pic[c]; 
    }
    console.log(c,'sasas')

document.getElementById("slider").src = p;
}
