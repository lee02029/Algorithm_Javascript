function solution(priorities, location){
    //순위 초기화
    let ranking = 0;

    //대기목록이 다 비워질 떄 까지
    while(priorities.length) {
        //대기 목록 첫번쨰 요소 배열 최대값보다 작은 경우
        if (priorities[0] < Math.max(...priorities)) {
            if(--location<0) location = priorities.length -1 ;
            //제일 앞 요소에 위치
            priorities.push(priorities.shift());
        }else{
            //순위 업데이트
            ranking++;
            //배열을 빠져나갈 경우 자신이 리턴
            if(--location <0)return ranking;
            //자신이 아니면 제일 앞의 요소 뺴내기
            priorities.shift();
        }
    }
}
