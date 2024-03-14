# Utiliser une image Java 21 comme base
FROM adoptopenjdk/openjdk11:jre-11.0.12_7-alpine
# Set the working directory
WORKDIR /app

# Copier le jar de l'application dans le conteneur
COPY target/UPB_BOOKSTORE.jar app.jar

# Commande pour exécuter l'application Spring Boot quand le conteneur démarre
CMD ["java", "-jar", "app.jar"]
