const fs = require('fs');

const { findCategory } = require("./openApiController");
const { findSentiment } = require("./openApiController");
const { getRecentTweets } = require("./tweetsController");

const concatTweets2Text = ({ data, query })=>{
    try {
        console.log("***************/\-\/-/\-/\-***************  " + query);

        const resp = {text : "" , twtids : []};
        if(data && data instanceof Array){
            data.map((twt,ind)=>{
                twt && twt.text && (resp.text += twt.text);
                twt && twt.id && (resp.twtids.push(twt.id));
            })
        }
        return resp;
    } catch (error) {
        console.log(error);
    }
}

const processAndGather = ({filedata})=>{
    const respPromise = new Promise((resolve, reject)=> {
        let trends = filedata[0].trends;
        if(trends instanceof Array){
            try {  
                trends.map(async (trend,index) => {
                    if(typeof trend === "object" && !trend.category && !trend.sentiment ){
                        console.time('#####################-------trend'+index);
                        if (trend.text) {
                            const { data: oaiData } = await findCategory({text : trend.text});
                            const { data: oaiDataSentiment } = await findSentiment({text : trend.text});
                            oaiData && (trend["category"] = oaiData.label);
                            oaiDataSentiment && (trend["sentiment"] = oaiDataSentiment.label);
                        }
                        else{ 
                            const { data: tweetData } = await getRecentTweets({query:trend.query});
                            const { text ,twtids } = concatTweets2Text({data:tweetData, query:trend.query});
                            const { data: oaiData } = await findCategory({text});
                            const { data: oaiDataSentiment } = await findSentiment({text : trend.text});
                            oaiData && (trend["category"] = oaiData.label);
                            oaiDataSentiment && (trend["sentiment"] = oaiDataSentiment.label);
                            twtids && (trend["ids"] = twtids);
                            text && (trend["text"] = `${text}`);
                        }
                        console.timeEnd('#####################-------trend'+index);
                    }
                    if(index + 1 === filedata[0].trends.length){
                        // filedata[0].trends = trends;
                        resolve(filedata);
                    }
                });
            } catch (error) {
                // filedata[0].trends = trends;
                resolve(filedata);   
            }
        }else{
            reject({error : "!No data! category setting error"})
        }
    });
    return respPromise;

}

const saveFile = ({filepath , filedata})=>{
    try {
        fs.writeFileSync(filepath, JSON.stringify(filedata));
        console.log("File written successfully");
    } catch(err) {
        console.error(err);
    }
}

module.exports = {
    concatTweets2Text : concatTweets2Text,
    processAndGather : processAndGather,
    saveFile: saveFile
}