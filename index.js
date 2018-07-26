function toggleVoteContainer(){
  //find the vote containeron webpage//
  var voteContainer=document.getElementById("vote-container");
  if(voteContainer.style.display === "") {
    voteContainer.style.display = "block";
  }
}

function increaseLikes(element) {
  var likes = element.innerText;
  likes = parseInt(likes);
  likes += 1;
  //change value of likes on page //
  element.innerText = likes;

  document.getElementsByClassName("score").style.color="orange";
}


var dogImages =
["http://puppytoob.com/wp-content/uploads/2017/11/Bichon-Frise-Puppies.jpg","https://www.mypetneedsthat.com/wp-content/uploads/2017/10/best-dog-foods-for-pitbulls-1068x346.jpg","https://i.kinja-img.com/gawker-media/image/upload/s--WFkXeene--/c_scale,f_auto,fl_progressive,q_80,w_800/ol9ceoqxidudap8owlwn.jpg"];

var catImages =
["https://pbs.twimg.com/profile_images/571260078292865024/0EvP5vXn_400x400.jpeg","http://r.fod4.com/s=w900,pd1/o=90/http://p.fod4.com/p/feature_images/GOGHex2SIW8EkuCqnT42_385891624.jpg","http://homepages.uc.edu/~burgesmr/catanddog/Cats/2.jpg","https://kittentoob.com/wp-content/uploads/2013/07/mother_daughter_cats_1.jpg","https://vetstreet-brightspot.s3.amazonaws.com/03/e1/b4ef942648c6a7244a0301d47ccb/three-adorable-kittens-thinkstock-517149749-335lc123115jpg.jpg"];

function changeImage(element) {
  var animals =[]

  if(element.id === "cats-carousel"){
    animals=catImages;
  } else {
    animals = dogImages;
  }

var carousel = document.getElementById(element.id);

var image = carousel.getElementsByTagName('img')[0];

var imageUrl = image.getAttribute('src');

var imageIndex = animals.indexOf(imageUrl);

if(imageIndex === animals.length -1){
  imageIndex = 0;
  }  else {
    imageIndex += 1 ;
  }


imageUrl= animals[imageIndex];

image.src =imageUrl;
}
