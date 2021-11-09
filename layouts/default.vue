<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          :disabled="isDisabled"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <div>
        <v-container>
          <v-row class="row-login">
            <v-col
              cols="12"
              sm="8"
              md="4"
            >
              <v-text-field
                class="text-login"
                label="Login"
                :rules="rules"
                hide-details="auto"
                autofocus
                outlined
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              sm="8"
              md="4"
            >
              <v-text-field
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="rules"
                :type="showPassword ? 'text' : 'password'"
                name="input-10-1"
                label="Senha"
                hint="Mínimo 6 caracteres"
                counter
                outlined
                @click:append="showPassword = !showPassword"
              ></v-text-field>
              {{user.name}}
            </v-col>

            <v-col
              cols="12"
              sm="8"
              md="4"
            >

              <v-btn
                large
                color="blue-grey"
                class="ma-2 white--text"
                @click.stop="logar()"
              >
                Logar 
                <v-icon
                  large 
                  right
                  dark
                >
                  mdi-lock-open-check-outline
                </v-icon>
              </v-btn>

            </v-col>

          </v-row>
        </v-container>

      </div>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>

  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
  // import User from "../src/index";

  export default {
    data () {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        items: [
          {
            icon: 'mdi-home',
            title: 'Home',
            to: '/'
          },
          {
            icon: 'mdi-account-key',
            title: 'Entidades',
            to: '/entidades'
          },
          {
            icon: 'mdi-domain',
            title: 'Imóveis',
            to: '/imoveis'
          },
          {
            icon: 'mdi-file-document-edit',
            title: 'Contratos',
            to: '/contratos'
          },
          {
            icon: 'mdi-credit-card-refresh',
            title: 'Contas Bancárias',
            to: '/contasbancarias'
          },
          {
            icon: 'mdi-hand-coin-outline',
            title: 'Contas a Receber',
            to: '/contasreceber'
          },
          {
            icon: 'mdi-cash-fast',
            title: 'Contas a Pagar',
            to: '/contaspagar'
          },
          {
            icon: 'mdi-account-cash',
            title: 'Movimento do Caixa',
            to: '/movimentocaixa'
          },
          {
            icon: 'mdi-bank-transfer',
            title: 'Movimento Bancário',
            to: '/movimentobancario'
          },
          {
            icon: 'mdi-account-lock',
            title: 'Cadastro de usuários',
            to: '/users'
          },
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Rent Business',
        showPassword: false,
        password: 'Password',
        rules: [
          value => !!value || 'Obrigatório',
          value => (value && value.length >= 6) || 'Mínimo 6 caracteres',
        ], 
        registro: {},     
      }
    },
    computed: {
      ...mapState(['user']),
      ...mapGetters({
        userId: 'userId',
        userName: 'userName',
        userLogado: 'userLogado',
      }),
      isDisabled() {
        // seta itens do menu disable quando usuário não estiver logado  
        return !this.userLogado; 
      },
    },
    methods: {
      ...mapMutations({
        getUser: 'GET_USER',
        setLogado: 'SET_LOGADO',
      }),
      ...mapActions({
        addUserFromFuture: 'GET_USER'
      }),
      logar(event) {
        this.setLogado({"id" : 0, "name": "Joselito Nascimento da Silva", "logado" : !this.userLogado});

/**
        User.loginUser().then(resposta => {
          this.registro = resposta.data;
         });
                  
        this.pages = registrosOrd.length / this.perPage;
        this.registros = registrosOrd.slice(this.regInicial, this.regFinal);
        this.data = this.registros;



        this.addUser({"name": "Joselito Nascimento da Silva", "logado" : !this.userLogado});
        // this.logado = this.setLogado({logado: !this.logado});

        alert(this.userName);
        alert(this.userLogado);
**/
      },  
    },
    beforeMount() {
      this.setLogado({"id" : 0, "name": "", "Logado" : false});
    }  
  }
</script>

<style>

  .row-login {
    position: relative;
    margin-top: 20px;
  }
  .text-login {
    position: relative;
    margin-top: 15px;
    height: 20px;
  }

</style>