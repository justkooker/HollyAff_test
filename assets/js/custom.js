$(document).ready(function () {
  $("#add-comment").on("click", function () {
    var newComment = $("#new-comment").val();
    var newUsername = $("#user-name").val();
    console.log($);
    var commentHtml = `
              <div class="comments" style="display:block">
                  <div class="profile">                   
                  </div>
                  <div class="comment-content">
                      <p class="name">
                          <font style="vertical-align: inherit;">
                              <font style="vertical-align: inherit;">Anonimus</font>
                          </font>
                      </p>
                      <p>
                          <font style="vertical-align: inherit;">
                              <font style="vertical-align: inherit;">${newComment}</font>
                          </font>
                      </p>
                  </div>
                  <div class="clr"></div>
                  <div class="comment-status">
                      <span>
                          <font style="vertical-align: inherit;">
                              <font style="vertical-align: inherit;">Curte·comente</font>
                          </font>
                          <img src="./assets/img/like-min.webp" width="15px" height="15px" alt="Like Icon">
                          <font style="vertical-align: inherit;">
                              <font style="vertical-align: inherit;">4</font>
                          </font>
                      </span>
                      <font style="vertical-align: inherit;">
                          <small>
                              <font style="vertical-align: inherit;">·</font>
                          </small>
                          <small>
                              <u>
                                  <font style="vertical-align: inherit;">4 minutos antes</font>
                              </u>
                          </small>
                      </font>
                      <small>
                          <font style="vertical-align: inherit;"></font>
                          <u>
                              <font style="vertical-align: inherit;"></font>
                          </u>
                      </small>
                  </div>
              </div>`;

    $(".comments_face").children().eq(1).before(commentHtml);
  });
});
