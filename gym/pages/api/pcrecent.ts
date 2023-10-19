import type { gymWearItem } from '@/src/type/gymwear';
const db = require('../../src/db/db');

export default async function getPcBestRecentItems(): Promise<string> {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM gym.bottom UNION SELECT * FROM gym.top ORDER BY date DESC LIMIT 0,10",
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
