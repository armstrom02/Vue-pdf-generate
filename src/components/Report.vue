<template>

        <section class="pdf-item">

            <section class="pdf-header">
                <h1>{Company Name}</h1>
                <hr>
                <h2>Vesttoo</h2>
                <h3>ReInsurance Report</h3>

                <Footer/>
            </section >



            <div class="html2pdf__page-break"/>
            <h3>ReInsurance Report</h3>
            <h3>ReInsurance Report</h3>



        </section>



</template>

<script>
import Footer from './Footer';


export default {
  name: 'Report',
//   props: {
//     msg: String
//   },
  components:{
    Footer
  },
  methods:{
     generateReport () {
          console.log('generate')
            this.$refs.html2Pdf.generatePdf()
      }
  }
}
</script>

<style scoped>

.pdf-item{
    font-family: Avenir, Helvetica, Arial, sans-serif;
    margin: 0;
}

.pdf-header{
    display: flex;
    height: 1120px;
    width: 800px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
}

hr{
    height: 1px;
    color: blue;
    background: blue;
    width: 86px;
}

h1{
    margin: 0;
    font-size: 40px;
    color: blue
}

h2{
    margin: 0;
    font-size: 30px;
    color: blue
}

h3{
    margin: 0;
    font-size: 20px;
    /* font-size: 31px; */
    color: blue
}


</style>

