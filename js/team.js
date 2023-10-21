function fetchCV(id){
    fetch("../json/team.json")
        .then(response => response.json())
        .then(data => {
            let cv = data[id];
            var modal = $("#ModalCenter");
            modal.find(".modal-title").text(cv.name);
            modal.find(".modal-body").html(cv.bio);
            modal.find("#Website").attr("onclick", "window.open('" + cv.website + "')");
            if (cv.Mail == "") {
                modal.find("#Mail").hide();
            } else {    
                modal.find("#Mail").attr("onclick", "window.open('mailto:" + cv.Mail + "')");
            }
            modal.modal("show");
        });
}