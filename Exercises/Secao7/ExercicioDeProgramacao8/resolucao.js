function isPalindrome(slowo){
    let a = 0;
    let b = slowo.length - 1;
    for(;b >= 0;a++, b--)
        if(slowo[a] != slowo[b])
            return false;
    return true;
}