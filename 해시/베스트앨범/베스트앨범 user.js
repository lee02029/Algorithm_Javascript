//genres값을 맵핑하기
function solution(genres,plays) {
    let answer = [];
    let songs = genres.map((genre,index)=>{
        return {
            no : index,
            genre: genre,
            play: plays[index]
        }
    });

//동일한 장르일 경우 기존것에 추가
    let gernePlatCnt = [];
    songs.foreach(song => {
        let thisGenre = genrePlayCnt.find(genrePlay => genrePlay, genre === song.genre);
        if (!thisGenre) {
            genrePlayCnt.push({
                genre: song.genre,
                play: song.play
            });
        } else {
            thisGenre.play += song.play;
        }
    });
//배열을 기준으로 내림차순 정렬
    gernePlatCnt.sort((a,b => b.play - a.play))

//정렬된 genrePlatCnt 배열을 돌면서 동일한 장르에 대한 노래를 thisGenreSongs에 저장
//배열기준 내림차순 정렬
//thisGenreSongs 배열의 0번쨰 인덱스의 no 값을 answer에 push
//thisGenreSongs 배열의 길이가 1보다 클 경우 1번째 인덱스의 no값을 answer에 push
    genrePlayCnt.foreach(genrePlay=>{
        let thisGenreSongs = songs.filter(song => song.genre === genrePlay.genre);       
        thisGenreSongs.sort((a,b)=> b.play - a.play);
        answer.push(thisGenreSongs[0].no);
        if(thisGenreSongs.length >1){
            answer.push(thisGenreSongs[1].no);
        }
    });
    return answer;
}