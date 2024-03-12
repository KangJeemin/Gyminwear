
export const extractFirstImageUrl = (html: string) => {
  
  const doc = new DOMParser().parseFromString(html, "text/html");
  const imageElements = doc.querySelectorAll("img");
  const firstImageUrl =
    imageElements && imageElements.length > 0 ? imageElements[0].src : null;
  return firstImageUrl;
};
//don't use DOMParser to render buildTime
export const extractFirstImageUrl2 =(html:string): string | null => {
  const imgPattern = /<img[^>]*src="([^"]*)"[^>]*>/g;
  let matches = html.match(imgPattern);

  // 추출된 URL 출력
  if (matches) {
    let urls = matches.map(function(match) {
      let srcMatch = /src="([^"]*)"/.exec(match);
      return srcMatch ? srcMatch[1] : null;
    });
    return urls.length > 0 ? urls[0] : null;
} else
    return null;


}
