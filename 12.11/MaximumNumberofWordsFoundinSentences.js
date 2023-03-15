var mostWordsFound = function(sentences) {
        let b =0;
        for(var i =0; i < sentences.length; i++){
           let a= sentences[i].split(" ").length
           if(b < a){
                   b=a;
           }
        }console.log(b)
        return b
};mostWordsFound(["alice and bob love leetcode","i think so too","this is great thanks very much"]);
//값 배열속의 단어수 비교해서 가장큰 값만 아웃