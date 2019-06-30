<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">后台管理系统</div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="ms-content">
                <el-form-item prop="phone">
                    <el-input v-model="ruleForm.phone" placeholder="phone">
                        <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="password" v-model="ruleForm.password"
                        @keyup.enter.native="submitForm('ruleForm')">
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm(ruleForm)">登录</el-button>
                </div>
                <p class="login-tips">Tips : 用户名和密码需要自己修改。</p>
            </el-form>
        </div>
    </div>
</template>

<script>
    import {login} from '../../api/api'
    export default {
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === "") {
                    callback(new Error("请输入密码"));
                } else {
                    callback();
                }
            };
            var validatePhone = (rule, value, callback) => {
                const reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
                if (value !== "") {
                    if (value === "") {
                        callback(new Error("请输入手机号"));
                    } else if (value.length == 11 && reg.test(value)) {
                        callback();
                    } else {
                        callback(new Error("请输入正确的手机号"));
                    }
                } else {
                    callback(new Error("请输入手机号"));
                }
            };
            return {
                ruleForm: {
                    phone: '18602736775',
                    password: '123456'
                },
                rules: {
                    password: [{
                        validator: validatePass,
                        trigger: "blur"
                    }],
                    phone: [{
                        validator: validatePhone,
                        trigger: "blur"
                    }]
                }
            };
        },
        methods: {
            submitForm(ruleForm) {
                this.$refs.ruleForm.validate((valid) => {
                    if (valid) {
                        var loginParams = {
                            phone: ruleForm.phone,
                            password: ruleForm.password
                        };
                        login(loginParams).then((respone) => {
                            if (respone.data.status == 200) {
                                var token = respone.data.data.token;
                                localStorage.setItem('token', token);
                                localStorage.setItem('phone', respone.data.data.phone);
                                this.$router.push({
                                    path: '/dashboard'
                                });
                            } else {
                                alert(respone.data.message);
                            }

                        }).catch(err => {
                            console.log(err);
                            alert('网络错误,原因:'+err);
                        })
                    } else {
                        alert('提交参数错误');
                    }
                });
            }
        }
    }
</script>


<style scoped>
    .login-wrap {
        position: relative;
        width: 100%;
        height: 100%;
        background-image: url(../../assets/img/back.jpg);
        background-size: 100%;
    }

    .ms-title {
        width: 100%;
        line-height: 50px;
        text-align: center;
        font-size: 20px;
        color: #fff;
        border-bottom: 1px solid #ddd;
    }

    .ms-login {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 350px;
        margin: -190px 0 0 -175px;
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.1);
        overflow: hidden;
    }

    .ms-content {
        padding: 30px 30px;
    }

    .login-btn {
        text-align: center;
    }

    .login-btn button {
        width: 100%;
        height: 36px;
        margin-bottom: 10px;
    }

    .login-tips {
        font-size: 12px;
        line-height: 30px;
        color: #fff;
    }
</style>