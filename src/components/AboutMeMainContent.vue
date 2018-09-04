<template>
    <div id="about-me-detail">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias architecto culpa deleniti deserunt dolore ea eius fugit harum id laboriosam molestias mollitia neque, quibusdam rerum? Accusamus beatae cum cupiditate dicta distinctio ea eaque eius eligendi, est et, exercitationem explicabo incidunt inventore magnam maxime nesciunt nostrum perspiciatis porro possimus quaerat quam quas quasi quibusdam quod ratione repudiandae sequi sunt temporibus totam veniam veritatis vero voluptates voluptatum? A accusamus consequatur cum deleniti deserunt dicta dignissimos doloremque ea eaque eius error esse excepturi explicabo fugiat id illo in inventore ipsa iste iure iusto molestias nemo nulla obcaecati officiis optio porro praesentium, quae quidem recusandae rerum sed soluta suscipit unde vero voluptas voluptate? A explicabo facere harum illo laboriosam maxime, officia omnis quidem voluptatem voluptates? Beatae consequuntur deleniti dolorem enim excepturi id, impedit iure nesciunt numquam odit pariatur perspiciatis quisquam quos recusandae reiciendis rem saepe soluta totam voluptas voluptate! Aliquid amet animi commodi cupiditate dignissimos distinctio dolore doloribus ducimus eligendi est, explicabo inventore ipsa laboriosam laborum maiores quidem quis repellendus sunt voluptate voluptates. Commodi, iusto nesciunt? Animi deleniti explicabo facere impedit nihil quam voluptatum. Aperiam at beatae corporis distinctio doloribus ea esse et itaque magni, nam odit pariatur provident quidem quod voluptates? Beatae deleniti fugiat inventore non quasi quisquam reprehenderit temporibus tenetur velit voluptate. Ab aliquam asperiores atque blanditiis distinctio dolor esse ex facilis hic in inventore iusto labore laboriosam maxime minima molestiae natus neque nihil numquam odit optio placeat quidem quod repellendus repudiandae saepe sunt tempore, veritatis vitae voluptates. Libero, officia, voluptatum.</p>
        <ShareIcons/>
    </div>
</template>

<script>
    import ShareIcons from "./ShareIcons";

    export default {
        name: "AboutMeMainContent",
        components: {ShareIcons}
    }
</script>

<style scoped>
    #about-me-detail {
        color: black;
        width: 76%;
        margin: 8vh 12%;
        border: 1px solid black;
        padding-bottom: 5vh;
    }

    #about-me-detail p{
        margin: 5vh 5vw;
        overflow: hidden;
    }

    #about-me-detail >>> .icon {
        border: 1px solid black;
        background-color: black;
        margin: 0 1vmin;
    }
</style>