const { ConcatenationScope } = require("webpack");

function fetchUserData(){
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve({
        id: 1,
        name: 'Deepak',
      });
    }, 1000);
  });
}

function fetchUserPosts(){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(['post1', 'post2', 'post3']);
    }, 2000);
  });
}

fetchUserData().then((userData)=>{
  console.log(userData);
  return fetchUserPosts();
}).then((userPosts)=>{
  console.log(userPosts);
}).catch((err)=>{
  console.log(err+" error found in promise chaining.")
}
);


//Promise.race

const imagerUrls = [
  'https://pixabay.com/illustrations/nature-night-bushes-flowers-leaves-8585495/',
  'https://pixabay.com/illustrations/leaves-sky-nature-sample-art-7602524/',
  'https://pixabay.com/illustrations/yoga-sample-plant-boho-bohemian-8165759/'
];

//for each url, create and return a promise. whichever promise gets settled first, return it.

function fastestImageLoad(imagerUrls){
  const promisesArr = imagerUrls.map((url)=>{
    return new Promise((resolve, reject)=>{
      let img = new Image();
      img.onload = ()=>resolve('image loaded first with URL: '+url);
      img.onerror = ()=>reject('image dint load, Url used: '+url);
      img.src = url;
    });
  });

  return Promise.race(promisesArr);
}

fastestImageLoad(imagerUrls).then((message)=>{
  console.log(message);
}).catch((err)=>{
  console.log(err);
})
