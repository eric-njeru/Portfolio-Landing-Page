/******************************************************************
GENERAL LAYOUT STYLES
******************************************************************/
body
{
  background:#FFF;
  color:#777;
  font:12px Georgia, "Times New Roman", Times, serif;
  line-height:1.4em;
  border-top:5px
  solid #FF6000;
  }
/******************************************************************
GRID STYLES
******************************************************************/
/* 960 Grid System (http://960.gs/ ) */
#container, .wrap
{
  width: 940px;
  margin:0auto;
  padding:0 10px;
  overflow:hidden;}
/* layout options (all have margins right & left of 2.1276596%)
*/ .col60  { width: 6.3829787%; } /* width 60px/ grid_1
*/ .col140 { width: 14.893617%; } /* width 140px/ grid_2
*/ .col220 { width: 23.404255%; } /* width 220px/ grid_3
*/ .col300 { width: 31.914894%; } /* width 300px / grid_4
*/ .col380 { width: 40.425532%; } /* width 380px / grid_5
*/ .col480 { width: 48.936170%;  } /* width 480px / grid_6
*/ .col540 { width: 57.446809%; } /* width 540px / grid_7
*/ .col620 { width: 65.957447%; } /* width 620px / grid_8
*/ .col700 { width: 74.468085%; } /* width 700px / grid_9
*/ .col780 { width: 82.978723%; } /* width 780px / grid_10
*/ .col860 { width: 91.489362%; } /* width 860px / grid_11
*/ .col940 { width: 100.0%;     } /* width 940px / grid_12
*/ /* layout & column defaults */
.col60, .col140, .col220, .col300, .col380, .col480, .col540, .col620, .col700, .col780, .col860, .col940
  {
    display: inline;
    float: left;
    position: relative;
    margin-left: 1.0638298%; /* 10px */
    margin-right: 1.0638298%;  /* 10px */
  }
/* default styles & fixes */
.first
  {
  margin-left: 0;
  } /* fixes alignment */
.last
 {
  margin-right: 0;
  }
/* fixes alignment */
/******************************************************************
COMMON & REUSABLE STYLES
******************************************************************/
/* floats */
.left
{
  float: left;
}
.right
{
  float: right;
}
@font-face {
  font-family: 'KaushanScriptRegular';
  src: url('fonts/KaushanScript-Regular-webfont.eot');
  src: url('fonts/KaushanScript-Regular-webfont.eot?#iefix')
  format('embedded-opentype'),
  url('fonts/KaushanScript-Regular-webfont.woff')
  format('woff'),
  url('fonts/KaushanScript-Regular-webfont.ttf')
  format('truetype'),
  url('fonts/KaushanScript-Regular-webfont.svg#KaushanScriptRegular')
  format('svg');
  font-weight: normal;
  font-style: normal;
}
@font-face
{
  font-family: 'LeagueGothicRegular';
  src: url('fonts/League_Gothic-webfont.eot');
  src: url('fonts/League_Gothic-webfont.eot?#iefix')
  format('embedded-opentype'),
  url('fonts/League_Gothic-webfont.woff')
  format('woff'),
  url('fonts/League_Gothic-webfont.ttf')
  format('truetype'),
  url('fonts/League_Gothic-webfont.svg#LeagueGothicRegular')
  format('svg');
  font-weight: normal;
  font-style: normal;
}
/******************************************************************
LINK STYLES
******************************************************************/
a, a:visited
{
  color: #333;
  text-shadow:0 1px #fff;
  text-decoration:none;
}
a:hover, a:focus
{
  color: #F37D01;
  text-decoration:none;
}
a:active {} /* on click */
a:link
{
  -webkit-tap-highlight-color: rgba(0,0,0,0);
/* this highlights links on Iphones / iPads */
}
/******************************************************************
TEXT SELECTION STYLES
******************************************************************/ /*
Highlighted Text */ ::selection
{
  background: #333;
  color:#fff;
  text-shadow : none;
}
/* Firefox */
::-moz-selection
{
  background: #333;
  color:#fff;
  text-shadow : none;
}
/******************************************************************
HEADLINES & TITLES
******************************************************************/
h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5
{
  font-family:Georgia, "Times New Roman", Times, serif;
  color:#333;
}
h1 a, .h1 a, h2 a, .h2 a, h3 a, .h3 a, h4 a, .h4 a, h5 a, .h5 a
{
  text-decoration: none;
}
h1, .h1
{
  font-size: 2.5em;
  line-height: 1.333em;
}
h2, .h2
{
  font-size: 2.5em;
  line-height: 1.4em;
  margin-bottom: 0.375em;
}
h3, .h3
{
  font-size: 1.3em;
  margin-bottom: 0.375em;
}
h4, .h4
{
  font-size: 1.1em;
  font-weight: 700;
  margin-bottom: 0.375em;
}
h5, .h5
{
  font-size: 0.846em;
  line-height: 2.09em;
  color:#999;
  font-weight:normal;
}
p
{
  line-height:1.4em;
  margin-bottom:5px;
}
/******************************************************************
HEADER SYTLES
******************************************************************/
header[role=banner]
{
  overflow:hidden;
}
#logo
{
  margin: 1.1em 0 9px;
  font-family: 'KaushanScriptRegular',Helvetica Nue, Arial, Helvetica, sans-serif;
  font-size:40px;
  text-shadow:0 6px 2px #ccc;
  color:#333;
}
/******************************************************************
NAVIGATION STYLES (Main Navigation)
******************************************************************/
nav[role=navigation]
{
  float:right;
  margin-top:30px;
  font-family: 'LeagueGothicRegular',Helvetica Nue, Arial, Helvetica, sans-serif;
  font-size:22px;
 }
  nav[role=navigation] .menu
{
    margin:5px 0 0 10px;
}
  nav[role=navigation] .menu ul {}
  nav[role=navigation] .menu ul
  li
{
    display:inline;
    float:left;
}
  nav[role=navigation] .menu ul li a
{
	   color: #333;
	   padding: 5px;
	   margin-right:10px;
	   text-decoration: none;
     float:left;
     text-shadow:0 0;
}
  nav[role=navigation] .menu ul li a:hover
{
	color: #FF6000;
}
  nav[role=navigation] .menu ul li:first-child a {}
  nav[role=navigation] .menu ul li:last-child a {}
  nav[role=navigation] .menu ul li.current-menu-item a,
  nav[role=navigation] .menu ul li.current_page_item a,
  nav[role=navigation] .menu ul li.current-page-ancestor a {}
