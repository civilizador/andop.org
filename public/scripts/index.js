var $ = jQuery;
var technology = [];
var news = [];
var entertainment = [];
var selectedPosts = [];
var sports = [];
var recPostings = [];
var allArray;
var randomSix = [];

var converter = new showdown.Converter();

// below are the functions to push the data to their corresponding category

const newsCycle = () => {
  const first = news[0];
  const news1 = `
    <img src="${first.cover.url}"   width="100%" class="rounded" ></p>
    <p style="font-size: 1.5em; font-weight: 800; " class="card-title">
      <a href="/post.html?id=${
        first._id
      }" style="color:black!important;">${first.title.substring(0, 100)}</a>
    </p>

    <p>
    <div class="bigNews">
    ${converter.makeHtml(first.content)}
    </div>
    </p>
    </br>
    <span class="date">${first.createdAt.substring(0,10)}</span>
    `;
  $("#newsFirst").append(news1);
  for (i = 1; i < news.length; i++) {
    const item = news[i];
    if (item !== undefined) {
      if (i === 4) {
        break;
      } else if (i === 2) {
        const news2 = `
        <div id="blocks">
        <div style="border-top:2px dotted navy;border-bottom:2px dotted navy;width:100%;padding-top:10px;padding-bottom:10px;">
          <table>
            <tr>
              <td>
                  <img src="${
                    item.cover.url
                  }"  class="rounded" float="left"   width="310vh" style="padding-right:10px;">
              </td>
              <td style="width:100%;position:relative; clear:both;">
                <span class="newsText">
                    <h4 class="card-title">
                      <a href="/post.html?id=${
                        item._id
                      }"style="color:black!important;">${item.title.substring(
          0,
          100
        )}</a>
                    </h4>
                    <p>

                    </p>
                </span>
                <span class="date">${item.createdAt.substring(0,10)}</span>
              </td>
            </tr>
            </div>
          </table>
        </div>
        <p>
          `;
        $("#newsSecond").append(news2);
      } else {
        const news2 = `
        <div id="blocks">
          <table>
            <tr>
              <td>
                  <img src="${
                    item.cover.url
                  }"  class="rounded" float="left"   width="310vh" style="padding-right:10px;">
              </td>
              <td style="width:100%;position:relative; clear:both;">
                <span class="newsText">
                    <h4 class="card-title">
                      <a href="/post.html?id=${
                        item._id
                      }" style="color:black!important;">${item.title.substring(
          0,
          100
        )}</a>
                    </h4>
                    <p>

                    </p>
                </span>
                <span class="date">${item.createdAt.substring(0,10)}</span>
              </td>
            </tr>
          </table>
        </div>
        <p>
          `;
        $("#newsSecond").append(news2);
      }
    }
  }
};

const entertainmentCycle = () => {
  const item = entertainment[0];
  const ent = `
  <div class="col-lg-16 col-md-16 mb-16">
  <img src="${
    item.cover.url
  }" class="rounded"   width="50%" style="float:left; padding-right:15px;">
    <p style="font-size: 1.5em; font-weight: 800; " class="card-title">
      <a href="/post.html?id=${
        item._id
      }" style="color:black!important;">${item.title.substring(0, 100)}</a>
    </h5>

   <h5 style="height:21rem;overflow: hidden;">${converter.makeHtml(item.content)}</h5>
    </p>
    <span class="date2">${item.createdAt.substring(0,10)}</span>
    </div>
 
  `;
  $("#entertainmentFirst").append(ent);
  for (let i = 1; i < entertainment.length; i++) {
    const item = entertainment[i];
    if (item !== undefined) {
      if (i === 5) {
        break;
      } else if (i === 4) {
        const ent = `
    <div class="col-lg-3 col-md-3 mb-3" style="position:relative;float:center;">
      <img src="${item.cover.url}" class="rounded"   width="100%">

        <h5 class="card-title">
          <a href="/post.html?id=${
            item._id
          }" style="color:black!important;">${item.title.substring(0, 100)}</a>
        </h5>
 
  <span class="date2">${item.createdAt.substring(0,10)}</span>
    </div>
    `;
        $("#entertainmentSecond").append(ent);
      } else {
        const item = entertainment[i];
        const ent = `
    <div class="col-lg-3 col-md-3 mb-3" style="position:relative;border-right: 2px dotted navY">
    <img src="${item.cover.url}" class="rounded"   width="100%">
  <p>
  <h5 class="card-title">
    <a href="/post.html?id=${
      item._id
    }" style="color:black!important;">${item.title.substring(0, 100)}</a>
  </h5>
  <p>

  </p>
  <span class="date2">${item.createdAt.substring(0,10)}</span>
    </div>
    `;
        $("#entertainmentSecond").append(ent);
      }
    }
  }
};

