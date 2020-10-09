export const getDateFormat = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10){
            dd='0'+dd
        }
        if(mm<10){
            mm='0'+mm
        }
    return yyyy+'-'+mm+'-'+dd;
}

export const limitSentence = (sentence) => {
    const words = sentence.split(" ");

    if(words.length > 16 )
        return `${words.slice(0, 15).join(" ")}...`;
    return sentence;
}