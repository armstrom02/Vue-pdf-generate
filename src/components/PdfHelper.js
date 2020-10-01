import images from './Images';
import html2canvas from "html2canvas";

const colors = {
    grey: [150, 150, 150],
    white: [255, 255, 255],
    blue: [89, 92, 232],
    light_blue: [176, 168, 242]
}

export const generateFooter = (doc, pageNumber, x = 0, y = 792) => {

    const length = 595;
    const height = 50;

    doc.setPage(pageNumber);

    doc.setFillColor(...colors.blue).rect(x, y, length, height, 'F');

    doc.addImage(images.logo_invert, 'JPEG', x + 20, y + 13, 109.8, 20.4);

    doc.setFont("helvetica")
        .setFontSize(8)
        .setTextColor(...colors.white)
        .text('Our vision is to create a world where insurance and alternative capital are fused and globally accessible', x + 190, y + 18, { align: "left" });

    doc.setFont("helvetica")
        .setFontSize(8)
        .setTextColor(...colors.white)
        .text('2020 Vesttoo Proprietary & Confidential', x + 190, y + 38, { align: "left" });

    doc.setFont("helvetica")
        .setFontSize(8)
        .setTextColor(...colors.white)
        .text('vesttoo.com ', x + 350, y + 38, { align: "left" });

    doc.setFont("helvetica")
        .setFontSize(8)
        .setTextColor(...colors.white)
        .text('info@vesttoo.com', x + 420, y + 38, { align: "left" });

    doc.setFont("helvetica")
        .setFontSize(8)
        .setTextColor(...colors.white)
        .text('+1 212-330-8077', x + 500, y + 38, { align: "left" });

    doc.setLineWidth(0.5).setDrawColor(...colors.white).line(x + 190, y + 26, x + 560, y + 26);
}

export const generateHeader = (doc, pageNumber, x = 0, y = 0) => {
    doc.setPage(pageNumber);

    doc.addImage(images.logo, 'JPEG', x + 30, y + 30, 143.5, 26);

    doc.setFont("helvetica")
        .setFontSize(12)
        .setTextColor(...colors.grey)
        .text('24.08.2020', x + 520, y + 50, { align: "center", maxWidth: "300" });
}

export const generateProjectName = (doc, companyName, text, reportName, x = 300, y = 350) => {
    doc.setFont("helvetica")
        .setFontSize(30)
        .setTextColor(...colors.blue)
        .text(companyName, x, y, { align: "center", maxWidth: "300" });

    doc.setLineWidth(1).setDrawColor(...colors.blue).line(x - 27.5, y + 35, x + 22.5, y + 35);

    doc.setFont("helvetica")
        .setFontSize(30)
        .setTextColor(...colors.blue)
        .text(text, x, y + 80, { align: "center", maxWidth: "300" });

    doc.setFont("helvetica")
        .setFontSize(20)
        .setTextColor(...colors.blue)
        .text(reportName, x, y + 110, { align: "center", maxWidth: "300" });
}

export const generateHeaderAndFooter = (doc) => {
    var totalPages = doc.internal.getNumberOfPages();
    for (var i = totalPages; i >= 1; i--) {
        if (i === 1) {
            generateHeader(doc, i, 0, 0);
        } else {
            generatePageNumber(doc, i)
        }
        generateFooter(doc, i, 0, 792)
    }
}

export const generatePageNumber = (doc, i) => {
    doc.setPage(i);
    doc.setFont("helvetica")
        .setFontSize(9)
        .setTextColor(...colors.grey)
        .text(i < 10 ? `0${i - 1}` : i - 1, 550, 40, { align: "center", maxWidth: "300" });
}

export const generateHeading = (doc, text, x, y, length) => {
    doc.setFontSize(20)
        .setTextColor(...colors.blue)
        .text(text, x, y);

    doc.setLineWidth(1).setDrawColor(...colors.light_blue).line(x, y + 20, x + length, y + 20);
}

export const generateHTML = (doc, id, x, y) => {
    return new Promise(function (resolve) {
        doc.html(document.getElementById(id), {
            callback: function () {
                resolve();
            }, x, y
        })
    });
}

export const generateHTML2Image = async (doc, id, x, y, width, height) => {
    try{
        let canvas = await html2canvas(document.getElementById(id));
        doc.addImage(canvas, 'JPEG', x, y, width, height);
    }catch(error){
        throw new Error("Failed to generate Image from HTML");
    }
}
