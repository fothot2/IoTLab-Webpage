//dlecare a function expandtext()
function expandtext(object) {
    fetch("../json/projects.json")
        .then(response => response.json())
        //save the json data with the matching id in a variable
        .then(data => {
            let project = data[object.id].Description;
            //console.log(object.getElementsByTagName("img")[0].src);
            var modal = $("#ModalCenter");
            //set modal title to the project name
            modal.find(".modal-title").text(object.id);
            modal.find(".modal-body").html("<center><img src='" + object.getElementsByTagName("img")[0].src + "'class='modal-img' style='height: 40%; width: 40%'></center><br><br><p>" + project + "</p>");
            modal.modal("show");
        });
    }
