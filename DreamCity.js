function setup() {
  createCanvas(1024, 768);
  background(208,211,174);
  noStroke();
  noLoop();

}

function draw() {
//top green shapes
  beginShape();
  fill(139,182,165,200);
  vertex(0,0);
  vertex(683,0);
  vertex(670,243);
  vertex(657,346);
  vertex(240,315);
  vertex(330,381);
  vertex(0,375);
  endShape();
  
  beginShape();
  fill(139,182,165,200);
  vertex(242,0);
  vertex(683,0);
  vertex(679,45);
  vertex(448,47);
  vertex(332,29);
  vertex(245,29);
  endShape();
  
//left top corner squares
  beginShape();
  fill(108,122,99,180);
  vertex(54,0);
  vertex(241,0);
  vertex(239,314);
  vertex(188,321);
  vertex(193,67);
  vertex(156,65);
  vertex(150,201);
  vertex(103,207);
  vertex(105,316);
  vertex(176,318);
  vertex(183,379);
  vertex(93,373);
  vertex(82,330);
  vertex(53,165);
  endShape();
  
  fill(110,117,95)
  rect(0,113,25,160)

  beginShape();
  fill(122,121,100);
  vertex(0,88);
  vertex(56,87);
  vertex(48,327);
  vertex(36,368);
  vertex(6,365);
  vertex(13,328);
  vertex(0,325);
  vertex(0,262);
  vertex(5,263);
  vertex(15,140);
  vertex(10,118);
  vertex(0,120);
  endShape();
  
  beginShape();
  fill(95,91,71);
  vertex(88,-15);
  vertex(247,-15);
  vertex(242,208);
  vertex(192,206);
  vertex(191,0);
  vertex(120,0);
  vertex(116,205);
  vertex(77,206);
  vertex(83,330);
  vertex(37,326);
  vertex(48,293);
  vertex(53,165);
  vertex(87,162);
  endShape();
  
  beginShape();
  fill(98,122,119,180);
  vertex(693,0);
  vertex(1024,0);
  vertex(1024,462);
  vertex(693,390);
  endShape();
  
  beginShape();
  fill(80,85,71,225);
  vertex(683,0);
  vertex(793,0);
  vertex(772,182);
  vertex(673,170);
  endShape();  
  
  fill(72,101,81,225)
  rect(828,0,30,200);
  
  beginShape();
  fill(79,91,64);
  vertex(792,0);
  vertex(842,0);
  vertex(828,195);
  vertex(772,182);
  endShape();
  
  beginShape();
  fill(245,210,175);
  vertex(915,113);
  vertex(965,115);
  vertex(995,100);
  vertex(992,152);
  vertex(914,159);
  endShape();
  
  fill(72,101,81,200)
  rect(995,0,40,224);

  fill(102,91,77,200)
  rect(995,224,40,80);
  
//semi transparent oval
  fill(245,210,175,100);
  ellipse(535,188,272)
  
//large yellow oval
  push();
  translate(395,186);
  rotate(radians(-55));
  fill(245,210,175);
  strokeWeight(3);
  stroke(138,125,83);
  ellipse(0,0,290,310)
  pop();
  
//small green oval
  push();
  translate(445,130);
  rotate(radians(-55));
  fill(139,182,165,150);
  ellipse(0,0,160,180)
  pop();
  
//light ellipse
  fill(170,158,135,150);
  ellipse(393,644,180);
  
//green stripe ellipse
  fill(117,159,132);
  rect(373,557,40,174);

  beginShape();
  fill(139,182,165,200);
  vertex(580,718);
  vertex(609,683);
  vertex(614,645);
  vertex(656,599);
  vertex(760,529);
  vertex(1024,475);
  vertex(1024,768);
  vertex(580,768);
  endShape();
  
//light gray shape across black
  beginShape();
  fill(170,158,135,150);
  vertex(0,402);
  vertex(230,382);
  vertex(1024,520);
  vertex(1024,594);
  vertex(882,682);
  vertex(843,581);
  vertex(527,629);
  vertex(437,448);
  vertex(107,650);
  vertex(102,492);
  vertex(40,735);
  vertex(0,735);
  endShape();
  
//light yellow bottom left
  beginShape();
  fill(187,177,134,150);
  vertex(21,663);
  vertex(87,663);
  vertex(156,681);
  vertex(237,703);
  vertex(246,735);
  vertex(62,737);
  vertex(34,722);
  endShape();
  
//light green across black
  beginShape();
  fill(107,154,129);
  vertex(0,367);
  vertex(234,381);
  vertex(359,315);
  vertex(468,328);
  vertex(627,334);
  vertex(643,335);
  vertex(654,341);
  vertex(655,301);
  vertex(669,254);
  vertex(680,173);
  vertex(734,174);
  vertex(722,384);
  vertex(783,385);
  vertex(786,388);
  vertex(845,385);
  vertex(812,389);
  vertex(815,194);
  vertex(923,210);
  vertex(925,322);
  vertex(945,325);
  vertex(933,440);
  vertex(1025,497);
  vertex(1025,523);
  vertex(856,618);
  vertex(826,543);
  vertex(737,554);
  vertex(786,492);
  vertex(595,479);
  vertex(440,441);
  vertex(372,498);
  vertex(313,536);
  vertex(293,476);
  vertex(105,589);
  vertex(98,482);
  vertex(54,474);
  vertex(0,605);
  vertex(0,654);
  vertex(30,672);
  vertex(41,703);
  vertex(60,734);
  vertex(12,768);
  vertex(0,768);
  endShape();

//lighter green below black
  beginShape();
  fill(79,91,64);
  vertex(236,313);
  vertex(359,315);
  vertex(468,328);
  vertex(627,334);
  vertex(643,335);
  vertex(654,341);
  vertex(655,301);
  vertex(669,254);
  vertex(680,173);
  vertex(734,174);
  vertex(722,384);
  vertex(783,385);
  vertex(786,388);
  vertex(845,385);
  vertex(812,389);
  vertex(815,304);
  vertex(839,301);
  vertex(852,142);
  vertex(917,155);
  vertex(915,210);
  vertex(878,212);
  vertex(873,429);
  vertex(896,434);
  vertex(1023,443);
  vertex(1068,462);
  vertex(872,549);
  vertex(849,492);
  vertex(763,502);
  vertex(793,455);
  vertex(426,400);
  vertex(425,402);
  vertex(439,449);
  vertex(435,468);
  vertex(361,503);
  vertex(308,415);
  vertex(296,378);
  vertex(128,460);
  vertex(122,377);
  vertex(230,376);
  endShape();

//dark green below black  
  beginShape();
  fill(68,73,48);
  vertex(236,313);
  vertex(359,315);
  vertex(468,328);
  vertex(627,334);
  vertex(643,335);
  vertex(655,301);
  vertex(669,250);
  vertex(674,167);
  vertex(702,169);
  vertex(674,380);
  vertex(812,389);
  vertex(815,304);
  vertex(883,312);
  vertex(873,429);
  vertex(992,442);
  vertex(990,296);
  vertex(1009,287);
  vertex(1032,286);
  vertex(1045,290);
  vertex(1021,454);
  vertex(1009,453);
  vertex(867,533);
  vertex(842,467);
  vertex(779,471);
  vertex(796,448);
  vertex(418,380);
  vertex(425,402);
  vertex(439,449);
  vertex(435,468);
  vertex(361,503);
  vertex(308,415);
  vertex(296,378);
  vertex(128,460);
  vertex(122,377);
  vertex(230,376);
  endShape();

//black gunlike shape  
    beginShape();
  fill(45,39,22);
  vertex(236,313);
  vertex(359,315);
  vertex(468,328);
  vertex(627,334);
  vertex(643,335);
  vertex(654,341);
  vertex(654,380);
  vertex(705,383);
  vertex(783,385);
  vertex(786,388);
  vertex(845,385);
  vertex(854,393);
  vertex(855,419);
  vertex(896,434);
  vertex(1012,442);
  vertex(983,447);
  vertex(925,482);
  vertex(871,508);
  vertex(854,510);
  vertex(836,452);
  vertex(808,453);
  vertex(796,445);
  vertex(806,426);
  vertex(713,412);
  vertex(672,406);
  vertex(649,399);
  vertex(646,381);
  vertex(406,358);
  vertex(425,402);
  vertex(436,445);
  vertex(349,483);
  vertex(308,415);
  vertex(283,356);
  vertex(128,448);
  vertex(122,377);
  vertex(230,376);
  endShape();

//lighter green lefthand triangle  
    beginShape();
  fill(110,118,96);
  vertex(0,366);
  vertex(82,371);
  vertex(125,376);
  vertex(70,588);
  vertex(34,441);
  vertex(0,534);
  endShape();    
  
  //dark green lefthand triangle  
    beginShape();
  fill(68,73,48);
  vertex(0,366);
  vertex(82,371);
  vertex(125,376);
  vertex(59,528);
  vertex(26,412);
  vertex(0,476);
  endShape();  
  
//black lefthand triangle  
  beginShape();
  fill(45,39,22);
  vertex(0,366);
  vertex(88,373);
  vertex(34,441);
  endShape();

  fill(86,140,107);
  rect(390,736,200,60);

 // bottom dark green pieces
  beginShape();
  fill(68,73,48);
  vertex(335,768);
  vertex(362,736);
  vertex(421,736);
  vertex(397,768);
  endShape();
  
  beginShape();
  fill(68,73,48);
  vertex(466,768);
  vertex(490,736);
  vertex(536,736);
  vertex(546,768);
  endShape();

  beginShape();
  fill(68,73,48);
  vertex(790,768);
  vertex(777,747);
  vertex(868,740);
  vertex(892,768);
  endShape();
  
//black bottom pieces
  beginShape();
  fill(45,39,22);
  vertex(0,733);
  vertex(367,736);
  vertex(335,768);
  vertex(11,768);
  vertex(0,752);
  endShape();

  beginShape();
  fill(45,39,22);
  vertex(728,768);
  vertex(730,751);
  vertex(777,747);
  vertex(790,768);
  endShape();
  
  //light gray l-shape bottom right corner
  beginShape();
  fill(87,110,104,200);
  vertex(557,718);
  vertex(997,686);
  vertex(1024,708);
  vertex(1024,768);
  vertex(984,728);
  vertex(568,768);
  endShape();

}