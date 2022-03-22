// ==UserScript==
// @name         edrawsoft
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://mm.edrawsoft.cn/pc/store?workId=*
// @icon         https://www.google.com/s2/favicons?domain=edrawsoft.cn
// @require     https://libs.baidu.com/jquery/2.0.3/jquery.min.js
// @grant        none
// ==/UserScript==


function downloadFileByBlob(blobUrl, filename) {
  const eleLink = document.createElement('a')
  eleLink.download = filename
  eleLink.style.display = 'none'
  eleLink.style.cursor = 'pointer'
  eleLink.href = blobUrl
  // 触发点击
  document.body.appendChild(eleLink)
  eleLink.click()
  // 然后移除
  document.body.removeChild(eleLink)
}



(function() {
    'use strict';
    setTimeout(()=>{
       
        $('.work-title span').after("<span id='download_svg'>--点击下载</span>");
        $('#download_svg').click(()=>{
            let title = $('.work-title span:eq(0)').text();
            let svgHTML = document.getElementsByClassName('preview-svg')[0].innerHTML;
            let svgBlob = new Blob([svgHTML],{type : 'application/octet-stream'});
            let svgURL = URL.createObjectURL(svgBlob);


            downloadFileByBlob(svgURL,title + ".svg");
        });
    },5000);

    // Your code here...
})();
