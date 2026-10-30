function videoUpload()
{
    return new Promise((resolve,reject)=>{ 
       
    setTimeout(()=>{
         let ar=true;
        if(ar)
        resolve("Video Uploaded");
        else
        reject("can not upload");
        },4000);});
    

 
}
function publishVideo()
{+
    return new Promise((resolve,reject)=>{ 
        setTimeout(()=>{
            let ar=true;
        if(ar)
            resolve("Video Published");
        else
        reject("can not publish");

    },3000);});
    
}
function notifyVideo()
{
     return new Promise((resolve,reject)=>{ 
   setTimeout(()=>{
    let ar=false;
        if(ar)
            resolve("Video Notified");
        else
        reject("can not Notify");
     },3000);});
     
}

async function final()
{
    const s= await videoUpload();
    console.log(s);
     const h= await publishVideo();
    console.log(h);
    const a= await notifyVideo();
    console.log(a);
}
final();
console.log("shobha");