// Plantilla. El entrypoint del contenedor la procesa con envsubst y escribe
// config.js antes de que nginx arranque.
window.__APP_CONFIG__ = {
  apiBaseUrl: '${API_BASE_URL}',
  appName: '${APP_NAME}',
  postsPageSize: ${POSTS_PAGE_SIZE}
};
