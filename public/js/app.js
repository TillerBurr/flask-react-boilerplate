$(document).foundation();

function checkFileNames() {
  // ev.preventDefault();
  file_dir = JSON.stringify({ "file-dir": $("#idexx_file_directory").val() });
  $.ajax({
    method: "POST",
    url: "/_check_idexx_file_names",
    data: file_dir,
    datatype: "json",
    contentType: "application/json;charset=UTF-8"
  }).done(showFileNameCheckErrors);
}
function showFileNameCheckErrors(data) {
  $("#idexx-results").html(recurseJSON(data));
}

$("#check_files").click(checkFileNames);

function checkForFileErrors() {
  file_dir = JSON.stringify({ "file-dir": $("#idexx_file_directory").val() });
  $.ajax({
    method: "Post",
    url: "/_check_idexx_files",
    data: file_dir,
    datatype: "json"
  }).done(showFileNameCheckErrors);
}

$("#check-for-errors").click(checkForFileErrors);

function populate_reveal_modal(array_to_check, message_var) {
  let check_result = check_array_selections(array_to_check, message_var);
  let errorDiv = document.getElementById("errorMessage");
  errorDiv.innerHTML = "";
  let errors = false;
  if (typeof check_result == "string" || check_result instanceof String) {
    errorDiv.innerHTML += check_result;
    errors = true;
  }

  if (errors) {
    document.body.classList.remove("loader");
    $("#errorModal").foundation("open");
    // return false;
    return;
  }
  return true;
}

async function check_files() {
  let file_div = document.getElementById("file-name");
  // Call into Python so we can access the file system
  // console.log(folder);
  // let results = await eel.run_idexx_job(folder)();
  // console.log(results);
  // results = JSON.parse(results);
  // console.log(results);
  file_div.innerHTML = recurseJSON(test_obj);
  html = "";
}
async function append_all_data() {
  let folder = document.getElementById("input-box").value;
  let file_div = document.getElementById("file-name");
  // Call into Python so we can access the file system

  let results = await eel.append_all_files(folder)();
  results = JSON.parse(results);
  console.log(results.Malformed);
  file_div.innerHTML = results;
}

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
html = "";

function isArray(what) {
  return Object.prototype.toString.call(what) === "[object Array]";
}

function buildList(obj) {
  for (item in obj) {
    console.log(item);
    if (!isArray(obj[item])) {
      if (isEmpty(obj[item])) {
        continue;
      }
      html +=
        "<ul><li>" +
        item +
        "</li><ul>" +
        buildList(obj[item]) +
        "</ul>" +
        "</ul>";
    } else if (isArray(obj[item])) {
      // html+='<ul><li>'+obj[]
      html += "<ul><li>" + item + "<ul>";

      obj[item].forEach(function(element) {
        // console.log("<li>" + x + "</li>");
        html += "<li>" + element + "</li>";
      });

      html += "</li></ul></ul>";
      return html;
    }
  }
  return html;
}
//{"Malformed": {"Not a tab separated file": ["remb_L3HEART5-3744-KT9C76-1_mailing_list_test_csv", "remb_L3HEART5-3744-KT9C76-1_mailing_list_test_pipe_delim"]}, "Bad Directory": {}}
test_obj = {
  Malformed: {
    "Not a tab separated file": [
      "remb_L3HEART5-3744-KT9C76-1_mailing_list_test_csv"
    ],
    "Bad Date Format": [
      "remb_IPcatmat-13540-KT9FB4-1_mailing_list _ test_bad_date "
    ]
  },
  "Duplicate Identifier": {
    "A File with that Identifier already Exists": [
      "remb_L3STARS-25508-KT9J03-1_mailing_list_mod_fixed",
      "remb_L3VARIETY202-18361-KT9FA0-1_mailing_list"
    ]
  },
  "Bad Data": {
    "No Reminder": [
      "remb_L3VARIETY202-18361-KT9FA0-1_mailing_list test delete reminder "
    ]
  },
  Warning: {
    "Pet has no Name": [
      "remb_upload-16241-KT9JS0-1_mailing_list test deleted pet name "
    ],
    "Client has no Name": [
      "remb_Var15Combo4-112493-KT8XU3-1_mailing_list_CONV test deleted name "
    ],
    "No Reminder Date": [
      "remb_var18c-320408-KT9DH0-1_mailing_list_CONV test deleted_date "
    ]
  }
};

function recurseJSON(data) {
  var htmlRetStr = "<ul class='recurseObj' >";
  for (var key in data) {
    if (typeof data[key] == "object" && data[key] != null) {
      htmlRetStr +=
        "<li class='keyObj' ><strong>" +
        key +
        ":</strong><ul class='recurseSubObj' >";
      htmlRetStr += recurseJSON(data[key]);
      htmlRetStr += "</ul  ></li   >";
    } else {
      htmlRetStr +=
        "<li class='keyStr' ><strong>" + "</strong>" + data[key] + "</li  >";
    }
  }
  htmlRetStr += "</ul >";
  return htmlRetStr;
}
