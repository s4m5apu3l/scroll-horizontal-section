$(document).ready(function () {
    $("#fullpage").fullpage({
        scrollOverflow: true,
        licenseKey: "null",
        // navigation: false,
        // navigationPosition: "left",
        // navigationTooltips: ["01", "02", "03", "04", "05"],
        // showActiveTooltip: true,
        anchors: ["section1", "section2", "section3"],
        parallaxOptions: { type: "reveal", percentage: 62, property: "translate" },
        // credits: { enabled: false, label: 'Made with fullPage.js', position: 'right' },
        afterLoad: () => {
            if ($(".l-projects").length) {
                $(".l-projects__slides-list-wrap").addClass("fixed show");
                let r = $(".l-projects__slides-list-item").eq(0).attr("data-bg");
                $(".l-projects__slides-list-wrap").css({
                    background: `url(${r}) no-repeat left center`,
                });
            }
        },
        onScrollOverflow: (section, slide, position, direction) => {
            const isProjects = $(section.item).hasClass("l-projects-section");
            if (isProjects) {
                projectSlider(position);
            }
        },
    });
    const projectSlider = (position) => {
        let t = position,
            e = window.innerHeight,
            i = $(".l-projects").offset().top - 1,
            n = i + $(".l-projects").height() * 2 - e,
            o = (t - i) / (e / 100),
            r = $(".l-projects__slides-list-item").eq(0).attr("data-bg");

        o / 1.6 > 50 && (r = $(".l-projects__slides-list-item").eq(1).attr("data-bg")),
            o / 1.6 > 100 && (r = $(".l-projects__slides-list-item").eq(2).attr("data-bg")),
            $(".l-projects__slides-list-wrap").css({
                background: `url(${r}) no-repeat left center`,
            }),
            t > i - 0.3 * e
                ? (t > i
                      ? $(".l-projects__slides-list-wrap").addClass("fixed")
                      : $(".l-projects__slides-list-wrap").removeClass("fixed"),
                  t > n
                      ? $(".l-projects__slides-list-wrap").addClass("bottom")
                      : $(".l-projects__slides-list-wrap").addClass("show").removeClass("bottom"),
                  $(".l-projects__slides-list").css({
                      left: -o / 1.4 + "%",
                  }))
                : ($(".l-projects__slides-list-wrap").removeClass("show fixed bottom").css({
                      background: "",
                  }),
                  $(".l-projects__slides-list").css({
                      left: "",
                  }));
    };
});
