import jwt from 'jsonwebtoken';


export function accessToken() {
  const token = jwt.sign({ url:true}, process.env.JWT_SECRET, {
  expiresIn: '1m', // 토큰 만료 시간 설정
})
return token
 };

export function decodeToken(token:string) {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
}