const techCycle = () => {
  const item = technology[0];
  const tech = `
  <div class="col-lg-16 col-md-16 mb-16">
  <img src="${
    item.cover.url
  }" class="rounded"   width="50%" style="float:left;padding-right:15px;">
    <h5 class="bigTitle">
      <a href="/post.html?id=${
        item._id
      }"style="color:black!important;">${item.title.substring(0, 100)}</a>
    </h5>
    <p>
    ${converter.makeHtml(item.content).substring(0, 250)}
    </p>
    <span class="date2">${item.createdAt.substring(0,10)}</span>
    </div>
  `;
  $("#technologyFirst").append(tech);
  for (let i = 1; i < technology.length; i++) {
    const item = technology[i];
    if (item !== undefined) {
      if (i === 5) {
        break;
      } else if (i === 4) {
        const tech = `
    <div class="col-lg-3 col-md-3 mb-3" style="position:relative;float:center;">
    <img src="${item.cover.url}" class="rounded"   width="100%">
  <p>
  <h5 class="card-title">
    <a href="/post.html?id=${
      item._id
    }" style="color:black!important;">${item.title.substring(0, 100)}</a>
  </h5>
  <p>

  </p>
  <span class="date2">${item.createdAt.substring(0,10)}</span>
    </div>
    `;
        $("#technologySecond").append(tech);
      } else {
        const item = technology[i];
        const tech = `
    <div class="col-lg-3 col-md-3 mb-3" style="position:relative;border-right: 2px dotted navY">
    <img src="${item.cover.url}" class="rounded"   width="100%">
  <p>
  <h5 class="card-title">
    <a href="/post.html?id=${
      item._id
    }" style="color:black!important;">${item.title.substring(0, 100)}</a>
  </h5>
  <p>

  </p>
  <span class="date2">${item.createdAt.substring(0,10)}</span>
    </div>
    `;
        $("#technologySecond").append(tech);
      }
    }
  }
};

const sportsCycle = () => {
  const item = sports[0];
  const sport = `
  <div class="col-lg-16 col-md-16 mb-16">
  <img src="${
    item.cover.url
  }" class="rounded"   width="50%" style="float:left; padding-right:15px;">
    <p style="font-size: 1.5em; font-weight: 800; " class="card-title">
      <a href="/post.html?id=${
        item._id
      }" style="color:black!important;">${item.title.substring(0, 100)}</a>
    </h5>

   <h5 style="height:21rem;overflow: hidden;">${converter.makeHtml(item.content)}</h5>
    </p>
    <span class="date2">${item.createdAt.substring(0,10)}</span>
    </div>
  `;
  $("#sportsFirst").append(sport);
  for (let i = 1; i < sports.length; i++) {
    const item = sports[i];
    if (item !== undefined) {
      if (i === 5) {
        break;
      } else if (i === 4) {
        const sport = `
    <div class="col-lg-3 col-md-3 mb-3" style="position:relative;">
        <img src="${
          item.cover.url
        }" class="rounded"   width="100%">
      <p>
      <h5 class="card-title">
        <a href="/post.html?id=${
          item._id
        }" style="color:black!important;">${item.title.substring(0, 100)}</a>
      </h5>
      <p>

      </p>
      <span class="date2">${item.createdAt.substring(0,10)}</span>
    </div>
    `;
        $("#sportsSecond").append(sport);
      } else {
        const item = sports[i];
        const sport = `
    <div class="col-lg-3 col-md-3 mb-3" style="position:relative;border-right: 2px dotted navY;">
    <img src="${item.cover.url}" class="rounded"   width="100%">
  <p>
  <h5 class="card-title">
    <a href="/post.html?id=${
      item._id
    }" style="color:black!important;">${item.title.substring(0, 100)}</a>
  </h5>
  <p>

  </p>
  <span class="date2">${item.createdAt.substring(0,10)}</span>
    </div>
    `;
        $("#sportsSecond").append(sport);
      }
    }
  }
};
const selectedCycle = () => {
  for (let i = 0; i < selectedPosts.length; i++) {
    const item = selectedPosts[i];
    if (item !== undefined) {
      if (i === 4) {
        break;
      } else if (i === 3) {
        const selected = `
      <div class="col-lg-3 col-md-3 mb-3" style="position:relative;border-right: 0px">
        <a href="/post.html?id=${
          item._id
        }" style="color:black!important;"><h5>${item.title.substring(
          0,
          100
        )}</h5></a>
        <p>
        ${converter.makeHtml(item.content).substring(0, 250)}
        </p>
        </br>
        <span class="date">${item.createdAt.substring(0,10)}</span>

      </div>
      `;
        $("#selected").append(selected);
      } else {
        const item = selectedPosts[i];
        const selected = `
      <div class="col-lg-3 col-md-3 mb-3" style="position:relative;border-right: 2px dotted navY">
        <a href="/post.html?id=${
          item._id
        }" style="color:black!important;"><h5>${item.title.substring(
          0,
          100
        )}</h5></a>
        <p>
        ${converter.makeHtml(item.content).substring(0, 250)}
        </p>
        </br>
        <span class="date">${item.createdAt.substring(0,10)}</span>

      </div>
      `;
        $("#selected").append(selected);
      }
    }
  }
};

