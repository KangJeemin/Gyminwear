import type { gymWearItem } from '@/ver1-files/src/type/gymwear';
const db = require('../../src/db/db');

export default async function getPcBestAllItems(): Promise<string> {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM gym.bottom UNION SELECT * FROM gym.top ORDER BY likecount DESC LIMIT 0,10",
      (err: any, result: gymWearItem) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
            const serializedResult = JSON.stringify(result); // 데이터 직렬화
            resolve(serializedResult);
          
        }
      }
    );
  });
}
