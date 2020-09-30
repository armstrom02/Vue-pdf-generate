<template>
  <div class="container">
    <button v-on:click="generateReport">generateReport</button>
    <img src="../assets/vesttoo-logo.jpg">

    <div id="content">
      <!-- <img src="../assets/table-chart.jpg"> -->
      <!-- <img src="../assets/table.png"> -->

      <table id="customers">
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Berglunds snabbköp</td>
    <td>Christina Berglund</td>
    <td>Sweden</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr>
  <tr>
    <td>Island Trading</td>
    <td>Helen Bennett</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Königlich Essen</td>
    <td>Philip Cramer</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Laughing Bacchus Winecellars</td>
    <td>Yoshi Tannamuri</td>
    <td>Canada</td>
  </tr>
  <tr>
    <td>Magazzini Alimentari Riuniti</td>
    <td>Giovanni Rovelli</td>
    <td>Italy</td>
  </tr>
  <tr>
    <td>North/South</td>
    <td>Simon Crowther</td>
    <td>UK</td>
  </tr>
  <tr>
    <td>Paris spécialités</td>
    <td>Marie Bertrand</td>
    <td>France</td>
  </tr>
</table>

      
    </div>
    <!-- <Report /> -->
  </div>
</template>

<script>

import jspdf from 'jspdf';
// import vesttoo_logo from '../assets/'
// import vesttoo_logo from './assets/vesttoo-logo.png';
// import image from "./assets/logo.png"
import 'jspdf-autotable';
import images from './Images';
import html2canvas from 'html2canvas';

export default {
  name: "HelloWorld",
  // data: {
  //   logo : vesttoo_logo
  // },
  props: {
    msg: String,
  },
  components: {
    // VueHtml2pdf,
    // Report,
  },
  methods: {
    generateReport() {
      console.log("generate");

      html2canvas(document.getElementById("content")).then(canvas => {

          this.createPDF(canvas);
        }).catch((error) => {
          console.log("Erorr descargando reporte visual",error)
          // alert("Error descargando el reporte visual")
      });


      



    },



    createPDF(canvas){

           console.log(canvas);

      const doc = new jspdf({
        orientation: "portrait",
        unit: "pt",
        format: "a4"
      });

/* -------------------------------------------------------------------------- */
/*                                 Front Page                                 */
/* -------------------------------------------------------------------------- */


/* --------------------------------- Header --------------------------------- */

      doc.addImage(images.logo,'JPEG', 30,30, 143.5,26);

      doc.setFont("helvetica")
      .setFontSize(12)
      .setTextColor(150, 150, 150)
      .text('24.08.2020', 520, 50, { align: "center", maxWidth: "300"  });


      doc.setFont("helvetica")
      .setFontSize(30)
      .setTextColor(89,92,232)
      .text('{Company Name}', 300, 350, { align: "center", maxWidth: "300"  });

      doc.setLineWidth(1).setDrawColor(89,92,232).line(272.5, 385, 322.5, 385);

      doc.setFont("helvetica")
      .setFontSize(30)
      .setTextColor(89,92,232)
      .text('Vesttoo', 300, 430, { align: "center", maxWidth: "300"  });

      doc.setFont("helvetica")
      .setFontSize(20)
      .setTextColor(89,92,232)
      .text('ReInsurance Report', 300, 460, { align: "center", maxWidth: "300"  });


/* --------------------------------- Footer --------------------------------- */

      doc.setFillColor(89,92,232).rect(0, 792, 595, 50, 'F');

      doc.addImage(images.logo_invert,'JPEG', 20,805, 109.8,20.4);

      doc.setFont("helvetica")
      .setFontSize(8)
      .setTextColor(255, 255, 255)
      .text('Our vision is to create a world where insurance and alternative capital are fused and globally accessible', 190, 810, { align: "left"});

      doc.setFont("helvetica")
      .setFontSize(8)
      .setTextColor(255, 255, 255)
      .text('2020 Vesttoo Proprietary & Confidential', 190, 830, { align: "left"});

      doc.setFont("helvetica")
      .setFontSize(8)
      .setTextColor(255, 255, 255)
      .text('vesttoo.com ', 350, 830, { align: "left"});

      doc.setFont("helvetica")
      .setFontSize(8)
      .setTextColor(255, 255, 255)
      .text('info@vesttoo.com', 420, 830, { align: "left"});

      doc.setFont("helvetica")
      .setFontSize(8)
      .setTextColor(255, 255, 255)
      .text('+1 212-330-8077', 500, 830, { align: "left"});

      doc.setLineWidth(0.5).setDrawColor(255, 255, 255).line(190, 818, 560, 818);


      doc.addPage()


/* -------------------------------------------------------------------------- */
/*                                 Second Page                                */
/* -------------------------------------------------------------------------- */

      doc.setFontSize(20)
      .setTextColor(89,92,232)
      .text('Investor Positions', 40, 50);

      doc.setLineWidth(1).setDrawColor(176,168,242).line(40, 70, 555, 70);

      doc.autoTable({
        head: [['Instrument', 'LongcallSWAP', 'LongevityILS', 'GL_SWAP', 'GL_SWAP']],
        body: [
          ['David', 'david@example.com', 'Sweden'],
          ['David', 'david@example.com', 'Sweden'],
          ['Castille', 'castille@example.com', 'Spain'],
        ],margin: { left: 40, top: 100 }})

      // doc.addImage(canvas,'JPEG', 80, 400, 500,250);

      doc.html(document.getElementById("content"),{
        callback: function (doc) {
          doc.save('pff.pdf');
        },
        x: 80,
        y: 400
      })

      // doc.save('pff.pdf')

    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin: 0;
}

#customers {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}

#content{
  width: 400px;
}


</style>
