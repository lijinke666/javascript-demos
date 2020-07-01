const formatFileSize = fileSize => {
  const sizeUnitArr = ['Byte', 'KB', 'MB', 'GB'];
  if (fileSize == 0) {
    return '0 KB';
  }
  const i = parseInt(Math.floor(Math.log(fileSize) / Math.log(1024)));
  if (i == 0) {
    return fileSize + sizeUnitArr[i];
  }
  return (fileSize / Math.pow(1024, i)).toFixed(1) + sizeUnitArr[i];
};


console.log(formatFileSize(1024));   //1.0KB
console.log(formatFileSize(1000));   //1000Byte
console.log(formatFileSize(1024 * 10000));  //9.8MB


