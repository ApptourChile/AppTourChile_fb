<template>
    <div class="login">
        <br> <br>
         <br>
          <br>
           <br>
            <div class="row">
                <div class="col col l6 offset-l3">
                <div class="card-panel ">
                    <form @submit.prevent="signIn">
                        <input type="text" placeholder="EMAIL"  v-model="email">
                        <input type="password" placeholder="CONTRASEÑA"  v-model="pass">


                        <button class="btn">Entrar al menu


                        </button>
                        </form>
                </div>
                </div>
            </div>
    </div>
</template>
<script>
import{mapActions,mapState} from "vuex"


export default {
    name: "Login",
    data: () => ({
        email:'',
        pass:''
    }),
    methods: {
        ...mapActions(['iniciarSesion']),
        signIn(){
            this.iniciarSesion({
                email:this.email,
                pass:this.pass
            })
        }
    },
    computed:{
        ...mapState(['user'])
    },
}
</script>