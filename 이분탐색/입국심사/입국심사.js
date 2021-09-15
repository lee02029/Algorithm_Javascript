const solution = (n,times) => {
    times.sort((a,b)=> a-b);
    let left = 0;
    let right = times[times.length-1]*n;
    let mid = Math.floor((left+right))

    while(left <= right){
        const cnt = times.reduce((result,cur)=>result + Math.floor(mid/cur),0);

        if(cnt>= n) {right = mid-1; }
        else if(cnt < n) {left = mid+1;}

        mid = Math.floor((left+right)/2);
    }
    return left;
}

console.log(solution(6,[7, 10]))