// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import axios from "axios";
window.a = axios

// a.put(`/api/streaming`)

async function main(){
  const stream = await navigator.mediaDevices.getUserMedia({audio: true, video: false})
  const recorder = new MediaRecorder(stream)

  window.s = stream

  window.r = recorder
  console.log("done")

  recorder.addEventListener('dataavailable', ev => onDataAvailable(ev))
  recorder.start(1000);
}

function onDataAvailable(ev){
  console.log("ev:", ev)

  const chunk = new File([ev.data], `${(new Date()).getTime()}.chunk`);
  const formData = new FormData();
  formData.append('chunk', chunk)

  return axios.put(
    `/api/streaming`,
    formData
  ).then((e)=>{
    console.log(e.data)
  })
}

main()
