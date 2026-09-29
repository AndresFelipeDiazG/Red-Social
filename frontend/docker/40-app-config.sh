set -eu

: "${API_BASE_URL:=/api}"
: "${APP_NAME:=Red Social}"
: "${POSTS_PAGE_SIZE:=20}"

export API_BASE_URL APP_NAME POSTS_PAGE_SIZE

# La plantilla vive fuera de la raiz publica: no se sirve y sobrevive al arranque.
envsubst '${API_BASE_URL} ${APP_NAME} ${POSTS_PAGE_SIZE}' \
  < /usr/share/nginx/config.template.js \
  > /usr/share/nginx/html/config.js


echo "[40-app-config] config.js generado con apiBaseUrl=${API_BASE_URL}"
