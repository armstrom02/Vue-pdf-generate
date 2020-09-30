<template>
  <div class="container">
    <button v-on:click="generateReport">generateReport</button>
    <img src="../assets/vesttoo-logo.jpg">
    <!-- <Report /> -->
  </div>
</template>

<script>

import jspdf from 'jspdf';
// import vesttoo_logo from '../assets/'
// import vesttoo_logo from './assets/vesttoo-logo.png';
// import image from "./assets/logo.png"
import 'jspdf-autotable';

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
      
      const doc = new jspdf({
        orientation: "portrait",
        unit: "pt",
        format: "a4"
      });

      // Front Page

      let logo = new Image();
      logo.src = "../assets/vesttoo-logo.jpg";

      // var imgData = 'data:image/jpeg;base64,'+ Base64.encode('Koala.jpeg');

      doc.addImage(logo,'JPEG', 300,350, 200,200);

      doc.setFont("helvetica")
      .setFontSize(12)
      .setTextColor(150, 150, 150)
      .text('24.08.2020', 520, 50, { align: "center", maxWidth: "300"  });


      doc.setFont("helvetica")
      .setFontSize(30)
      .setTextColor(42, 82, 192)
      .text('{Company Name}', 300, 350, { align: "center", maxWidth: "300"  });

      doc.setLineWidth(1).setDrawColor(42, 82, 192).line(272.5, 385, 322.5, 385);

      doc.setFont("helvetica")
      .setFontSize(30)
      .setTextColor(42, 82, 192)
      .text('Vesttoo', 300, 430, { align: "center", maxWidth: "300"  });

      doc.setFont("helvetica")
      .setFontSize(20)
      .setTextColor(42, 82, 192)
      .text('ReInsurance Report', 300, 460, { align: "center", maxWidth: "300"  });


      // Footer
      doc.rect(0, 792, 595, 50, 'F')

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


      doc.setFontSize(16).text('Investor Positions', 300, 421);
      // create a line under heading 
      doc.setLineWidth(0.01).line(0.5, 1.1, 8.0, 1.1);
      // Using autoTable plugin

      doc.autoTable({
        head: [['Name', 'Email', 'Country']],
        body: [
          ['David', 'david@example.com', 'Sweden'],
          ['Castille', 'castille@example.com', 'Spain'],
          
          
        ],margin: { left: 0.5, top: 1.25 }})

      doc.save('pff.pdf')


    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin: 0;
}


</style>
