<template>
  <App>
    <div class="row">
					<div class="4u" v-for="post in $page.posts.edges" :key="post.id">
						<h2>{{ post.node.title }}</h2>
						<a :href="post.node.path" class="image full">
              <g-image :src="post.node.thumbnail"></g-image>
            </a>
            <p>
              {{ post.node.content | summary }}
            </p>
						<p><g-link :to="post.node.path" class="button">More Details</g-link></p>
					</div>
    </div>
  </App>
</template>


<page-query>
query Posts {
  posts: allPost(order: ASC) {
    edges {
      node {
        id
        title
        path
        thumbnail
        content
      }
    }
  }
}
</page-query>

<script>
export default {
  
}
</script>