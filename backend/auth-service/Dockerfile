FROM maven:3.9-eclipse-temurin-21 AS build
WORKDIR /build

COPY pom.xml .
RUN --mount=type=cache,target=/root/.m2 mvn -B dependency:go-offline

COPY src ./src

# Las pruebas no se ejecutan aqui. Las de integracion levantan contenedores con
# Testcontainers, y eso exigiria Docker dentro de Docker. Se ejecutan aparte
# con "mvn verify".
RUN --mount=type=cache,target=/root/.m2 mvn -B clean package -DskipTests


FROM eclipse-temurin:21-jre-alpine
WORKDIR /app

# Sin esto el proceso correria como root dentro del contenedor.
RUN addgroup -S app && adduser -S app -G app

COPY --from=build /build/target/*.jar app.jar
USER app

EXPOSE 8081

# Habilita 'depends_on: condition: service_healthy' en Compose, igual que el
# pg_isready de los Postgres.
HEALTHCHECK --interval=15s --timeout=5s --start-period=45s --retries=5   CMD wget -q --spider http://localhost:8081/actuator/health || exit 1

ENTRYPOINT ["java", "-XX:MaxRAMPercentage=75.0", "-jar", "app.jar"]
