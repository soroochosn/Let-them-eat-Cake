function eat_cake(str){
    if(str.length == 0){
        return 1;
    }
    for(var s = str.length; s >= 1; s--){
        if((str.length % s)== 0){
            if(str.substring(0,str.length/s)==str.substring(str.length - str.length/s, str.length)){
                return s;
            }
        }
    }
}