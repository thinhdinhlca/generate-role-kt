window.function = function (who, role, what, when, why) {

    who = who.value ?? "";
    role = role.value ?? "";
    what = what.value ?? "";
    when = when.value ?? "";
    why = why.value ?? "";
    
    if (who == "" || role == "") {
        return "";
    }
    
    else {
    
    let whowhat_text = "";
        
    if (role == "") {
        whowhat_text = who + " wants " + what;
    }
    
    if (role != "") {
        whowhat_text = who + ", " + role + ", wants " + what;
    }
 
    let when_text = "";
    let why_text = "";
    
    if (when != "") {
        when_text = "whenever " + when;
    }
        
    if (why != "") {
        why_text = "in order to " +why;
    }
    
    let res = [whowhat_text, when_text, why_text].filter(Boolean).join(", ");
    
    return res + ".";
    }
   
}
