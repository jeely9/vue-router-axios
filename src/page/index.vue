<template>
  <div>
      <Header></Header>
      <div class="article_list">
          <ul>
              <li v-for="i in list">
                  <time v-text="$utils.goodTime(i.create_at)"></time>
                  <router-link :to="'/content/' + i.id">
                      {{ i.title }}
                  </router-link>
              </li>
          </ul>
      </div>
      <Footer></Footer>
  </div>
</template>

<script>
    import Header from '../components/header'
    import Footer from '../components/footer'
    export default {
      components: {
        Header,Footer
      },
      created (){
          this.getData()
      },
      data() {
          return {
            list: []
          }
      },
      methods: {
          getData () {
            this.$api.get('/api/v1/topics',null,r => {
              this.list = r.data
              // console.log(r.data)

            })
          }
      }
    }
</script>

<style scoped>
  .article_list {
      margin: auto;
  }
  .article_list ul li{
      text-align: left;
  }
</style>
