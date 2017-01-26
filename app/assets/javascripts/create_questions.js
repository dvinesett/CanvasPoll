var question_id = 1;
var answer_id = 1;

var row_div = document.createElement("div");
row_div.setAttribute("class", "row");
row_div.setAttribute("style", "border: 4px solid white");


function addQuestion(quiz_element)
{
    question_id++;
    var questions_element = document.getElementById("questions");

    var question_row = row_div.cloneNode();
    var question_input_row = row_div.cloneNode();
    
    var question_div = document.createElement("div");
    question_div.setAttribute("class", "col-xs-9");
    question_div.setAttribute("style", "border: 4px solid white");
    question_div.setAttribute("id", "question" + question_id);
    
    var question_label= document.createElement("label");
    question_label.setAttribute("for", "q" + question_id);
    question_label.innerHTML="Question " + question_id;
    
    var question_input_div = document.createElement("div");
    question_input_div.setAttribute("class", "col-xs-9");
    
    var question_input = document.createElement("input");
    question_input.setAttribute("type", "text");
    question_input.setAttribute("class", "form-control");
    question_input.setAttribute("id", "q" + question_id);
    question_input.setAttribute("name", "q" + question_id);
    
    
    var plus_glyph = document.createElement("span");
    plus_glyph.setAttribute("class", "glyphicon glyphicon-plus");
    var plus_button = document.createElement("a");
    plus_button.setAttribute("class", "btn button-color col-xs-offset-1");
    plus_button.setAttribute("onclick", "addAnswer(this.parentElement.parentElement)");
    plus_button.appendChild(plus_glyph);
    plus_button.innerHTML="Add new answer"
    var new_answer_div = row_div.cloneNode();
    new_answer_div.appendChild(plus_button);
    
    var remove_div = document.createElement("div");
    remove_div.setAttribute("class", "col-xs-1");
    var remove_button = document.createElement("a");
    remove_button.setAttribute("class", "btn btn-danger");
    remove_button.setAttribute("onclick", "removeQuestion(this.parentElement.parentElement.parentElement)");
    var remove_glyph = document.createElement("span");
    remove_glyph.setAttribute("class", "glyphicon glyphicon-remove");
    remove_button.appendChild(remove_glyph);
    remove_div.appendChild(remove_button);
    
    var answers_div = document.createElement("div");
    answers_div.setAttribute("id", "question" + question_id + "answers");
    
    question_div.appendChild(question_label);
    question_input_div.appendChild(question_input);
    question_input_row.appendChild(question_input_div);
    question_input_row.appendChild(remove_div);
    question_div.appendChild(question_input_row);
    question_div.appendChild(answers_div);
    question_div.appendChild(new_answer_div);
    question_row.appendChild(question_div);
    questions_element.append(question_row);
    addAnswer(question_div);
}

function removeQuestion(question_element)
{
    var parent = question_element.parentElement;
    parent.removeChild(question_element);
    // i--;
}

function addAnswer(question_element)
{
    var question_number = question_element.id.split("");
    question_number = question_number[question_number.length-1];
    //console.log(question_number);
    var answers_element = document.getElementById("question" + question_number + "answers");
    answer_id++;
    
    var row = row_div.cloneNode();
    
    var answer_radio_div = document.createElement("div");
    answer_radio_div.setAttribute("class","col-xs-1");
    answer_radio_div.setAttribute("id","q" + question_id + "radio");
    answer_radio_div.setAttribute("align","right");
    
    var answer_radio = document.createElement("input");
    answer_radio.setAttribute("type","radio");
    answer_radio.setAttribute("name","q" + question_id + "r");
    answer_radio.setAttribute("value",answer_id);
    
    var answer_div = document.createElement("div");
    answer_div.setAttribute("class", "col-xs-6")
    answer_div.setAttribute("id", "q" + question_id + "a" + answer_id);
    
    var answer_input = document.createElement("input");
    answer_input.setAttribute("type", "text");
    answer_input.setAttribute("class", "form-control");
    answer_input.setAttribute("id", "answer" + answer_id);
    answer_input.setAttribute("name", "q" + question_id + "a" + answer_id);
    
    var answer_label= document.createElement("label");
    answer_label.setAttribute("for", "answer" + answer_id);
    answer_label.innerHTML="Answer " + answer_id;
    
    var remove_div = document.createElement("div");
    remove_div.setAttribute("class", "col-xs-1");
    var remove_button = document.createElement("a");
    remove_button.setAttribute("class", "btn btn-danger");
    remove_button.setAttribute("onclick", "removeAnswer(this.parentElement.parentElement)");
    var remove_glyph = document.createElement("span");
    remove_glyph.setAttribute("class", "glyphicon glyphicon-remove");
    remove_button.appendChild(remove_glyph);
    remove_div.appendChild(remove_button);
    
    // answer_div.appendChild(answer_label);
    answer_radio_div.appendChild(answer_radio);
    answer_div.appendChild(answer_input);
    row.appendChild(answer_radio_div);
    row.appendChild(answer_div);
    row.appendChild(remove_div);
    answers_element.appendChild(row);
}

function removeAnswer(answer_row_element)
{
    var parent = answer_row_element.parentElement;
    parent.removeChild(answer_row_element);
    // j--;
}