function isValidHttpUrl(string) {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return null;
  }

  if (url.protocol === 'http:' || url.protocol === 'https:') return string;
}

export default isValidHttpUrl;
