function pad0(numStr, bits){
    let L = numStr.length
    if(L>=bits) return numStr

    while(bits-->L){
        numStr = '0' + numStr
    }
    return numStr
}