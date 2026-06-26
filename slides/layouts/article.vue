<template>
  <div class="slidev-layout article">
    <img
      class="h-full object-contain absolute top-0 left-0"
      :src="$frontmatter.imgSrc"
    />
    <qr-code
      margin="0"
      modulesize="10"
      class="absolute bottom-0 right-0"
      :data="$frontmatter.link"
    ></qr-code>
  </div>
</template>
<script setup>
import "webcomponent-qr-code";
</script>