const randomSixCycle = () => {
  for (let i = 0; i < allArray.length; i++) {
    if (i == 6) {
      break;
    }
    const item = allArray[i];
    if (item !== undefined) {
      if (i === 2 || i === 5) {
        const node = `
        <div class="col-lg-4 col-md-4 mb-4" style="position:relative;border-right: 0px; padding:4%">
        <img src="${item.cover.url}" class="rounded" width="100%">
        <p>
        <h5 class="card-title">
        <a href="/post.html?id=${
          item._id
        }" style="color:black!important;">${item.title.substring(0, 100)} </a>
        </h5>
        <p>

        </p>
        <span class="date2">${item.createdAt.substring(0,10)}</span>
      </div>
      `;
        $("#randomSix").append(node);
      } else {
        const node = `
      <div class="col-lg-4 col-md-4 mb-4" style="position:relative;border-right:2px dotted navy; padding:4%">
      <img src="${item.cover.url}" class="rounded"   width="90%">
      <p>
      <h5 class="card-title">
      <a href="/post.html?id=${
        item._id
      }"style="color:black!important;">${item.title.substring(0, 100)} </a>
      </h5>

      <p>

      </p>
        <span class="date2">${item.createdAt.substring(0,10)}</span>
      </div>

      `;
        $("#randomSix").append(node);
      }
    }
  }
};
const recPostCycle = () => {
  for (let i = 0; i < recPostings.length; i++) {
    if (i === 5) {
      break;
    }
    const item = recPostings[i];
    const node = `
      <div class="row">
        <div style="display: block; padding-left:35px; padding-right:35px;  ">
        <p>
        <h5 style="border-bottom:2px dashed rgb(73,86,120); padding-bottom:10px;" class="card-title">
        <a href="/post.html?id=${
          item._id
        }" style="color:black!important;">${item.title.substring(0, 70)}  </a>
        </h5>

        </p>
        <span class="date2">${item.createdAt.substring(0,10)}</span>
      </div>
    </div>
      `;
    $("#recPosts").append(node);
  }
};

// ajax requests to get the data

$(document).ready(() => {
  $.ajax({
    url: "banners",
    method: "GET",
    dataType: "json",
    contentType: "json",
    success: data => {
      for (let i = 0; i < data.length; i++) {
        if (i === 5) {
          break;
        }
        const item = data[i];
        const node = `

          <img src="${item.url}" width="19%" align="center">

        `;
        $("#banners").append(node);
      }
    },
    catch: err => {
      console.log(err);
    }
  });

  $.ajax({
    url: "posts",
    method: "GET",
    dataType: "json",
    contentType: "json",
    success: data => {
      for (let i = data.length - 1; i >= 0; i--) {
        const item = data[i];

        if (item.recPosts == true) {
          recPostings.unshift(item);
        }

        if (item.category == "Наши Беседы") {
          news.unshift(item);
        } else if (item.category == "Питание") {
          technology.unshift(item);
        } else if (item.category == "Здоровье") {
          entertainment.unshift(item);
        } else if (item.category == "Анонс") {
          selectedPosts.unshift(item);
        } else {
          sports.unshift(item);
        }

        if (i < 6) {
          const node = `

            <table style="margin-bottom:10px; display:block">
              <tr>
                <td>
                    <img src="${
                      item.cover.url
                    }"  height="60px" width="80px" style="padding-right:5px;">
                </td>
                <td style="width:100%;position:relative; clear:both;">
                  <span class="newsText">
                      <h5 class="card-title">
                      <a href="/post.html?id=${
                        item._id
                      }" style="color:black!important;">${item.title.substring(
            0,
            35
          )}  </a>
                      </h5>
                  </span>
                </td>

              </tr>
              </div>
            </table>
            <hr>
            </br>
            <div style="clear:both;"></div>
        `;
          $("#latestPosts").append(node);
        }
      }
      allArray = [
        sports[sports.length - 1],
        sports[sports.length - 2],
        technology[technology.length - 1],
        technology[technology.length - 2],
        entertainment[entertainment.length - 1],
        entertainment[entertainment.length - 2]
      ];
    },
    catch: err => {
      console.log(err);
    }
  }).then(() => {
    if (sports.length !== 0) {
      sportsCycle();
    }
    if (entertainment.length !== 0) {
      entertainmentCycle();
    }
    if (news.length !== 0) {
      newsCycle();
    }
    if (technology.length !== 0) {
      techCycle();
    }
    if (selectedPosts.length !== 0) {
      selectedCycle();
    }
    if (allArray.length !== 0) {
      randomSixCycle();
    }
    if (recPostings.length !== 0) {
      recPostCycle();
    }
  });
});
