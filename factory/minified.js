$(document).ready(()=>{$(".slider-image").length;let s=$(".slider-image:first-child").width(),i=0;$(".slider-wrapper").css("width",`${4*s}px`);let r=()=>{$(".slider-row").each(function(){let s=$(this).find(".slider-image:first-child");$(this).append(s)}),$(".slider-row").css({transform:`translateX(${s}px)`,transition:"transform 0.2s ease-in-out"}),setTimeout(()=>{$(".slider-row").css("transform","translateX(0)")},0),i=(i-1+2)%2;let r=$(".slider-row .slider-image:last-child"),t=$(".slider-row .slider-image:nth-last-child(4)");r.css("opacity",0),t.css("opacity",0),setTimeout(()=>{r.css({transition:"opacity 0.2s",opacity:1}),t.css({transition:"opacity 0.2s",opacity:1})},200)},t=()=>{$(".slider-row").each(function(){let s=$(this).find(".slider-image:last-child");$(this).prepend(s)}),$(".slider-row").css({transform:`translateX(-${s}px)`,transition:"transform 0.4s"}),setTimeout(()=>{$(".slider-row").css("transform","translateX(0)")},0),i=(i+1)%2};$(".slider-left").click(()=>{r()}),$(".slider-right").click(()=>{t()})});