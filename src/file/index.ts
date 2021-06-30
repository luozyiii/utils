/**
 * 下载二进制文件
 * @param {*} blob 二进制文件流
 * @param {*} filename 下载后文件名
 */
export function saveBolbFile(blob: ArrayBuffer, { filename = 'file.xlsx' } = {}) {
  if (window.URL && window.URL.createObjectURL) {
    const downloadElement = document.createElement('a');
    const href = window.URL.createObjectURL(blob); // 创建下载的链接
    downloadElement.href = href;
    downloadElement.setAttribute('target', '_blank');
    downloadElement.download = filename; // 下载后文件名
    document.body.appendChild(downloadElement);
    downloadElement.click(); // 点击下载
    document.body.removeChild(downloadElement); // 下载完成移除元素
    window.URL.revokeObjectURL(href); // 释放掉blob对象
  } else {
    alert('您的浏览器不支持下载，请更换浏览器');
  }
}
