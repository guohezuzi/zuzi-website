<template>
    <div id="e-mail-wrap">
        <div id="e-mail">
            <p>如果你对我的网站感兴趣，可以发送邮件给我，期待你的来信 ：</p>
            <form action="" method="post">
                <div id="contact-input-wrap">
                    <input type="text" name="name" title="name" placeholder="你的名字（必须）" required>
                    <input type="email" name="email" title="email" placeholder="你的邮箱地址（必须）" required>
                </div>
                <textarea name="message" id="e-mail-message" cols="30" rows="10" title="email-message"
                          placeholder="你想说的话..."></textarea>
                <input @click="submitEmail()" id="send" type="submit" value="发 送">
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContactMainContent",
        methods:{
            submitEmail(){
                alert('该功能还在开发中...')
            }
        }
    }
</script>

<style scoped>
    #e-mail-wrap {
        width: 60vw;
        margin: 5vh auto;
        border: 1px solid black;
    }

    #e-mail-wrap p{
        color: black;
        margin: 3vh auto;
    }

    #contact-input-wrap {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 2vh;
    }

    #contact-input-wrap input{
        padding: 2vh 1vmin;
        width: 22vw;
        border: 1px solid black;
    }

    #e-mail textarea{
        width: calc(50vw - 2vmin);
        max-width: calc(50vw - 2vmin);
        height: 25vh;
        padding: 2vh 1vmin;
        border: 1px solid black;

    }

    #e-mail {
        margin: 4vh 5vw;
    }

    #send{
        word-spacing: 0.5vw;
        color: white;
        margin-top: 2vh;
        width: 50vw;
        height: 8vh;
        background-color: #1f1f1f;
        font-size: 2vh;
        border: 1px solid black;
        cursor: pointer;
    }

    #send:hover{
        color: black;
    }
</style>