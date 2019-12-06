<template>
  <div class="chat">
    <div>
      <center>
        <h2>
          Welcom chat room
          <v-btn color="error" fab large dark>
            <v-icon>mdi-alarm</v-icon>
          </v-btn>
        </h2>
      </center>
    </div>
    <v-row>
      <v-col cols="3">
        <v-list>
          <v-list-item-group v-model="room" color="primary">
            <v-list-item v-for="(item, index) in roomList" :key="index" three-line>
              <v-list-item-content>
                <v-list-item-title v-text="item.name"></v-list-item-title>
                <v-divider></v-divider>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>

      <v-col cols="9" class="room-detail">
        <v-card class="room-header">ABC - {{ room }}</v-card>

        <v-row class="room-body">
          <v-col cols="8">
            <div class="message"></div>
            <div class="message-menu">
              <v-bottom-navigation color="deep-purple accent-4">
                <v-avatar color="#fab" size="40" :style="{marginTop: '2%'}">
                  <span class="white--text headline">{{ getName() }}</span>
                </v-avatar>

                <v-text-field v-model="message" color="purple darken-2" shaped outlined>
                  <template slot="append">
                    <v-btn color="blue" icon max-width="30px" min-width="30px">
                      <v-icon color="blue">mdi-send</v-icon>
                    </v-btn>
                  </template>
                </v-text-field>
              </v-bottom-navigation>
            </div>
          </v-col>

          <v-col cols="4"></v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
const newLocal = "getAllRoom";
export default {
  data() {
    return {
      room: "",
      message: ""
    };
  },

  computed: {
    ...mapState("room", ["roomList"]),
    ...mapState("login", ["user"])
  },

  async asyncData({ store }) {
    try {
      const userId = localStorage.getItem("userId");
      await store.dispatch("room/getAllRoom", userId);
    } catch (err) {
      console.log("chat-asyncData", err);
    }
  },

  async created() {
    if (!this.roomList.length) {
      const userId = localStorage.getItem("userId");
      console.log("ser", userId);
      this.getAllRoom(userId);
    }
  },

  methods: {
    ...mapActions("room", ["getAllRoom"]),

    getName() {
      if (process.browser) {
        const userName = localStorage.getItem("name");
        console.log("ser", userName);
        return userName;
      }
    }
  }
};
</script>

<style lang="scss" scope>
html {
  height: 100%;
  body {
    height: 100%;
  }
}
#__nuxt {
  height: 100%;
}

#__layout {
  height: 100%;
}

.chat-client {
  height: 100%;
}

.chat {
  height: 100%;
  div {
    h2 {
      height: 5%;
    }
  }
  .row {
    height: 95%;
    .col {
      padding: 0;
      height: 100%;
      border: solid 0.5px rgba(0, 0, 0, 0.12);
    }
  }

  .room-detail {
    padding: 0;
    .room-header {
      height: 10%;
    }

    .room-body {
      margin: 0;
      height: 90%;
      .message {
        height: 90%;
        border: solid 0.5px rgba(0, 0, 0, 0.12);
      }

      .message-menu {
        height: 10%;
        border: solid 0.5px rgba(0, 0, 0, 0.12);

        .v-text-field {
          border-radius: 50px;
          margin-left: 0.5em;
          fieldset {
            height: 80%;
            margin: 1.5% 0;
          }
        }
      }
    }
  }
}
</style>>