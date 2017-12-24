var count = 0;

function submitForm(){
    var formData = $('#testForm').serialize();
    formData = toJSON(formData);

    $.ajax({
      type: "POST",
      url: "/login",
      data: formData,
      dataType: "json",
      contentType : "application/json"
    }).done(function (data, textStatus, jqXHR) {
        data = $.parseJSON(JSON.stringify(data));
        if (data.login == 'success'){
            $("#testForm").css("display","none");
            $("#elizaForm").css("display","block");
            $("#submitForm").css("display","none");
            $("#elizaFunction").css("display","block");

        }
    })
}

function elizaSubmit(){
    var toAppend = $('#elizaMessage').serialize();
    var elizaData = toAppend+count;
    elizaData = toJSON(elizaData);
    toAppend = toJSON(toAppend)

//    alert(elizaData);
    $('table').append('<tr><td>' + $.parseJSON(toAppend).elizaText + '</td></tr>')


    $.ajax({
      type: "POST",
      url: "/eliza",
      data: elizaData,
      dataType: "json",
      contentType : "application/json"
    }).done(function (data, textStatus, jqXHR) {
        count+=1;
        data = $.parseJSON(JSON.stringify(data));
        $('table').append('<tr><td>' + data.reply + '</td></tr>')

    })

}

function toJSON(data){
  data = data.split("&");
  var obj={};
    for(i = 0; i < data.length; i++)
    {
        var x = data[i].split("=");
        obj[x[0]] = x[1];
    }
  return JSON.stringify(obj);
}