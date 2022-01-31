<template>
    <div class="home">
        <img
            alt="Vue logo"
            src="@/assets/logo.png">
        <WelcomeComponent msg="Welcome to Vue2 template" />
    </div>
</template>

<script>
// @ is an alias to /src
import WelcomeComponent from '@/components/WelcomeComponent.vue';

export default {
    name: 'HomeView',
    components: {
        WelcomeComponent,
    },
};
</script>
