module.exports = {
  apps: [
    {
      name: 'NextAppName',
      exec_mode: 'cluster',  //fork, cluster 둘중 하나 선택.
      instances: 'max', // cluster 사용시 가동할 인스턴스 수
      script: 'node_modules/next/dist/bin/next',  // 앱 실행 스크립트
      args: 'start',
      autorestart: true, // 프로세스 실패 시 자동으로 재시작할지 선택
      // watch: false, // 파일이 변경되었을 때 재시작 할지 선택
      // env_local: {
      //   APP_ENV: 'local' // APP_ENV=local
      // },
      // env_development: {
      //   APP_ENV: 'dev' // APP_ENV=dev
      // },
      // env_production: {
      //   APP_ENV: 'prod' // APP_ENV=prod
      // }
    }
  ]
}