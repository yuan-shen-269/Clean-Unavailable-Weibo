// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

$(function(){

    // chrome.storage.sync.get(['total','limit'],function(budget){
    //     $('#total').text(budget.total);
    //     $('#limit').text(budget.limit);
    // });
  
    $('#startstop').click(function(){
      chrome.storage.sync.get(['state'],function(myState){
          var newState = 'OFF';
          if (myState.state){
              if(myState.state == 'OFF'){
                newState = 'ON';
              }
              else{
                newState = 'OFF';
              }
          }
          chrome.storage.sync.set({'state': newState});
          $('#currState').text(newState);
      });
  });
});