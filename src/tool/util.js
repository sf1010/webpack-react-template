export function getCurrentPage() {
  const url = window.location.hash.split('/');

  return url[url.length - 1];
}
