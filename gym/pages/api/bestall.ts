import type { gymWearItem } from '@/src/type/gymwear';
const db = require('../../src/db/db');

export default async function getBestAllItems(): Promise<gymWearItem> {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM gym.bottom UNION SELECT * FROM gym.top ORDER BY likecount DESC LIMIT 0,4",
      (err: any, result: gymWearItem) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log(result);
          resolve(result);
        }
      }
    );
  });
}
