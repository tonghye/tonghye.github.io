function supportSearchTrack(type){
  if(type == "solutions"){
    _satellite.setVar('searchType_data',type);
  }else{
    _satellite.setVar('searchType_data',type);
  }
  _satellite.track('support_search');
}

