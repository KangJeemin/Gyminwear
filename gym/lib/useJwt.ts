import jwt from 'jsonwebtoken';


export function accessToken() {
  const token = jwt.sign({ url:true }, process.env.JWT_SECRET, {
  expiresIn: '15m', // 토큰 만료 시간 설정
})
return token
 };

export function decodeToken(token:string): any{
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
}

export function getCookieValue(cookieName:string) {
  const cookieString = document.cookie;
  const cookies = cookieString.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    // 쿠키 이름이 일치하는 경우 해당 쿠키 값을 반환
    if (cookie.startsWith(cookieName + '=')) {
      return cookie.substring(cookieName.length + 1);
    }
  }
  // 해당 쿠키가 없는 경우 null을 반환하거나 적절한 처리를 수행할 수 있습니다.
  return "";
}