import type { gymWearItem } from '@/src/type/gymwear';
const db = require('../../src/db/db');

export default async function getBestTopItems(): Promise<string> {
  return new Promise((resolve, reject) => {
    db.query(
        "SELECT * FROM gym.top ORDER BY date DESC LIMIT 0,4",
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
