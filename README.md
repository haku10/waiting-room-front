# operation-app-ts

React typescript

# ReactAPP の起動

`cd operation-app-ts`
で対象プロジェクトまで移動

`docker-compose build`
`docker-compose up`
で Docker 上で起動する
※ ビルド前に node_modules は削除しておく

##　※外側に node_modules を作成したい場合
`docker run --rm -v $PWD:/myapp -w /app node:latest npm install`

### ローカルでエラーが表示される場合

`yarn install`
で node_modules にライブラリを取得する

### AWS プロファイル設定

### 開発環境へのデプロイ

`aws s3 ls --profile nti-vwr`
`npm run build:dev`
`aws s3 sync ./build/ s3://nit-vwr-sorry-page/ --profile nti-vwr`

### テスト方法

`http://localhost:3000/?connect=19182990`のように connect_id をつけてログインする
