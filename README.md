# 縮網址程式

本網站程式可以將輸入的網站縮短為「localhost:3000/五碼亂數」

## 開發作業系統

- macOS Sierra 10.12.6

## 使用軟體及套件

- body-parser: ^1.19.0

- express: ^4.17.1

- express-handlebars: ^3.1.0

- express-validator: ^6.1.1

- mongoose: ^5.6.2

- [MongoDB](https://www.mongodb.com/download-center/community) 4.0.10

## 安裝

- 安裝 MongoDB

至 MongoDB 下載完成後可以在下子資料夾找到`mongodb-osx-ssl-x86_64-4.0.5.tgz`資料夾，更名為`mongodb`後移至專案資料夾目錄，並於同一層建立`mongodb-data`資料夾。
接著開啟終端機並輸入

```
$ cd 專案資料夾位址/mongodb/bin
$ ./mongod --dbpath /Users/[使用者名稱]/專案資料夾位址/mongodb-data
```

如此資料庫已經開始運作，此終端機請務必保持開啟

可以下載安裝[Robo 3T](https://robomongo.org/download)操作資料庫

> 也可以另外開一個新的終端機，一樣移動到/mondodb/bin 路徑並輸入`./mongo`來操作資料庫，Robo 3T 為圖形介面較為人性化

接著開啟新的終端機輸入

```
cd 資料夾名稱 // 移動到指定資料夾
```

或輸入

```
mkdir 資料夾名稱 // 創建新資料夾
```

並在此資料夾中依序輸入

```
git clone https://github.com/F-Kibatodos/short-url.git   // 將此專案下載到資料夾
cd short-url                                             // 移動到專案資料夾
npm install                                              // 下載相關npm套件
npm run dev                                              // 執行專案
```

接著就可以在網頁輸入http://localhost:3000見到頁面

## Heroku

本程式已在 Heroku[部署](https://rocky-brook-46774.herokuapp.com/)

## 功能說明

- 輸入網址可以獲得新的縮網址並可以直接點擊該網址連到頁面
- 已經縮短過的網址不會重新縮短一次
- 五碼亂數不會重複
- 網址為輸入或格式錯誤會提醒

## 使用情形

- 首頁
  ![](https://i.imgur.com/B3FSbBB.png)

### 作者

[F-Kibatodos](https://github.com/F-Kibatodos)
