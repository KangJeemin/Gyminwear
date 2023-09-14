import type { gymWearItem } from '@/src/type/gymwear';
const db = require('../../src/db/db');

export default async function getBestAllItems(): Promise<string> {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM gym.bottom UNION SELECT * FROM gym.top ORDER BY likecount DESC LIMIT 0,4",
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
