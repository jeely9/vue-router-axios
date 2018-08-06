<template>
  <div>
    <script id="editor" type="text/plain"></script>
  </div>
</template>
<script>
  //ue中的css样式
  import '../../static/utf8-jsp/themes/default/css/ueditor.css'
  export default {
    name: 'ue',
    data () {
      return {
        editor: null
      }
    },
    props: {
      value: '',
      defaultMsg: {type: String},
      config: {type: Object}
    },
    mounted () {
      const _this = this
      this.editor = window.UE.getEditor('editor', this.config)
      this.editor.addListener('ready', function () {
        _this.editor.setContent(_this.value)
      })
    },
    methods: {
      getUEContent () {
        return this.editor.getContent()
      }
    },
    destroyed () {
      this.editor.destroy()
    }
  }
</script>
