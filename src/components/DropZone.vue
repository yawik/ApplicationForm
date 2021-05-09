<template>
  <div class="drop_area" :class="{draghover: dragOver}"
       @dragover.prevent="dragOver=true"
       @dragenter.prevent="dragOver=true"
       @dragleave.prevent="dragOver=false"
       @dragend.prevent="dragOver=false"
       @drop.prevent="chooseFile"
  >
    {{ $t('dropZone.dragDrop') }}
    <label ref="file_btn" :for="'filebox_'+_uid" tabindex="0" @keypress="selectFile">{{ $t('dropZone.clickHere') }}</label>
    {{ $t('dropZone.chooseManually') }}.
    <input :id="'filebox_'+_uid" ref="file_ctrl" type="file" :accept="accept" :multiple="multiple" @change="chooseFile" @focus="resetFocus">
  </div>
</template>

<script>
export default
{
  name: 'DropZone',
  props:
    {
      multiple:
        {
          type: Boolean,
          default: false
        },
      accept:
        {
          type: String,
          default: 'image/*'
        }
    },
  data()
  {
    return {
      dragOver: false
    };
  },
  methods:
    {
      selectFile()
      {
        this.$refs.file_btn.focus();
        this.$refs.file_btn.click();
      },
      resetFocus()
      {
        setTimeout(() =>
        {
          this.$refs.file_btn.focus();
        }, 150);
      },
      chooseFile(event)
      {
        this.dragOver = false;
        this.$emit('change', (event.dataTransfer || event.target).files);
        clearFileInput(this.$refs.file_ctrl);
      },
    }
};

// we have to clear the INPUTs of type FILE after each selection - otherwise if we try to select the same file twice, the CHANGE event will not fire on the 2nd time
function clearFileInput(ctrl)
{
  try
  {
    ctrl.value = null;
  }
  catch (ex)
  {}
  if (ctrl.value) ctrl.parentNode.replaceChild(ctrl.cloneNode(true), ctrl);
}
</script>

<style lang="scss">
  .drop_area
  {
    border-radius: 6px;
    border: 2px dashed $secondary;
    background-color: rgba($secondary, 0.2);
    display: inline-block;
    padding: 16px 20px;

    label
    {
      text-decoration: underline;
      color: $primary;
      font-weight: bold;
      cursor: pointer;
    }

    input[type="file"]
    {
      opacity: 0;
      position: absolute;
      z-index: -1;
      width: 1px;
      height: 1px;
    }
  }

  .draghover
  {
    border-color: darken($primary, 35%);
    background-color: rgba($secondary, 0.5);
    color: #F2F1EF;
  }
</style>
