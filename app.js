// Make an array of six image urls in your js file. (strings)
const imgArray = [
  "https://images.pexels.com/photos/1183434/pexels-photo-1183434.jpeg?cs=srgb&dl=pexels-amir-ghoorchiani-1183434.jpg&fm=jpg",
  "https://img.freepik.com/free-vector/silhouette-unicorn-hologram-gradient-background_1048-12923.jpg?w=2000",
  "https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg",
  "https://www.penguinrandomhouseaudio.com/wp-content/uploads/2019/08/International-Dog-Day.jpg",
  "https://www.dictionary.com/e/wp-content/uploads/2018/07/honey-badger3.jpg",
  "https://t4.ftcdn.net/jpg/05/08/29/81/360_F_508298120_KHgwGFm1jnUS0vphnbkFH1FhP8FZaOmH.jpg",
];
console.log(imgArray);

function addImage() {
  // Make it so that when you click the "Add random image" div, one random image from your array will appear on the page.
  // Make it so an image is added rather than replaced.
  // $("img").remove();
  const newImage = imgArray[Math.floor(Math.random() * imgArray.length)];
  const $newImg = $(`<img src=${newImage}>`)
    .css({
      // Make it so that each image is re-sized to the same proportions as the square div (100 x 100). Or, you could use Google images -> Tools -> Size to source images at the size you want.
      width: "100",
      height: "100",
    })
    .on("click", () => {
      $newImg.remove();
    });
  $newImg.appendTo("body");
}

// Using jQuery, make a div with the text "Add random image". Add a class to make the div square (100 x 100). Give it some color.
$(() => {
  // Make it so the images are added horizontally.
  $("body").css({ display: "flex" });
  const $div = $("<div>")
    .addClass("square")
    .css({
      width: "100",
      height: "100",
      backgroundColor: "magenta",
      // The div should have cursor: pointer in its CSS, so that when the user hovers the cursor over the div, the cursor turns into a pointer thing.
      cursor: "pointer",
    })
    .text("Add Random Image")
    .on("click", addImage);
  $div.appendTo("body");
});
