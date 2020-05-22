export const downloadFile = (data, { filename }) => {
  const blob = new Blob([`\ufeff${data}`], {
    type: 'charset=UTF-8',
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.style.display = 'none';
  link.download = filename;
  link.href = url;
  document.body.appendChild(link);
  link.click();
  URL.revokeObjectURL(url);
  link.remove();
};
