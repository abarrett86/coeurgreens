<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="24">
                <h1>Want to know about our farm?</h1>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="12">
                <el-input placeholder="Name" v-model="contactName" class="contact_input"></el-input>
            </el-col>
            <el-col :span="12">
                <el-input placeholder="Email" v-model="contactEmail" class="contact_input"></el-input>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-input
                        type="textarea"
                        :autosize="{ minRows: 2, maxRows: 4}"
                        placeholder="Message"
                        v-model="contactMessage">
                </el-input>
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
<style scoped>
    h1{
        color:white;
    }
    .el-input__inner{
        background-color: transparent;
    }

    .el-row {
        margin-bottom: 20px;
    }
</style>