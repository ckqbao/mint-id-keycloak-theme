#!/usr/bin/env bash

docker rm keycloak-testing-container || true

cd "/home/crow/projects/tandemai/keycloak-theme/build_keycloak"

docker run \
   -p 8080:8080 \
   --name keycloak-testing-container \
   -e KEYCLOAK_ADMIN=admin \
   -e KEYCLOAK_ADMIN_PASSWORD=admin \
   -e JAVA_OPTS=-Dkeycloak.profile=preview \
   -v "/home/crow/projects/tandemai/keycloak-theme/build_keycloak/src/main/resources/theme/Customized-keycloak-theme":"/opt/keycloak/themes/Customized-keycloak-theme":rw \
   -it quay.io/keycloak/keycloak:20.0.1 \
   start-dev
