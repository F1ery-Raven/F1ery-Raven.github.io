var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

void 0!==window.s||(window.s={channel:"",t:function(){console.info("Direct call being made to depricated s.t() function in legacy Adobe Analytics.")}},window.s_gi=function(r){console.info("Direct call being made to depricated s_gi() function in legacy Adobe Analytics.")}),window.siteCatalyst={channel:"",azEntry:"",level:new Array(6),wcmsPageNameOverride:"",setChannel:function(chan){this.channel=chan},setAzEntry:function(az){this.azEntry=az},setLevel:function(lvl,lvl_str){5<lvl||lvl<0||void 0===this.level[lvl]&&(this.level[lvl]=lvl_str)},setLevel1:function(level1){this.setLevel(0,level1)},setLevel2:function(level2){this.setLevel(1,level2)},setLevel3:function(level3){this.setLevel(2,level3)},setLevel4:function(level4){this.setLevel(3,level4)},setLevel5:function(level5){this.setLevel(4,level5)},setLevel6:function(level6){this.setLevel(5,level6)},isLevel:function(lvl){return!(lvl<0||5<lvl)&&(0<=lvl?"string"==typeof this.level[lvl]:void 0)},getChannel:function(){return void 0!==s.channel&&0<s.channel.length&&(this.channel=s.channel),this.channel},getAzEntry:function(){return this.azEntry},getLevel:function(level){if(this.isLevel(level))return this.level[level]},getHierarchy:function(){var gap=!1,hier=this.getLevel(0);for(i=1;i<this.level.length;i++)if(this.isLevel(i))hier+="~"+this.getLevel(i);else{for(gap=!1,j=i+1;j<this.level.length;j++)this.isLevel(j)&&(gap=!0);gap&&(hier+="~")}return hier}},window.updateVariables=function(){s.hier1=siteCatalyst.getHierarchy();var chan=siteCatalyst.getChannel(),chan=(chan&&0<chan.length&&(s.channel=chan),siteCatalyst.getAzEntry());chan&&0<chan.length&&(s.prop45=chan),s.prop22=siteCatalyst.getLevel(0),s.prop23=siteCatalyst.getLevel(1),s.prop24=siteCatalyst.getLevel(2),s.prop25=siteCatalyst.getLevel(3),s.prop43=siteCatalyst.getLevel(4),s.prop44=siteCatalyst.getLevel(5),void 0!==s.pageName&&0<s.pageName.length&&(siteCatalyst.wcmsPageNameOverride=s.pageName)};

}
/*
     FILE ARCHIVED ON 19:13:44 Dec 30, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:43:13 Feb 02, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.128
  exclusion.robots: 0.044
  exclusion.robots.policy: 0.019
  esindex: 0.025
  cdx.remote: 21.432
  LoadShardBlock: 196.526 (3)
  PetaboxLoader3.datanode: 238.624 (4)
  load_resource: 313.626
  PetaboxLoader3.resolve: 234.344
*/