/* sub menus */
  nav[role=navigation] .menu ul li ul,
  nav[role=navigation] .menu ul li ul li ul
{
	   position: absolute;
	   padding-left:10px;
	   left: -9999em;
	   top:65px;
	   z-index: 9999;
	   border:1px solid #ccc;
	   width:200px;
     background: #fff;
/* Old browsers */
}
  nav[role=navigation] .menu ul li ul li ul
  {
	   margin-left: 200px;
	   top: auto;
	   margin-top: 30px;
   }
  nav[role=navigation] .menu ul li ul li:hover ul,
  nav[role=navigation] .menu ul li:hover ul
   {
	   left: auto;
   }
  nav[role=navigation] .menu ul li ul li a
  {
	   width: 160px;
	   color:#333;
	   border-bottom:1px solid #ccc;
	   border-top:1px solid #fff;
	}
  nav[role=navigation] .menu ul li ul li a {}
  nav[role=navigation] .menu ul li ul li a:hover
  {
    color:#FF6000;
  }
  nav[role=navigation] .menu ul li ul li:last-child a
  {
    border-bottom:0;
  }
  nav[role=navigation] .menu ul li ul li ul.sub-menu {}
  nav[role=navigation] .menu ul li ul li:hover ul.sub-menu { }
/******************************************************************
FOOTER STYLES
******************************************************************/
  footer[role=contentinfo]
  {
  	padding: 1.1em 0 3.3em;
  	margin-top: 2.2em;
  }
  /* footer menu */
  footer[role=contentinfo] nav
  {
    float: left;
    margin: 1em 0;
  }
    .footer-links {}
  	.footer-links ul
  {
      margin-top: 0;
  }
  	.footer-links ul li
  {
      list-style-type: none;
      float: left;
      font-size: 0.9em;
  }
  	.footer-links ul li a
  {
      margin-right: 10px;
      text-decoration: underline;
  }
  	.footer-links ul li:last-child a
  {
      margin-right: 0;
  }
  	.footer-links ul li a:hover, .nav ul li.current-menu-item a, .nav ul li.current_page_item a {}             .footer-links ul li ul.sub-menu { display: none; }
  /* you shouldn't have that many links in the footer anyway so it's set to display none ;P */
    .attribution
  {
  	   margin: 1em 0;
  	   float: right;
  	   color:#333;
  	   font-size: 0.9em;
  }
  	.none
    {
      display:none;
    }
  	#inner-footer
    {
      width:940px;
      margin:0 auto;
    }
/******************************************************************
SLIDE STYLES
******************************************************************/
      .intro, .mac
      {
        margin-top:20px;
      }
      .intro h2
      {
        font:34px Georgia, "Times New Roman", Times, serif;
        font-style:italic;
        margin-top:30px;
      }
      .intro span
      {
        color:#FF6000;
      }
      .intro p
      {
        font-size:26px;
        margin-left:20px;
      }
      .intro-button
      {
         background:url(../images/result.jpeg) no-repeat;
    	   float:left;
    	   height:60px;
         width:255px;
    	   text-indent:-9999px;
    	   border:0;
    	   margin: 15px 19px 0 80px;
    	   cursor:pointer;
      }
      .intro-button:hover
      {
        background-position: 0px -71px;
        transition: all 1s ease-in-out;
      }
/******************************************************************
PORTFOLIO STYLES
******************************************************************/
        .bg
        {
          background:url(../images/bg.jpeg) repeat;
          margin-top:30px;
          padding:10px;
        }
        .content-main
        {
          width:940px;
      	  margin:30px auto 30px auto;
      	  background:#fff;
      	  -moz-box-shadow:0 0 4px #999;
      	  -webkit-box-shadow:0 0 4px #999;
      	  box-shadow:0 0 4px #999;
      	  padding:10px;
          overflow:hidden;
        }
        .content-main-text
        {
          text-align:center;
        }
        h3.heading
        {
          background: url("../images/dot.jpeg")
      	  repeat-x scroll center center transparent;
      	  font-size: 18px;
      	  font-weight: normal;
      	  margin: 0 0 25px;
      	  text-align: left;
        }
        h3.heading span
        {
          background: none repeat scroll 0 0 #FFFFFF;
      	  padding: 0 20px;
        }
        .content-main-work
        {
      	  border-bottom:1px solid #ccc;
      	  text-align:center;
        }
        .content-main-work:hover{border-bottom:1px solid #D0ECFF;}
