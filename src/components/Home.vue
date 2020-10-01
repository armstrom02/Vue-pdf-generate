<template>
  <div class="container">
    <button v-on:click="generateReport">generateReport</button>
    <img src="../assets/vesttoo-logo.jpg" />

    <div id="content">
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
import jspdf from "jspdf";
import "jspdf-autotable";
import {
  generateHeaderAndFooter,
  generateHeading,
  generateProjectName,
  // generateHTML2Image
  // generateHTML
} from "./PdfHelper";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    async generateReport() {
      const doc = new jspdf({
        orientation: "portrait",
        unit: "pt",
        format: "a4",
      });

      // await generateHTML2Image(doc,"content",80,400,500,250);
      generateProjectName(doc, "Company Name", "Vesttoo", "ReInsurance Report");

      /* ------------------------------- Second Page ------------------------------ */

      doc.addPage();

      generateHeading(doc, "Investor Positions", 40, 50, 515);

      // await generateHTML(doc, "content",80,400);

      generateHeaderAndFooter(doc);
      doc.save("pff.pdf");
    },
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

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
}

#content {
  width: 400px;
}
</style>
