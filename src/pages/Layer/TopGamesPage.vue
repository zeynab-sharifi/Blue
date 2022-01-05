<template>
    <section>
        <div class="top-games-danlowod">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-12">
                        <div class="top-games">
                            <img src="" alt="">
                            <h2>blue game</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sunt perferendis in at, voluptas ipsam libero quibusdam nemo vitae consectetur praesentium minus laudantium asperiores possimus reprehenderit. Incidunt modi doloremque nostrum?</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-12">
                        <button class="btn" @click="downloadFile()">downLoad</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import axios from 'axios';
    
    export default {
      mounted() {
          this.downloadFile();
      },
      methods: {
          downloadFile() {
              axios({
                    url: '', 
                    method: 'GET',
                    responseType: 'blob',
                }).then((res) => {
                     var FILE = window.URL.createObjectURL(new Blob([res.data]));
                     var docUrl = document.createElement('x');
                     docUrl.href = FILE;
                     docUrl.setAttribute('download', '');
                     document.body.appendChild(docUrl);
                     docUrl.click();
                });
          }
      }
    }
</script>