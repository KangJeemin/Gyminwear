const extractFirstImageUrl = (html: string) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const imageElements = doc.querySelectorAll("img");
  const firstImageUrl =
    imageElements && imageElements.length > 0 ? imageElements[0].src : null;
  return firstImageUrl;
};

export default extractFirstImageUrl;
