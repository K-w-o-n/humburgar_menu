const humburgarMenuContianerTag = document.querySelector(
  ".humburgarMenuContainer"
);
const line1Tag = document.querySelector(".line1");
const line2Tag = document.querySelector(".line2");
const line3Tag =document.querySelector(".line3");
const overLyMenTag = document.querySelector(".overlayMenu");
const liTags = document.getElementsByTagName("li");

humburgarMenuContianerTag.addEventListener("click", () => {
    if(humburgarMenuContianerTag.classList.contains("isOpened")) {
          line2Tag.classList.remove("hideLine2");
          overLyMenTag.classList.remove("showOverlayMenu");
          line1Tag.classList.remove("rotatePlus45deg");
          line3Tag.classList.remove("rotateMinus45deg");
          humburgarMenuContianerTag.classList.remove("isOpened");
             for (let i = 0; i < liTags.length; i++) {
               liTags[i].classList.remove("moveLiTagUp");
             }
    } else {
         overLyMenTag.classList.add("showOverlayMenu");
         line2Tag.classList.add("hideLine2");
         line1Tag.classList.add("rotatePlus45deg");
         line3Tag.classList.add("rotateMinus45deg");
         humburgarMenuContianerTag.classList.add("isOpened");
         for (let i = 0; i < liTags.length; i++) {
          liTags[i].classList.add("moveLiTagUp");
          
         }
    }
   
})