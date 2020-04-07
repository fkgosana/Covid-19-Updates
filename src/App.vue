<template>
  <v-app id="app">
    <v-app-bar color="black" dense dark app>
      <v-toolbar-title>COVID-19 Updates</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <v-list-item-title>Sepedi</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app>
      <template>
        <v-footer padless>
          <v-col class="text-center" cols="12">
            {{ new Date().getFullYear() }} —
            <strong>COVID-19 Updates</strong>
          </v-col>
        </v-footer>
      </template>
    </v-footer>
  </v-app>
</template>