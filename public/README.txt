The New York Notes — 原圖水彩互動地圖元件

此更新包以 GitHub main 最新版本 b98d46370e2385c8515b827ddd6f0a7ac65d7b04 為基礎設計。

檔案：
- src/TripAreaMap.tsx：替換舊幾何 SVG 地圖
- public/nyc-watercolor-map.webp：由使用者提供的原圖裁切（x=0..710，y=0..1536），沒有右側錯誤行程文字
- watercolor-styles.css：將內容加至 src/style.css 末端

使用方式：保留既有 main.tsx、tripData.ts 與所有本機資料儲存功能；只覆寫上列地圖元件並新增圖片與樣式。執行 npm run build 驗證。這是待上傳的更新包，不代表已提交或部署。

備註：WebP 710x1536、約 80 KB。SVG mask 根據原圖座標，以柔和白色蒙版淡化非當日區域；所有日期恢復原始水彩。額外街區以地圖下方小標籤顯示。
