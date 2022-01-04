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
    let who_text = who + ", " + role;
    let what_text = "who wants " + what;
    let when_text = "";
    let why_text = "";
    
    if (when != "") {
        when_text = "whenever " + when;
    }
    
    if (when != "" && why != "")  {
        why_text = "they " + why;
    }
        
    if (when == "" && why != "") {
        why_text = "in order to " +why;
    }
    
    let res = [who_text, what_text, when_text, why_text].filter(Boolean).join(", ");
    
    return res + ".";
    }
   
}
