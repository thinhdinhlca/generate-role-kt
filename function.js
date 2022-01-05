window.function = function (role) {
    
    role = role.value ?? "";
    
    if (typeof role == "undefined") {
        return "";
    }
    
    else {
        let check = role.charAt(0).toLowerCase();
        let res = role.charAt(0).toLowerCase() + role.slice(1);
        
        if (check == "a" || check == "e" || check == "i" || check == "o" || check == "u") {
            
            return "an " + res;
        }
        
        else {
            return "a " + res;
        
        }
    }
}
}
