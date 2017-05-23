'use strict';


var counter = 0;

var allImages = [];
new PageImage ('star wars backpack', 'bag.jpg', 'bag-id', allImages);
new PageImage ('banana slicer', 'banana.jpg', 'banana-id', allImages);
new PageImage ('bathroom tablet holder', 'bathroom.jpg', 'bathroom-id', allImages);
new PageImage ('yellow boots', 'boots.jpg', 'boots-id', allImages);
new PageImage ('breakfast machine', 'breakfast.jpg', 'breakfast-id', allImages);
new PageImage ('meatball bubble gum', 'bubblegum.jpg', 'bubblegum-id', allImages);
new PageImage ('red chair', 'chair.jpg', 'chair-id', allImages);
new PageImage ('green monster', 'cthulhu.jpg', 'cthulhu-id', allImages);
new PageImage ('duck mouthed dog', 'dog-duck.jpg', 'dog-duck-id', allImages);
new PageImage ('canned dragon meat', 'dragon.jpg', 'dragon-id', allImages);
new PageImage ('spoon pen', 'pen.jpg', 'pen-id', allImages);
new PageImage ('pet dusting boots', 'pet-sweep.jpg', 'pet-sweet-id', allImages);
new PageImage ('pizza scissors', 'scissors.jpg', 'scissors-id', allImages);
new PageImage ('shark sleeping bag', 'shark.jpg', 'shark-id', allImages);
new PageImage ('baby dusting onesie', 'sweep.png', 'sweep-id', allImages);
new PageImage ('tauntaun sleeping bag', 'tauntaun.jpg', 'tauntaun-id', allImages);
new PageImage ('canned unicorn meat', 'unicorn.jpg', 'unicorn-id', allImages);
new PageImage ('octopus tentacle usb', 'usb.gif', 'usb-id', allImages);
new PageImage ('water can artwork', 'water-can.jpg', 'water-can-id', allImages);
new PageImage ('wine glass artwork', 'wine-glass.jpg', 'wine-glass-id', allImages);



function PageImage(name, filePath, id, allImages){
  this.name = name;
  this.filePath = 'img/' + filePath;
  this.timesDisplayed = 0;
  this.timesClicked = 0;
  allImages.push(this);

}


function generateRandomImage(){
  var rndImgSelection = Math.floor(Math.random()* (19 - 0 + 1));
  return allImages[rndImgSelection];
  // console.log(images[rndImgSelection]);
}

function imageAdd(){
  var newImage;
  var randomImage;
  for (var i = 0; i < 3; i++) {
    randomImage = generateRandomImage();
    var myImageBox = document.getElementById('images-selection');
    newImage = document.createElement('img');
    newImage.setAttribute('src', 'alt');
    newImage.src = randomImage.filePath;
    myImageBox.appendChild(newImage);
  }

}

imageAdd();
