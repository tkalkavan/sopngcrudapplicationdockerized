FROM java:8
MAINTAINER "Spring boot MongoDB Docker app by tkalkavan"
WORKDIR /app

COPY ./target/*.jar ./app.jar
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
