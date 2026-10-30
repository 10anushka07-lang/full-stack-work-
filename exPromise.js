// console.log("Nivesh");
// console.log("Harshita");
// setTimeout(()=>console.log("Harshita1"),3000);
// console.log("Harshita2");
// //setTimeout()
function videoUpload()
{
    return new Promise((resolve,reject)=>{
     setTimeout(()=>
        {const ar=true;
        if(ar)
        resolve("Video Uploaded");
        else
        reject("can not upload");}
        ,4000);});
    
}
function publishVideo()
{
     return new Promise((resolve,reject)=>{
      setTimeout(()=>
        {const ar=true;
        if(ar)
        resolve("Video Published");
        else
        reject("can not publish");}
        ,4000);});

}
function notifyVideo()
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>
        {const ar=false;
        if(ar)
        resolve("Video Uploaded");
        else
        reject("can not upload");}
        ,4000);});
  
}
videoUpload().then(value=>{console.log(value); return new publishVideo();})
.then(value=>{console.log(value);return new notifyVideo();})
.then(value=>{console.log(value);})
.catch(value=>{console.error(value);});
// videoUpload(()=>publishVideo(notifyVideo));
//videoUpload();