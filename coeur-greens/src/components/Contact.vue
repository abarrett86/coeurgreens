<template>
    <div class="contact_form">
        <el-row>
            <el-col :span="24">
                <h1>Want to know about our farm?</h1>
            </el-col>
        </el-row>

        <el-row>
            <el-col :sm="{span:12, offset:6}" :xs="{span:24, offset: 0}" >
                <el-row :gutter="20">
                    <el-col :span="12" :xs="{span:24}"  :sm="{span: 24}" class="contact_name_container">
                        <el-input placeholder="name" v-model="contactName" class="contact_input"></el-input>
                    </el-col>
                    <el-col :span="12" :xs="{span:24}"  :sm="{span: 24}">
                        <el-input placeholder="email" v-model="contactEmail" class="contact_input"></el-input>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-input
                                type="textarea"
                                :autosize="{ minRows: 2, maxRows: 4}"
                                placeholder="message"
                                v-model="contactMessage">
                        </el-input>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <el-button type="primary">SEND IT!</el-button>
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
                sendReady: false
            }
        },
        props: {

        },

        mounted () {

        },

        methods: {

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
    }

    .contact_form .el-row {
        margin-bottom: 20px;
    }

    .contact_form .el-button{
        font-weight: 700;
    }

    @media (max-width: 992px) {
        .contact_form {
            margin-top: 10px;
        }

        .contact_name_container,
        .contact_form .el-row {
            margin-bottom: 10px;
        }

        .contact_form h1{
            font-size: 1.4em;
        }
    }
</style>