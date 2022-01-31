<template>
    <div
        id="app"
        class="app container">
        <div
            id="nav"
            class="app__nav">
            <router-link to="/">
                Home
            </router-link> |
            <router-link to="/about">
                About
            </router-link>
        </div>

        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {

        };
    },
};
</script>

<style lang="scss">
body {
    display: flex;
    min-height: 100vh;
}

.app {
    flex-grow: 1;
    margin-top: 40px;
    margin-bottom: 40px;
    border-radius: 16px;
    color: #2c3e50;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
    text-align: center;

    &.container {
        max-width: 800px;
        margin-right: auto;
        margin-left: auto;
        padding-right: 40px;
        padding-left: 40px;
        background-color: #ffffff;
    }

    &__nav {
        padding: 30px;

        a {
            color: #2c3e50;
            font-weight: bold;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
}

</style>
