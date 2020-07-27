<template>
  <div
    class="ma-1 pa-1"
    v-if="$store.state.isUserLoggedIn && $store.state.isAdmin"
  >
    <template>
      <v-card>
        <v-navigation-drawer permanent expand-on-hover fixed>
          <v-list>
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="title">
                  {{ $store.state.user.username }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ $store.state.user.email }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>
          <v-list nav dense class="item-container">
            <v-list-item
              v-for="(item, text) in items"
              :key="text"
              router
              :to="item.route"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </template>
  </div>
</template>
<script>
export default {
  name: "Sidebar",
  data() {
    return {
      drawer: false,
      items: [
        { text: "Posts", route: "/admin/posts", icon: "mdi-post" },
        { text: "Users", route: "/admin/users", icon: "mdi-account" }
      ]
    };
  }
};
</script>

<style scoped></style>
