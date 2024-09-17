<script setup>
import { ref, onMounted } from 'vue';
import {Terminal} from "@xterm/xterm";
import {AttachAddon} from "@xterm/addon-attach";
import '@xterm/xterm/css/xterm.css'
import '@xterm/xterm/lib/xterm.js'


import { FitAddon } from '@xterm/addon-fit';

const terminal = new Terminal();
terminal.options.theme.background = "#0f172a"
terminal.options.scrollback = 0
const fitAddon = new FitAddon();


const container = ref(null);

function initTerminal(){
  const terminal = new Terminal();
  const socket = new WebSocket("ws://10.200.10.201:2376/containers/f546cb8a7b5a/attach/ws?stream=1&stdout=1&stdin=1&logs=1")
  const attachAddon = new AttachAddon(socket)
  terminal.loadAddon(fitAddon);
  terminal.loadAddon(attachAddon)
  terminal.open(container.value);
  terminal.write('clear\r');
  fitAddon.fit();
}

onMounted(initTerminal)
</script>


<template>
  <div>
    <UContainer>
      <div ref="container" class="overflow-hidden no-scrollbar"></div>
    </UContainer>
  </div>
</template>

<style scoped>
.xterm .xterm-viewport {
  overflow: hidden;
}

.xterm {
  background-color: white; /* Replace with your desired color */
}

.xterm .xterm-scroll-area {
  overflow: hidden;
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.no-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>
