function analyzeProjects(projs) {
  $.each(projs, function( index, name ) {
    var ajaxURL = "https://api.npms.io/v2/package/" + name;

    // Ajax call to fetch your content
    $.ajax({
        method  : "GET",
        url     : ajaxURL,
        beforeSend: function( xhr ) {

        }
    }).done(function( res ) {
        // console.log(res);

        var html = '';

        html += '<div class="card bg-primary- mb-4 mx-1 order-'+index+'">';
        html += '<div class="card-body ">';

        if (res.collected && res.collected.metadata) {
          html += '<h5 class="card-title">' + res.collected.metadata.name + ' <span class="badge badge-info">' + res.collected.metadata.version + '</span></h5>';
          html += '<h6 class="card-subtitle mb-2 text-muted">' + res.collected.metadata.description + '</h6>';
          html += '<div class="text-muted small">' + res.collected.metadata.keywords.join(', ') + '</div>' ;
          html += '<span class="badge badge-primary">' + res.collected.metadata.license + '</span><br />' ;

          if (res.collected.metadata.links) {
            $.each(res.collected.metadata.links, function( key, val ) {
              html += '<a href="' + val + '" class="card-link">' + key + '</a><br />';
            });
          }
        }

        if (res.collected && res.collected.npm) {
          html += '<h5 class="card-title mb-0 pb-1 pt-4">npm</h5>';
          html += '<hr class="m-0 pt-1 pb-3" />';
          html += '<h6 class="mb-1">DependentsCount: ' + res.collected.npm.dependentsCount + '</h6>';
          html += '<h6 class="mb-1">Stars: ' + res.collected.npm.starsCount + '</h6>';

          if (res.collected.npm.downloads) {
            var dwn = res.collected.npm.downloads[res.collected.npm.downloads.length - 1];
            html += '<h6 class="mb-1">Downloads: <span>' + dwn.count + '</span></h6>';
            html += '<span class="text-muted small">' + dwn.from + '-' + dwn.to + '</span><br />';
          }
        }

        if (res.collected && res.collected.github) {
          html += '<h5 class="card-title mb-0 pb-1 pt-4">GitHub</h5>';
          html += '<hr class="m-0 pt-1 pb-3" />';
          html += '<h6 class="mb-1">Stars: ' + res.collected.github.starsCount + '</h6>';
          html += '<h6 class="mb-1">Forks: ' + res.collected.github.forksCount + '</h6>';
          html += '<h6 class="mb-1">Watchers: ' + res.collected.github.subscribersCount + '</h6>';
          html += '<h6 class="mb-1">Issues: ' + res.collected.github.issues.openCount + '/' + res.collected.github.issues.count + '</h6>';
          // html += '<a href="' + res.collected.github.homepage + '" class="card-link">Homepage</a>';
        }

        if (res.score) {
          html += '<h5 class="card-title mb-0 pb-1 pt-4">Scores</h5>';
          html += '<hr class="m-0 pt-1 pb-3" />';

          var final = parseInt(res.score.final * 100);

          html += '<h6 class="mb-1">Overall score <span class="text-muted">(' + final + ')</span></h6>';
          html += '<div class="progress" style="height: 3px;"><div class="progress-bar ' + getProgessClass(final) + '" role="progressbar" style="width: ' + final + '%;" aria-valuenow="' + final + '" aria-valuemin="0" aria-valuemax="100"></div></div>';

          if (res.score.detail) {
            var popularity  = parseInt(res.score.detail.popularity * 100);
            var quality     = parseInt(res.score.detail.quality * 100);
            var maintenance = parseInt(res.score.detail.maintenance * 100);

            html += '<h6 class="mb-1">Popularity <span class="text-muted">(' + popularity + ')</span></h6>';
            html += '<div class="progress" style="height: 3px;"><div class="progress-bar ' + getProgessClass(popularity) + '" role="progressbar" style="width: ' + popularity + '%;" aria-valuenow="' + popularity + '" aria-valuemin="0" aria-valuemax="100"></div></div>';
            html += '<h6 class="mb-1">Quality <span class="text-muted">(' + quality + ')</span></h6>';
            html += '<div class="progress" style="height: 3px;"><div class="progress-bar ' + getProgessClass(quality) + '" role="progressbar" style="width: ' + quality + '%;" aria-valuenow="' + quality + '" aria-valuemin="0" aria-valuemax="100"></div></div>';
            html += '<h6 class="mb-1">Maintenance <span class="text-muted">(' + maintenance + ')</span></h6>';
            html += '<div class="progress" style="height: 3px;"><div class="progress-bar ' + getProgessClass(maintenance) + '" role="progressbar" style="width: ' + maintenance + '%;" aria-valuenow="' + maintenance + '" aria-valuemin="0" aria-valuemax="100"></div></div>';
          }
        }

        html += '<p class="card-text"><small class="text-muted">Analyzed at '+res.analyzedAt+'</small></p>';

        html += '</div>';
        html += '</div>';

        $('#projectList').append(html);

    }).fail(function(err) {

    });

  });

}

function getProgessClass(score) {
  var css = ' bg-danger';
  if (score >= 60) {
    css = ' bg-success';
  } else if (score >= 20) {
    css = ' bg-warning';
  } else {
    css = ' bg-danger';
  }

  return css;
}

function getNpmDownloads(projs) {
  var projStr = projs.join(',');

  var ajaxURL = "https://api.npmjs.org/downloads/point/last-month/" + projStr;

  // Ajax call to fetch your content
  $.ajax({
      method  : "GET",
      url     : ajaxURL,
      beforeSend: function( xhr ) {

      }
  }).done(function( res ) {
      console.log(res);

      var html = '';
      html += '<div class="card bg-primary- mb-4 mx-1 order-1">';
      html += '<div class="card-body ">';

      $.each(projs, function( index, name ) {
        var packRes = res[name];
        html += '<h3 class="card-title mb-0 pb-1 pt-4">' + packRes.package + '</h3>';
        html += '<hr class="m-0 pt-1 pb-3" />';
        html += '<h6 class="mb-1">Downloads: ' + packRes.downloads + '</h6>';
        html += '<p class="card-text"><small class="text-muted">Date: ' + packRes.start + ' - ' + packRes.end + '</small></p>';
      });

      html += '</div>';
      html += '</div>';

      $('#projectList').append(html);

  }).fail(function(err) {
    console.error(err);
  });

}
