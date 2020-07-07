import axios from "axios";

const baseInstance = axios.create({
  baseURL: 'https://acnhapi.com/v1/',
});

const baseInstanceArray = axios.create({
  baseURL: 'https://acnhapi.com/v1a/',
});

export function listFish(fishId = ""){ 
  return fishId == "" ?
  baseInstanceArray("fish/").then(({data}) => data) :
  baseInstance("fish/" + fishId).then(({data}) => data); 
}
export function listBugs(bugId = ""){ 
  return bugId == "" ?
  baseInstanceArray("bugs/").then(({data}) => data) :
  baseInstance("bugs/" + bugId).then(({data}) => data); 
}
export function listSeaCreatures(seaId = ""){ 
  return seaId == "" ?
  baseInstanceArray("sea/").then(({data}) => data) :
  baseInstance("sea/" + seaId).then(({data}) => data); 
}