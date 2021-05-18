(function(window, undefined) {
  var dictionary = {
    "9ffe2e41-9ded-40a1-842f-a833ff7fc299": "AdatkezelésiTájékoztató",
    "bdde71a7-d8ba-4adb-9cbe-2b1951f05245": "Siker",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "ccc0ce2d-2ad6-44a1-b71d-257b9f8704c0": "El kell fogadni",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);