const extractFirstImageUrl = (html: string) => {
  if (typeof window === "undefined") {
    // 코드가 서버에서 실행 중인 경우, 기본 값을 반환하거나 해당하는 방식으로 처리합니다. (DOMParser is not defined 에러 해결 )
    return null;
  }
  const doc = new DOMParser().parseFromString(html, "text/html");
  const imageElements = doc.querySelectorAll("img");
  const firstImageUrl =
    imageElements && imageElements.length > 0 ? imageElements[0].src : null;
  return firstImageUrl;
};

export default extractFirstImageUrl;
