"use strict";const addQueryArgs=require("./add-query-args-49dcb630.js");function getQueryArg(r,e){return addQueryArgs.getQueryArgs(r)[e]}function removeQueryArgs(r,...e){const u=r.indexOf("?");if(-1===u)return r;const s=addQueryArgs.getQueryArgs(r),t=r.substr(0,u);e.forEach((r=>delete s[r]));const g=addQueryArgs.buildQueryString(s);return g?t+"?"+g:t}exports.getQueryArg=getQueryArg,exports.removeQueryArgs=removeQueryArgs;