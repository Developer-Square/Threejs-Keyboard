//IMPORT
import colorway_bow from "./colorway_bow.json";
import colorway_cobalt from "./colorway_cobalt.json";
import colorway_bubblegum from "./colorway_bubblegum.json";
import colorway_sunshine from "./colorway_sunshine.json";
import colorway_sakura from "./colorway_sakura.json";
import colorway_goblin from "./colorway_goblin.json";
import colorway_roboto from "./colorway_roboto.json";
import colorway_bloodmoon from "./colorway_bloodmoon.json";
import colorway_tropical_dream from "./colorway_tropical_dream.json";
import colorway_ash from "./colorway_ash.json";
import colorway_wob from "./colorway_wob.json";

const COLORWAYS = {
  //APPEND
  cobalt: colorway_cobalt,
  bubblegum: colorway_bubblegum,
  sunshine: colorway_sunshine,
  sakura: colorway_sakura,
  goblin: colorway_goblin,
  roboto: colorway_roboto,
  bloodmoon: colorway_bloodmoon,
  tropical_dream: colorway_tropical_dream,
  ash: colorway_ash,
  wob: colorway_wob,
  bow: colorway_bow,
};

export default COLORWAYS;


export const colorwayOptions = Object.keys(COLORWAYS);
