// Connect with twitter APIs
const concatTweets2Text = ({data})=>{
    try {
        let response = "";
        if(data instanceof Array){
            data.map((twt,ind)=>{
                twt && twt.text && (response += twt.text);
            })
        }
        console.log("/\-\/-/\-/\-text***************");
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    concatTweets2Text : concatTweets2Text
}