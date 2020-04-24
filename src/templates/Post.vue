<template>
    <App>
        <div id="content" class="12u skel-cell-important">
            <section>
                <header>
                    <h2>
                        {{ $page.post.title }}
                    </h2>
                </header>
                <g-image :src="$page.post.thumbnail" style="width:100%;"></g-image>
                <div v-html="$page.post.content"></div>
            </section>
        </div>
    </App>
</template>

<page-query>
query Post ($path: String!) {
    post: post (path: $path) {
        title
        thumbnail
        content
    }
}
</page-query>

<script>
export default {
    metaInfo() {
        return {
            title: this.$page.post.title
        }
    }
}
</script>
