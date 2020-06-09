function printAllPaganti(paganti) {
  var target = $("#target");
  var template = $("#paganti-template").html();
  var compiled = Handlebars.compile(template);
  for (var pagante of paganti) {
    // console.log(pagamento);
    var paganteHTML = compiled(pagante)
    target.append(paganteHTML);
  }
}

function getAllPaganti() {
  $.ajax({
    url:"getAllPaganti.php",
    method:"GET",
    success: function(data) {
      printAllPaganti(data);
    }, error : function (err) {
      console.error(err);
    }
  })
}

function deletePagante() {
  var iconClicked = $(this);
  var pagante = iconClicked.parent();
  var idPagante = pagante.data("id");

  $.ajax({
    url:"deletePagante.php",
    method:"POST",
    data: {
      id:idPagante
    },
    success: function(){
      pagante.remove();
    }
  })
}

function init() {
  getAllPaganti();
  $(document).on("click","i.fas", deletePagante)
};

$(document).ready(init);
