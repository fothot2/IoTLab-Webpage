function fetchCV(id){
    fetch("../json/team.json")
        .then(response => response.json())
        .then(data => {
            let cv = data[id];
            var modal = $("#ModalCenter");
            modal.find(".modal-title").text(cv.name);
            modal.find(".modal-body").html(cv.bio);
            if (typeof cv.Website == "undefined" || cv.Website == "") {
                modal.find("#Site").hide();
            } else {
                modal.find("#Site").attr("onclick", "window.open('" + cv.Website + "')");
                modal.find("#Site").show();
            }
            if (typeof cv.Mail == "undefined" || cv.Mail == "") {
                modal.find("#Mail").hide();
            } else {    
                modal.find("#Mail").attr("onclick", "window.open('mailto:" + cv.Mail + "')");
                modal.find("#Mail").show();
            }
            modal.modal("show");
        });
}