/**
 * Created by apramanik on 6/24/17.
 */
function getKeywords(articleContent)
{
    articleContent = '{ "documents": [ {"language": "en", "id": "1", "text": "Love, love, love this sofa!!! Had my eye on it for a long time and finally was able to see and sit on one before purchasing. Article is becoming well known here in the midwest! Customer service sent me leather samples and I put them all through testing: chocolate, ketchup, spilled red wine and the leather cleaned off looking like new. Ordering was a breeze and the delivery company couldn\'t have been more accommodating. I look forward to purchasing again from Article."} ]}'
    URL = "https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/keyPhrases" ;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", URL, false);
    xmlhttp.setRequestHeader("Content-Type", "application/json");
    xmlhttp.setRequestHeader("Ocp-Apim-Subscription-Key","50b1ba0dbfb54f33a45ba2440fc0b22c");
    xmlhttp.send(ItemJSON);
    // alert(xmlhttp.responseText);
    obj = JSON.parse(xmlhttp.responseText);
    alert(obj);
}