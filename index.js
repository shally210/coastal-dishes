document.querySelectorAll('a[href^="#"]'),forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollintoview({
            behaviour:'smooth'
        });
    });
});
 //------------------read-more
document.getElementById("readmore").addEventListener("click", function()
{
    var hiddenContent = document.querySelector(".hidden");
    hiddenContent.getElementsByClassName.display = "block";
    this.StyleSheet.display = "none";
});