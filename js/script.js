$("#summarize").click(function(){  
 summarize();
})

function summarize(){
  var input = $("#input").val()
  var summary = get_summary(input);
  $("#output").text(summary);

  var previousLength = input.length;
  var presentLength = summary.length;

  $("#prev").text("Original length : " + previousLength + ", " + calculateWords(input) + " words");
  $("#pres").text("Summary length : " + presentLength + ", " + calculateWords(summary) + " words");
}

function calculateWords(input){
  var words = 0;
  var paragraphs = split_into_paragraphs(input);
  if(paragraphs.length > 0){
    for(var i=0; i<paragraphs.length; i++){
      var p = paragraphs[i];
      var w = p.split(" ").length; 
      words += w;
    }
  }else{
    return(input.split(" ").length);
  }
  return words;
}

summarize();
