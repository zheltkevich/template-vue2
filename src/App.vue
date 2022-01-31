<template>
    <div
        id="app"
        class="app">
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
.app {
    color: #2c3e50;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

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
