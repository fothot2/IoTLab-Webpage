//dlecare a function expandtext()
function expandtext(object) {
    fetch("../json/projects.json")
        .then(response => response.json())
        //save the json data with the matching id in a variable
        .then(data => {
            let project = data[object.id].Description;
            console.log(object.getElementsByTagName("img")[0].src);
            var modal = document.getElementById("myModal");
            var span = document.getElementsByClassName("close")[0];
            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
                modal.style.display = "none";
            }
            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
            //set innerHTML of the modal to the project description alongside with the image that is inside thhe object
            console.log(object.getElementsByTagName("img")[0].toString() + "class='modal-img'>" + "<p>" + project + "</p>")
            document.getElementById("projectDescription").innerHTML = "<img src='" + object.getElementsByTagName("img")[0].src + "'class='modal-img'>" + "<p>" + project + "</p>";
            modal.style.display = "block";
        });
    }
