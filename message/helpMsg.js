const msg = `請對我輸入指令（回覆我以下的關鍵字）
目前支援指令，以及其說明：

【快速使用】
- 預報（圖）
- 地震（圖）
- 空氣品質（圖）
- 衛星雲圖（圖）
- [地區]天氣（例如：東京天氣）
- [縣市][時間]預報 （例如：明天晚上台北預報）
- [縣市]概況（例如：台北概況）
- [地區]空氣（例如：北京空氣）
 
【進階指令】
<地區天氣>：直接查詢地區的天氣狀況（支援英文查詢國外地區）
 ＊[地址]天氣：取得地區氣象數據
    例如：高雄市天氣、淡水天氣
         new york 天氣、東京天氣

 ＊[縣市][時間]天氣：取得縣市預報
    例如：明天台中天氣、明天17:00台南天氣

 ＊[縣市]概況：臺灣的縣市天氣概況
    例如：全臺概況、金門縣概況

<預報>：台灣縣市預報
 ＊預報：取得台灣地區預報圖

 ＊[縣市][時間]預報
    例如：明天晚上台北預報
 ＊[縣市][未來時間]天氣
    例如：明天台中天氣、明天17:00台南天氣

 註：目前只支援 36 小時內台灣縣市預報

<氣象圖>：提供氣象圖的連結
 ＊空汙
 ＊預報
 ＊天氣圖
 ＊衛星雲
 ＊雷達

<氣象觀測站>：查詢單一測站的詳細數據
 ＊[觀測站名稱]觀測
    例如：宜蘭觀測、士林觀測
 ＊觀測站清單：用來查詢有哪些觀測站

<空氣品質查詢>：查詢地區或測站空氣資訊
 ＊[地區]空氣
    例如：紐約空氣、北京空氣、台北空氣
 ＊[監測站名稱]空氣
    例如：基隆空氣、淡水空氣
 ＊監測站清單：用來查詢有哪些台灣監測站

<其他>
 ＊氣象局/CWB
 ＊回報問題/issue
 ＊Github/原始碼
`;

module.exports = msg;