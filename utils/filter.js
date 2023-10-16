// 浏览量 数字转化为K W
export function formatNum(num) {
    return num >= 1e3 && num < 1e4 ? (num / 1e3).toFixed(1) + 'k' : num >= 1e4 ? (num / 1e4).toFixed(1) + 'w' : num
}
// 时间戳转化为月日
export function formatMonthDay(date) {
    return new Date(date).getMonth() + " - " + new Date(date).getDay()
}