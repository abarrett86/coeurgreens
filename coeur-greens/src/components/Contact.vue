<template>
    <div class="contact_form">
        <el-row>
            <el-col :span="24">
                <h1 v-if="!submitted">Want to know about our farm?</h1>
                <h1 v-else>Your message has been sent.  Thank you!</h1>
            </el-col>
        </el-row>

        <el-row v-if="!submitted">
            <el-col :sm="{span:12, offset:6}" :xs="{span:24, offset: 0}" >
                <el-row :gutter="20">
                    <el-col :md="{span:12}" :xs="{span:24}"  :sm="{span: 24}" class="contact_name_container" :class="{'has-error': errors.has('contactName') }">
                        <el-input v-validate="'required|min:3'" name="contactName" type="text" placeholder="name" v-model="contactName" class="contact_input"></el-input>
                    </el-col>
                    <el-col :md="{span:12}" :xs="{span:24}"  :sm="{span: 24}" :class="{'has-error': errors.has('email') }">
                        <el-input v-validate="'required|email'" name="email" type="text" placeholder="email" v-model="contactEmail" class="contact_input"></el-input>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24" :class="{'has-error': errors.has('contactMessage') }">
                        <el-input
                                v-validate="'required|min:10'"
                                name="contactMessage"
                                type="textarea"
                                :autosize="{ minRows: 2, maxRows: 4}"
                                placeholder="message"
                                v-model="contactMessage">
                        </el-input>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-button type="primary" :disabled="false" v-on:click="sendForm">SEND IT!</el-button>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'contact',
        data () {
            return {
                contactName: "",
                contactEmail: "",
                contactMessage: "",
                submitted: false
            }
        },
        props: {

        },

        mounted () {

        },

        methods: {
            sendForm: function(){
                this.submitted = true;

                var formData = new FormData();
                formData.append('contact', this.contactEmail);
                formData.append('email', this.contactEmail);
                formData.append('message', this.contactMessage);

                var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        document.getElementById("demo").innerHTML = this.responseText;
                    }
                };
                xhttp.open("GET",
                    "api/contact_form.php?email=" + this.contactEmail
                    + "&email=" + this.contactEmail
                    + "&message=" + this.contactMessage
                    , true);
                xhttp.send();

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .contact_form h1{
        color:white;
        font-size: 2.5em;
        font-weight: 500;
    }

    .contact_form{
        margin-top: 50px;
        text-align: center;
    }

    .contact_form .el-input__inner,
    .contact_form .el-textarea__inner{
        background-color: transparent;
        color: white;
    }

    .contact_form .el-row {
        margin-bottom: 20px;
    }

    .contact_form .el-button{
        font-weight: 700;
    }

    .contact_form .has-error .el-input__inner,
    .contact_form .has-error  .el-textarea__inner{
        border-color: red;
    }

    @media screen and (max-width: 991px) {
        .contact_form {
            margin-top: 10px;
        }

        .contact_name_container,
        .contact_form .el-row {
            margin-bottom: 10px;
        }

        .contact_form .el-input__inner,
        .contact_form .el-textarea__inner{
            background-color: transparent;
            color: white;
            font-size: 1.4em;
        }
    }

    @media screen and (max-width: 480px){
        .contact_form h1{
            font-size: 1.4em;
        }
    }
</style>