function solution(n, lost, reserve) {
    var realLost = lost.filter(a => !reserve.includes(a));
    var realReserve = reserve.filter(a => !lost.includes(a));
    
    return n - realLost.filter(a => {
        var b = realReserve.find(r => Math.abs(r-a) <= 1);
        if(!b) return true;
        realReserve = realReserve.filter(r => r !== b);
    }).length;
}

