# NYC 2026 · 手機旅行 PWA

繁體中文、Mobile-first 的紐約 10 日旅行手冊，使用 React + TypeScript + Vite，所有行程、票券、待辦與推薦資料獨立存放於 `src/tripData.ts`。

## 功能
- 10/24–11/02 完整時間軸、日期切換、交通估時、Google Maps 一鍵導航
- 五個固定底部分頁、備案入口、當日筆記、收藏、已完成狀態
- Harry Potter 抽中場次切換及行程衝突提示；未中獎時維持原主線
- 航班與住宿資料、票券確認碼、實際時間、費用、連結手動填寫
- Checklist 進度、JSON 匯出／匯入、localStorage 儲存
- PWA manifest、service worker：已快取的頁面可離線閱讀；地圖與官方網站需連網

## 本機開發
需 Node.js 20.19+ 或 22.12+、npm 與網路（首次安裝套件）。

```bash
npm install
npm run dev
```

開啟終端顯示的本機網址。正式建置：

```bash
npm run build
npm run preview
```

輸出在 `dist/`，可部署至任何靜態網站服務。

## 部署
- **Vercel**：匯入 GitHub repository，Framework 選 Vite，Build Command `npm run build`，Output Directory `dist`。
- **Netlify**：匯入 GitHub repository，Build `npm run build`，Publish directory `dist`。
- **GitHub Pages**：若網址為 `https://USER.github.io/REPO/`，設定 `vite.config.ts` 的 `base: '/REPO/'`，再 `npm run build` 並將 `dist/` 發布至 Pages。若使用自訂網域或根路徑，保留預設 `/`。
- 請使用 HTTPS 部署，PWA 安裝與 Service Worker 才能正常使用（localhost 例外）。

## 修改行程
編輯 `src/tripData.ts`：`days` 為每日行程，`tickets` 為票券，`tasks` 為待辦，`recommendations` 為餐飲與商店，`backupActivities` 為備案。每個站點的 `location` 是 Google Maps 導航使用的地址。不要填入臆測座標。`status` 可用 `confirmed`、`planned`、`pending`、`backup`、`verify`。

## 資料與限制
- 瀏覽器儲存鍵：`nyc2026-user-v1`；資料僅在當前瀏覽器／裝置，不會跨裝置同步。建議定期在「待辦」匯出 JSON 備份。
- 不要儲存護照號、信用卡號或其他敏感資訊。確認碼是手動輸入，並非訂票系統同步。
- 票價、營業時間、活動和交通估時依 2026-10-17 旅行簡報整理；未即時查核，請出發前使用官方連結確認。
- 本站不含可離線使用的地圖圖磚；離線僅保證已快取的網頁內容，首次載入需要網路。
- 11/01 紐約夏令時間結束，首頁日期使用 `America/New_York` 取得，不以手機當地時區推算。

## 驗收
`npm run build` 需通過。實際手機測試：新增至主畫面、離線重開、JSON 匯出／匯入、HP 五個場次切換、票券資料保存及日期切換。
