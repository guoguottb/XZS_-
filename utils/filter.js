// 浏览量 数字转化为K W
export function formatNum(num) {
    return num >= 1e3 && num < 1e4 ? (num / 1e3).toFixed(1) + 'k' : num >= 1e4 ? (num / 1e4).toFixed(1) + 'w' : num
}
// 时间戳转化为月日
// formatTime
export function formatTime(value, type = 0) {
    var time = new Date(value);
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var date = time.getDate();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    month = month < 10 ? "0" + month : month;
    date = date < 10 ? "0" + date : date;
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    var arr = [
        year + "-" + month + "-" + date,
        year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second,
        year + "年" + month + "月" + date,
        year + "年" + month + "月" + date + " " + hour + ":" + minute + ":" + second,
        hour + ":" + minute + ":" + second,
        month + "-" + date,
        year + "/" + month + "/" + date + " " + hour + ":" + minute,
        year + "年" + month + "月" + date + "日",
    ]
    return arr[type];
}